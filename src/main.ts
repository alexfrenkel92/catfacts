import Vue from 'vue';
import App from './App.vue';
import router from './router/routes';
import { store } from "./store/store";
import VueResource from 'vue-resource';
import Vue2Filters from 'vue2-filters';

Vue.use(VueResource);
Vue.use(Vue2Filters);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')