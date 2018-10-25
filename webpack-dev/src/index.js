import './assets/style/index.less'
import './assets/style/color.css'
import Vue from 'vue'
import getData from './util'

var app = new Vue({
  el:'#app',
  data:{
    message:'hollo Vue'
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.message = data;
    }
  },
  created() {
    this.fetchData();
  }
})
if (module.hot) {
    module.hot.accept()
  }