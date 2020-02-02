<template>
  <nav>
    <div class="nav__mobile" :class="{ active: mobileNavActive }">
      <div
        class="nav__mobile__content"
        ref="navMobileContent"
        @focusout="mobileNavActive = false"
        tabindex="0"
      >
        <div class="perma-container">
          <div class="nav__mobile__content--header">
            Menu
            <div class="close" @click="mobileNavActive = false">x</div>
          </div>
          <ul class="nav__mobile__content--body">
            <li
              @click="openLink(link.to); mobileNavActive = false"
              v-for="(link, index) in links"
              :key="index"
            >{{ $t('navigation.' + link.name) }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <ul>
        <li @click="mobileNavActive = true" class="hamburger-menu">
          <svg
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c1.221 0 16-7.163 16-16V76c0-1.221-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 1.221 7.163 16 16 16zm0 160h416c1.221 0 16-7.163 16-16v-40c0-1.221-7.163-16-16-16H16c-1.221 0-16 7.163-16 16v40c0 1.221 7.163 16 16 16zm0 160h416c1.221 0 16-7.163 16-16v-40c0-1.221-7.163-16-16-16H16c-1.221 0-16 7.163-16 16v40c0 1.221 7.163 16 16 16z"
            />
          </svg>
        </li>
        <li v-for="(link, index) in links" :key="index">
          <div class="li-container wrapper" :class="{ active: active === index }">
            <a :href="link.to" @click.prevent="openLink(link)">
              <div class="short-link">{{ $t('navigation.' + link.name) }}</div>
            </a>
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

        <li class="user-auth">
          <a v-if="type === 'noLogin'" target="_blank" href="https://luminu.net">
            <img class="logo" :src="image" width="42" height="42" />
          </a>
          <p
            @click="notLoggedInAction.action"
            v-else-if="type === 'defaultLogin'"
          >{{ $t('navigation.login') }}</p>
          <p
            v-else
            @click="loggedIn.dropdownActive = true"
            @focusout="loggedIn.dropdownActive = false"
            tabindex="0"
            class="dropdown user-auth__dropdown"
          >
            <img
              class="user-auth__avatar"
              :src="hasAvatar ? `https://luminu.net/data/avatars/m/0/${userId}.jpg` : 'https://luminu.net/img/noAvatar.png'"
              alt
            />
            <span class="user-auth__name">{{ username }}</span>
          </p>
          <div
            v-show="dropdownItems.length"
            class="dropdown__content"
            :class="{ active: loggedIn.dropdownActive }"
          >
            <ul>
              <li
                v-for="(item, index) in dropdownItems"
                :key="index"
                @click="item.action"
              >{{ $t('navigation.' + item.name) }}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import LmNotification from '@/components/base/Notification.vue';
import { TLink } from '@luminu/types';

export default Vue.extend({
  name: 'LmStickyHeader',
  components: {
    LmNotification,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
    active: {
      type: Number,
      default: -1,
    },
    type: {
      type: String,
      default: 'defaultLogin',
    },
    username: {
      type: String,
      default: '',
    },
    userId: {
      type: Number,
      default: -1,
    },
    hasAvatar: {
      type: Boolean,
      default: false,
    },
    notLoggedInAction: {
      default: {},
    },
    dropdownItems: {
      type: Array,
      default: [],
    },
    image: {
      required: false,
    },
  },
  data: () => ({
    loggedIn: {
      dropdownActive: false,
    },
    mobileNavActive: false,
  }),
  methods: {
    openLink(link: TLink): void {
      if (link.isExternal) {
        window.open(link.to, '_blank');
      } else {
        this.$router.push({ path: link.to });
      }
    },
  },
  watch: {
    mobileNavActive(newValue: boolean) {
      if (newValue) {
        this.$refs.
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@import '~@luminu/core/scss/_variables.scss';

.perma-container {
  width: 90%;
  margin: 0 auto;
}

nav {
  position: sticky;
  top: 0;
  max-height: 71px;
  height: 71px;
  background-color: $lmColor2;
  box-shadow: 0px 5px $lmColor3;
  z-index: 100;

  .nav__mobile {
    position: fixed;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    opacity: 0;
    background-color: rgba($color: rgb(0, 0, 0), $alpha: 0.3);
    width: 100%;
    height: 100%;

    z-index: -1;
    transition: opacity 0.25s;

    &.active {
      .nav__mobile__content {
        margin-left: 0px;
      }
    }

    .nav__mobile__content {
      width: 280px;
      height: 100%;
      background: $lmColor2;
      position: relative;
      margin-left: -280px;
      box-shadow: 0px 0px 2px rgba($color: #000000, $alpha: 0.5);
      transition: margin-left 0.25s;

      .nav__mobile__content--header,
      .nav__mobile__content--body li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        height: 50px;
      }

      .nav__mobile__content--header {
        font-size: 20px;

        .close {
          font-size: 24px;
          font-weight: 300;
          margin-right: 10px;
          margin-top: -5px;
          transform: scaleX(1.5);

          &:hover,
          &:active {
            opacity: 0.7;
          }
        }
      }

      .nav__mobile__content--body {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;

        li {
          font-size: 16px;
          margin: 0;
          width: 100%;
          border-bottom: 1px solid $lmColor1;

          &:first-child {
            border-top: 1px solid $lmColor1;
          }
        }
      }
    }

    &.active {
      z-index: 1;
      opacity: 1;
    }
  }

  ul {
    display: inline-flex;
    width: 100%;

    li {
      list-style: none;
      margin: 15px 0px;

      &.hamburger-menu {
        display: none;
        cursor: pointer;
      }

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

          a {
            text-decoration: none;
            color: white;

            .short-link {
              font-size: 15px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.25px;
              padding: 10px 10px;
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

      @media screen and (max-width: 1080px) {
        &.hamburger-menu {
          display: unset;
          padding: 4px 8px;

          > svg {
            font-size: 32px;
            height: 32px;
            width: 32px;
            color: white;
          }
        }

        .li-container {
          &.wrapper {
            display: none;
          }
        }
      }

      &.user-auth {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        position: relative;

        .logo {
          background-color: $lmColor1;
          border-radius: 2px;
          padding: 5px;
          transition: background-color 0.2s;

          &:hover {
            background-color: $lmColor3;
          }
        }

        .user-auth__avatar {
          width: 21px;
          height: 21px;
          background-color: #fff;
          border-radius: 50%;
          margin-right: 5px;
          margin-bottom: -5px;
        }

        .user-auth__dropdown {
          outline: none;
        }

        .dropdown__content {
          opacity: 0;
          z-index: -1;
          background: $background;
          position: absolute;
          top: 100%;
          box-shadow: 0 5px 10px 0 rgba($color: #000000, $alpha: 0.35);
          min-width: 150px;
          text-align: right;

          ul {
            display: flex;
            flex-direction: column;

            li {
              margin: 0;
              padding: 0;

              font-size: 13px;
              padding: 10px 20px 10px 17px;

              cursor: pointer;

              &:hover {
                box-shadow: 3px 0px 0px inset
                  rgba($color: rgb(29, 64, 105), $alpha: 0.5);
              }
            }
          }

          &.active {
            z-index: 1000;
            opacity: 1;
          }
        }
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
