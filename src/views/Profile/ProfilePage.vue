<template>
  <div class="profile-page">
    <TheHeader title="我的" />
    <TheUser />
    <PropertyList />
    <UserAboutList>
      <UserAbout title="我的订单">
        <template>
          <span class="iconfont icon-order">&#xe603;</span>
        </template>
      </UserAbout>
      <UserAbout title="积分商城">
        <template>
          <span class="iconfont icon-integral">&#xe600;</span>
        </template>
      </UserAbout>
      <UserAbout title="硅谷外卖会员卡">
        <template>
          <span class="iconfont icon-member">&#xe602;</span>
        </template>
      </UserAbout>
    </UserAboutList>
    <UserAboutList>
      <UserAbout title="服务中心">
        <template>
          <span class="iconfont icon-service">&#xe838;</span>
        </template>
      </UserAbout>
    </UserAboutList>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheUser from "@/components/TheUser.vue";
import PropertyList from "@/components/Property/PropertyList.vue";
import UserAboutList from "@/components/UserAbout/UserAboutList.vue";
import UserAbout from "@/components/UserAbout/UserAbout.vue";
export default {
  name: "ProfilePage",
  components: {
    TheHeader,
    TheFooter,
    TheUser,
    PropertyList,
    UserAboutList,
    UserAbout,
  },
};
</script>

<style lang="less" scoped>
.profile-page {
  .page-window();
  background-color: #f5f5f5;
  .icon-order {
    color: @theme-color;
    font-size: 1.2rem;
    margin-left: 10px;
  }
  .icon-integral {
    font-size: 1.2rem;
    color: #ff7144;
    margin-left: 10px;
  }
  .icon-member {
    font-size: 0.9rem;
    color: #ffaa06;
    margin-left: 12px;
  }
  .icon-service {
    font-size: 1.2rem;
    color: #1b7ea4;
    margin-left: 11px;
  }
}
</style>
