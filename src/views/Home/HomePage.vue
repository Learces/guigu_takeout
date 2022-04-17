<template>
	<div class="home-page">
		<TheHeader title="西南室友大学13栋313号">
			<template #left>
				<span class="iconfont icon-search">&#xe61a;</span>
			</template>
			<template #right>
				<span class="login">登录|注册</span>
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
		font-size: 2.5rem;
	}
	.login {
		min-width: 90px;
		font-size: 1.2rem;
	}
}
</style>
