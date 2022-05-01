<template>
  <div class="login-page">
    <router-link to="/profile" class="iconfont icon-jump">&#xe736;</router-link>
    <h1 class="head">硅谷外卖</h1>
    <LoginForm />
    <p class="tip">
      温馨提示：未注册硅谷外卖的手机号，登录时将自动注册，且代表已同意
      <router-link to="/profile" class="protocol">《用户服务协议》</router-link>
    </p>
    <router-link to="/profile" class="btn">登录</router-link>
    <router-link to="/profile" class="about">关于我们</router-link>
  </div>
</template>

<script>
import LoginForm from "@/views/Login/LoginForm/LoginForm.vue";
export default {
  components: { LoginForm },
  name: "LoginPage",
};
</script>

<style lang="less" scoped>
.login-page {
  overflow: auto;
  min-height: 100vh;
  .icon-jump {
    float: left;
    margin: 10px;
    border-radius: 50%;
    border: 1px solid #999;
    color: #999;
    font-size: 2rem;
    text-align: center;
  }
  .head {
    clear: left;
    margin-bottom: 4rem;
    font-size: 3rem;
    color: @theme-color;
    text-align: center;
  }
  .tip {
    font-size: 0.9rem;
    width: 80%;
    max-width: 350px;
    margin: 10px auto;
    color: #999;
    .protocol {
      color: @theme-color;
    }
  }
  .btn {
    display: block;
    width: 80%;
    max-width: 350px;
    height: 2.5rem;
    margin: 30px auto 10px;
    background-color: #4dd970;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    line-height: 2.5rem;
  }
  .about {
    display: block;
    color: #999;
    font-size: 0.9rem;
    text-align: center;
  }
}
</style>
