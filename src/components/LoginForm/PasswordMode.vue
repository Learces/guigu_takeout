<template>
  <div class="password-mode">
    <input type="text" placeholder="手机" class="username" maxlength="11" />
    <div class="password">
      <input type="password" placeholder="密码" maxlength="16" ref="password" />
      <span v-if="isVisible" @click="toggleType()" class="iconfont"
        >&#xe611;</span
      >
      <span v-else class="iconfont" @click="toggleType()">&#xe610;</span>
    </div>
    <div class="captcha">
      <input type="text" placeholder="验证码" maxlength="4" />
      <img src="https://picsum.photos/id/655/2000/1125" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordMode",
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleType() {
      this.isVisible = !this.isVisible;
      if (this.isVisible) {
        this.$refs.password.type = "text";
      } else {
        this.$refs.password.type = "password";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.password-mode {
  .username {
    box-sizing: border-box;
    width: 100%;
    height: 2.5rem;
    border: 2px solid #999;
    border-radius: 5px;
    outline: none;
    text-indent: 0.5rem;
    letter-spacing: 2px;
  }
  .password {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 2.5rem;
    border: 2px solid #999;
    border-radius: 5px;
    margin-top: 10px;
    input {
      flex-grow: 1;
      border: none;
      height: 100%;
      outline: none;
      text-indent: 0.5rem;
      letter-spacing: 2px;
      &::-ms-reveal {
        display: none;
      }
    }
    span {
      padding: 0 5px;
      font-size: 1.8rem;
      color: #999;
    }
  }
  .captcha {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 2.5rem;
    border: 2px solid #999;
    border-radius: 5px;
    margin-top: 10px;
    input {
      flex-grow: 1;
      border: none;
      height: 100%;
      outline: none;
      text-indent: 0.5rem;
      letter-spacing: 2px;
    }
    img {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
