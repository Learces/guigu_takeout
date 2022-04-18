<template>
	<div class="property-list">
		<TheProperty item="我的余额" surplus="0.00" unit="元" color="#ff9a0b" />
		<TheProperty item="我的优惠" surplus="0" unit="个" color="#fd7759" />
		<TheProperty item="我的积分" surplus="0" unit="分" color="#77b726" />
	</div>
</template>

<script>
import TheProperty from "@/components/Property/TheProperty.vue";
export default {
	components: { TheProperty },
	name: "GuiguTakeoutPropertylist",
};
</script>

<style lang="less" scoped>
.property-list {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
}
</style>
