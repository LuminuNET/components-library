<template>
	<div>
		<lm-header :image="require('@/assets/style-logo.png')" />
		<lm-sticky-header :links="links" />
		<div class="view container">
			<lm-card class="fake-content"></lm-card>
		</div>
		<lm-footer :partners="partners" />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import LmHeader from "@/components/layout/Header.vue";
import LmStickyHeader from "@/components/layout/StickyHeader.vue";
import LmFooter from "@/components/layout/Footer.vue";
import LmCard from "@/components/base/Card.vue";

export default Vue.extend({
	components: {
		LmHeader,
		LmStickyHeader,
		LmCard,
		LmFooter
	},
	data: () => ({
		links: [
			{
				name: "overview",
				to: "/",
				isExternal: false,
				hasChildren: false
			},
			{
				name: "test",
				to: "https://example.org",
				isExternal: true,
				hasChildren: false
			}
		],
		partners: [
			{
				to: "https://cytooxien.de",
				image: require("@/assets/cytooxien_banner.png")
			}
		]
	})
});
</script>

<style lang="scss" scoped>
.fake-content {
	height: 400px;
	margin-bottom: 30px;
}
</style>
