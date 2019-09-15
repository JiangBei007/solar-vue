import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(VueHighlightJS)

Vue.config.productionTip = false
const context = require.context(
  './components/',
  true,
  /^((?!App\.vue).)+\.vue$/
)
try {
  context.keys().forEach(path => {
    let res = context(path)
    Vue.component(res.default.name, res.default)
  })
} catch (e) {
  console.log(e)
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
