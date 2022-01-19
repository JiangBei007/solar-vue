# form

```javascript
import { Form } from 'solar-vue'
Vue.component(Form.name, Form)
/*
or
Vue.use(Form)
*/
```

## 源代码

```vue
<template>
  <div>
    <div class="demo-title">表单验证</div>
    <div class="demo-container">
      <sv-form :resolve="resolve" ref="svform">
        <sv-write
          label="姓名"
          :required="true"
          type="text"
          placeholder="请输入姓名"
          errmessage="姓名为必填项"
          v-model="value1"
          right-icon="edit"
          left-icon="records"
        ></sv-write>
        <sv-write
          label="手机号码"
          :required="true"
          type="text"
          placeholder="请输入您的手机号码"
          errmessage="请输入正确的手机号"
          :regexp="telReg"
          v-model="value2"
          right-icon="phone"
        ></sv-write>
        <sv-write
          label="可选项"
          type="text"
          placeholder="很高兴看到你"
          v-model="value3"
          right-icon="calendar"
        ></sv-write>
      </sv-form>
    </div>

    <div class="demo-btn-container">
      <sv-button @click.native="cli">提交</sv-button>
      <sv-button @click.native="ouput">other</sv-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
const route = {
  tags: '表单组件',
  label: 'form',
  path: 'form'
}
export default {
  ...route,
  created() {
    this.commitRoute(route)
    //const idReg18 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  },
  data() {
    return {
      value1: '',
      value2: '1760128620',
      value3: '',
      telReg: /^[1][3,4,5,7,8][0-9]{9}$/,
      resolve: {}
    }
  },
  methods: {
    ...mapMutations({
      commitRoute: 'changeRoute'
    }),
    cli(val) {
      this.resolve.then().then((res) => {
        const results = res.every((result) => result.state)
        if (results) {
          alert('提交成功')
        } else {
          for (let i = 0; i < res.length; i++) {
            if (res[i].state === false) {
              alert(res[i].message)
              return
            }
          }
        }
      })
    },
    ouput() {
      const arr = this.$refs.svform.getStates()
      console.log(arr)
    }
  }
}
</script>
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
