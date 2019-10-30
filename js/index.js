function isMobile() {
  const ua = navigator.userAgent.toLowerCase()
  return /mobile/gi.test(ua)
}
function isProduction(str) {
  return str.indexOf('http://localhost') > -1 || str.indexOf('127.0.0.1') > -1
}
function onLineMobile(str) {
  return str.indexOf('mobile') > -1
}
const DividingLine = 'solar-vue'
const [prefix, suffix] = window.location.href.split(DividingLine)
function resize() {
  let href = ''
  if (isMobile()) {
    if (!onLineMobile(suffix)) {
      href = prefix + DividingLine + '/mobile/index.html#/'
      window.location.href = href
    }
  } else {
    if (onLineMobile(suffix)) {
      href = prefix + DividingLine
      window.location.href = href
    }
  }
}
resize()
window.addEventListener('resize', resize)
