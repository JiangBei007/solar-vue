# scroll-view

```vue
<template>
  <div class="scroll-view" :style="{ height: wh + 'px' }">
    <fine-scroll
      @load="load"
      @refreshFn="refreshFn"
      :refresh="refresh"
      :pulling.sync="pulling"
      :loading.sync="loading"
    >
      <template #header>
        <div class="scroll-top-container">
          <img src="./../../assets/logo.png" />
        </div>
      </template>
      <ul class="list">
        <li v-for="val in list" :key="val">
          {{ val }}
        </li>
      </ul>
      <p class="loading-text">{{ loadtext }}</p>
    </fine-scroll>
  </div>
</template>

<script>
const createData = (length = 10) => {
  return new Array(length).fill(1).map((_) => Math.random())
}
export default {
  components: {},
  data() {
    return {
      refresh: true,
      loadtext: '加载更多',
      loading: false, //是否正在加载中
      pulling: false, //是否正在刷新
      wh: window.innerHeight,
      list: createData(50)
    }
  },
  methods: {
    load() {
      console.log(this.loading, 'loading')
      this.loadtext = '加载中...'
      setTimeout(() => {
        console.log('到底了', this.loading)
        this.list.push(...createData(10))
        this.loading = false
      }, 1000)
    },
    refreshFn() {
      console.log('触发下拉刷新', this.pulling)
      setTimeout(() => {
        this.pulling = false
        this.list.sort((a, b) => Math.random() - 0.5)
      }, 1000)
    }
  }
}
</script>

<style lang="less">
.scroll-view {
  > div {
    height: 100%;
  }
  .scroll-top-container {
    display: flex;
    justify-content: center;
    background: #35495e;
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
```