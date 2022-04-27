<template>
  <router-link to="/profile" class="the-business">
    <img class="cover" src="https://picsum.photos/id/133/2742/1828" />
    <div class="introduction">
      <div class="title">
        <div class="name">
          <span class="certification" v-if="isCertification">品牌</span>
          {{ name }}
        </div>
        <ul class="rights">
          <li class="right">保</li>
          <li class="right">准</li>
          <li class="right">票</li>
        </ul>
      </div>
      <div class="evaluation">
        <ul class="stars">
          <li class="star"></li>
          <li class="star"></li>
          <li class="star"></li>
          <li class="half-star"></li>
          <li class="complete-star"></li>
        </ul>
        <div class="score">{{ score }}</div>
        <div class="sales">月售{{ sales }}件</div>
        <div class="delivery">硅谷专送</div>
      </div>
      <div class="cost">
        ￥{{ minDeliverySpend }}起送/配送费约{{ deliveryCost }}元
      </div>
    </div>
  </router-link>
</template>

<script>
import _ from "lodash";

import { MAX_BUSINESS_SCORE } from "@/global-variable";

export default {
  name: "TheBusiness",
  props: {
    // 是否是品牌认定
    isCertification: {
      type: Boolean,
      require: true,
    },
    // 店铺名称
    name: {
      type: String,
      require: true,
    },
    // 店铺评分
    // 只能是整数或者小数为.5
    score: {
      type: Number,
      require: true,
      validator(value) {
        return value >= 0 && value <= 5 && Math.floor(value * 10) % 5 === 0;
      },
    },
    // 店铺月销量
    sales: {
      type: Number,
      require: true,
      validator(value) {
        return value >= 0;
      },
    },
    // 店铺是否支持硅谷专送
    isSpecialDelivery: {
      type: Boolean,
      require: true,
    },
    // 店铺最低配送消费
    minDeliverySpend: {
      type: Number,
      require: true,
      validator(value) {
        return value >= 0;
      },
    },
    // 估计配送费用
    deliveryCost: {
      type: Number,
      require: true,
      validator(value) {
        return value >= 0;
      },
    },
  },
  computed: {
    stars() {
      const stars = new Array(MAX_BUSINESS_SCORE);
      let fillIndex = 0;
      // 完整星数量
      const completeStars = Math.floor(this.score);
      _.fill(stars, 10, fillIndex, fillIndex + completeStars);
      fillIndex = completeStars;
      // 是否有半星
      const haflStar = Math.floor(this.score * 10) % 5;
      _.fill(stars, 5, fillIndex, fillIndex + haflStar);
      fillIndex += haflStar;
      // 黑星数量
      _.fill(stars, 0, fillIndex);
      return stars;
    },
  },
  mounted() {
    console.log(this.stars);
  },
};
</script>

<style lang="less" scoped>
.the-business {
  display: grid;
  grid-template-columns: 100px 1fr;
  height: 100px;
  padding: 10px;
  border-bottom: 1px solid #efefef;
  .cover {
    width: 100%;
    height: 100%;
  }
  .introduction {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    .title {
      display: grid;
      // 这里不能使用弹性不行自适应，弹性的自适应不是刚性的，无法约束文字增长
      grid-template-columns: auto 3.6rem;
      align-items: center;
      .name {
        overflow: hidden;
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
        .certification {
          transform: translateY(-2px);
          display: inline-block;
          width: 1.8rem;
          height: 1rem;
          border-radius: 3px;
          background-color: #f7d94e;
          text-align: center;
          line-height: 1rem;
          font-size: 0.75rem;
        }
      }
      .rights {
        display: flex;
        .right {
          width: 1.2rem;
          justify-self: end;
          font-size: 0.9rem;
          color: #999;
        }
      }
    }
    .evaluation {
      display: flex;
      justify-content: flex-start;
      // 基线对齐
      align-items: baseline;
      // 必须要换行，因为这里所有内容都必须显示，无法用省略号处理
      flex-wrap: wrap;
      .stars {
        align-self: center;
        display: grid;
        grid-template-columns: repeat(5, 1rem);
        grid-template-rows: 1rem;
        margin-right: 10px;
        // 视觉修饰
        transform: translateY(-1px);
        .star {
          background: url(../../assets/image/star.png) no-repeat 0 0/320%;
        }
        .half-star {
          background: url(../../assets/image/star.png) no-repeat 250px 0/320%;
        }
        .complete-star {
          background: url(../../assets/image/star.png) no-repeat 500px 0/320%;
        }
      }
      .score {
        margin-right: 2px;
        color: #ff9900;
        font-size: 1.2rem;
      }
      .sales {
        flex-grow: 1;
        font-size: 0.8rem;
        color: #999;
      }
      .delivery {
        padding: 0 5px;
        border-radius: 0.8rem;
        border: 1px solid @theme-color;
        font-size: 0.8rem;
        color: @theme-color;
      }
    }
    .cost {
      color: #999;
    }
  }
}
</style>
