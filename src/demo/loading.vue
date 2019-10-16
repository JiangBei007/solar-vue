<template>
  <div class="demo-loading">
    <div class="demo-title">基本用法</div>
    <div class="demo-container">
      <sv-loading :text-size="14"></sv-loading>
      <sv-loading type="spot" :text-size="14"></sv-loading>
    </div>
    <div class="demo-title">带有提示语</div>
    <div class="demo-container">
      <sv-loading :text-size="14">加载中...</sv-loading>
      <sv-loading type="spot" :text-size="14">loading...</sv-loading>
    </div>
    <div class="demo-title">自定义图标大小</div>
    <div class="demo-container">
      <sv-loading size="30px" :text-size="14"></sv-loading>
      <sv-loading :size="50" type="spot" :text-size="14"></sv-loading>
    </div>
    <div class="demo-title">自定义颜色</div>
    <div class="demo-container">
      <sv-loading color="#f00">加载中...</sv-loading>
      <sv-loading type="spot" color="#f00" :text-size="14">loading...</sv-loading>
    </div>
    <div class="demo-title">垂直排列</div>
    <div class="demo-container">
      <sv-loading type="spot" vertical :text-size="14">loading</sv-loading>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
const route = {
  tags: '基础组件',
  label: 'loading',
  path: 'loading'
}
export default {
  ...route,
  data() {
    return {}
  },
  created() {
    this.commitRoute(route)
  },
  methods: {
    ...mapMutations({
      commitRoute: 'changeRoute'
    })
  }
}
</script>
<style lang="less">
</style>