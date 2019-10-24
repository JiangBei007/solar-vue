<template>
  <div>
    <layout-card>
      <div>
        <layout-column title="代码演示" url="toast" tips="查看源代码" @handle="show=true"></layout-column>
      </div>
    </layout-card>
    <div class="file-blank"></div>
    <layout-card>
      <div class="site-introduce">
        <div class="site-introduce-title">介绍</div>
        <div class="site-introduce-text">
          <p>我们默认：当你引入本组件时，我们会在vue实例上面挂载一个$toast方法，作为全局使用</p>
          <p>同样的，你也可以在每个组件内引入</p>
          <p>当我们在组件内当作component使用时，message可以当作slot传入，详细得例子见源代码</p>
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
  <div class="demo-popup">
    <div class="demo-title">基本用法</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button @click.native="test" type="info">弹出窗口</sv-button>
      </div>
    </div>
    <div class="demo-title">自定义图标</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button @click.native="test1" type="info">成功提示</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button @click.native="test2" type="info">失败提示</sv-button>
      </div>
    </div>
    <div class="demo-title">加载中</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button @click.native="test3" type="info">弹出窗口</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button @click.native="test4" type="info">弹出窗口</sv-button>
      </div>
    </div>
    <div class="demo-title">引入当作组件使用</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button @click.native="test5" type="info">弹出窗口</sv-button>
      </div>
    </div>
    <sv-toast v-model="value">很高兴看到你</sv-toast>
  </div>
</template>

export default {
  data() {
    return {
      value: false
    }
  },
  methods: {
    test() {
      this.$toast({
        type: 'icon',
        message:
          '大家早上好，大家中午好，大家晚上好，大家早上好，大家中午好，大家晚上好'
      })
    },
    test1() {
      this.$toast({
        type: 'icon',
        icon: 'success',
        message: '大家晚上好'
      })
    },
    test2() {
      this.$toast({
        type: 'icon',
        icon: 'warn',
        message: '未知错误'
      })
    },
    test3() {
      this.$toast({
        type: 'loading',
        loadingType: 'circle',
        message: '加载中'
      })
    },
    test4() {
      this.$toast({
        type: 'loading',
        loadingType: 'spot',
        message: '加载中'
      })
    },
    test5() {
      this.value = true
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
