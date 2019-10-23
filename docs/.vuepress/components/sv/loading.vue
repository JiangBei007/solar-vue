<template>
  <div>
    <layout-card>
      <div>
        <layout-column title="代码演示" tips="查看源代码" @handle="show = true"></layout-column>
      </div>
    </layout-card>
    <div class="file-blank"></div>
    <layout-card>
      <div class="site-introduce">
        <div class="site-introduce-title">介绍</div>
        <div class="site-introduce-text">
          <p>类型为circle时，我们使用的是svg。因此：</p>
          <p>只有当type类型为circle时，color属性才生效。</p>
          <p>size属性您可以定义大小，可带单位，可不带，如果不带单位，默认单位为px</p>
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
  name: 'm-loading',
  data() {
    return {
      show: false,
      code: `
<div class="demo-loading">
    <div class="demo-title">基本用法</div>
    <div class="demo-container">
      <sv-loading :text-size="14"></sv-loading>
      <sv-loading type="spot" :text-size="14"></sv-loading>
    </div>
    <div class="demo-title">带有提示语</div>
    <div class="demo-container">
      <sv-loading :text-size="14">加载中...</sv-loading>
      <sv-loading type="spot" :text-size="14">loading...</sv-loading>
    </div>
    <div class="demo-title">自定义图标大小</div>
    <div class="demo-container">
      <sv-loading size="30px" :text-size="14"></sv-loading>
      <sv-loading :size="50" type="spot" :text-size="14"></sv-loading>
    </div>
    <div class="demo-title">自定义颜色</div>
    <div class="demo-container">
      <sv-loading color="#f00">加载中...</sv-loading>
      <sv-loading type="spot" color="#f00" :text-size="14">loading...</sv-loading>
    </div>
    <div class="demo-title">垂直排列</div>
    <div class="demo-container">
      <sv-loading type="spot" vertical :text-size="14">loading</sv-loading>
    </div>
  </div>
`
        .replace(/^ {8}/gm, '')
        .trim()
    }
  }
}
</script>

<style></style>
