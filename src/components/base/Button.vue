<template>
  <div
    class="btn"
    :class="{ success: type === 'success', error: type === 'error', big: size === 'big', small: size === 'small' }"
  >
    <p class="btn__content">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LmButton",
  props: {
    text: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "normal"
    },
    type: {
      type: String,
      default: "normal"
    }
  }
});
</script>

<style lang="scss" scoped>
@import "~@luminu/core/scss/_variables.scss";

.btn {
  padding: 2px 10px;
  border-radius: 5px;
  user-select: none;
  font-size: 14px;

  cursor: pointer;
  color: white;

  background-color: $lmColor2;
  box-shadow: 0px 2px rgba($color: $lmColor3, $alpha: 1);
  transition: background-color 0.1s ease-out;

  &.big {
    font-size: 16px;
  }

  &.small {
    font-size: 12px;
  }

  &:hover {
    background-color: $lmColor3;
  }

  &.success {
    background-color: $lmSuccess;
    box-shadow: 0px 3px rgba($color: $lmSuccessDarken, $alpha: 1);

    &:hover {
      background-color: $lmSuccessDarken;
    }
  }

  &.error {
    background-color: $lmError;
    box-shadow: 0px 3px rgba($color: $lmErrorDarken, $alpha: 1);

    &:hover {
      background-color: $lmErrorDarken;
    }
  }
}
</style>
