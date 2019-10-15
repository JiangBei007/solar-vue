import Notify from './component/index'
Notify.install = function(Vue) {
  Vue.component(Notify.name, Notify)
}
export default Notify
