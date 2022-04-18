<template>
	<div class="profile-page">
		<TheHeader title="我的" />
		<TheUser />
		<PropertyList />
	</div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheUser from "@/components/TheUser.vue";
import PropertyList from "@/components/Property/PropertyList.vue";
export default {
	name: "ProfilePage",
	components: { TheHeader, TheUser, PropertyList },
};
</script>

<style lang="less" scoped>
.profile-page {
	.page-window();
}
</style>
