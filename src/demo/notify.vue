<template>
  <div>
    <div class="demo-title">基本用法</div>
    <div class="demo-container">
      <sv-button @click.native="alert">基本用法</sv-button>
    </div>
    <div class="demo-title">不同类型</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button type="danger" @click.native="alertType('danger')">danger</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button type="primary" @click.native="alertType('success')">success</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button type="warning" @click.native="alertType('warning')">warning</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button type="info" @click.native="alertType('primary')">primary</sv-button>
      </div>
    </div>
    <div class="demo-title">自定义颜色</div>
    <div class="demo-container">
      <sv-button @click.native="coutrom">自定义颜色</sv-button>
    </div>
    <div class="demo-title">带有图标的消息通知</div>
    <div class="demo-container">
      <div class="demo-example-margin">
        <sv-button type="info" @click.native="alertOfIcon">消息通知</sv-button>
      </div>
      <div class="demo-example-margin">
        <sv-button type="primary" @click.native="alertOfIconSuccess">消息通知</sv-button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Vue from 'vue'
const route = {
  tags: '基础组件',
  label: 'notify',
  path: 'notify'
}

export default {
  ...route,
  created() {
    this.commitRoute(route)
  },
  methods: {
    alert() {
      this.$notify({
        duration: 2000,
        message: 'Welcome to here !'
      })
    },
    alertType(type) {
      this.$notify({
        duration: 2000,
        message: '通知消息',
        type
      })
    },
    coutrom() {
      this.$notify({
        message: '通知消息',
        type: 'success',
        background: '#551A8B',
        color: '#D33682'
      })
    },
    alertOfIcon() {
      this.$notify({
        message: '您有2条未读消息',
        type: 'primary',
        icon: 'message'
      })
    },
    alertOfIconSuccess() {
      this.$notify({
        message: '提交成功',
        type: 'success',
        icon: 'success'
      })
    },
    ...mapMutations({
      commitRoute: 'changeRoute'
    })
  }
}
</script>