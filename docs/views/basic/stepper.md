# stepper

<ClientOnly>
  <sv-stepper/>
</ClientOnly>

```javascript
import { Stepper } from 'solar-vue'
Vue.component(Stepper.name, Tab)
/*
or
Vue.use(Stepper)
*/
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
