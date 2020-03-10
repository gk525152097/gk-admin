# 基于vue的前端框架培训基础
近期要做一个自己搭建前端框架培训 在写ppt的时候 重新学习了vue相关的基础
发现自己在实际项目中 并没有特别注意到vue框架提供的能力 但是对于基本的后台管理应用来说 基础能力足够应付了
下面记录 自己的回顾笔记
### 一、为什么使用前后端分离框架
1、解放开发人员，专职自己负责的部分，
前端负责前端部分（html、css、js、业务逻辑、脚本、jq、各种数据可视化、vue.js、react.js、angular.js、node.js、webpack、sass\less），
后端负责后端部分（java基础，设计模式，jvm原理，spring+springmvc原理及源码，linux，mysql事务隔离与锁机制，mongodb，http/tcp，多线程，分布式架构，弹性计算架构，微服务架构，java性能优化）,
提高工作效率。术业有专攻。\
2、项目优化，
前端框架能够实现项目资源的按需加载，无需在首页加载的时候请求所有资源，提高用户体验质量；
服务器不需要解析前端页面，提高http请求效率。 \
3、快速定位问题，
前端：页面逻辑、跳转错误、脚本错误、页面样式问题、数据显示问题；
后端：http错误、接口错误、服务器问题 \
4、代码解耦：前端代码和后端代码分开，提高代码易读性和可维护性。也使得后台接口支持多平台应用（app、小程序、公众号、pc）。

### 二、vue.js
1、我们前后端架构的组成，
后端采用成熟的springBoot框架，
前端使用了vue.js作为基础，包含了vue.js、vue-router、vuex、axios、antd-vue组件库。 \
2、vue.js 之 HelloWorld
```vue
<template>
  <div class="text">{{data}}</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      data: 'hello world'
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  font-size: 40px;
  font-weight: bold;
}
</style>
```
编译之后

```haml
hello world
```
3、代码结构
##### style 没什么好说的 基本的样式代码 唯一的不同是是用来sass的预编译处理器 可以使得样式可以嵌套 \
  lass="scss" 表示使用sass预编译支持 嵌套 \
  scoped 表示这些样式只在这个.vue文件里生效
```vue
<template>
  <div class="text">
    <div class="icon"></div>
    {{data}}
  </div>
</template>
<style lang="scss" scoped>
.text {
  font-size: 40px;
  font-weight: bold;
  .icon {
    font-size: 16px;
  }
}
</style>
```
##### template 和html类似 但是拥有相应的模版语法 遵循一套vue的基本规则 \
  插值
```vue
// 文本 {{}} 将vue实例data的text显示在页面里
<template>
  <div class="text">{{text}}</div>
</template>

// 原始html rawHtml: <sapn style="color: red">this should be red</sapn>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>

// 特性
<div v-bind:id="1"></div>
<div v-bind:disabled="true"></div>

// javascript表达式
<div>{{ data1 + data2 }}</div>
<div>{{ true ? 'true' : 'false' }}</div>

```
指令 对标签进行属性或事件绑定

```vue
// v-bind: 属性绑定
<div v-bind:id="1"></div>
<div v-bind:url="http..."></div>
<div v-bind:disabled="true"></div>
// v-on: 事件帮点
<div v-on:click="handleClick"></div>
<div v-on:submit="handleSubmit"></div>
// 缩写
<div v-bind:id="1"></div> === <div :id="1"></div> // v-bind: 用 : 代替
<div v-on:click="handleClick"></div> === <div @click="handleClick"></div>  v-on: 用 @ 代替

// class的绑定
<div class="style1"></div> // 基本方法
<div :class="{ domActive ? 'active' : '' }"></div> // 动态绑定
```
条件渲染 v-if 和 显示渲染 v-show 两者的区别是 v-show是永远存在但显示与否 v-if是存在与否并显示
```vue
<div v-if="show"></div>
<div v-else-if="show2"></div>
<div v-else></div>

<div v-show="show3"></div>
```
循环渲染 v-for
```vue
<div v-for="(item, index) in list"></div> // item：代表项 index：代表下标 list代表遍历但数组
```

##### script 组件方法
基本结构
```vue
import { message } from 'ant-design-vue' // 引用外部资源
export default {
  name: 'vuename', // 名称
  props: { }, // 父组件传入的数据
  components: { }, // 自身使用的组件
  data () { // 数据
    return { data: 1 }
  },
  filters: { }, // 过滤器 {{ data | filter }} 主要为了处理 javascript表达式不能解决的数据问题
  computed: {  // 计算属性 通过方法形式返回数据
    computed1 () { return data }
  },
  methods: { }, // 方法
  watch: { // 侦听数据的变化 并 作出一系列处理
    data () { // do something } // 侦听data数据的变化
  }
}
```

