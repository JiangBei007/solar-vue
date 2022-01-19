<template>
  <div class="app">
    <div class="nav-demo-name" v-if="$route.path !== '/'">
      <img src="./static/images/home-icon.png" @click.prevent="goHome" />
      <!-- <i>|</i>
      <span>回首页</span> -->
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { getNetworkType, isMobile } from './until/getBom'
export default {
  data() {
    return {
      currheight: window.innerHeight,
      currwidth: window.innerWidth,
      url: window.location.href
    }
  },
  watch: {},
  computed: {
    date() {
      const date = new Date()
      return date.getHours() + ':' + date.getMinutes()
    },
    workType() {
      return getNetworkType()
    },
    isMobile() {
      return isMobile()
    }
  },
  methods: {
    goHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style lang="less">
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: rgb(239, 239, 239);
  border-radius: 2px;
}
::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #333;
}
::-webkit-scrollbar-corner {
  background: #179a16;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.app {
  display: flex;
  flex-direction: column;
  background: #f5f5f9;
}

.nav-demo-name {
  font-size: 14px;
  color: #404040;
  padding: 10px 0 10px 15px;
  text-align: left;
  height: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }
  i {
    font-style: normal;
    margin: 0 10px;
    font-size: 15px;
  }
}
.demo-blank {
  height: 20px;
}
.demo-title {
  font-size: 14px;
  padding: 30px 12px 5px;
  color: rgba(69, 90, 100, 0.6);
  background: #f8f8f8;
}
.demo-container {
  background: #fff;
  margin: 5px;
  padding: 10px;
}
.demo-example-margin {
  margin: 8px 8px 0 0;
  display: inline-block;
}
.demo-btn-container {
  padding: 10px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
