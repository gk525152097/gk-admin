import {
  handleLogin,
  handleMenu
} from '@/api/user'

const user = {
  namespaced: true,

  state: {
    infoUser: {},
    treeMenu: []
  },

  mutations: {
    HANDLE_INFO_USER: (state, data) => {
      state.infoUser = data
    },
    HANDLE_TREE_MENU: (state, data) => {
      state.treeMenu = data
    }
  },

  actions: {
    /**
     * 用户登陆
     * @param commit
     * @param data
     * @returns {Promise<unknown>}
     */
    handleLogin ({ commit }, data) {
      return new Promise((resolve, reject) => {
        handleLogin(data)
          .then(res => {
            commit('HANDLE_INFO_USER', res.data)
            resolve(res.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    /**
     * 存储用户信息
     * @param commit
     * @param data
     */
    handleInfoUser ({ commit }, data) {
      commit('HANDLE_INFO_USER', data)
      return Promise.resolve(data)
    },
    /**
     * 请求菜单
     * @param commit
     * @param data
     * @returns {Promise<unknown>}
     */
    handleMenu ({ commit }, data) {
      return new Promise((resolve, reject) => {
        handleMenu(data)
          .then(res => {
            resolve(res.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    /**
     * 存储路由
     * @param commit
     * @param data
     * @returns {Promise<unknown>}
     */
    handleInfoMenu ({ commit }, data) {
      commit('HANDLE_TREE_MENU', data)
      return Promise.resolve(data)
    }
  }
}

export default user
