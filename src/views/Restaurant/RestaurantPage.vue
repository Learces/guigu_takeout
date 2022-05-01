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
    <ul class="preferential"></ul>
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
    <div class="settlement">
      <div class="cart">
        <span class="iconfont">&#xe70c;</span>
        <span class="counter">{{ `4` }}</span>
      </div>
      <div class="cost">
        <div class="meat-cost">￥{{ `37` }}</div>
        <div class="delivery-cost">配送费￥{{ `4` }}元</div>
      </div>
      <router-link to="/profile" class="btn">去结算</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantPage",
};
</script>

<style lang="less" scoped>
.restaurant-page {
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
  .settlement {
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
  }
  .btn {
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
