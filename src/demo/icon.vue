<template>
  <div class="demo-icon">
    <div class="demo-icon-container">
      <ul>
        <li v-for="icon in icons" :key="icon">
          <icon :name="icon"></icon>
          <span>{{ icon }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
const route = {
  tags: '基础组件',
  label: 'icon',
  path: 'icon'
}
const icons = [
  'menu',
  'starton',
  'fail',
  'clock',
  'add',
  'friends',
  'halfstar',
  'plus',
  'position',
  'loading',
  'scan',
  'setting',
  'start',
  'fenxiang',
  'aret-left',
  'bell',
  'down',
  'determine',
  'close',
  'edit',
  'hot',
  'back',
  'licke',
  'phone',
  'records',
  'cart',
  'circle',
  'selected',
  'warn',
  'rank',
  'service',
  'sort-down',
  'sort-up',
  'up-load',
  'sort',
  'location',
  'licke-active',
  'calendar',
  'jinggao',
  'chat',
  'shoping',
  'arrow-right',
  'delete',
  'success',
  'question',
  'select',
  'message',
  'minus',
  'chatline',
  'home',
  'checked',
  'load',
  'switch',
  'qr-code',
  'moreread',
  'operation',
  'search',
  'promotion',
  'checkedhalf'
]
export default {
  ...route,
  data() {
    return {
      icons
    }
  },
  created() {
    this.commitRoute(route)
  },
  methods: {
    ...mapMutations({
      commitRoute: 'changeRoute'
    })
  }
}
</script>
<style lang="less">
.demo-icon {
  .demo-icon-container {
    background: #fff;
    margin: 5px;
  }
  ul {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    text-align: center;

    width: 300px;
  }
  li {
    height: 100px;
    width: 100px;
    line-height: 100px;
    display: flex;
    flex-direction: column;
  }
  li:hover {
    .sv-iconfont {
      font-size: 48px;
      transition: all 0.3s;
    }
  }
  .sv-iconfont {
    font-size: 32px;
    line-height: 64px;
    color: #3f3f3f;
    transition: all 0.3s;
  }
  span {
    font-size: 16px;
    line-height: 36px;
    color: #666;
  }
}
</style>