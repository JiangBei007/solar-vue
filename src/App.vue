<template>
  <div class="app">
    <div class="nav-bar">
      <div>
        <div class="nav-bar-bg">
          <img src="./static/images/header-bac.png" />
          <span class="nav-bar-date">{{ date }}</span>
        </div>
        <div class="nav-bar-url">
          <div>{{ url }}</div>
        </div>
      </div>
    </div>
    <div class="nav-demo-name" v-if="$route.path!=='/'">
      <img src="./static/images/home-icon.png" @click.prevent="goHome" />
      <i>|</i>
      <span>{{ route.label }}</span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { getNetworkType } from './until/getBom'
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
    ...mapGetters(['route']),
    date() {
      const date = new Date()
      return date.getHours() + ':' + date.getMinutes()
    },
    workType() {
      return getNetworkType()
    }
  },
  methods: {
    goHome() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style lang="scss">
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
.nav-bar {
  height: 70px;
  > div {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    padding-top: 10px;
    background: #3f3f3f;
    z-index: 10;
  }
  img {
    margin: 2px 0;
    width: 100%;
  }

  .nav-bar-date {
    position: absolute;
    top: 10px;
    right: 50%;
    margin-right: -14px;
    font-size: 14px;
    color: #fff;
  }
  .nav-bar-url {
    height: 40px;
    padding: 0 10px;
    > div {
      font-size: 14px;
      height: 28px;
      line-height: 28px;
      color: #fff;
      background-color: #a2a2a2;
      margin: 0 auto;
      border-radius: 4px;
      white-space: nowrap;
      overflow-x: scroll;
    }
    > div::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
}
.nav-demo-name {
  font-size: 19px;
  color: #404040;
  padding: 21px 0 21px 15px;
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

.demo-title {
  font-size: 14px;
  padding: 30px 12px 5px;
  color: rgba(69, 90, 100, 0.6);
  background: #f8f8f8;
}
</style>
