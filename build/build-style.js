const fs = require('fs-extra')
const glob = require('fast-glob')
const path = require('path')
const sass = require('sass')
const csso = require('csso')
const postcss = require('postcss')
const postcssrc = require('postcss-load-config')

async function compileSass(sassCodes, paths) {
  const outputs = await Promise.all(
    paths.map(filePath =>
      sass.renderSync({
        file: filePath
      })
    )
  )
  console.log(outputs.length)
  return outputs.map(result => result.css)
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
      fs.writeFile(paths[index].replace('.scss', '.css'), css)
    )
  )
}

async function compile() {
  let codes
  const paths = await glob(['./lib/**/*.scss'], {
    absolute: true
  })
  codes = await Promise.all(paths.map(path => fs.readFile(path, 'utf-8')))
  codes = await compileSass(codes, paths)
  codes = await compilePostcss(codes, paths)
  codes = await compileCsso(codes)
  await dest(codes, paths)
}

compile()

//result = csso.minify(result.css).css
// console.log(result)
// fs.writeFile(path.join(__dirname,'./scss.css'), result.css, function(err){
//         if(!err){
//           console.log('成功')
//         }
//       });

// sass.render({
//     file: path.join(__dirname,'./scss.scss'),
//     outFile: path.join(__dirname,'./scss.css'),
//   }, function(error, result) { // node-style callback from v3.0.0 onwards
//     if(!error){
//       fs.writeFile(path.join(__dirname,'./scss.css'), result.css, function(err){
//         if(!err){
//           console.log('成功')
//         }
//       });
//     }
//   });
//
