import ScrollView from './component/index'
ScrollView.install = function (Vue) {
  Vue.component(ScrollView.name, ScrollView)
}
export default ScrollView
