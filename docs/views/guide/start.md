---
title: '快速上手'
---

# 快速上手

**按需引入**

方式一

```javascript
# 安装插件
npm i babel-plugin-import -D
// 在.babelrc 中添加配置
{
  "plugins": [
    ["import", {
      "libraryName": "solar-vue",
      "libraryDirectory": "lib",
      "style": true
    }]
  ]
}

// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'solar-vue',
      libraryDirectory: 'lib',
      style: true
    }, 'solar-vue']
  ]
};

//**.vue
import { Input } from 'solar-vue';


```

方式二(不使用插件)

```javascript
import Input from 'solar-vue/lib/input'
import 'solar-vue/lib/button/style'
```

<ClientOnly>
::: warning
注意：以上两种方式，都可以只加载用到的组件，选择其中一种方式即可。。
:::
</ClientOnly>

**引入所有组件**

```javascript
// main.js
import Vue from 'vue'
import SolarVue from 'solar-vue'
import 'solar-vue/lib/index.css'
import App from './App.vue'

Vue.use(SolarVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

<ClientOnly>
::: warning
注意：1，一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。
2，配置 babel-plugin-import 插件后，将不允许以这种方式导入组件。
:::
</ClientOnly>
