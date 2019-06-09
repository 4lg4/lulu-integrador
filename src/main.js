import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from 'axios';

import Vuetify from 'vuetify';
Vue.use(Vuetify);
import 'vuetify/dist/vuetify.min.css';

Vue.use((VueInstance)=> {
  VueInstance.prototype.$http = http;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
