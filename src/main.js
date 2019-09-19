import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueHighlightJS from 'vue-highlightjs'
import SolarVue from './../components/index.js'
import './../components/index.less'
Vue.use(VueHighlightJS)
Vue.use(SolarVue)
Vue.config.productionTip = false
// const context = require.context(
//   './../components/',
//   true,
//   /^((?!App\.vue).)+\.vue$/
// )
// try {
//   context.keys().forEach(path => {
//     let res = context(path)
//     Vue.component(res.default.name, res.default)
//   })
// } catch (e) {
//   console.log(e)
// }

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
