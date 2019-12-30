<template>
	<div>
		<lm-notification :active="active" :message="message" />
		<lm-header :image="require('@/assets/style-logo.png')" />
		<lm-sticky-header
			:isLoggedIn="true"
			:hasAvatar="true"
			:userId="4"
			username="Keimeno"
			:links="links"
			:notLoggedInAction="{action: () => $router.push({path: '/login', query: {...$route.query}})}"
			:dropdownItems="[
				{name: 'logout', action: () => $router.push({path: 'logout'})},
				{name: 'okay', action: () => $router.push({path: 'okay'})}
			]"
		/>
		<div class="view container">
			<lm-card class="fake-content">
				<h2 class="title">Hello</h2>
				<p class="description">Helllooooooo there</p>
				<lm-seperator :mtop="20" :mbottom="10" />
				<h2 class="title">Nice okay</h2>
				<div class="btn-group">
					<lm-button text="Hello" type="error" size="big" />
				</div>
				<lm-loader :size="20" />
			</lm-card>
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
import LmNotification from "@/components/base/Notification.vue";
import LmSeperator from "@/components/base/Seperator.vue";
import LmButton from "@/components/base/Button.vue";
import LmLoader from "@/components/base/Loader.vue";

export default Vue.extend({
	components: {
		LmHeader,
		LmStickyHeader,
		LmCard,
		LmFooter,
		LmNotification,
		LmSeperator,
		LmButton,
		LmLoader
	},
	mounted() {
		// setInterval(() => {
		// 	this.active = true;
		// 	setInterval(() => {
		// 		this.active = false;
		// 	}, 0);
		// }, 5000);
	},
	data: () => ({
		active: false,
		message: "xImSyntax mag Brot.",
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

.btn-group {
	display: flex;
	justify-content: flex-end;

	> div {
		margin-left: 5px;
	}
}
</style>
