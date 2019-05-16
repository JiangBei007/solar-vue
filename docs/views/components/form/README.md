---
title: 'Form 表单'
sidebarDepth: 2
---
## Input 输入框
<ClientOnly>
  <vui-input/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| title | 标题 | string |- | - |
| value/v-model|绑定值 | string |- | - |
| placeholder|输入框占位文本 | string |- | - |
| type| 类型 | string | id-tel-text- | text |
| warn|是否显示错误提示标 | boolean |- | false |
| regexp|验证正则 | RegExp |- | - |
| isReturn|返回的验证信息 | object | {} | {} |
| getAge| 一个根据传入身份id返回年龄的函数 | Function |- | - |
| align| 内容方向 | string | left-right | right |
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



## datepicker 日期选择器
<ClientOnly>
  <sakura-datepicker/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| v-model/value| 绑定值 | Date |- | - |
| beginDay|一周起始从周几开始 | number|0,1 | 1 |


<font size=5>Events</font>
| 事件名称| 说明 | 回调参数 | 
| :------ | ------ | ------ |
| openPanel| 打开日期面板触发 | 组件实例 |
| closePane| 关闭日期面板触发 | 组件实例|
</ClientOnly>


## Cascader 级联选择器
<ClientOnly>
  <sakura-cascader/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value / v-model| 选中项绑定值 | array |- | - |
| options|可选项数据源，键名可通过 props 属性配置 | array| - | - |
</ClientOnly>
