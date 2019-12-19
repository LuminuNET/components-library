import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './translations';

Vue.config.productionTip = false;

const vm = new Vue({
	router,
	i18n,
	render: h => h(App)
}).$mount('#app');

export { vm };
