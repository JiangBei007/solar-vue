# stepper

```javascript
import { Stepper } from 'solar-vue'
Vue.component(Stepper.name, Tab)
/*
or
Vue.use(Stepper)
*/
```

## 源代码

```vue
<template>
  <div>
    <div class="demo-title">基本用法</div>
    <div class="demo-container">
      <sv-stepper v-model="value1" :min="min" :max="max"></sv-stepper>
    </div>
    <div class="demo-title">固定最小值</div>
    <div class="demo-container">
      <sv-stepper v-model="value2" :min="min"></sv-stepper>
    </div>
    <div class="demo-title">固定最大值</div>
    <div class="demo-container">
      <sv-stepper v-model="value3" :max="max"></sv-stepper>
    </div>
    <div class="demo-title">递进值为小数 最大值为5</div>
    <div class="demo-container">
      <sv-stepper
        v-model="value4"
        :min="min"
        :step="step"
        :max="5"
      ></sv-stepper>
    </div>
    <div class="demo-title">只读</div>
    <div class="demo-container">
      <sv-stepper v-model="value5" readonly></sv-stepper>
    </div>
    <div class="demo-title">禁用</div>
    <div class="demo-container">
      <sv-stepper v-model="value6" :min="min" disabled></sv-stepper>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
const route = {
  tags: '基础组件',
  label: 'stepper',
  path: 'stepper'
}
export default {
  ...route,
  data() {
    return {
      value1: 2,
      value2: -1,
      value3: 10,
      value4: 0,
      value5: 0,
      value6: 0,
      min: -1,
      max: 10,
      step: 1.2
    }
  },
  created() {
    this.commitRoute(route)
  },
  methods: {
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
| value | v-model绑定 | number | -- | 0 |
| step | 递进基数 | number | -- | 1 |
| min | 最小值 | number | -- | -- |
| max | 最大值 | number | -- | -- |
| readonly | 禁止手动输入 | Blooean | -- | -- |
| disabled | 禁用整个组件 | Blooean | -- | -- |
</ClientOnly>

<ClientOnly>
<font size=5>Event</font>
| 事件名称| 说明 | 回调参数 |
| :------ | ------ | ------ |
| change | value  | value |
| focus| -- | value |
| blur| -- | value |
|reduce| 递减时触发 | value |
|add| 递增触发 | value |
</ClientOnly>
