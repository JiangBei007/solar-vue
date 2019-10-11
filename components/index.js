import Icon from './icon/index'
import Loading from './loading/index'
import Button from './button/index'
//exports.icon = Icon
const components = [Icon, Loading, Button]
const install = function install(Vue) {
  components.forEach(function(Component) {
    Vue.component(Component.name, Component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { Icon, Loading, Button }

export default {
  install
}
