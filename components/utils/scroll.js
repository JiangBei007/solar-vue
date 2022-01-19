function isWindow(val) {
  return val === window
}

const overflowScrollReg = /scroll|auto/i
export function getScroller(el, root = window) {
  let node = el

  while (
    node &&
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === 1 &&
    node !== root
  ) {
    const { overflowY } = window.getComputedStyle(node)
    if (overflowScrollReg.test(overflowY)) {
      return node
    }
    node = node.parentNode
  }

  return root
}

export function getScrollTop(el) {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset

  // iOS scroll bounce cause minus scrollTop
  return Math.max(top, 0)
}

export function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value
  } else {
    el.scrollTo(el.scrollX, value)
  }
}

export function getRootScrollTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  )
}

export function setRootScrollTop(value) {
  setScrollTop(window, value)
  setScrollTop(document.body, value)
}

export function getElementTop(el, scroller) {
  if (isWindow(el)) {
    return 0
  }

  const scrollTop = scroller ? getScrollTop(scroller) : getRootScrollTop()
  return el.getBoundingClientRect().top + scrollTop
}

export function getVisibleHeight(el) {
  if (isWindow(el)) {
    return el.innerHeight
  }
  return el.getBoundingClientRect().height
}

export function getVisibleTop(el) {
  if (isWindow(el)) {
    return 0
  }
  return el.getBoundingClientRect().top
}
