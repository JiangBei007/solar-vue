# swiper

<ClientOnly>
  <sv-swiper/>
</ClientOnly>

```javascript
import { Swiper } from 'solar-vue'
Vue.component(Swiper.name, Swiper)
/*
or
Vue.use(Swiper)
*/
```

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| index | v-model绑定 | number | - | 0 |
| loop | 是否循环 | boolean | - | true |
| auto | 是否自动循环 | boolean | - | false |
| effect | 类型 | string | slide/fade | slide |
| direction | 方向 | string | horizontal/vertical | horizontal |
| pagination | 是否显示分页 | boolean | - | false |
| delayed | 自动滑动的间隔时间 | number | - | 2000 |
| disabledHand | 禁用手动滑动 | boolean | - | false |
</ClientOnly>

<ClientOnly>
<font size=5>Event</font>
| 参数| 说明 | 回调参数 |
| :------ | ------ | ------ |
| on-slide | 滑动过程中触发的函数 | 下标 |
</ClientOnly>
