<template>
  <div class="demo-loading">
    <div class="demo-title">基本用法</div>
    <div class="demo-loading-container">
      <sv-loading :text-size="14"></sv-loading>
      <sv-loading type="HalfCircle" :text-size="14"></sv-loading>
    </div>
    <div class="demo-title">带有提示语</div>
    <div class="demo-loading-container">
      <sv-loading :text-size="14">加载中...</sv-loading>
      <sv-loading type="HalfCircle" :text-size="14">loading...</sv-loading>
    </div>
    <div class="demo-title">自定义图标大小</div>
    <div class="demo-loading-container">
      <sv-loading size="14px" :text-size="14">加载中...</sv-loading>
      <sv-loading size="14px" type="HalfCircle" :text-size="14">loading...</sv-loading>
    </div>
    <div class="demo-title">自定义颜色</div>
    <div class="demo-loading-container">
      <sv-loading type="HalfCircle" color="#DE5C11" :text-size="14">loading...</sv-loading>
    </div>
    <div class="demo-title">垂直排列</div>
    <div class="demo-loading-container">
      <sv-loading type="HalfCircle" vertical :text-size="14">loading...</sv-loading>
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
.demo-loading {
  .demo-loading-container {
    background: #fff;
    margin: 5px;
    padding: 10px;
  }
}
</style>