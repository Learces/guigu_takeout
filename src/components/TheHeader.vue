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
	// 将头置于顶层
	z-index: @topmost-z-index;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: @header-height;
	width: 100%;
	background-color: @theme-color;
	font-size: 1.2rem;
	line-height: @header-height;
	.title {
		flex-basis: 100%;
		overflow: hidden;
		text-align: center;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
}
</style>
