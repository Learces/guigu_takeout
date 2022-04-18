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
	z-index: @topmost-z-index;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: @header-height;
	background-color: @theme-color;
	line-height: @header-height;
	.title {
		flex-basis: 100%;
		overflow: hidden;
		color: #f5f5f5;
		font-size: 1.1rem;
		white-space: nowrap;
		text-align: center;
		text-overflow: ellipsis;
	}
}
</style>
