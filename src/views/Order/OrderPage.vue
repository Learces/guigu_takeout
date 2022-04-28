<template>
  <div class="order-page">
    <TheHeader title="订单列表" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "OrderPage",
  components: { TheHeader, TheFooter },
};
</script>

<style lang="less" scoped></style>
