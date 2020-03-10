
const global = {
  namespaced: true,

  state: {
    isCollapse: false // 控制菜单缩放
  },

  mutations: {
    HANDLE_IS_COLLAPSE: (state, data) => {
      state.isCollapse = data
    }
  },

  actions: {
    /**
     * 控制菜单缩放
     * @param commit
     * @param state
     * @param data
     */
    handleMenuCollapse ({ commit, state }, data) {
      commit('HANDLE_IS_COLLAPSE', !state.isCollapse)
    }
  }
}

export default global
