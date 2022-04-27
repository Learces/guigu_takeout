<template>
  <div class="business-list">
    <div class="head">
      <span class="iconfont icon-list">&#xe601;</span>
      <span>附件商家</span>
    </div>
    <ul class="list">
      <li v-for="item in businesses" :key="item.id">
        <BusinessItem
          :isCertification="item.isCertification"
          :name="item.name"
          :score="item.score"
          :sales="item.sales"
          :isSpecialDelivery="item.isSpecialDelivery"
          :minDeliverySpend="item.minDeliverySpend"
          :deliveryCost="item.deliveryCost"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import BusinessItem from "@/components/Business/BusinessItem.vue";
export default {
  name: "BusinessList",
  components: { BusinessItem },
  data() {
    return {
      businesses: [
        {
          id: nanoid(),
          isCertification: true,
          name: "新疆大盘鸡",
          score: 3.5,
          sales: 1242,
          isSpecialDelivery: true,
          minDeliverySpen: 25,
          deliveryCost: 6,
        },
        {
          id: nanoid(),
          isCertification: false,
          name: "广东炒河粉",
          score: 4,
          sales: 1222,
          isSpecialDelivery: true,
          minDeliverySpen: 25,
          deliveryCost: 6,
        },
        {
          id: nanoid(),
          isCertification: true,
          name: "隆江猪脚饭",
          score: 3.5,
          sales: 1242,
          isSpecialDelivery: false,
          minDeliverySpen: 25,
          deliveryCost: 6,
        },
      ],
    };
  },
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
