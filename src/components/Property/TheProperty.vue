<template>
	<div class="the-property">
		<router-link to="/">
			<span class="surplus" :style="{ color: color }">{{ surplus }}</span>
			<span class="unit">{{ unit }}</span>
		</router-link>
		<div>{{ item }}</div>
	</div>
</template>

<script>
export default {
	name: "TheProperty",
	props: {
		// 余额
		surplus: {
			type: Number,
			default: 0,
			validator(value) {
				return value >= 0;
			},
		},
		// 财产单位
		unit: {
			type: String,
			require: true,
			validator(value) {
				return value.length === 1;
			},
		},
		// 财产项
		item: {
			type: String,
			require: true,
		},
		color: {
			type: String,
			default: "#333",
			validator(value) {
				// 只允许HEX模式
				// 能力有限
				return value.match(/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/g);
			},
		},
	},
};
</script>

<style lang="less" scoped>
.the-property {
	height: 100px;
}
</style>
