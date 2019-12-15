<template>
	<nav>
		<div class="container">
			<ul>
				<li v-for="(link, index) in links" :key="index">
					<div class="li-container wrapper" :class="{ active: active === index }">
						<div class="short-link">
							<a @click="openLink(link)">
								{{
								$t('navigation.' + link.name)
								}}
							</a>
						</div>
						<div
							class="dropdown-activator"
							@click="active = active === index ? -1 : index"
							@focusout="active = -1"
							tabindex="0"
							v-show="link.hasChildren"
						>
							<svg
								aria-hidden="true"
								focusable="false"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 320 512"
								width="10px"
								height="15px"
							>
								<path
									fill="white"
									d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
								/>
							</svg>
						</div>
					</div>
				</li>

				<slot>
					<li class="user-auth">
						<p>{{ $t('navigation.login') }}</p>
					</li>
				</slot>
			</ul>
		</div>
	</nav>
</template>

<script lang="ts">
import Vue from "vue";
import { TLink } from "@luminu/types";

export default Vue.extend({
	name: "LmStickyHeader",
	props: {
		links: {
			type: Array,
			required: true
		},
		active: {
			type: Number,
			default: -1
		}
	},
	methods: {
		openLink(link: TLink): void {
			if (link.isExternal) {
				window.open(link.to, "_blank");
			} else {
				// @ts-ignore
				(this as any).$router.push({ path: link.to });
			}
		}
	}
});
</script>

<style lang="scss" scoped>
@import "~@luminu/ui-kit/scss/_variables.scss";

nav {
	position: sticky;
	top: 0;
	max-height: 71px;
	height: 71px;
	background-color: $lmColor2;
	box-shadow: 0px 5px $lmColor3;
	z-index: 100;

	ul {
		display: inline-flex;
		width: 100%;

		li {
			list-style: none;
			margin: 15px 0px;

			.li-container {
				&.wrapper,
				.short-link,
				.dropdown-activator {
					transition: background 0.25s ease-out;
					background: transparent;
				}

				&.wrapper {
					display: flex;
					margin-right: 20px;
					cursor: pointer;

					&.active {
						box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.35);
						background: rgba(29, 64, 105, 0.5);
					}

					&:hover,
					.short-link:hover,
					.dropdown-activator:hover {
						background: rgba(252, 252, 252, 0.06);
					}

					.short-link {
						font-size: 15px;
						font-weight: 700;
						text-transform: uppercase;
						letter-spacing: 0.25px;
						padding: 10px 10px;

						a {
							text-decoration: none;
							color: white;
						}
					}

					.dropdown-activator {
						padding: 10px 6px;
						opacity: 0.6;
						transition: all 0.25s ease-out;

						&:hover {
							opacity: 1;
						}

						&:focus {
							outline: none;
						}
					}
				}
			}

			&.user-auth {
				width: 100%;
				display: flex;
				flex-direction: row-reverse;

				p {
					transition: background 0.25s ease-out;
					background: rgba($color: #161616, $alpha: 0.15);

					font-size: 15px;
					font-weight: 700;
					text-transform: uppercase;
					letter-spacing: 0.25px;
					padding: 10px 10px;
					color: white;
					cursor: pointer;

					&:hover {
						background: rgba($color: #161616, $alpha: 0.3);
					}
				}
			}
		}
	}
}
</style>
