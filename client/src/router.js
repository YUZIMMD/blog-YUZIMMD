import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/index.vue')
    },
    {
      path: '/basic',
      name: 'basic',//模版文件
      component: () => import('./views/BackBasic.vue'),
      children:[
        {
          path: 'systemBasic',
          name: 'systemBasic',
          meta:'系统基本情况 / 系统基本情况',
          component: () => import('./views/BackIndex/BackIndex.vue')
        }
      ]
    }
  ]
})
