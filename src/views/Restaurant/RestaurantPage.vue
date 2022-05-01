<template>
  <div class="restaurant-page">
    <div class="poster">
      <img src="logo" />
    </div>
    <h1>
      <span>品牌</span>
      {{}} &#9654;
    </h1>
    <ul class="details">
      <li>月售{{}}</li>
      <li>硅谷专送</li>
      <li>约{{}}分钟</li>
      <li>距离{{}}m</li>
    </ul>
    <ul class="preferential"></ul>
    <ul class="nav">
      <li>
        <router-link to="/profile">点餐</router-link>
      </li>
      <li>
        <router-link to="/profile">评价</router-link>
      </li>
      <li>
        <router-link to="/profile">商家</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "RestaurantPage",
};
</script>

<style lang="less" scoped>
.restaurant-page {
}
</style>
