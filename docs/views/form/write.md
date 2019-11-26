# write

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
