/**
 * gaojingwei 2019/09
 */
const fs = require('fs-extra')
const glob = require('fast-glob')
const path = require('path')
//const sass = require('sass')
const less = require('less')
const csso = require('csso')
const postcss = require('postcss')
const postcssrc = require('postcss-load-config')
const resolve = function(name) {
  return path.resolve(__dirname, name)
}
// async function compileSass(sassCodes, paths) {
//   const outputs = await Promise.all(
//     paths.map(filePath =>
//       sass.renderSync({
//         file: filePath
//       })
//     )
//   )
//   console.log(outputs.length)
//   return outputs.map(result => result.css)
// }
async function compileLess(lessCodes, paths) {
  const outputs = await Promise.all(
    lessCodes.map((source, index) =>
      less.render(source, {
        paths: [resolve('./../ceshi'), resolve('node_modules')],
        filename: paths[index]
      })
    )
  )
  return outputs.map(item => item.css)
}
async function compilePostcss(cssCodes, paths) {
  const postcssConfig = await postcssrc()
  const outputs = await Promise.all(
    cssCodes.map((css, index) =>
      postcss(postcssConfig.plugins).process(css, {
        from: paths[index]
      })
    )
  )

  return outputs.map(item => item.css)
}

async function compileCsso(cssCodes) {
  return cssCodes.map(css => csso.minify(css).css)
}

async function dest(output, paths) {
  await Promise.all(
    output.map((css, index) =>
      fs.writeFile(paths[index].replace('.less', '.css'), css)
    )
  )
}

async function compile() {
  let codes
  const paths = await glob(['./lib/**/*.less'], {
    absolute: true
  })
  codes = await Promise.all(paths.map(path => fs.readFile(path, 'utf-8')))
  codes = await compileLess(codes, paths)
  codes = await compilePostcss(codes, paths)
  codes = await compileCsso(codes)
  await dest(codes, paths)
}

compile()
