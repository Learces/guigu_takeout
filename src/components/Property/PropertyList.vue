<template>
  <div class="property-list">
    <PropertyItem
      item="我的余额"
      balanceValue.number="0.00"
      balanceUnit="元"
      color="#ff9a0b"
    />
    <PropertyItem
      item="我的优惠"
      balanceValue.number="0"
      balanceUnit="个"
      color="#fd7759"
    />
    <PropertyItem
      item="我的积分"
      balanceValue.number="0"
      balanceUnit="分"
      color="#77b726"
    />
  </div>
</template>

<script>
import PropertyItem from "@/components/Property/PropertyItem.vue";
export default {
  components: { PropertyItem },
  name: "PropertyList",
};
</script>

<style lang="less" scoped>
.property-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
