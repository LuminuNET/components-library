import Vue from 'vue';

// Base components
import LmCard from '@/components/base/Card.vue';

// Layout components
import LmHeader from '@/components/layout/Header.vue';
import LmStickyHeader from '@/components/layout/StickyHeader.vue';

Vue.config.productionTip = false;

const Components = {
	LmCard,

	LmHeader,
	LmStickyHeader
};
