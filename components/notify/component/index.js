import Vue from 'vue'
import NotifyComponent from './notify'
import { mount } from 'solar-vue/utils/vfunction.js'
function parseOptions(message) {
  return typeof message === 'object' ? message : { message }
}

function defaultOptions() {
  return {
    type: 'danger',
    value: false,
    message: '',
    duration: 3000,
    background: undefined,
    color: undefined,
    icon: undefined
  }
}
let instance
let timer
function Notify(options) {
  if (!instance) {
    instance = mount(NotifyComponent, {})
  }

  options = {
    ...Notify.currentOptions,
    ...parseOptions(options)
  }

  Object.assign(instance, options)
  clearTimeout(timer)

  if (options.duration && options.duration > 0) {
    timer = setTimeout(Notify.clear, options.duration)
  }
  instance.value = true
  return instance
}
Notify.clear = () => {
  if (instance) {
    instance.value = false
  }
}

Notify.currentOptions = defaultOptions()

Vue.prototype.$notify = Notify

export default Notify
