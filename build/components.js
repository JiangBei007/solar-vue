/**
 * gaojingwei 2019/09
 */
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
const fileFolder = 'components'
const componentNames = fs
  .readdirSync(resolve(`../${fileFolder}`))
  .filter(dirName => !excludes.includes(dirName))
const components = {}
componentNames.forEach(
  name =>
    (components[name] = path.join(
      __dirname,
      `./../${fileFolder}/${name}/index.js`
    ))
)
module.exports = components
