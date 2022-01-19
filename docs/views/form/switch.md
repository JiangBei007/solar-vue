# switch

```javascript
import { Switch } from 'solar-vue'
Vue.component(Switch.name, Switch)
/*
or
Vue.use(Switch)
*/
```

## 源代码

```vue
<template>
  <div>
    <div class="demo-title">基本用法</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-switch v-model="value1"></sv-switch>
      </div>
    </div>
    <div class="demo-title">自定义大小</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-switch v-model="value2" size="20px"></sv-switch>
      </div>
    </div>
    <div class="demo-title">自定义颜色</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-switch
          v-model="value3"
          activeColor="#551A8B"
          inactiveColor="#DBC7C7"
        ></sv-switch>
      </div>
    </div>
    <div class="demo-title">自定义值</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-switch
          v-model="value4"
          activeValue="a"
          inactiveValue="b"
        ></sv-switch>
      </div>
      <div class="demo-example-margin">当前值：{{ value4 }}</div>
    </div>
    <div class="demo-title">异步控制</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-switch v-model="value5" :confirm="confirm"></sv-switch>
      </div>
    </div>
    <div class="demo-title">禁用</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-switch v-model="value5" :disabled="true"></sv-switch>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: true,
      value2: false,
      value3: true,
      value4: 'b',
      value5: true
    }
  },
  created() {
    this.commitRoute(route)
  },
  methods: {
    confirm(checked) {
      const str = checked ? '关闭' : '打开'
      const fir = confirm(`您将要${str}`)
      return fir
    }
  }
}
</script>
```

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value | v-model绑定 | -- | -- | false |
| activeValue | 选中的值 | -- | -- | true |
| inactiveValue | 未选中的值 | -- | -- | false |
| confirm | 当函数返回值为true时执行下面的操作 | function | -- | -- |

<font size=5>Events</font>
| 事件名称| 说明 | 回调参数 |
| :------ | ------ | ------ |
| change| value 值改变触发 | 回调函数 |
</ClientOnly>
