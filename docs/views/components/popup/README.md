---
title: 'Feedback'
sidebarDepth: 2
---
## loading 组件
<ClientOnly>
  <rm-loading/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| show | 加载图标是否展现 | boolean | - | false |
| icon | loading样式 | string | spot-spotcolor-circle(可以为空) | '' |
</ClientOnly>

## Toast 组件
<ClientOnly>
  <rm-toast/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value| v-model绑定,弹框出现 | boolean |- | false |
| type | 弹框类型 | string | success-warn-cancel-text | success |
| time | 弹框出现多少毫秒后消失(单位毫秒) | number | - | 2000 |
</ClientOnly>