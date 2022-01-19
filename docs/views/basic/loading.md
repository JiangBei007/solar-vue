# loading

```javascript
import { Loading } from 'solar-vue'
Vue.component(Loading.name, Loading)
/*
or
Vue.use(Icon)
*/
```

**源代码**

```vue
<template>
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
      <sv-loading type="spot" color="#f00" :text-size="14"
        >loading...</sv-loading
      >
    </div>
    <div class="demo-title">垂直排列</div>
    <div class="demo-container">
      <sv-loading type="spot" vertical :text-size="14">loading</sv-loading>
    </div>
  </div>
</template>
<script>
const route = {
  tags: '基础组件',
  label: 'loading',
  path: 'loading'
}
export default {
  ...route,
  data() {
    return {}
  },
  created() {
    this.commitRoute(route)
  }
}
</script>
<style lang="less"></style>
```

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| type | 确定样式 | string | circle/spot | circle |
| size | 图标大小 | string/number | -- | null |
| textSize | 文字大小 | string/number | -- | null |
| color | 图标颜色 | string | -- | #A2A2A2 |
</ClientOnly>

::: warning
如果您想要改变类型为 spot 时候的图标颜色，这是非常方便的，请选择类名（sv-spin-spot-item）修改背景色
:::
</ClientOnly>
