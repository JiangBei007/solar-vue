# form

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
