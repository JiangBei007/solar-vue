---
title: '表单组件'
sidebarDepth: 2
---

## button

<ClientOnly>
  <sv-button/>
</ClientOnly>

```javascript
import { Button } from 'solar-vue'
Vue.component(Button.name, Button)
/*
or
Vue.use(Button)
*/
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

## switch

<ClientOnly>
  <sv-switch/>
</ClientOnly>

```javascript
import { Switch } from 'solar-vue'
Vue.component(Switch.name, Switch)
/*
or
Vue.use(Switch)
*/
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

## input

<ClientOnly>
  <sv-switch/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| title | 标题 | string |- | - |
| value/v-model|绑定值 | string |- | - |
| placeholder|输入框占位文本 | string |- | - |
| type| 类型 | string | id/tel/text- | text |
| warn|是否显示错误提示标 | boolean |- | false |
| regexp|验证正则 | RegExp |- | - |
| isReturn|返回的验证信息 | object | {} | {} |
| getAge| 一个根据传入身份id返回年龄的函数 | Function |- | - |
| align| 内容方向 | string | left/right | left |
| warn|是否显示错误提示标 | boolean |- | false |
| regexp|验证正则 | regexp |- | - |
| maxage|最大年龄| Number | - |  |
| minage|最大年龄| Number | - |  |
| max|最大长度| Number | - |  |

<font size=5>Events</font>
| 事件名称| 说明 | 回调参数 |
| :------ | ------ | ------ |
| change| value 值改变触发 | 回调函数 |
| clear| 点击清除按钮触发 | 回调函数|
</ClientOnly>

## select

<ClientOnly>
  <sv-select/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value/v-model| 选中项绑定值 | string |- | - |
| placeholder| 占位符 | string | - | - |
| title | 标题 | string | - |- |
| direction| 选项对齐方式 | string | rtl/ltr | rtl |
| configure | | 选项列表，可以为简单数组，或者 { key: KEY, value: VALUE } 结构的键值对数组。当使用键值对时，返回的value为key的值 | array |- | - |
| value-map |设置键值对映射用以自动转换接口数据, 如 ['value', 'label'] | array | - | ['key','value'] |

<font size=5>Events</font>
| 事件名称| 说明 | 回调参数 |
| :------ | ------ | ------ |
| change| value 值改变触发 | 回调函数 |

</ClientOnly>
