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
      component: () => import('./views/Index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
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
          path: 'studyPlan',
          name: 'studyPlan',
          meta:'学习简报 / 学习计划',
          component: () => import('./views/BackIndex/StudyPlan.vue')
        },
        {
          path: 'atlas',
          name: 'atlas',
          meta:'自检图谱 / 自检图谱',
          component: () => import('./views/BackIndex/Atlas.vue')
        },
        {
          path: 'userManage',
          name: 'userManage',
          meta:'博客后台登录用户管理',
          component: () => import('./views/BackIndex/UserManage.vue')
        }
      ]
    }
  ]
})