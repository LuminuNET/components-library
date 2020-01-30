<template>
  <footer>
    <div class="main-content">
      <div class="container grid">
        <div class="card">
          <h2 class="footer__title">{{ $t('footer.partner') }}</h2>
          <a v-for="(partner, index) in partners" :key="index" :href="partner.to" target="_blank">
            <img :src="partner.image" class="footer__img" />
          </a>
        </div>
        <div class="card">
          <h2 class="footer__title">{{ $t('footer.helpfulLinks') }}</h2>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://luminu.net/misc/contact/"
              >{{ $t('footer.contactUs') }}</a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://luminu.net/help/privacy-policy/"
              >{{ $t('footer.privacyPolicy') }}</a>
            </li>
            <li>
              <a target="_blank" href="https://luminu.net/">{{ $t('footer.home') }}</a>
            </li>
          </ul>
        </div>
        <!-- 
					Keeping plain card as whitespace
        -->
        <div class="card"></div>
        <div class="card">
          <h2 class="footer__title">{{ $t('footer.socialMedia') }}</h2>
          <div class="social-media">
            <a href="https://twitter.com/LuminuNET" target="_blank" rel="noopener noreferrer">
              <svg
                class="social-media__icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 400 400"
              >
                <g id="Logo__x2014__FIXED">
                  <g>
                    <path
                      class="st1"
                      style="fill: white"
                      d="M153.6,301.6c94.3,0,145.9-78.2,145.9-145.9c0-2.2,0-4.4-0.1-6.6c10-7.2,18.7-16.3,25.6-26.6
			c-9.2,4.1-19.1,6.8-29.5,8.1c10.6-6.3,18.7-16.4,22.6-28.4c-9.9,5.9-20.9,10.1-32.6,12.4c-9.4-10-22.7-16.2-37.4-16.2
			c-28.3,0-51.3,23-51.3,51.3c0,4,0.5,7.9,1.3,11.7c-42.6-2.1-80.4-22.6-105.7-53.6c-4.4,7.6-6.9,16.4-6.9,25.8
			c0,17.8,9.1,33.5,22.8,42.7c-8.4-0.3-16.3-2.6-23.2-6.4c0,0.2,0,0.4,0,0.7c0,24.8,17.7,45.6,41.1,50.3c-4.3,1.2-8.8,1.8-13.5,1.8
			c-3.3,0-6.5-0.3-9.6-0.9c6.5,20.4,25.5,35.2,47.9,35.6c-17.6,13.8-39.7,22-63.7,22c-4.1,0-8.2-0.2-12.2-0.7
			C97.7,293.1,124.7,301.6,153.6,301.6"
                    />
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://discordapp.com/invite/va4nPtV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                class="social-media__icon"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 245 240"
              >
                <path
                  style="fill:white;"
                  class="st0"
                  d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
                />
                <path
                  class="st0"
                  d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
                />
              </svg>
            </a>
            <a href="https://luminu.net/misc/contact/" target="_blank" rel="noopener noreferrer">
              <svg
                class="social-media__icon"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="envelope"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="aside-content">
      <div class="container grid">
        <div class="card">
          <p class="card__text">{{ $t('footer.softwareBy') }} Luminu &copy; 2019</p>
        </div>
        <div class="card">
          <div @click="toggleLocale" class="language-select wrapper">
            <p class="language-select__current-language">{{ currentLocale }}</p>
            <svg
              class="language-select__caret"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="exchange-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: white;

  .main-content {
    background-color: #1e1e1e;
    padding: 25px 0px 10px 0px;

    .grid {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .card {
        flex: 25%;

        .footer__title {
          font-size: 16px;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .footer__img {
          margin-bottom: 20px;
        }

        ul {
          li {
            list-style: none;

            a {
              text-decoration: none;
              color: white;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }

        .social-media {
          a {
            .social-media__icon {
              position: relative;
              cursor: pointer;
              width: 32px;
              height: 32px;
              border-radius: 2px;
              background-color: transparent;

              transition: all 0.25s;

              margin-right: 5px;

              * {
                fill: gray !important;
                transition: all 0.25s;
              }

              &:hover {
                background-color: #00acee;

                * {
                  fill: white !important;
                }
              }
            }

            &:nth-child(2) {
              .social-media__icon {
                padding: 4px;

                &:hover {
                  background-color: #7289da;
                }
              }
            }

            &:nth-child(3) {
              .social-media__icon {
                padding: 5px;

                &:hover {
                  background-color: rgb(56, 89, 206);
                }
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 1080px) {
      .grid {
        .card {
          flex: 50%;
          margin-top: 25px;
        }
      }
    }
  }

  .aside-content {
    background-color: #181818;
    padding: 25px 0px;

    .grid {
      display: flex;
      justify-content: space-between;

      .card {
        .language-select {
          &.wrapper {
            user-select: none;
            display: flex;
            cursor: pointer;
            padding: 4px 0px;
            border-radius: 2px;
            border: 1px solid #7c7c7c;
            box-shadow: 0px 3px rgba($color: #000000, $alpha: 1);
            transition: border 0.15s;

            .language-select__current-language {
              font-size: 16px;
              padding: 0px 8px;
              border-right: 1px solid #7c7c7c;
            }

            .language-select__caret {
              width: 16px;
              height: 16px;
              margin: 0px 8px;
              margin-top: 3px;
            }

            &:hover {
              border: 1px solid #ccc;
            }
          }
        }
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import {
  getLocale,
  toggleLocale as toggleLocaleStorage
} from "@luminu/core/common/locale.service";

export default Vue.extend({
  name: "LmFooter",
  data: () => ({
    currentLocale:
      getLocale() === null
        ? "Deutsch"
        : getLocale() === "de"
        ? "Deutsch"
        : "English"
  }),
  methods: {
    toggleLocale() {
      toggleLocaleStorage();
      this.$i18n.locale = getLocale() + "";
      this.currentLocale = getLocale() === "de" ? "Deutsch" : "English";
    }
  },
  props: ["partners"]
});
</script>

