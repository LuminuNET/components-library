<template>
  <header>
    <div class="container">
      <div class="branding wrapper">
        <a href="https://luminu.net/" target="_blank" rel="noopener noreferrer">
          <img :src="image" alt="Luminu" class="branding__logo" />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LmHeader',
  props: ['image'],
});
</script>

<style lang="scss" scoped>
@import '~@luminu/core/scss/_variables.scss';

header {
  background-color: $lmColor1;

  .branding {
    display: flex;
    justify-content: center;

    .branding__logo {
      margin-top: 30px;
      margin-bottom: 50px;

      width: 575px;
      height: 255px;
    }
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
}
</style>
