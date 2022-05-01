<template>
  <div class="shopping-list">
    <dl>
      <dt>
        购物车
        <button>清空</button>
      </dt>
      <dd v-for="item in list" :key="item.id">
        <span class="name">{{ item.name }}</span>
        <span class="price">￥{{ item.price }}</span>
        <span class="iconfont increase">&#xe624;</span>
        <span class="quantity">{{ item.quantity }}</span>
        <span class="iconfont decrease">&#xe696;</span>
      </dd>
    </dl>
  </div>
</template>

<script>
import { nanoid } from "nanoid";

export default {
  name: "ShoppingList",
  data() {
    return {
      list: [
        {
          id: nanoid(),
          name: "南瓜粥",
          price: 9,
          quantity: 1,
        },
        {
          id: nanoid(),
          name: "红豆薏米美肤粥",
          price: 12,
          quantity: 2,
        },
        {
          id: nanoid(),
          name: "八宝酱菜",
          price: 4,
          quantity: 1,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.shopping-list {
  position: fixed;
  bottom: 4rem;
  dl {
    width: 100vw;
    dt {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2rem;
      padding: 0 10px;
      background-color: #f3f5f7;
      button {
        height: 100%;
        border: none;
        background-color: #fff;
        font-size: 1rem;
      }
    }
    dd {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 2.3rem;
      border-top: 1px solid #e1e4e7;
      padding: 0 10px;
      .name {
        flex-grow: 1;
      }
      .price {
        margin-right: 10px;
        color: #f35454;
      }
      .increase {
        color: @theme-color;
      }
      .quantity {
        margin: 0 10px;
      }
      .decrease {
        color: @theme-color;
        font-size: 1.12rem;
      }
    }
  }
}
</style>
