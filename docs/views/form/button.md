# button

```javascript
import { Button } from 'solar-vue'
Vue.component(Button.name, Button)
/*
or
Vue.use(Button)
*/
```

**源代码**

```vue
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
        >常规按钮</sv-button
      >
      <sv-button
        type="info"
        color="linear-gradient(to right, rgb(75, 176, 255), rgb(97, 73, 246))"
        >渐变按钮</sv-button
      >
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
        >图标居右</sv-button
      >
      <sv-button type="danger" size="small" icon="message">有消息了</sv-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {
    this.commitRoute(route)
  }
}
</script>
<style lang="less">
.demo-button {
  .demo-button-container {
    background: #fff;
    margin: 5px;
    padding: 10px;
  }
  button {
    margin: 5px 0 0 5px;
  }
}
</style>
```

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| type | 样式类型 | string | default-primary-info-warning-danger | - |
| size | 按钮尺寸 | string | large-normal-small-mini' | - |
| icon | icon图标 | string | 所有的icon名 | null |
| position | icon位置 | string | left-right | left |
| round | 是否圆角 | Boolean | --- | null |
| square | 无圆角 | Boolean | --- | null |
| plain | 是无背景 | Boolean | --- | null |
| hairline | 是否细边框 | Boolean | --- | null |
| color | 自定义颜色 | string | --- | null |
</ClientOnly>
