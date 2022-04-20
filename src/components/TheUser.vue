<template>
  <div class="the-user">
    <img :src="defaultPortrait" class="portrait" />
    <div class="info">
      <router-link to="/search" class="username">
        {{ defaultUsername }}
      </router-link>
      <span class="phone">
        <span class="iconfont icon-phone">&#xe8b9;</span>
        {{ defaultPhone }}
      </span>
    </div>
    <router-link to="/login" class="iconfont jump">&#xe735;</router-link>
  </div>
</template>

<script>
export default {
  name: "TheUser",
  data() {
    return {
      defaultPortrait: require("../assets/image/default_user_portrait.png"),
      defaultUsername: `登录${"\u2CC6"}注册`,
      defaultPhone: "暂无绑定手机号",
    };
  },
};
</script>

<style lang="less" scoped>
.the-user {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  border-top: 1px solid #f5f5f5;
  background-color: @theme-color;
  .portrait {
    overflow: hidden;
    box-sizing: border-box;
    height: 100%;
    padding: 20px;
    border-radius: 50%;
  }
  .info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .username {
      color: #f5f5f5;
      font-weight: bold;
    }
    .phone {
      margin-top: 5px;
      color: #f5f5f5;
      font-size: 0.8rem;
      .icon-phone {
        font-size: 1rem;
      }
    }
  }
  .jump {
    padding: 10px;
    font-size: 2rem;
    color: #f5f5f5;
  }
}
</style>
