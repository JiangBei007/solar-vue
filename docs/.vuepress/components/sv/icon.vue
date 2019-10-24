<template>
  <div>
    <layout-card>
      <div>
        <layout-column title="扫码体验" tips="查看源代码" url="icon" @handle="show = true"></layout-column>
      </div>
    </layout-card>
    <div class="file-blank"></div>
    <layout-card>
      <div class="site-introduce">
        <div class="site-introduce-title">介绍</div>
        <div class="site-introduce-text">
          <p>您可以直接引入Icon，name属性见右侧示例</p>
          <p>您也可以借用类名的方式</p>
        </div>
      </div>
    </layout-card>
    <layout-code title="icon" v-model="show">
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
      code: `
<template>
  <div class="demo-icon">
    <div class="demo-icon-container">
      <ul>
        <li v-for="icon in icons" :key="icon">
          <icon :name="icon"></icon>
          <span>{{ icon }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

const route = {
  tags: '基础组件',
  label: 'icon',
  path: 'icon'
}
const icons = [
  'menu',
  'starton',
  'fail',
  'clock',
  'add',
  'friends',
  'halfstar',
  'plus',
  'position',
  'loading',
  'scan',
  'setting',
  'start',
  'fenxiang',
  'aret-left',
  'bell',
  'down',
  'determine',
  'close',
  'edit',
  'hot',
  'back',
  'licke',
  'phone',
  'records',
  'cart',
  'circle',
  'selected',
  'warn',
  'rank',
  'service',
  'sort-down',
  'sort-up',
  'up-load',
  'sort',
  'location',
  'licke-active',
  'calendar',
  'jinggao',
  'chat',
  'shoping',
  'arrow-right',
  'delete',
  'success',
  'question',
  'select',
  'message',
  'minus',
  'chatline',
  'home',
  'checked',
  'load',
  'switch',
  'qr-code',
  'moreread',
  'operation',
  'search',
  'promotion',
  'checkedhalf'
]
export default {
  data() {
    return {
      icons
    }
  }
}   
`
    }
  }
}
</script>

<style></style>