<template>
	<div class="user-about-list">
		<ul>
			<li v-for="(vnode, index) in $slots" :key="index">
				<slot></slot>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "UserAboutList",
	mounted() {
		console.log(this.$slots);
	},
};
</script>

<style lang="less" scoped>
.user-about-list {
	margin-top: 10px;
}
</style>
