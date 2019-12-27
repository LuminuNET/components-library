<template>
	<div
		class="spinner"
		:style="{ 
				margin: justifyCenter === true ? 'auto' : 0, 
				marginTop: mtop + 'px', 
				marginBottom: mbottom + 'px', 
				'--size': size + 'px', width: (size * 5)  + 'px' 
			}"
	>
		<div class="bounce1"></div>
		<div class="bounce2"></div>
		<div class="bounce3"></div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "LmLoader",
	props: {
		mtop: {
			type: Number,
			default: 0
		},
		mbottom: {
			type: Number,
			default: 0
		},
		justifyCenter: {
			type: Boolean,
			default: false
		},
		size: {
			type: Number,
			default: 24
		}
	}
});
</script>

<style lang="scss" scoped>
.spinner {
	--size: 24px;
	width: 156px;
	text-align: center;
}

.spinner > div {
	width: var(--size);
	height: var(--size);
	margin: 0 2px;
	background-color: rgb(207, 207, 207);

	border-radius: 100%;
	display: inline-block;
	-webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
	animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
	-webkit-animation-delay: -0.32s;
	animation-delay: -0.32s;
}

.spinner .bounce2 {
	-webkit-animation-delay: -0.16s;
	animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
	0%,
	80%,
	100% {
		-webkit-transform: scale(0);
	}
	40% {
		-webkit-transform: scale(1);
	}
}

@keyframes sk-bouncedelay {
	0%,
	80%,
	100% {
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	40% {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
}
</style>
