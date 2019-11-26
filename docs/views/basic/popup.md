# popup

<ClientOnly>
  <sv-loading/>
</ClientOnly>

```javascript
import { Popup } from 'solar-vue'
Vue.component(Popup.name, Popup)
/*
or
Vue.use(Icon)
*/
```

```javascript
export default { components: { [Popup.name]: Popup } }
```

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value | v-model绑定 | Blooean | -- | false |
| position | 方向 | string | left-center-top-bottom | bottom |
| overlay | 是否显示蒙层 | Boolean | -- | true |
</ClientOnly>
