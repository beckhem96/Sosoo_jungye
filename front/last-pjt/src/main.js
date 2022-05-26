import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/index.css';

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')