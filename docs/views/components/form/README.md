---
title: 'Form'
sidebarDepth: 2
---
## Input 输入框
<ClientOnly>
  <rm-input/>
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
| change| value值改变触发 | 回调函数 |
| clear| 点击清除按钮触发 | 回调函数|
</ClientOnly>

## select 选择器
<ClientOnly>
  <rm-select/>
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
| change| value值改变触发 | 回调函数 |

</ClientOnly>


