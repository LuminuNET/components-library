<template>
	<div ref="notification" class="notification">
		<slot>
			<p class="notification__content">{{ message }}</p>
		</slot>
	</div>
</template>

<style lang="scss" scoped>
.notification {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9009000000000;
	font-size: 24px;
	color: #202020;
	background: rgba(226, 226, 226, 0.9);
	padding: 20px;
	text-align: center;
	box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
	transition: all 0.25s ease, -xf-opacity 0.25s ease;
	overflow-y: hidden;
	opacity: 0;
	height: 0;

	&.active {
		opacity: 1;
		height: 73.6px;
		padding-top: 20px;
		padding-bottom: 20px;
	}
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
	name: "LmNotification",
	props: {
		message: {
			type: String,
			required: true
		},
		active: {
			type: Boolean,
			required: true
		},
		timeout: {
			type: Number,
			default: 2500
		}
	},
	methods: {
		openNotification() {
			const notification = this.$refs.notification;

			// @ts-ignore
			notification.classList.add("active");
		},
		closeNotification() {
			const notification = this.$refs.notification;

			// @ts-ignore
			notification.classList.remove("active");
		}
	},
	watch: {
		active(newValue: boolean, oldValue: boolean) {
			if (!oldValue && newValue) {
				this.openNotification();
				setTimeout(() => {
					this.closeNotification();
				}, this.timeout);
			}
		}
	}
});
</script>
