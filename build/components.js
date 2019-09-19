const path = require('path')
const fs = require('fs')
const resolve = function(RelativePath) {
  return path.resolve(__dirname, RelativePath)
}
const excludes = [
  'index.js',
  'index.less',
  'style',
  'mixins',
  'utils',
  'directives'
]
const componentNames = fs
  .readdirSync(resolve('../components'))
  .filter(dirName => !excludes.includes(dirName))
const components = {}
componentNames.forEach(
  name =>
    (components[name] = path.join(
      __dirname,
      './../ceshi/' + name + '/index.js'
    ))
)
module.exports = components
