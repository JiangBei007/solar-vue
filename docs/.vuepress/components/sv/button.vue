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
  <div class="demo-button">
    <div class="demo-title">基本用法</div>
    <div class="demo-button-container">
      <sv-button type="default">默认按钮</sv-button>
      <sv-button type="primary">默认按钮</sv-button>
      <sv-button type="info">默认按钮</sv-button>
      <sv-button type="warning">警告按钮</sv-button>
      <sv-button type="danger">危险按钮</sv-button>
    </div>
    <div class="demo-title">不同尺寸</div>
    <div class="demo-button-container">
      <sv-button type="info" size="large">大号按钮</sv-button>
      <sv-button type="info">常规按钮</sv-button>
      <sv-button type="info" size="small">小型按钮</sv-button>
      <sv-button type="info" size="mini">迷你按钮</sv-button>
    </div>
    <div class="demo-title">简单按钮</div>
    <div class="demo-button-container">
      <sv-button type="primary" plain>常规按钮</sv-button>
      <sv-button type="info" plain>常规按钮</sv-button>
    </div>
    <div class="demo-title">细边框</div>
    <div class="demo-button-container">
      <sv-button type="primary" plain hairline>常规按钮</sv-button>
      <sv-button type="info" plain hairline>常规按钮</sv-button>
    </div>
    <div class="demo-title">按钮形状</div>
    <div class="demo-button-container">
      <sv-button type="primary" plain hairline square>方形</sv-button>
      <sv-button type="info" round>我是圆形按钮</sv-button>
    </div>
    <div class="demo-title">自定义颜色</div>
    <div class="demo-button-container">
      <sv-button type="primary" color="rgb(114, 50, 221)">常规按钮</sv-button>
      <sv-button
        type="danger"
        plain
        color="linear-gradient(to right, rgb(75, 176, 255), rgb(97, 73, 246))"
      >常规按钮</sv-button>
      <sv-button
        type="info"
        color="linear-gradient(to right, rgb(75, 176, 255), rgb(97, 73, 246))"
      >渐变按钮</sv-button>
    </div>
    <div class="demo-title">图标按钮</div>
    <div class="demo-button-container">
      <sv-button type="primary" icon="position">方形</sv-button>
      <sv-button type="info" icon="search">我是圆形按钮</sv-button>
      <sv-button
        type="primary"
        plain
        hairline
        square
        icon="scan"
        position="right"
        color="rgb(114, 50, 221)"
      >图标居右</sv-button>
      <sv-button type="danger" size="small" icon="message">有消息了</sv-button>
    </div>
  </div>
</template>
`
    }
  }
}
</script>
