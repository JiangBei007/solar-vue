---
title: '基础组件'
sidebarDepth: 2
---

## Icon

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

## loading

<ClientOnly>
<sv-loading/>
</ClientOnly>

```javascript
import { Loading } from 'solar-vue'
Vue.component(Loading.name, Loading)
/*
or
Vue.use(Icon)
*/
```

```vue
<sv-loading size="30px" :text-size="14"></sv-loading>
<sv-loading :size="50" type="spot" :text-size="14"></sv-loading>
```

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| type | 确定样式 | string | circle/spot | circle |
| size | 图标大小 | string/number | -- | null |
| textSize | 文字大小 | string/number | -- | null |
| color | 图标颜色 | string | -- | #A2A2A2 |
</ClientOnly>

::: warning
如果您想要改变类型为 spot 时候的图标颜色，这是非常方便的，请选择类名（sv-spin-spot-item）修改背景色
:::
</ClientOnly>

## popup

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

## tab

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
