<template>
  <div
    class="restaurant-page"
    :class="{
      'cover--entrances': isCover === 1,
      'cover--exits': isCover === -1,
      '': isCover === 0,
    }"
  >
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
      leave-active-class="scale-out-ver-bottom"
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
      isCover: 0,
    };
  },
  mounted() {
    PubSub.subscribe("SHOW_SHOPPING_LIST", () => {
      if (this.isShow) {
        this.isShow = false;
        this.isCover = -1;
      } else {
        this.isShow = true;
        this.isCover = 1;
        this.$el.ontouchmove = (e) => {
          if (e.target === this.$el) {
            e.preventDefault();
          }
        };
      }
    });
  },
};
</script>

<style lang="less" scoped>
.restaurant-page {
  position: relative;
  overflow: auto;
  height: 100vh;
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

.cover--entrances::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: @topmost-z-index;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.7);
  .scale-in-hor-center();
}

.cover--exits::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: @topmost-z-index;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.7);
  .scale-out-horizontal();
}
</style>
