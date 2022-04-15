<template>
  <div id="app">
    <router-view />
    <FooterGuide />
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide.vue";

export default {
  name: "App",
  components: {
    FooterGuide,
  },
};
</script>

<style>
/* 引入阿里图标图 */
@font-face {
  font-family: "iconfont"; /* Project id 3329582 */
  src: url("//at.alicdn.com/t/font_3329582_f4u7dy14s8.woff2?t=1649935625706")
      format("woff2"),
    url("//at.alicdn.com/t/font_3329582_f4u7dy14s8.woff?t=1649935625706")
      format("woff"),
    url("//at.alicdn.com/t/font_3329582_f4u7dy14s8.ttf?t=1649935625706")
      format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

/* 去除a标签默认样式 */
a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
