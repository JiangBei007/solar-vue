<template>
  <div class="sv-demo">
    <div class="sv-demo-hd">
      <h1 class="sv-demo-title">
        <img src="./../static/images/logo120.png" />
        <span>solar-vue</span>
      </h1>
      <h2 class="sv-demo-subtitle">平安寿险移动端组件库</h2>
    </div>
    <div class="sv-demo-bd">
      <div class="sv-demo-list" v-for="(item, index) in list" :key="index">
        <div class="sv-list-header" @click="select(index)">
          <div class="sv-demo-category-name">{{ item.label }}</div>
          <div class="sv-demo-category-arrow">
            <span :class="{active:item.checked}">
              <img src="./../icons/drop-down-right.png" />
            </span>
          </div>
        </div>
        <div class="sv-list-body" v-if="item && item.checked">
          <div class="sv-list-item" v-for="it in item.children" :key="it.path">
            <div class="sv-list-line" @click="goRoute(it.path)">
              <div class="sv-list-content">{{ it.label }}</div>
              <div class="sv-list-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import routes from './../router/routeMap'
export default {
  path: '',
  mounted() {
    let arr = routes.filter(item => item.path != '/').map(item => item.tags)
    arr = [...new Set(arr)]
    const list = []
    for (let i = 0; i < arr.length; i++) {
      list.push({
        label: arr[i],
        children: []
      })
      for (let j = 0; j < routes.length; j++) {
        if (routes[j].tags === arr[i]) {
          const { label, path } = routes[j]
          list[i].children.push({
            label,
            path
          })
        }
      }
    }
    this.list = list
    //console.log(list)
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    select(index) {
      this.$set(this.list[index], 'checked', !this.list[index].checked)
    },
    goRoute(path) {
      this.$router.push({ path })
    }
  }
}
</script>

<style lang="less">
.sv-demo-hd {
  padding-left: 16px;
  color: rgba(0, 0, 0, 0.75);
  .sv-demo-title {
    font-size: 32px;
    font-weight: 400;
    margin: 27px 0px 15px;
    display: flex;
    align-items: center;
    img {
      width: 36px;
      height: 36px;
      margin-right: 16px;
    }
  }
  .sv-demo-subtitle {
    font-size: 13px;
    font-weight: 400;
    margin: 0px 0px 27px;
  }
}
.sv-demo-list {
  background-color: rgb(255, 255, 255);
  margin: 0px 16px 12px;
  border-radius: 2px;
  .sv-list-header {
    position: relative;
    height: 70px;
    line-height: 70px;
    color: rgb(64, 64, 64);
    font-size: 16px;
    padding: 0px 0px 0px 24px;
    display: flex;
  }
  .sv-demo-category-name {
    flex: 1;
  }
  .sv-demo-category-arrow {
    width: 50px;
    display: flex;
    justify-content: center;
    span {
      display: flex;
      align-items: center;
      transform: rotate(90deg);
      transition: transform 0.3s;
    }
    span.active {
      transform: rotate(-90deg);
      transition: transform 0.3s;
    }
    img {
      height: 15px;
      width: 15px;
    }
  }
}
.sv-list-body {
  > div:not(:last-child) > div {
    border-bottom: 1px solid #ddd;
  }
  .sv-list-item {
    padding-left: 24px;
    font-size: 14px;
  }
  .sv-list-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
    padding-right: 15px;
  }
  .sv-list-content {
    line-height: 1.5;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: 7px;
    padding-bottom: 7px;
  }
  .sv-list-arrow {
    display: block;
    width: 15px;
    height: 15px;
    margin-left: 8px;
    background-image: url(../icons/drop-down-right.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
}
</style>
