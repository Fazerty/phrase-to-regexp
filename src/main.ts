import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import i18n from './plugins/i18n';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
  i18n,
  render: (h: any) => h(App),
}).$mount('#app');
