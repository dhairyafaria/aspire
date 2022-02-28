import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { worker } from './mocks/browser';

Vue.config.productionTip = false;

// Starting the worker for fake api
worker.start();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
