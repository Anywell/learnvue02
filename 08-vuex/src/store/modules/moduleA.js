export default {
  state: {
    name: 'tom'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return 'hello, ' + state.name
    },
    fullName2(state, getters) {
      return getters.fullName + '22222'
    },
    fullName3(state, getters, routeState) {
      return getters.fullName2 + routeState.counter
    }
  },
  actions: {
    aUpdateName(context){
      setTimeout(() =>{
        context.commit('updateName', 'lisi')
      })
    }
  }
}
