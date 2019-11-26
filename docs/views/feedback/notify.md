# notify

<ClientOnly>
<sv-notify/>
</ClientOnly>

```javascript
import { Toast } from 'solar-vue'
Vue.use(Icon)

//*.vue

this.$notify({
  message: '通知消息',
  type: 'success',
  background: '#551A8B',
  color: '#D33682'
})
```

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| type | 弹框类型 | string | primary-success-danger-warning | success |
| loadingType | loading类型 | string | - | - |
| icon | icon类型 | string | - | - |
| message | 文字内容 | string | - | - |
| duration | 弹框出现的时长 | number | - | 2000 |
| background | 背景色 | string | - | - |
| color | 字体色 | string | - | - |
</ClientOnly>
