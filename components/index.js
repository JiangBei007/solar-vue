import Icon from './icon/index.js'
//exports.icon = Icon
const components = [Icon]
const install = function install(Vue) {
  components.forEach(function(Component) {
    Vue.component(Component.name, Component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
