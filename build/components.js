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

/**
 * gaojingwei 2019/11/16
 * 处理组件按需加载存在的重复引用问题
 */
const pname = 'solar-vue'
const externalsExcludes = ['index.js', 'index.less', 'style']
const externalsExcludesDir = ['directives', 'utils']
const externalsComponents = {}
const externalsComponentNames = fs
  .readdirSync(resolve(`../${fileFolder}`))
  .filter(dirName => !externalsExcludes.includes(dirName))
externalsComponentNames.forEach(
  name => (externalsComponents[`${pname}/${name}`] = `./../${name}`)
)

for (let i = 0; i < externalsExcludesDir.length; i++) {
  const filesName = externalsExcludesDir[i]
  fs.readdirSync(resolve(`../${fileFolder}/${filesName}`)).forEach(
    name =>
      (externalsComponents[
        `${pname}/${filesName}/${name}`
      ] = `./../${filesName}/${name}`)
  )
}

module.exports = {
  components,
  externalsComponents
}
