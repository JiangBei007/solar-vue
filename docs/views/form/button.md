# button

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
