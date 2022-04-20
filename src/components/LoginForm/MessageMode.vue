<template>
  <div class="message-mode">
    <div class="phone">
      <input type="text" placeholder="手机号" maxlength="11" />
      <button>获取验证码</button>
    </div>
    <input class="captcha" type="text" placeholder="验证码" />
  </div>
</template>

<script>
export default {
  name: "MessageMode",
};
</script>

<style lang="less" scoped>
.message-mode {
  .phone {
    overflow: hidden;
    display: flex;
    height: 2.5rem;
    border: 2px solid #999;
    border-radius: 5px;
    input {
      height: 100%;
      flex-grow: 1;
      border: none;
      outline: none;
      text-indent: 0.5rem;
      letter-spacing: 2px;
    }
    button {
      border: none;
      background-color: transparent;
      color: #999;
      &::before {
        content: "\2502";
      }
    }
  }
  .captcha {
    box-sizing: border-box;
    width: 100%;
    height: 2.5rem;
    border: 2px solid #999;
    border-radius: 5px;
    text-indent: 0.5rem;
    letter-spacing: 2px;
    margin-top: 10px;
    outline: none;
  }
}
</style>
