<template>
  <router-link to="/" class="search-item">
    <img :src="cover" class="cover" />
    <div class="info">
      <h1 class="result">{{ result }}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
      <div class="sales">月售{{ sales }}单</div>
      <div class="cost">
        {{ takeoutPrice }}元起送&nbsp;&#11462;&nbsp;&距离{{ distance }}公里
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "SearchItem",
  props: {
    // 封面
    cover: {
      type: String,
      require: true,
    },
    // 匹配项
    result: {
      type: String,
      require: true,
    },
    // 销量
    sales: {
      type: Number,
      require: true,
      validator(value) {
        return value >= 0;
      },
    },
    // 起送价
    takeoutPrice: {
      type: Number,
      require: true,
      validator(value) {
        return value >= 0;
      },
    },
    // 距离
    distance: {
      type: Number,
      require: true,
      validator(value) {
        return value >= 0;
      },
    },
  },
};
</script>

<style lang="less" scoped>
.search-item {
  display: grid;
  grid-template-columns: 20% 80%;
  border-bottom: 1px solid #e9e9e9;
  .cover {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 5px;
  }
  .info {
    padding: 5px 50px 5px 0;
    .result {
      overflow: hidden;
      margin: 0;
      font-size: 1.2rem;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