### 三、vue-router
1、我们的前端项目是单页面应用 \
2、脱离了后台Controller的页面返回 \
3、需要前端项目自己拥有页面的管理 即vue-router \
配置文件
```vue
export const constantRoutes = [
  {
    path: '/user',  // 显示路径
    component: userLayout, // 内容
    hidden: true, // 控制字段
    children: [ // 子路有
      { path: 'login', name: 'login', component: () => import('@/view/login/index') }
    ]
  }
]

export default new VueRouter({ // 路由实体
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
```
嵌套路由 使用router-view组件作为页面出口 即这个路由的组件在 对应的router-view里显示
```vue
<div id="app">
  <router-view></router-view>
</div>

export const constantRoutes = [
  {
    path: '/user',  // 显示路径
    component: userLayout, // 内容
    hidden: true, // 控制字段
    children: [ // 子路有
      { path: 'login', name: 'login', component: () => import('@/view/login/index') },
      { path: 'login2', name: 'login2', component: () => import('@/view/login/index2') }
    ]
  }
]
```
跳转方式
```vue
<router-link to='two'><button>点我到第二个页面</button></router-link> // 标签式跳转
 methods:{ // 函数式跳转
   hreftwo(){
     this.$router.push({path:'/two'})
   }
 }

```
路由守卫
```vue

import router from './router'

router.beforeEach((to, from, next) => { // 跳转前拦截
  // do something
  next('/user/login')
})

router.afterEach(() => { // 跳转完成后拦截
  // do something
  console.log('跳转完成')
})

router.onError(error => { // 跳转错误拦截
  console.log(error)
  router.push({ path: '/error/404' })
})

```
### 四、vuex
vuex:状态管理模块
1、解决脱离服务器后 页面跳转传参问题
2、挂载在项目底层 供所有组件使用
3、基本结构
```javascript
import {
  handlePageData // api
} from '@/api/api'

const module = {
  namespaced: true, // 使用命名空间

  state: { // 数据 保持数据
    loading: false,
  },

  mutations: { // 转变 通过mutations对state的数据进行修改 唯一方式
    HANDLE_LOADING: (state) => {
      state.loading = !state.loading
    },
  },

  actions: { // 方式 提供组件使用的方法 异步请求数据后调用mutations更改数据 数据修改后作用于页面
    handlePageData ({ commit }, data) {
        handlePageData(data)
        .then(res => {
            console.log(res)
            commit('HANDLE_LOADING', res)
        })
        .catch(err => console.log(err))
        .finally(fin => console.log(fin))
    }
  }
}

export default module
```
### 五、项目结构
我的前端使用了vue.js、vue-router、vuex、axios、ant-design-vue（组件库）、moment（时间）、nprogress（加载）、qs（转换）等插件
使用vue-cli3脚手架搭建，并配置了docker以方便自动化部署
项目结构基本为：
```
 |
 |-build // vue.js打包相关文件
 |-config // vuex.js基础配置
 |-docker // docker文件
 |-src // 项目文件
    |-api // api统管请求
    |-assets // 静态资源
    |-components // 组件
    |-router // 路由
    |-store // vuex实体
    |-utils // 基本方法
        |-creactRouter.js // 动态创建路由的关键文件
        |-request.js // 请求封装 使用 axios 和 promise 实现优美异步请求
        |-transform // 列表转树
        |-urlConfig.js // 接口基础地址配置
    |-view  // 页面
    app.vue // vue.js入口
    defualtSetting.js // 项目配置
    mian.js // 项目main
    permission.js // 路由拦截器 拦截路由跳转
 |-static
 ...vue相关文件
```
项目逻辑 \
1、使用vue、vue-router、vuex、ant-design-vue搭建基础框架 \
2、使用axios封装了接口请求 \
3、编写permisson路由拦截对页面跳转进行管控 \
4、通过creactRouter进行路由对动态创建 以实现不同角色进入后渲染不同页面 \
5、通过前后台关联设置角色表、路由表、功能点表、权限表，以关联出 角色对应的页面、功能，实现后台管理权限功能 \
6、用户登陆后获取用户信息，拿到路由信息后动态创建菜单，通过权限点的有无渲染功能点，但是实际点接口拦截做在网关里 \
7、之后就是业务逻辑开发 \
8、通过全局store来获取页面数据并渲染、分享
