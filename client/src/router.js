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
      component: () => import('./views/Home2.vue')
    },
    {
      path: '/home1',
      name: 'home1',
      component: () => import('./views/Home1.vue')
    },
    {
      path: '/home2',
      name: 'home2',
      component: () => import('./views/Home2.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/FrontEndMap',
      name: 'FrontEndMap',
      component: () => import('./views/FrontEndMap.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('./views/Details.vue')
    },
    {
      path: '/basic',
      name: 'basic',//模版文件
      component: () => import('./views/BackBasic.vue'),
      children:[
        {
          path: 'backIndex',
          name: 'backIndex',
          meta:'系统基本情况 / 系统基本情况',
          component: () => import('./views/BackIndex/BackIndex.vue')
        },
        {
          path: 'font',
          name: 'font',
          meta:'前端',
          component: () => import('./views/BackIndex/Font.vue')
        },
        {
          path: 'backEnd',
          name: 'backEnd',
          meta:'后端',
          component: () => import('./views/BackIndex/BackEnd.vue')
        },
        {
          path: 'progressReport',
          name: 'progressReport',
          meta:'学习简报 / 进度报表',
          component: () => import('./views/BackIndex/ProgressReport.vue')
        },
        {
          path: 'atlas',
          name: 'atlas',
          meta:'前端自检表格 / 前端自检表格',
          component: () => import('./views/BackIndex/Atlas.vue')
        },
        {
          path: 'userManage',
          name: 'userManage',
          meta:'博客后台登录用户管理',
          component: () => import('./views/BackIndex/UserManage.vue')
        },
        {
          path: 'server',
          name: 'server',
          meta:'服务器',
          component: () => import('./views/BackIndex/Server.vue')
        },
        {
          path: 'other',
          name: 'other',
          meta:'其他',
          component: () => import('./views/BackIndex/Other.vue')
        }
      ]
    }
  ]
})
