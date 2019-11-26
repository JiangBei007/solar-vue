<template>
  <div>
    <div class="demo-title">基本用法</div>
    <div class="demo-container">
      <sv-stepper v-model="value1" :min="min" :max="max"></sv-stepper>
    </div>
    <div class="demo-title">固定最小值</div>
    <div class="demo-container">
      <sv-stepper v-model="value2" :min="min"></sv-stepper>
    </div>
    <div class="demo-title">固定最大值</div>
    <div class="demo-container">
      <sv-stepper v-model="value3" :max="max"></sv-stepper>
    </div>
    <div class="demo-title">递进值为小数 最大值为5</div>
    <div class="demo-container">
      <sv-stepper v-model="value4" :min="min" :step="step" :max="5"></sv-stepper>
    </div>
    <div class="demo-title">只读</div>
    <div class="demo-container">
      <sv-stepper v-model="value5" readonly></sv-stepper>
    </div>
    <div class="demo-title">禁用</div>
    <div class="demo-container">
      <sv-stepper v-model="value6" :min="min" disabled></sv-stepper>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
const route = {
  tags: '基础组件',
  label: 'stepper',
  path: 'stepper'
}
export default {
  ...route,
  data() {
    return {
      value1: 2,
      value2: -1,
      value3: 10,
      value4: 0,
      value5: 0,
      value6: 0,
      min: -1,
      max: 10,
      step: 1.2
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
