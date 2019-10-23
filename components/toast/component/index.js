import Vue from 'vue'
import ToastComponent from './toast'
import { mount } from './../../utils/vfunction'
import { removeTypeDuplicates } from '@babel/types'
function parseOptions(message) {
  return typeof message === 'object' ? message : { message }
}

function defaultOptions() {
  return {
    value: false,
    message: '',
    duration: 3000,
    background: undefined,
    type: 'icon',
    icon: undefined,
    loadingType: undefined
  }
}
let instance
let timer
function SvToast(options) {
  if (!instance) {
    instance = mount(ToastComponent, {})
  }

  options = {
    ...SvToast.currentOptions,
    ...parseOptions(options)
  }

  Object.assign(instance, options)
  clearTimeout(timer)

  if (options.duration && options.duration > 0) {
    timer = setTimeout(SvToast.clear, options.duration)
  }
  instance.value = true
  return instance
}
SvToast.clear = () => {
  if (instance) {
    instance.value = false
  }
}

SvToast.currentOptions = defaultOptions()

Vue.prototype.$toast = SvToast

ToastComponent.install = function(Vue) {
  Vue.component(ToastComponent.name, ToastComponent)
}

export default ToastComponent
