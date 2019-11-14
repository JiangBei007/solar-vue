<template>
  <div>
    <layout-card>
      <div>
        <layout-column
          title="代码演示"
          url="tab"
          tips="查看源代码"
          @handle="show = true"
        ></layout-column>
      </div>
    </layout-card>
    <div class="file-blank"></div>
    <layout-card>
      <div class="site-introduce">
        <div class="site-introduce-title">介绍</div>
        <div class="site-introduce-text">
          <p>
            本组件必须和TabItem组件组合使用
          </p>
          <p>我们提供了非常详细的例子，见右侧</p>
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
  name: 'm-toast',
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
    <div class="demo-container">
      <sv-tab v-model="value1">
        <sv-tab-item v-for="(mess, index) in list1" :key="index">{{
          mess
        }}</sv-tab-item>
      </sv-tab>
    </div>
    <div class="demo-title">自定义颜色</div>
    <div class="demo-container">
      <sv-tab v-model="value2" activeColor="#ff976a">
        <sv-tab-item v-for="(mess, index) in list1" :key="index">{{
          mess
        }}</sv-tab-item>
      </sv-tab>
    </div>
    <div class="demo-title">禁用部分菜单</div>
    <div class="demo-container">
      <sv-tab v-model="value3">
        <sv-tab-item>首页</sv-tab-item>
        <sv-tab-item>消息</sv-tab-item>
        <sv-tab-item disabled>其它</sv-tab-item>
        <sv-tab-item>空间</sv-tab-item>
      </sv-tab>
    </div>
    <div class="demo-title">自定义底部导航</div>
    <div class="demo-container">
      <sv-tab
        v-model="value4"
        :customBarWidth="customBarWidth"
        barActiveColor="rgb(114, 50, 221)"
      >
        <sv-tab-item v-for="(mess, index) in list1" :key="index">{{
          mess
        }}</sv-tab-item>
      </sv-tab>
    </div>
    <div class="demo-title">动态添加tab</div>
    <div class="demo-container">
      <div class="demo-btn-container">
        <sv-button
          type="info"
          icon="add"
          size="mini"
          @click.native="operation('add')"
          >add</sv-button
        >
        <sv-button type="info" icon="add" size="mini" @click.native="go"
          >go 1</sv-button
        >
        <sv-button
          type="danger"
          icon="fail"
          size="mini"
          @click.native="operation('delete')"
          >delete</sv-button
        >
      </div>
      <sv-tab v-model="value5">
        <sv-tab-item v-for="(mess, index) in list2" :key="index">{{
          mess
        }}</sv-tab-item>
      </sv-tab>
    </div>
  </div>
</template>

export default {
  data() {
    return {
      value1: 0,
      list1: ['首页', '消息', '空间', '其它', '设置'],
      value2: 1,
      value3: 0,
      value4: 0,
      value5: 0,
      list2: ['首页', '消息', '空间', '其它']
    }
  },
  methods: {
    customBarWidth(index) {
      if (!index) index = 0.5
      return index * 20 + 'px'
    },
    operation(type) {
      if (type === 'delete') {
        if (this.list2.length > 3) {
          this.list2.pop()
        }
        return
      }
      this.list2.push('设置')
    },
    go() {
      this.value5 = 1
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
