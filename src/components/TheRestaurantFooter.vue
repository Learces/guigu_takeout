<template>
  <div class="the-restaurant-footer">
    <div class="cart" @click="showList()">
      <span class="iconfont">&#xe70c;</span>
      <span class="counter">{{ `4` }}</span>
    </div>
    <div class="cost">
      <div class="meat-cost">￥{{ `37` }}</div>
      <div class="delivery-cost">配送费￥{{ `4` }}元</div>
    </div>
    <router-link to="/profile" class="settlement">去结算</router-link>
  </div>
</template>

<script>
import PubSub from "pubsub-js";

export default {
  name: "TheRestaurantFooter",
  methods: {
    showList() {
      PubSub.publish("SHOW_SHOPPING_LIST");
    },
  },
};
</script>

<style lang="less" scoped>
.the-restaurant-footer {
  z-index: @topmost-z-index;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background-color: #141d27;
  .cart {
    position: absolute;
    left: 1.5rem;
    bottom: 0;
    width: 4rem;
    height: 4rem;
    border: 8px solid #141d27;
    border-radius: 50%;
    background-color: @theme-color;
    text-align: center;
    line-height: 4rem;
    .iconfont {
      position: relative;
      right: -12px;
      color: #fff;
      font-size: 2.5rem;
    }
    .counter {
      position: relative;
      top: -35px;
      right: -8px;
      height: 1rem;
      padding: 0 8px;
      border-radius: 0.5rem;
      background-color: #f01414;
    }
  }
  .cost {
    position: absolute;
    top: 50%;
    left: 7rem;
    transform: translateY(-50%);
    .meat-cost {
      font-size: 1.2rem;
      color: #fff;
      font-weight: bold;
    }
    .delivery-cost {
      color: #656b71;
    }
  }
  .settlement {
    position: absolute;
    right: 0;
    height: 4rem;
    padding: 0 1rem;
    background-color: @theme-color;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 4rem;
  }
}
</style>
