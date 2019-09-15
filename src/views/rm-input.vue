<template>
  <div class="s-input">
    <div class="vui-title">简单示例，只能输入10个字符</div>
    <rm-input title="只能输入10个字符：" v-model="val1" :max="10" placeholder="只能输入10个字符" type="text"></rm-input>
    <div class="vui-title">type="tel" 验证电话号码</div>
    <rm-input
      title="电话号码："
      v-model="val2"
      type="tel"
      :regexp="regexp"
      :isReturn="return1"
      placeholder="请输入电话号码"
      @change="change2"
    ></rm-input>
    <div class="vui-result">
      <span>验证结果：</span>
      <p>{{ JSON.stringify(return1) }}</p>
    </div>
    <div class="vui-title">type="tel" 验证身份证号</div>
    <rm-input
      title="身份证号："
      v-model="val3"
      type="id"
      placeholder="请输入身份证号"
      :regexp="regexpid"
      :isReturn="return2"
    ></rm-input>
    <div class="vui-result">
      <span>验证结果：</span>
      <p>{{ JSON.stringify(return2) }}</p>
    </div>
    <div class="vui-title">type="id"身份证号的年龄校验（0-180岁）</div>
    <rm-input
      title="身份证号："
      v-model="val4"
      type="id"
      :regexp="regexpid"
      :isReturn="return3"
      :maxage="180"
      :minage="0"
      placeholder="请输入身份证号"
      align="right"
      :warn="true"
      :getAge="getAge"
    ></rm-input>
    <div class="vui-result">
      <span>验证结果：</span>
      <p>{{ JSON.stringify(return3) }}</p>
    </div>
  </div>
</template>

<script>
import { getAge } from './../until/common'

export default {
  tags: 'Form 组件',
  label: 'input',
  path: 'input',
  created() {
    const telReg = /^[1][3,4,5,7,8][0-9]{9}$/
    this.regexp = telReg
    const idReg18 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
    this.regexpid = idReg18
  },
  data() {
    return {
      val1: '',
      val2: '',
      val3: '',
      val4: '',
      return1: {},
      return2: {},
      return3: {},
      regexp: null,
      regexpid: null
    }
  },
  methods: {
    change2(val) {},
    getAge
  }
}
</script>

<style></style>
