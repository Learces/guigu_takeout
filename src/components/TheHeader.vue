<template>
	<div class="the-header">
		<slot name="left" />
		<div class="title">{{ title }}</div>
		<slot name="right" />
	</div>
</template>

<script>
export default {
	name: "the-header",
	props: {
		title: {
			// 只限定类型，所以不需要验证器
			type: String,
			require: true,
		},
	},
};
</script>

<style lang="less" scoped>
.the-header {
	position: fixed;
	top: 0;
	left: 0;
	height: 3rem;
	width: 100%;
	background-color: @theme-color;
	font-size: 1.2rem;
	.title {
		overflow: hidden;
		text-align: center;
		line-height: 3rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}
</style>
