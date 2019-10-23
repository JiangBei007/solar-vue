<template>
  <section class="layout-simulator" v-show="ifrboolean">
    <iframe :src="url"></iframe>
  </section>
</template>

<script>
const List = {
  basic: ['icon'],
  form: ['input'],
  feedback: ['toast'],
  datadisplay: ['swiper']
}
const LabelList = Object.keys(List)
const AnalysisPath = function(arr, path) {
  for (let i = 0; i < arr.length; i++) {
    if (path.indexOf(arr[i]) > -1) {
      return arr[i]
    }
  }
  return ''
}
export default {
  watch: {
    $route(nvl) {
      const { hash, path } = nvl
      const label = AnalysisPath(LabelList, nvl.path)
      if (!hash && label) {
        console.log(label)
        if (List[label]) {
          this.hash = List[label][0]
        }
      } else {
        this.hash = nvl.hash.replace('#', '')
      }
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
      src: '/ui/mobile/index.html#/',
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
  margin-top: -280px;
  height: 560px;
  overflow: hidden;
  border-radius: 6px;
  z-index: 10;
  background: #f5f5f9;
  iframe {
    border: none;
    height: 100%;
    width: 100%;
  }
}
</style>
