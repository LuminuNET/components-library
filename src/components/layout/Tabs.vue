<template>
  <div class="tabs">
    <div class="tabs__header">
      <div
        @click="changeActiveTab(index)"
        class="tabs__item"
        v-for="(tab, index) in computedTabs"
        :key="index"
        :class="{active: tab.active}"
      >{{ $t('tabs.' + tab.name) }}</div>
    </div>
    <div class="tabs__content" :class="{vanishing: vanishes, entrance: enters}">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~@luminu/core/scss/variables';

.tabs {
  .tabs__header {
    display: flex;
    padding-bottom: 5px;
    margin-bottom: 15px;
    margin-left: -10px;
    user-select: none;

    @media screen and (max-width: $breakpoint) {
      margin-left: 0px;
      width: 100%;
      justify-content: space-between;

      .tabs__item {
        width: 100%;
        text-align: center;
      }
    }

    .tabs__item {
      font-size: 18px;
      text-transform: uppercase;

      padding: 2px 15px;
      cursor: pointer;

      transition: opacity 0.1s;

      &:not(.active) {
        opacity: 0.6;
      }

      &:hover {
        opacity: 0.8;
      }

      &.active {
        color: white;
        background: rgba($color: $lmColor2, $alpha: 1);
        border-bottom: 3px solid $lmColor3;
      }
    }
  }

  .tabs__content {
    transition: transform 0.15s ease-in, opacity 0.15s ease-out;
    transform: translate(0px, 0px);

    &.vanishing {
      position: relative;
      transform: translateX(-25px);
      opacity: 0;
    }

    &.entrance {
      opacity: 0;
      transform: translateY(10px);

      animation: enters 0.15s forwards;
    }

    @keyframes enters {
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }
}
</style>
  
<script lang="ts">
import Vue from 'vue';
import transmitter from '../../transmitter';

export default Vue.extend({
  name: 'LmTabs',
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    active: {
      type: Number,
      default: 0,
    },
  },
  data() {
    const internalActive = this.active;

    return {
      internalActive,
      vanishes: false,
      enters: false,
      vanishTimeout: {} as number,
      entranceTimeout: {} as number,
    };
  },
  computed: {
    computedTabs() {
      return (this.tabs as string[]).map((el, index) => ({
        name: el,
        // @ts-ignore
        active: index === this.internalActive,
      }));
    },
  },
  methods: {
    changeActiveTab(index: number) {
      if (this.internalActive === index) return;

      clearTimeout(this.vanishTimeout);
      clearTimeout(this.entranceTimeout);

      this.internalActive = index;
      this.vanishes = true;
      this.enters = false;

      this.vanishTimeout = setTimeout(() => {
        this.vanishes = false;
        this.enters = true;
        transmitter.$emit('LM_CHANGED_TAB', this.internalActive);

        this.entranceTimeout = setTimeout(() => {
          this.enters = false;
        }, 150);
      }, 350);
    },
  },
});
</script>
