<template>
  <div>
    <div>
      <div class="s-toast">
        <rm-toast :type="type" v-model="show">{{ message }}</rm-toast>
        <div class="vui-title">成功提示</div>
        <div class="vui-button" @click="toast('success', '成功')">success</div>
        <div class="vui-title">失败提示</div>
        <div class="vui-button" @click="toast('cancel', '失败')">cancel</div>
        <div class="vui-title">文字提示</div>
        <div class="vui-button" @click="toast('text', '这是一行文字')">text</div>
        <div class="vui-title">全局调用</div>
        <div class="vui-button" @click="toastpublin('')">text调用</div>
        <p></p>
        <div class="vui-button" @click="toastpublin('success')">success</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  tags: '反馈组件',
  label: 'toast',
  path: 'toast',
  data() {
    return {
      show: false,
      type: '',
      message: ''
    }
  },
  methods: {
    toast(type, text) {
      this.type = type
      this.show = true
      this.message = text
    },
    toastpublin(type) {
      if (type) {
        this.$rm.toast.show({
          type,
          text: '出来吧我的小伙'
        })
      } else {
        this.$rm.toast.text('出来吧我的小伙伴')
      }
    }
  }
}
</script>

<style></style>
