<template>
	<div class="the-property">
		<router-link to="/" class="wrapper">
			<div class="value" :style="{ color: color }">
				{{ balanceValue }}
			</div>
			<div class="unit">{{ balanceUnit }}</div>
			<div class="item">{{ item }}</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "TheProperty",
	props: {
		// 余额
		balanceValue: {
			type: Number,
			default: 0,
			validator(value) {
				return value >= 0;
			},
		},
		// 财产单位
		balanceUnit: {
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
	background-color: #fff;
	margin-left: 2px;
	&:first-child {
		margin-left: 0;
	}
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: baseline;
		align-content: center;
		width: 100%;
		height: 100%;
		.value {
			font-size: 2rem;
			font-weight: bold;
		}
		.unit {
			margin-left: 5px;
			// 视觉修饰
			transform: translateY(-2px);
		}
		.item {
			flex-basis: 100%;
			margin-top: 5px;
			color: #999;
			text-align: center;
		}
	}
}
</style>
