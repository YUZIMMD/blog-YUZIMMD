import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import { iHttp } from "./util/request";
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$http = iHttp;
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
