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

## write

<ClientOnly>
<sv-write/>
</ClientOnly>

```javascript
import { Write } from 'solar-vue'
Vue.component(Write.name, Write)
/*
or
Vue.use(Write)
*/
```

<ClientOnly>
::: warning
注意：由于pc端的点击延迟原因，我们在点击清除按钮的时候，可能清除按钮已经消失，因此我们更建议您在移动端去查看示例
:::
</ClientOnly>

<ClientOnly>
::: warning
关于验证：当您传入了正则表达式验证时，我们首先已此规则为准。当此项不是必填项时候，如果值为空，那么我们认为验证通过。否则，如果值为空我们认为其无法通过验证。如果其有值，但又不是必填项，我们会以minLength为主
:::
</ClientOnly>

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| label | 标题 | string |- | - |
| value/v-model|绑定值 | string |- | - |
| placeholder|输入框占位文本 | string |- | - |
| type| 类型 | string | text/tel/number/password/textarea | text |
| clear|是否显示清除按钮 | boolean |- | true |
| align| 内容方向 | string | left/right | left |
| errmessage|错误信息 | string |- | - |
| regexp|验证正则 | regexp |- | - |
| RightIcon|右侧年龄| string | - |  |
| LeftIcon|左侧图标| string | - |  |
| maxLength|最大长度| Number | - |  |
| maxLength|最大长度| Number | - |  |
<font size=5>Events</font>
| 事件名称| 说明 | 回调参数 |
| :------ | ------ | ------ |
| on-change| 值改变 | value |
| on-clear| 清除时 | value|
| on-focus| 获得焦点 | value|
| on-blur| 失去焦点 | value|
| left-click| 获得焦点 | value|
| right-click| 失去焦点 | value|
</ClientOnly>

## form

<ClientOnly>
<sv-form/>
</ClientOnly>

```javascript
import { Form } from 'solar-vue'
Vue.component(Form.name, Form)
/*
or
Vue.use(Form)
*/
```

<ClientOnly>
::: warning
如果您自定义的组件想要结合此组件使用，那么为您的组件提供一个state属性用来代表验证状态，一个errmessge属性用来再验证不通过的时候提示，即可
:::
</ClientOnly>

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| resolve | 见示例 | Object |- | - |

</ClientOnly>
