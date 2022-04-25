<template>
  <div class="search-list">
    <ul>
      <li v-for="item in results" :key="item.id">
        <SearchItem
          :cover="item.cover"
          :result="item.result"
          :sales="item.sales"
          :takeoutPrice="item.takeoutPrice"
          :distance="item.distance"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import SearchItem from "@/components/Search/SearchItem.vue";
import { nanoid } from "nanoid";
export default {
  components: { SearchItem },
  name: "SearchList",
  data() {
    return {
      results: [
        {
          id: nanoid(),
          cover: "https://picsum.photos/id/180/2400/1600",
          result: "aaa",
          sales: 999,
          takeoutPrice: 20,
          distance: 2,
        },
        {
          id: nanoid(),
          cover: "https://picsum.photos/id/180/2400/1600",
          result: "baaa",
          sales: 19,
          takeoutPrice: 12,
          distance: 1,
        },
        {
          id: nanoid(),
          cover: "https://picsum.photos/id/180/2400/1600",
          result: "caaa",
          sales: 29,
          takeoutPrice: 120,
          distance: 2,
        },
        {
          id: nanoid(),
          cover: "https://picsum.photos/id/180/2400/1600",
          result: "daaa",
          sales: 123,
          takeoutPrice: 12,
          distance: 3,
        },
        {
          id: nanoid(),
          cover: "https://picsum.photos/id/180/2400/1600",
          result: "eaaa",
          sales: 192,
          takeoutPrice: 13,
          distance: 4,
        },
        {
          id: nanoid(),
          cover: "https://picsum.photos/id/180/2400/1600",
          result: "faaa",
          sales: 1221,
          takeoutPrice: 12,
          distance: 1,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.search-list {
  background-color: #fff;
}
</style>
