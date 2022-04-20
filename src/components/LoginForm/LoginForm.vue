<template>
  <div class="login-form">
    <ul class="modes" @click="toggleMode($event)">
      <li class="mode--active" data-mode="message" ref="messageMode">
        <router-link to="/login/message">短信登录</router-link>
      </li>
      <li data-mode="password" ref="passwordMode">
        <router-link to="/login/password">密码登录</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  methods: {
    toggleMode(event) {
      this.mode = event.target.dataset.mode;
      this.$refs.passwordMode.classList.toggle("mode--active");
      this.$refs.messageMode.classList.toggle("mode--active");
    },
  },
};
</script>

<style lang="less" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 80%;
  max-width: 350px;
  margin: auto;
  .modes {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
    .mode--active {
      border-bottom: 2px solid @theme-color;
      color: @theme-color;
      font-weight: bold;
    }
  }
}
</style>
