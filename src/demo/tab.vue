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
<script>
import { mapMutations } from 'vuex'
const route = {
  tags: '基础组件',
  label: 'tab',
  path: 'tab'
}
export default {
  ...route,
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
  created() {
    this.commitRoute(route)
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
    },
    ...mapMutations({
      commitRoute: 'changeRoute'
    })
  }
}
</script>
