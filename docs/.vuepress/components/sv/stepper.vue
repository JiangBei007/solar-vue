<template>
  <div>
    <layout-card>
      <div>
        <layout-column title="代码演示" url="form" tips="查看源代码" @handle="show = true"></layout-column>
      </div>
    </layout-card>
    <div class="file-blank"></div>
    <layout-card>
      <div class="site-introduce">
        <div class="site-introduce-title">介绍</div>
        <div class="site-introduce-text">
          <p>当您在输入的过程中如果值不符合规则，我们默认将他重置为初始符合规则的值</p>
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
      codeshow: false,
      show: false,
      type: '',
      message: '',
      code: `,
<template>
  <div>
    <div class="demo-title">基本用法</div>
    <div class="demo-container">
      <sv-stepper v-model="value1" :min="min" :max="max"></sv-stepper>
    </div>
    <div class="demo-title">固定最小值</div>
    <div class="demo-container">
      <sv-stepper v-model="value2" :min="min"></sv-stepper>
    </div>
    <div class="demo-title">固定最大值</div>
    <div class="demo-container">
      <sv-stepper v-model="value3" :max="max"></sv-stepper>
    </div>
    <div class="demo-title">递进值为小数 最大值为5</div>
    <div class="demo-container">
      <sv-stepper v-model="value4" :min="min" :step="step" :max="5"></sv-stepper>
    </div>
    <div class="demo-title">只读</div>
    <div class="demo-container">
      <sv-stepper v-model="value5" readonly></sv-stepper>
    </div>
    <div class="demo-title">禁用</div>
    <div class="demo-container">
      <sv-stepper v-model="value6" :min="min" disabled></sv-stepper>
    </div>
  </div>
</template>

export default {
  data() {
    return {
      value1: 2,
      value2: -1,
      value3: 10,
      value4: 0,
      value5: 0,
      value6: 0,
      min: -1,
      max: 10,
      step: 1.2
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
