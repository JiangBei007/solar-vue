const compiler = require('vue-template-compiler')
//const fs = require('fs')
const fs = require('fs-extra')
//const path = require('path')
//const babel = require('@babel/core')
const url = './../ceshi/button/index.vue'
const str = `
<template>
<div>
    {{ name }}
</div>
</template>
<script>
export default {
  name: 'Ceshi',
  data() {
    return {
      name: '小明'
    }
  },
  methods:{
    Init(){
        console.log('ceshi')
    }
  },
  render() {
    return <div>{this.name}</div>
  }
}
</script>
`

//var data = fs.readFileSync(url)
const obj = compiler.compile(JSON.stringify(str))
console.log(obj)
fs.outputFileSync('./build/text.js', obj.render)

//babel.transformFileSync(filePath, babelConfig)
