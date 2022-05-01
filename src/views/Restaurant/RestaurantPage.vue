<template>
  <div class="restaurant-page">
    <div class="poster">
      <img src="https://picsum.photos/id/564/200/200" class="logo" />
    </div>
    <h1 class="name">
      <span class="certification">品牌</span>
      {{ `嘉禾一品（温都水城）` }}
    </h1>
    <ul class="details">
      <li>月售{{ `2312` }}</li>
      <li>硅谷专送</li>
      <li>约{{ 28 }}分钟</li>
      <li>距离{{ 3000 }}m</li>
    </ul>
    <ul class="nav">
      <li>
        <router-link to="/restaurant" active-class="active">点餐</router-link>
      </li>
      <li>
        <router-link to="/profilea" active-class="active">评价</router-link>
      </li>
      <li>
        <router-link to="/profilea" active-class="active">商家</router-link>
      </li>
    </ul>
    <router-view />
    <transition
      enter-active-class="scale-up-ver-bottom"
      leave-active-class="scale-bottom-ver-up"
    >
      <ShoppingList v-if="isShow" />
    </transition>
    <TheRestaurantFooter />
  </div>
</template>

<script>
import TheRestaurantFooter from "@/components/TheRestaurantFooter.vue";
import ShoppingList from "@/components/ShoppingList.vue";

import PubSub from "pubsub-js";

export default {
  name: "RestaurantPage",
  components: { TheRestaurantFooter, ShoppingList },
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    PubSub.subscribe("SHOW_SHOPPING_LIST", () => {
      if (this.isShow) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.restaurant-page {
  overflow: auto;
  padding-bottom: 4rem;
  .poster {
    position: relative;
    height: 4rem;
    background: url(https://picsum.photos/id/566/2517/1667) no-repeat center;
    .logo {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 30%);
      width: 4rem;
      height: 4rem;
      border-radius: 2px;
      background-color: #fff;
    }
  }
  .name {
    overflow: hidden;
    padding: 0 10%;
    margin: 2rem 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.2rem;
    text-align: center;
    .certification {
      display: inline-block;
      position: relative;
      top: -2px;
      padding: 2px 3px 0;
      border-radius: 3px;
      background-color: #f7d94e;
      font-size: 0.8rem;
    }
  }
  .details {
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin: 10px 0;
    li {
      margin-left: 10px;
      color: #999;
      font-size: 0.8rem;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .nav {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #f3f5f7;
    padding-bottom: 8px;
    margin-top: 20px;
    .active {
      color: @theme-color;
      text-decoration: underline;
      text-underline-offset: 10px;
    }
  }
}
</style>
