import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/user',
    component: () => import('@/views/layout/userLayout'),
    hidden: true,
    children: [
      { path: 'login', name: 'login', component: () => import('@/views/login/index') }
      // { path: 'register', name: 'register', component: () => import('@/views/register/index') }
    ]
  },
  {
    path: '/error',
    component: () => import('@/views/layout/pageLayout'),
    hidden: true,
    children: [
      { path: '404', name: '404', component: () => import('@/views/error/index'), hidden: true },
      { path: '500', name: '500', component: () => import('@/views/error/index'), hidden: true },
      { path: '403', name: '403', component: () => import('@/views/error/index'), hidden: true }
    ]
  },
  {
    path: '/developing',
    component: () => import('@/views/layout/baseLayout'),
    hidden: true,
    children: [
      {path: '/developing', name: '开发中', component: () => import('@/views/developing'), hidden: true}
    ]
  },
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/layout/baseLayout'),
    redirect: '/',
    icon: 'el-icon-s-home',
    children: [
      { path: '/', name: '首页', component: () => import('@/views/home'), hidden: true, icon: 'el-icon-s-home' }
    ]
  }
]

export default new Router({
  mode: 'history',
  // mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
