<template>
  <div>
    <layout-card>
      <div>
        <layout-column title="代码演示" tips="查看源代码" @handle="show = true"></layout-column>
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
  name: 'm-icon',
  data() {
    return {
      show: false,
      code: ''
    }
  }
}
</script>

<style></style>