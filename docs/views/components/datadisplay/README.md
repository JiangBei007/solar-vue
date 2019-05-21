---
title: 'Data Display'
sidebarDepth: 2
---
## Swiper 组件
<ClientOnly>
  <rm-swiper/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| index/v-model | 显示第几页 | number | - | 0 |
| loop | 是否循环 | boolean |  | true |
| auto | 是否自动循环 | boolean | - | false |
| effect | 类型 | string | slide/fade | slide |
| direction | 方向 | string | horizontal/vertical | horizontal |
| pagination | 是否显示分页 | boolean |  | false |
| delayed | 自动滑动的间隔时间(单位毫秒，至少为2000) | number |  | 2000 |
| disabledHand | 禁用手动滑动 | boolean |  | false |
</ClientOnly>
