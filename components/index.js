/* 
gaojingwei 2019/9
*/
import Icon from './icon/index'
import Loading from './loading/index'
import Button from './button/index'
import Popup from './popup/index'
import Notify from './notify/index'
import Switch from './switch/index'
import Toast from './toast/index'
import Swiper from './swiper/index'
import SwiperItem from './swiper-item/index'
import Tab from './tab/index'
import TabItem from './tab-item/index'
import Write from './write/index'
//exports.icon = Icon
const components = [
  Icon,
  Loading,
  Button,
  Popup,
  Notify,
  Switch,
  Toast,
  Swiper,
  SwiperItem,
  Tab,
  TabItem,
  Write
]
const install = function install(Vue) {
  components.forEach(function(Component) {
    Vue.component(Component.name, Component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Icon,
  Loading,
  Button,
  Popup,
  Notify,
  Switch,
  Toast,
  Swiper,
  SwiperItem,
  Tab,
  TabItem
}

export default {
  install
}
