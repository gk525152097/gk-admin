import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter.js'
import user from './modules/user'
import global from './modules/global'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    global
  },
  getters
})

export default store
