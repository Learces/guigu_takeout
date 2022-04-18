<template>
	<div class="the-classification">
		<!-- 参考https://github.com/surmon-china/vue-awesome-swiper/tree/v4.1.1 -->
		<swiper ref="swiperWrapper" :options="swiperOptions">
			<swiper-slide v-for="page in pages" :key="page.id">
				<ul class="list">
					<li v-for="item in page.data" :key="item.id">
						<router-link to="/profile" class="item">
							<img :src="item.cover" class="cover" />
							<span>{{ item.title }}</span>
						</router-link>
					</li>
				</ul>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
	name: "TheClassification",
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			pages: [
				{
					id: "1",
					data: [
						{
							id: "1.1",
							cover: require("../assets/image/classification_烘焙.jpg"),
							title: "烘焙",
						},
						{
							id: "1.2",
							cover: require("../assets/image/classification_水果.jpg"),
							title: "水果",
						},
						{
							id: "1.3",
							cover: require("../assets/image/classification_麻辣烫.jpg"),
							title: "麻辣烫",
						},
						{
							id: "1.4",
							cover: require("../assets/image/classification_蔬果.jpg"),
							title: "蔬果",
						},
						{
							id: "1.5",
							cover: require("../assets/image/classification_面食.jpg"),
							title: "面食",
						},
						{
							id: "1.6",
							cover: require("../assets/image/classification_生鲜.jpg"),
							title: "生鲜",
						},
						{
							id: "1.7",
							cover: require("../assets/image/classification_三文鱼.jpg"),
							title: "三文鱼",
						},
						{
							id: "1.8",
							cover: require("../assets/image/classification_商超.jpg"),
							title: "商超",
						},
					],
				},
				{
					id: "2",
					data: [
						{
							id: "2.1",
							cover: require("../assets/image/classification_冰淇淋.jpg"),
							title: "冰淇淋",
						},
						{
							id: "2.2",
							cover: require("../assets/image/classification_饮品.jpg"),
							title: "饮品",
						},
						{
							id: "2.3",
							cover: require("../assets/image/classification_川菜.jpg"),
							title: "川菜",
						},
						{
							id: "2.4",
							cover: require("../assets/image/classification_医疗.jpg"),
							title: "医疗",
						},
						{
							id: "2.5",
							cover: require("../assets/image/classification_盖饭.jpg"),
							title: "盖饭",
						},
						{
							id: "2.6",
							cover: require("../assets/image/classification_新店.jpg"),
							title: "新店",
						},
						{
							id: "2.7",
							cover: require("../assets/image/classification_海鲜.jpg"),
							title: "海鲜",
						},
						{
							id: "2.8",
							cover: require("../assets/image/classification_甜品.jpg"),
							title: "甜品",
						},
					],
				},
			],
			swiperOptions: {
				// 分页器
				// 参考https://www.swiper.com.cn/api/pagination/362.html
				pagination: {
					el: ".swiper-pagination",
				},
			},
		};
	},
};
</script>

<style lang="less" scoped>
.the-classification {
	border-bottom: 1px solid #999;
	.list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 1fr);
		width: 100%;
		.item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 10px 0;
			.cover {
				width: 50%;
			}
		}
	}
	// 调整分页器位置
	.swiper-pagination {
		// swiper本身是绝对定位，使用相对定位覆盖，则占有位置
		position: relative;
		// 调整位置
		bottom: 5px;
	}
	// 使用样式穿透，修改分页器活跃颜色为主题色
	/deep/.swiper-pagination-bullet-active {
		background-color: @theme-color;
	}
}
</style>
