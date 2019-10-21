export function isObj(x) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}
