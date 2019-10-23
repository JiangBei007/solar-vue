<template>
  <div class="demo-popup">
    <div class="demo-title">基本用法</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button @click.native="test" type="info">弹出窗口</sv-button>
      </div>
    </div>
    <div class="demo-title">自定义图标</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button @click.native="test1" type="info">成功提示</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button @click.native="test2" type="info">失败提示</sv-button>
      </div>
    </div>
    <div class="demo-title">加载中</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button @click.native="test3" type="info">弹出窗口</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button @click.native="test4" type="info">弹出窗口</sv-button>
      </div>
    </div>
    <div class="demo-title">引入当作组件使用</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button @click.native="test5" type="info">弹出窗口</sv-button>
      </div>
    </div>
    <sv-toast v-model="value">很高兴看到你</sv-toast>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
const route = {
  tags: '反馈组件',
  label: 'toast',
  path: 'toast'
}
export default {
  ...route,
  data() {
    return {
      value: false
    }
  },
  created() {
    this.commitRoute(route)
  },
  methods: {
    test() {
      this.$toast({
        type: 'icon',
        message:
          '大家早上好，大家中午好，大家晚上好，大家早上好，大家中午好，大家晚上好'
      })
    },
    test1() {
      this.$toast({
        type: 'icon',
        icon: 'success',
        message: '大家晚上好'
      })
    },
    test2() {
      this.$toast({
        type: 'icon',
        icon: 'warn',
        message: '未知错误'
      })
    },
    test3() {
      this.$toast({
        type: 'loading',
        loadingType: 'circle',
        message: '加载中'
      })
    },
    test4() {
      this.$toast({
        type: 'loading',
        loadingType: 'spot',
        message: '加载中'
      })
    },
    test5() {
      this.value = true
    },
    ...mapMutations({
      commitRoute: 'changeRoute'
    })
  }
}
</script>