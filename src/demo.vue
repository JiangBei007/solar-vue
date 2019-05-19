<template>
  <div>
		<div>
			<div class="title">简单示例，只能输入10个字符</div>
			<rm-input title="只能输入10个字符：" v-model="val1" :max="10" type="text"></rm-input>
			<rm-loading :show="val2"></rm-loading>
		</div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data () {
    return {
      val1: '',
			val2:false,
    }
  },
  computed: {

  },
  mounted () {
    setTimeout(() => {
      this.num = 100
    }, 1000)
  }
}
</script>
<style lang="scss">
 @import './static/scss/global.scss';

</style>
