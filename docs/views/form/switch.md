# switch

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
