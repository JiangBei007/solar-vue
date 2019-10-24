export function getNetworkType() {
  const ua = navigator.userAgent
  let networkStr = ua.match(/NetType\/\w+/)
    ? ua.match(/NetType\/\w+/)[0]
    : 'NetType/other'
  networkStr = networkStr.toLowerCase().replace('nettype/', '')
  switch (networkStr) {
    case 'wifi':
      return 'wifi'
    case '4g':
      return '4g'
    case '3g':
      return '3g'
    case '3gnet':
      return '3g'
    case '2g':
      return '2g'
    default:
      return 'other'
  }
  return networkStr
}

export function isMobile() {
  const ua = navigator.userAgent.toLowerCase()
  return /mobile/gi.test(ua)
}
