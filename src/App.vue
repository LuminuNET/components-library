<template>
  <div id="app">
    <lm-header :image="require('@/assets/style-logo.png')" />
    <lm-sticky-header
      :type="''"
      :hasAvatar="true"
      :userId="4"
      username="Keimeno"
      :links="links"
      :notLoggedInAction="{action: () => $router.push({path: '/login', query: {...$route.query}})}"
      :dropdownItems="[
				{name: 'logout', action: () => $router.push({path: 'logout'})},
				{name: 'okay', action: () => $router.push({path: 'okay'})}
			]"
    />
    <router-view />
    <lm-footer :partners="partners" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LmHeader from '@/components/layout/Header.vue';
import LmStickyHeader from '@/components/layout/StickyHeader.vue';
import LmFooter from '@/components/layout/Footer.vue';
import transmitter from './transmitter';

export default Vue.extend({
  components: {
    LmHeader,
    LmStickyHeader,
    LmFooter,
  },
  data: () => ({
    links: [
      {
        name: 'overview',
        to: '/',
        isExternal: false,
        hasChildren: false,
      },
      {
        name: 'test',
        to: 'https://example.org',
        isExternal: true,
        hasChildren: false,
      },
    ],
    partners: [
      {
        to: 'https://cytooxien.de',
        image: require('@/assets/cytooxien_banner.png'),
      },
    ],
  }),
});
</script>

<style lang="scss">
@import '~@luminu/core/scss/_globals.scss';
</style>
