const fs = require('fs-extra')
const glob = require('fast-glob')
const path = require('path')

const libDir = path.join(__dirname, '../lib')
const srcDir = path.join(__dirname, '../ceshi')
const isDir = dir => fs.lstatSync(dir).isDirectory()
const isFile = /\.(css|scss|sass|js)$/
fs.emptyDirSync(libDir)
fs.copySync(srcDir, libDir)
const files = fs.readdirSync(libDir)
const rm = async function() {
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const dir = libDir + '/' + file + '/component'
    if (!isFile.test(file)) {
      await fs.emptyDirSync(dir)
      await fs.rmdirSync(dir)
    }
  }
}
rm()
