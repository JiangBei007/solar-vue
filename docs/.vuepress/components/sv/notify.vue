<template>
  <div>
    <layout-card>
      <div>
        <layout-column title="代码演示" tips="查看源代码" @handle="show=true"></layout-column>
      </div>
    </layout-card>
    <div class="file-blank"></div>
    <layout-card>
      <div class="site-introduce">
        <div class="site-introduce-title">介绍</div>
        <div class="site-introduce-text">
          <p>我们默认：当你引入本组件时，我们默认全局挂载$notify方法</p>
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
  name: 'm-toast',
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
      <sv-button @click.native="alert">基本用法</sv-button>
    </div>
    <div class="demo-title">不同类型</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button type="danger" @click.native="alertType('danger')">danger</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button type="primary" @click.native="alertType('success')">success</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button type="warning" @click.native="alertType('warning')">warning</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button type="info" @click.native="alertType('primary')">primary</sv-button>
      </div>
    </div>
    <div class="demo-title">自定义颜色</div>
    <div class="demo-container">
      <sv-button @click.native="coutrom">自定义颜色</sv-button>
    </div>
    <div class="demo-title">带有图标的消息通知</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button type="info" @click.native="alertOfIcon">消息通知</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button type="primary" @click.native="alertOfIconSuccess">消息通知</sv-button>
      </div>
    </div>
  </div>
</template>

export default {
  methods: {
    alert() {
      this.$notify({
        duration: 2000,
        message: 'Welcome to here !'
      })
    },
    alertType(type) {
      this.$notify({
        duration: 2000,
        message: '通知消息',
        type
      })
    },
    coutrom() {
      this.$notify({
        message: '通知消息',
        type: 'success',
        background: '#551A8B',
        color: '#D33682'
      })
    },
    alertOfIcon() {
      this.$notify({
        message: '您有2条未读消息',
        type: 'primary',
        icon: 'message'
      })
    },
    alertOfIconSuccess() {
      this.$notify({
        message: '提交成功',
        type: 'success',
        icon: 'success'
      })
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

<style></style>
