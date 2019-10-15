<template>
  <div>
    <div class="demo-title">基本用法</div>
    <div class="demo-button-container">
      <sv-switch v-model="value1"></sv-switch>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
const route = {
  tags: '表单组件',
  label: 'switch',
  path: 'switch'
}
export default {
  ...route,
  data() {
    return {
      value1: false
    }
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