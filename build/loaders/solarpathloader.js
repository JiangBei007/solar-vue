module.exports = function(content) {
  return content.replace(/componentRootPath/g, './..')
}
