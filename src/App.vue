<template>
  <div id="app">
    <TheHeader :title="title" />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import * as _ from "lodash";

export default {
  name: "App",
  components: {
    TheFooter,
    TheHeader,
  },
  computed: {
    title() {
      // 这里要注意lodash当中split处理的特性
      const page = _.split(this.$route.path, "/", 2)[1];
      switch (page) {
        case "home":
          return "西南室友大学13栋寝室313号";
        case "search":
          return "搜索";
        case "order":
          return "订单列表";
        case "profile":
          return "我的";
        default:
          return "unknown";
      }
    },
  },
};
</script>
