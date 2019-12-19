import Vue from 'vue';
import VueRouter from 'vue-router';

import IntegrationTest from '@/tests/IntegrationTest.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: IntegrationTest
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
