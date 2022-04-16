<template>
	<div class="the-classification">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">Slide 1</div>
				<div class="swiper-slide">Slide 2</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
import Swiper from "swiper";
import "swiper";

export default {
	name: "TheClassification",
	mounted() {
		new Swiper(".swiper-container", {
			loop: true,
		});
	},
};
</script>

<style lang="less" scoped>
.the-classification {
	width: 100%;
	height: 200px;
	.swiper-container {
		width: inherit;
		height: inherit;
	}
}
</style>
