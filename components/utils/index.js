import Vue from 'vue'
export function isObj(x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

export const isServer = Vue.prototype.$isServer

export const inBrowser = typeof window !== 'undefined'

export function noop() {}

export function isDef(val) {
  return val !== undefined && val !== null
}

export function isFunction(val) {
  return typeof val === 'function'
}

export function isObject(val) {
  return val !== null && typeof val === 'object'
}

export function isArray(val) {
  return Array.isArray(val)
}
