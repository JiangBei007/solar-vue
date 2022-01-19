# popup

```javascript
import { Popup } from 'solar-vue'
Vue.component(Popup.name, Popup)
/*
or
Vue.use(Icon)
*/
```

**源代码**

```vue
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
<script>
import { mapMutations } from 'vuex'
const route = {
  tags: '基础组件',
  label: 'popup',
  path: 'popup'
}
export default {
  ...route,
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
  created() {
    this.commitRoute(route)
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
    },
    ...mapMutations({
      commitRoute: 'changeRoute'
    })
  }
}
</script>
```

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value | v-model绑定 | Blooean | -- | false |
| position | 方向 | string | left-center-top-bottom | bottom |
| overlay | 是否显示蒙层 | Boolean | -- | true |
</ClientOnly>
