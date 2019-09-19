import Vue from 'vue'
import Vuex from 'vuex'
import Init from "./modules/init.js"
import getters from "./getter/index.js"
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
	  Init,
  },
  getters,
})
