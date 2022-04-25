<template>
  <div class="business-list">
    <div class="head">
      <span class="iconfont icon-list">&#xe601;</span>
      <span>附件商家</span>
    </div>
    <ul class="list">
      <li>
        <BusinessItem />
        <BusinessItem />
        <BusinessItem />
        <BusinessItem />
        <BusinessItem />
        <BusinessItem />
        <BusinessItem />
      </li>
    </ul>
  </div>
</template>

<script>
import BusinessItem from "@/components/Business/BusinessItem.vue";
export default {
  components: { BusinessItem },
  name: "BusinessList",
};
</script>

<style lang="less" scoped>
.business-list {
  .head {
    height: 40px;
    color: #666;
    font-size: 1.2rem;
    line-height: 40px;
    .icon-list {
      display: inline-block;
      margin: 0 5px 0 8px;
      // 视觉微调
      transform: translateY(-1px);
    }
  }
}
</style>
