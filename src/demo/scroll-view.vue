<template>
  <div class="scroll-view" :style="{ height: wh + 'px' }">
    <sv-scroll-view
      @load="load"
      @refreshFn="refreshFn"
      :refresh="refresh"
      :pulling.sync="pulling"
      :loading.sync="loading"
    >
      <template #header>
        <div class="scroll-top-container">VUE</div>
      </template>
      <ul class="list">
        <li v-for="val in list" :key="val">
          {{ val }}
        </li>
      </ul>
      <p class="loading-text">{{ loadtext }}</p>
    </sv-scroll-view>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
const route = {
  tags: '功能组件',
  label: 'scroll-view',
  path: 'scroll-view'
}
const createData = (length = 10) => {
  return new Array(length).fill(1).map((_) => Math.random())
}
export default {
  ...route,
  components: {},
  data() {
    return {
      refresh: true, //是否打开下拉刷新
      loadtext: '加载更多',
      loading: false, //是否正在加载中
      pulling: false, //是否正在刷新
      wh: window.innerHeight,
      list: createData(50)
    }
  },
  created() {
    this.commitRoute(route)
  },
  methods: {
    load() {
      this.loadtext = '加载中...'
      console.log('到底了')
      setTimeout(() => {
        this.list.push(...createData(10))
        this.loading = false
      }, 1500)
    },
    refreshFn() {
      console.log('下拉刷新')
      setTimeout(() => {
        this.pulling = false
        this.list.sort((a, b) => Math.random() - 0.5)
      }, 1000)
    },
    ...mapMutations({
      commitRoute: 'changeRoute'
    })
  }
}
</script>

<style lang="less">
.scroll-view {
  > div {
    height: 100%;
  }
  .scroll-top-container {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #35495e;
    color: #fff;
    font-size: 50px;
  }
  .loading-text {
    line-height: 24px;
    color: #ccc;
    font-size: 12px;
    text-align: center;
  }
}
.list li {
  list-style: none;
  padding: 5px 20px;
  line-height: 20px;
  text-align: left;
  font-size: 14px;
  color: #fff;
  background-color: #35495e;
  border-top: 1px solid #fff;
}
</style>
