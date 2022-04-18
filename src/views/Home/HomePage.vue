<template>
	<div class="home-page">
		<TheHeader title="西南室友大学13栋313号">
			<template #left>
				<router-link to="/profile" class="iconfont icon-search"
					>&#xe61a;
				</router-link>
			</template>
			<template #right>
				<router-link to="/profile" class="login"> 登录 </router-link>
				<!-- <span class="__separator">|</span> -->
				<router-link to="/profile" class="register"> 注册 </router-link>
			</template>
		</TheHeader>
		<TheClassification />
		<BusinessList />
	</div>
</template>

<script>
import TheHeader from "../../components/TheHeader.vue";
import TheClassification from "../../components/TheClassification.vue";
import BusinessList from "../../components/Business/BusinessList.vue";

export default {
	name: "HomePage",
	components: { TheHeader, TheClassification, BusinessList },
};
</script>

<style lang="less" scoped>
.home-page {
	margin-top: @page-margin-top;
	margin-bottom: @footer-height;
	.icon-search {
		color: #333;
		font-size: 2.2rem;
	}
	.login {
		color: #333;
		white-space: nowrap;
	}
	.register {
		// 混入login的样式
		.login();
		&::before {
			content: "|";
			display: inline-block;
			// 视觉修饰
			transform: translate(2px, -1px);
		}
		margin-right: 7px;
	}
}
</style>
