export default {
  state: {
    route: {}
  },
  mutations: {
    changeRoute(state, payload) {
      console.log(payload)
      state.route = payload
    }
  },
  actions: {}
}
