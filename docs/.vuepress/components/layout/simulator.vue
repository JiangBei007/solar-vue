<template>
  <section class="layout-simulator" v-show="ifrboolean">
    <iframe :src="url"></iframe>
  </section>
</template>

<script>
const whiteList = [
  'icon',
  'loading',
  'popup',
  'stepper',
  'tab',
  'notify',
  'toast',
  'button',
  'switch',
  'write',
  'form',
  'swiper',
  'scroll-view'
]

const hash = function (pathName) {
  const newArr = whiteList.filter((item) => pathName.indexOf(item) > 0)
  if (newArr.length) {
    this.hash = newArr[0]
  } else {
    this.hash = ''
  }
}
export default {
  watch: {
    $route(nvl) {
      hash.call(this, nvl.path)
    }
  },
  mounted() {
    try {
      const pathName = window.location.pathname
      hash.call(this, pathName)
    } catch (err) {
      console.log(err)
    }
  },
  computed: {
    url() {
      return this.src + this.hash
    }
  },
  data() {
    return {
      ifrboolean: true,
      src: '/solar-vue/mobile/index.html#/',
      hash: ''
    }
  }
}
</script>

<style lang="less">
.layout-simulator {
  width: 320px;
  min-width: 320px;
  position: absolute;
  right: 50%;
  margin-right: -160px;
  top: 50%;
  margin-top: -270px;
  height: 540px;
  overflow: hidden;
  border-radius: 6px;
  z-index: 10;
  background: #fafafa;
  border-radius: 12px;
  box-shadow: #ebedf0 0 4px 12px;
  iframe {
    border: none;
    height: 100%;
    width: 100%;
  }
}
</style>
