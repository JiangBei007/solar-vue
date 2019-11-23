<template>
  <div>
    <layout-card>
      <div>
        <layout-column title="代码演示" url="write" tips="查看源代码" @handle="show = true"></layout-column>
      </div>
    </layout-card>
    <div class="file-blank"></div>
    <layout-card>
      <div class="site-introduce">
        <div class="site-introduce-title">介绍</div>
        <div class="site-introduce-text">
          <p>我们为此组件内置了一个状态state用来判断验证结果，当然，您也可以自己验证</p>
          <p>当您设置了regexp,minLength,required等属性时，我们默认您开启了自动验证</p>
          <p>我们推荐您结合本文的Form组件搭配使用</p>
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
    <div class="demo-title">基本用法</div>
    <div>
      <sv-write placeholder="基本用法" v-model="value1"></sv-write>
    </div>
    <div class="demo-title">右侧带图标，只能输入手机号，11位</div>
    <div>
      <sv-write type="tel" :max-length="11" placeholder="请输入手机号" v-model="value2" right-icon="edit"></sv-write>
    </div>
    <div class="demo-title">左右都有图标</div>
    <div>
      <sv-write
        label="信息"
        type="text"
        placeholder="请输入信息"
        v-model="value3"
        right-icon="edit"
        left-icon="records"
      ></sv-write>
    </div>
    <div class="demo-title">必须为数字并且内容居右，带有验证</div>
    <div>
      <sv-write
        label="信息"
        type="number"
        errmessage="您输入的号码不符合规则"
        :regexp="telReg"
        placeholder="请输入号码"
        align="right"
        v-model="value4"
      ></sv-write>
    </div>
    <div class="demo-title">带有验证的必填项</div>
    <div>
      <sv-write
        label="姓名"
        type="text"
        align="right"
        :max-length="10"
        required
        placeholder="请输入您的姓名"
        v-model="value5"
        RightIcon="edit"
        errmessage="您好！姓名是必填项"
      ></sv-write>
    </div>
    <div class="demo-title">textarea</div>
    <div>
      <sv-write
        label="介绍"
        type="textarea"
        align="right"
        :max-length="100"
        required
        placeholder="请介绍"
        v-model="value6"
        right-icon="message"
        left-icon="records"
        errmessage="您必须介绍"
      ></sv-write>
    </div>
    <div class="demo-title">事件</div>
    <div>
      <sv-write
        label="信息"
        type="text"
        placeholder="请输入信息"
        v-model="value7"
        right-icon="edit"
        left-icon="records"
        @on-change="change"
        @on-clear="onclear"
        @on-focus="onfocus"
        @on-blur="onblur"
        @right-click="rightclick"
        @left-click="leftclick"
      ></sv-write>
    </div>
    <div class="demo-blank"></div>
  </div>
</template>

export default {
  created() {
    //const idReg18 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  },
  data() {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      telReg: /^[1][3,4,5,7,8][0-9]{9}$/
    }
  },
  methods: {
    change(val) {
      console.log(val)
    },
    onclear(val) {
      console.log('清除')
    },
    onfocus() {
      console.log('获得焦点')
    },
    onblur() {
      console.log('失去焦点')
    },
    leftclick() {
      console.log('点击左侧图标')
    },
    rightclick() {
      console.log('点击右侧图标')
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
