<template>
  <div>
    <layout-card>
      <div>
        <layout-column title="扫码体验" tips="查看源代码" url="popup" @handle="show = true"></layout-column>
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
  <div class="demo-popup">
    <div class="demo-title">基本用法</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button @click.native="test" type="info">弹出窗口</sv-button>
      </div>
    </div>
    <div class="demo-title">不同方向</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button @click.native="test1" type="info">下方弹出</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button @click.native="test2" type="info">上方弹出</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button @click.native="test3" type="info">左方弹出</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button @click.native="test4" type="info">右方弹出</sv-button>
      </div>
    </div>
    <div class="demo-title">去除遮罩</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button @click.native="test5">下方弹出</sv-button>
      </div>
    </div>
    <sv-popup v-model="value" position="center">
      <div class="demo-p-box">你好，很高兴看到你</div>
    </sv-popup>
    <sv-popup v-model="value1" position="bottom">
      <div class="demo-p-box"></div>
    </sv-popup>
    <sv-popup v-model="value2" position="top">
      <div class="demo-p-box"></div>
    </sv-popup>
    <sv-popup v-model="value3" position="left">
      <div class="demo-p-box"></div>
    </sv-popup>
    <sv-popup v-model="value4" position="right">
      <div class="demo-p-box"></div>
    </sv-popup>
    <sv-popup v-model="value5" position="bottom" :overlay="false">
      <div class="demo-p-box"></div>
    </sv-popup>
  </div>
</template>


export default {
  data() {
    return {
      value: false,
      value1: false,
      value2: false,
      value3: false,
      value4: false,
      value5: false
    }
  },
  methods: {
    test() {
      this.value = true
    },
    test1() {
      this.value1 = true
    },
    test2() {
      this.value2 = true
    },
    test3() {
      this.value3 = true
    },
    test4() {
      this.value4 = true
    },
    test5() {
      this.value5 = true
      setTimeout(() => {
        this.value5 = false
      }, 1000)
    }
  }
}
`
    }
  }
}
</script>
