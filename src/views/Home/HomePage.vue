<template>
  <div class="home-page">
    <TheHeader title="西南室友大学13栋313号">
      <template #left>
        <router-link to="/profile" class="iconfont icon-search"
          >&#xe61a;
        </router-link>
      </template>
      <template #right>
        <router-link to="/profile" class="login"> 登录 </router-link>
        <router-link to="/profile" class="register"> 注册 </router-link>
      </template>
    </TheHeader>
    <TheClassification />
    <BusinessList />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheClassification from "@/components/TheClassification.vue";
import BusinessList from "@/components/Business/BusinessList.vue";

export default {
  name: "HomePage",
  components: { TheHeader, TheFooter, TheClassification, BusinessList },
};
</script>

<style lang="less" scoped>
.home-page {
  .page-window();
  .icon-search {
    color: #f5f5f5;
    font-size: 2.2rem;
  }
  .login {
    color: #f5f5f5;
    white-space: nowrap;
  }
  .register {
    // 混入login的样式
    .login();
    &::before {
      content: "|";
      display: inline-block;
      // 视觉修饰
      transform: translate(2px, -1px);
    }
    margin-right: 7px;
  }
}
</style>
