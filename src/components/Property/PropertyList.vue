<template>
	<div class="property-list">
		<TheProperty
			item="我的余额"
			balanceValue="0.00"
			balanceUnit="元"
			color="#ff9a0b"
		/>
		<TheProperty
			item="我的优惠"
			balanceValue="0"
			balanceUnit="个"
			color="#fd7759"
		/>
		<TheProperty
			item="我的积分"
			balanceValue="0"
			balanceUnit="分"
			color="#77b726"
		/>
	</div>
</template>

<script>
import TheProperty from "@/components/Property/TheProperty.vue";
export default {
	components: { TheProperty },
	name: "PropertyList",
};
</script>

<style lang="less" scoped>
.property-list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}
</style>
