import './assets/style/index.less'
import './assets/style/color.css'
import Vue from 'vue'
import App from './App.vue'
import getData from './util'
import Axios from 'axios'

//修改原型链，全局使用axios,这样之后可在每个组件的methods中调用$axios命令完成数据请求
Vue.prototype.$axios=Axios 
// var app = new Vue({
//   el:'#app',
//   data:{
//     message:'hollo Vue'
//   },
//   methods: {
//     async fetchData() {
//       const data = await getData();
//       this.message = data;
//     }
//   },
//   created() {
//     this.fetchData();
//   }
// })
const vm = new Vue({
  el: '#app',
  // 通过 render 方法，渲染App组件
  render: c => c(App)
})
if (module.hot) {
    module.hot.accept()
  }