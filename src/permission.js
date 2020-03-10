/**
 * vue-router守卫
 * 主要在路由跳转的时候进行处理
 */

import router from './router'
import store from './store'
import defaultSettings from './defaultSettings'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import transformTree from './utils/transformTree'
import createRoutes from './utils/createRoutes'
import { constantRoutes } from '@/router'

NProgress.configure({ showSpinner: false }) // NProgress configuration

const whiteList = [
  '/user/login',
  '/user/register',
  '/error'
] // 不重定向白名单
/**
 * 跳转前
 * @param to 即将要进入的目标 路由对象
 * @param from 当前导航正要离开的路由
 * @param next()
 */
router.beforeEach((to, from, next) => {
  // 加载条
  NProgress.start()
  // 切换浏览窗口名称
  if (to.name) {
    document.title = `${defaultSettings.systemName} ${to.name}`
  }

  console.log(store)

  if (whiteList.indexOf(to.path) !== -1) {
    // 路由白名单开放 若跳转目标为白名单 则直接跳转
    console.log('whiteList')
    next()
  } else if (!localStorage.getItem('systemTime') || localStorage.getItem('systemTime') < ((new Date()).valueOf() - 30 * 60 * 1000)) {
    console.log('systemTime', localStorage.getItem('systemTime'))
    // 若没有登陆过 则systemTime为null -》跳转登陆页
    // 若登陆超时 则systemTime小于当前时间30*60*1000 -》跳转登陆页面
    next({path: '/user/login'})
    // 清除 localStorage
    localStorage.clear()
  } else if (!Object.keys(store.state.user.treeMenu).length) {
    // 系统时间存在 则使用过系统
    // 但是页面刷新后 用户数据不会保存 则需要重新请求
    // 登陆时将用户信息存储在本地 则需要重新填写值vuex中
    store.dispatch('user/handleInfoUser', JSON.parse(localStorage.getItem('userInfo')))
      .then(res => {
        // 请求菜单
        return store.dispatch('user/handleMenu')
      })
      .then(res => {
        // 创建菜单
        // list -> tree
        let tree = transformTree(res)
        // 存储树信息 给菜单用
        store.dispatch('user/handleInfoMenu', constantRoutes.concat(tree))
        // 添加实际路由
        router.addRoutes(createRoutes(tree))
      })
    // 路由信息在刷新后清空 则重新请求路由数据并创建
    localStorage.setItem('systemTime', (new Date()).valueOf())
    next()
  } else {
    localStorage.setItem('systemTime', (new Date()).valueOf())
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

router.onError(error => {
  console.log(error)
  router.push({ path: '/error?404' })
})
