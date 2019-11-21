<template>
  <div>
    <div class="demo-title">基本用法</div>
    <div>
      <sv-write
        label="姓名"
        type="tel"
        align="right"
        :max-length="10"
        required
        placeholder="请输入姓名"
        v-model="value"
        RightIcon="edit"
        errmessage="姓名是必填项"
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
        v-model="value1"
        RightIcon="edit"
        errmessage="您必须介绍"
      ></sv-write>
    </div>
  </div>
</template>
</template>

<script>
import { getAge } from './../until/common'
import { mapMutations } from 'vuex'
const route = {
  tags: '表单组件',
  label: 'write',
  path: 'write'
}
export default {
  ...route,
  created() {
    this.commitRoute(route)
    const telReg = /^[1][3,4,5,7,8][0-9]{9}$/
    this.regexp = telReg
    const idReg18 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    this.regexpid = idReg18
  },
  data() {
    return {
      value: '',
      value1: ''
    }
  },
  methods: {
    ...mapMutations({
      commitRoute: 'changeRoute'
    }),
    change2(val) {},
    getAge
  }
}
</script>

<style></style>
