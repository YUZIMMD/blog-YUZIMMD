import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import { iHttp } from "./util/request";
import 'element-ui/lib/theme-chalk/index.css';
// import VueQuillEditor from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './common/css/index.less'
Vue.prototype.$http = iHttp;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(mavonEditor)
// Vue.use(VueQuillEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
