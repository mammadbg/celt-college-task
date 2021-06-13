import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import moment from 'vue-moment'
import '@/assets/fonts.css';
import '@/assets/mdi.css';
import EventBus from "@/config/eventBus";


Vue.prototype.$eventHub = EventBus;

Vue.config.productionTip = false;
Vue.use(moment);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app');

import '@/styles/main.scss';