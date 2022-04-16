<template>
	<div class="the-footer">
		<ul class="list">
			<li>
				<router-link to="/home" class="item">
					<span class="iconfont icon">&#xe655;</span>
					<span>外卖</span>
				</router-link>
			</li>
			<li>
				<router-link to="/search" class="item">
					<span class="iconfont icon">&#xe64a;</span>
					<span>搜索</span>
				</router-link>
			</li>
			<li>
				<router-link to="/order" class="item">
					<span class="iconfont icon">&#xe669;</span>
					<span>订单</span>
				</router-link>
			</li>
			<li>
				<router-link to="/profile" class="item">
					<span class="iconfont icon">&#xe620;</span>
					<span>我的</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "TheFooter",
};
</script>

<style lang="less" scoped>
.the-footer {
	z-index: 9999;
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;

	.list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
		align-items: center;
		height: 4rem;
		border-top: 1px solid #ccc;
		box-shadow: 0 2px 30px -10px rgba(0, 0, 0, 0.3);

		.item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: #666;
		}

		.icon {
			font-size: 1.6rem;
		}

		// 活跃路由样式
		.router-link-active {
			color: @theme-color;
		}
	}
}
</style>
