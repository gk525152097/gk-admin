// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import Vuex from 'vuex'
import i18n from './i18n/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import message2 from './components/Message/index'

import '@/permission' // permission control

Vue.config.devtools = true
Vue.prototype.$axios = axios
Vue.prototype.$message2 = message2
Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
