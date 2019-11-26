# tab

<ClientOnly>
  <sv-tab/>
</ClientOnly>

```javascript
import { Tab, TabItem } from 'solar-vue'
Vue.component(Tab.name, Tab)
Vue.component(TabItem.name, TabItem)
/*
or
Vue.use(Icon)
*/
```

```javascript
export default { components: { [Tab.name]: Tab, [TabItem.name]: TabItem } }
```

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value | v-model绑定 | number | -- | 0 |
| lineWidth | 边框高度 | number | -- | 3 |
| activeColor | 默认字体选中颜色 | string | -- | true |
| barActiveColor | 边框颜色 | string | -- | false |
| defaultColor | item字体颜色 | string | -- | -- |
| disabledColor | 禁用时字体颜色 | string | -- | true |
| animate | 切换过程是否带有动画 | Blooean | -- | true |
| customBarWidth | 自定义边框 | function/string | -- | -- |
| scrollThreshold | 超过此数量可滚动 | number | -- | 4 |
| barPosition | 边框位置 | string | top|bottom | bottom |
</ClientOnly>

<ClientOnly>
<font size=5>Event</font>
| 事件名称| 说明 | 回调参数 |
| :------ | ------ | ------ |
| on-index-change| value 值改变触发 | newVal,oldval |
</ClientOnly>

<ClientOnly>
<font size=5> TabItem Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| disabled | 是否禁用此选项 | boolean | -- | false |
| selected | 是否选中此选项 | boolean | -- | false |
</ClientOnly>

<ClientOnly>
<font size=5>TabItem Event</font>
| 事件名称| 说明 | 回调参数 |
| :------ | ------ | ------ |
| on-before-index-change| value 值改变前触发 | currentIndex |
| on-item-click| value 值改变触发 | currentIndex |
</ClientOnly>
