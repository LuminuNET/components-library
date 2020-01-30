<template>
  <div class="seperator" :style="{ marginTop: mtop + 'px', marginBottom: mbottom + 'px' }"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LmSeperator",
  props: {
    mtop: {
      type: Number,
      default: 5
    },
    mbottom: {
      type: Number,
      default: 5
    }
  }
});
</script>

<style lang="scss" scoped>
.seperator {
  position: relative;
  width: calc(100% + 20px);
  height: 1px;

  background-color: #bbb;
  margin-left: -10px;
  margin-bottom: 5px;
}
</style>
