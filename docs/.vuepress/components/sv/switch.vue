<template>
  <div>
    <layout-card>
      <div>
        <layout-column title="代码演示" tips="查看源代码" url="switch" @handle="show = true"></layout-column>
      </div>
    </layout-card>
    <div class="file-blank"></div>
    <layout-card>
      <div class="site-introduce">
        <div class="site-introduce-title">介绍</div>
        <div class="site-introduce-text">
          <p>我们尽可能的为您提供最详细的示例，更加详细的代码请查看源代码</p>
        </div>
      </div>
    </layout-card>
    <layout-code title="搜索" v-model="show">
      <pre v-highlightjs><code class="vue">{{ code }}</code></pre>
    </layout-code>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
Vue.use(VueHighlightJS)

export default {
  data() {
    return {
      show: false,
      code: `
<template>
  <div>
    <div class="demo-title">基本用法</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-switch v-model="value1"></sv-switch>
      </div>
    </div>
    <div class="demo-title">自定义大小</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-switch v-model="value2" size="20px"></sv-switch>
      </div>
    </div>
    <div class="demo-title">自定义颜色</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-switch v-model="value3" activeColor="#551A8B" inactiveColor="#DBC7C7"></sv-switch>
      </div>
    </div>
    <div class="demo-title">自定义值</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-switch v-model="value4" activeValue="a" inactiveValue="b"></sv-switch>
      </div>
      <div class="demo-example-margin">当前值：{{ value4 }}</div>
    </div>
    <div class="demo-title">异步控制</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-switch v-model="value5" :confirm="confirm"></sv-switch>
      </div>
    </div>
    <div class="demo-title">禁用</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-switch v-model="value5" :disabled="true"></sv-switch>
      </div>
    </div>
  </div>
</template>

export default {
  data() {
    return {
      value1: true,
      value2: false,
      value3: true,
      value4: 'b',
      value5: true
    }
  },
  methods: {
    confirm(checked) {
      const str = checked ? '关闭' : '打开'
      const fir = confirm("您将要"+str)
      return fir
    }
  }
}
			`
        .replace(/^ {8}/gm, '')
        .trim()
    }
  }
}
</script>
