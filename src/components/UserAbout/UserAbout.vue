<template>
	<div class="user-about">
		<router-link to="/order" class="wrapper">
			<!-- 要用插槽插入图标，因为不同的图标需要不同的调整 -->
			<!-- 如果是公司同意设计图标大小，则不用这样 -->
			<slot></slot>
			<span class="title">{{ title }}</span>
			<span class="iconfont icon-jump">&#xe735;</span>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "UserAbout",
	props: {
		title: {
			type: String,
			require: true,
		},
	},
};
</script>

<style lang="less" scoped>
.user-about {
	border-bottom: 1px solid #f5f5f5;
	background-color: #fff;
	.wrapper {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 40px;
	}
	.title {
		flex-grow: 1;
		padding-left: 5px;
		font-size: 1.2rem;
	}
	.icon-jump {
		padding-right: 10px;
		color: #999;
		font-size: 1.2rem;
	}
	&:last-child {
		border-bottom: none;
	}
}
</style>
