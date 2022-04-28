<template>
  <div class="search-page">
    <TheHeader title="搜索" />
    <div class="bar">
      <input type="search" />
      <button>提交</button>
    </div>
    <SearchList />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import SearchList from "@/components/Search/SearchList.vue";
export default {
  name: "SearchPage",
  components: { TheHeader, TheFooter, SearchList },
};
</script>

<style lang="less" scoped>
.search-page {
  .page-window();
  background-color: #f5f5f5;
  .bar {
    display: flex;
    height: 30px;
    align-items: stretch;
    padding: 10px 5px;
    background-color: #fff;
    input {
      flex-grow: 1;
      border: none;
      border-radius: 5px;
      background-color: #f5f5f5;
      outline: none;
    }
    button {
      width: 60px;
      border: none;
      border-radius: 5px;
      margin-left: 5px;
      background-color: @theme-color;
      color: #fff;
      font-weight: bold;
      outline: none;
    }
  }
}
</style>
