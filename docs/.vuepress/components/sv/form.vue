<template>
  <div>
    <layout-card>
      <div>
        <layout-column title="代码演示" url="form" tips="查看源代码" @handle="show = true"></layout-column>
      </div>
    </layout-card>
    <div class="file-blank"></div>
    <layout-card>
      <div class="site-introduce">
        <div class="site-introduce-title">介绍</div>
        <div class="site-introduce-text">
          <p>为了保持组件的灵活性，我们并没有在form组件内部去内置按钮，并以按钮去获取内部子组件验证状态(state)</p>
          <p>您可以给Form组件设置ref属性，并以getStates方法获得子组件所有属性</p>
          <p>但其实以ref获得并非我本意，因此我们提供了一个prop参数，以回调的形式返回验证结果（看右侧示例)</p>
          <p>您也可以自己封装组件来配合我们的form组件</p>
        </div>
      </div>
    </layout-card>
    <layout-code title="搜索" v-model="show">
      <pre v-highlightjs><code class="vue">{{ code }}</code></pre>
    </layout-code>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
Vue.use(VueHighlightJS)
export default {
  data() {
    return {
      codeshow: false,
      show: false,
      type: '',
      message: '',
      code: `,
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


import { mapMutations } from 'vuex'
export default {
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
      this.resolve.then().then(res => {
        const results = res.every(result => result.state)
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

`
        .replace(/^ {8}/gm, '')
        .trim()
    }
  }
}
</script>
