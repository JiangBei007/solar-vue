---
title: 'Icon'
---

# Icon

<ClientOnly>
<sv-icon/>
</ClientOnly>

```javascript
import { Icon } from 'solar-vue'
Vue.component(Icon.name, Icon)
/*
or
Vue.use(Icon)
*/
```

```vue
<i class="sv-iconfont" :class="'sv-icon' + name"></i>
```

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| name | 类型 | string | - | - |
| color | 颜色 | string |  | - |
| size | 尺寸 | string/number | - | - |
::: warning
注意：size属性您可以自己选择是否带上单位，默认单位为px
:::
</ClientOnly>
