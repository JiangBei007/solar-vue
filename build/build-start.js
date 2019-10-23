/**
 * gaojingwei 2019/09
 */

const fs = require('fs-extra')
const glob = require('fast-glob')
const path = require('path')

const libDir = path.join(__dirname, '../lib')
const srcDir = path.join(__dirname, '../components')
const isDir = dir => fs.lstatSync(dir).isDirectory()
const isFile = /\.(css|scss|sass|less|js|jsx|ts|tsx)$/

const whiteList = ['directives', 'style', 'utils']

fs.emptyDirSync(libDir)
fs.copySync(srcDir, libDir)
const files = fs.readdirSync(libDir)
const rm = async function() {
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const dir = libDir + '/' + file + '/component'
    let testDir
    if (!whiteList.includes(file)) {
      testDir = libDir + '/' + file + '/test'
      if (!isFile.test(file)) {
        del(testDir)
      }
    }
    if (!isFile.test(file)) {
      await fs.emptyDirSync(dir)
      await fs.rmdirSync(dir)
    }
  }
}
rm()

function del(p) {
  const arr = fs.readdirSync(p)
  for (let i in arr) {
    const stats = fs.statSync(p + '/' + arr[i])
    if (stats.isFile()) {
      fs.unlinkSync(p + '/' + arr[i])
    } else {
      del(p + '/' + arr[i])
    }
  }
  fs.rmdirSync(p)
}
