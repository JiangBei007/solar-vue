import { isServer } from './index.js'

export function on(target, event, handler, passive = false) {
  if (!isServer) {
    target.addEventListener(event, handler, passive)
  }
}

export function off(target, event, handler) {
  if (!isServer) {
    target.removeEventListener(event, handler)
  }
}

export function stopPropagation(event) {
  event.stopPropagation()
}

export function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault()
  }

  if (isStopPropagation) {
    stopPropagation(event)
  }
}
