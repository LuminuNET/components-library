<template>
  <div class="lm-card" :class="highlight ? 'highlight' : ''">
    <div class="lm-card__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LmCard",
  props: {
    highlight: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
@import "~@luminu/ui-kit/scss/_variables.scss";

.lm-card {
  position: relative;
  border-radius: 4px;
  width: 100%;
  background-color: white;
  box-shadow: 0px 1px 2px rgba($color: #000000, $alpha: 0.1);
  border-top: 5px solid $lmColor3;

  &.highlight {
    border-top: 5px solid $lmColor4;
  }

  .lm-card__content {
    padding: 10px;
  }
}
</style>
