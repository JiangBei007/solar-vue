# swiper

```javascript
import { Swiper } from 'solar-vue'
Vue.component(Swiper.name, Swiper)
/*
or
Vue.use(Swiper)
*/
```

- 我们尽可能地给您提供丰富细致的例子，如右侧->
- 如果您特殊需要，你可以单独下载我们的 [swiper](https://www.npmjs.com/package/small-swiper),插件，自己实现符合您需求的组件使用，我们为您提供了丰富的[例子](https://www.npmjs.com/package/small-swiper)

**源代码**

```vue
<template>
  <div>
    <div class="demo-title">水平方向</div>
    <div class="demo-container">
      <sv-swiper
        @on-slide="slide"
        v-model="index"
        :loop="true"
        :auto="false"
        effect="slide"
        direction="horizontal"
        :pagination="true"
      >
        <sv-swiper-item>
          <img src="http://jiangbei.online/images/swiper1.jpg" />
        </sv-swiper-item>
        <sv-swiper-item>
          <img src="http://jiangbei.online/images/swiper2.jpg" />
        </sv-swiper-item>
        <sv-swiper-item>
          <img src="http://jiangbei.online/images/swiper3.jpg" />
        </sv-swiper-item>
        <sv-swiper-item>
          <img src="http://jiangbei.online/images/swiper4.jpg" />
        </sv-swiper-item>
      </sv-swiper>
    </div>
    <div class="demo-title">垂直方向循环</div>
    <div class="demo-container">
      <sv-swiper
        @on-slide="slide1"
        v-model="index1"
        :loop="true"
        :auto="false"
        effect="slide"
        direction="vertical"
        :pagination="true"
      >
        <sv-swiper-item>
          <img src="http://jiangbei.online/images/swiper1.jpg" />
        </sv-swiper-item>
        <sv-swiper-item>
          <img src="http://jiangbei.online/images/swiper2.jpg" />
        </sv-swiper-item>
        <sv-swiper-item>
          <img src="http://jiangbei.online/images/swiper3.jpg" />
        </sv-swiper-item>
        <sv-swiper-item>
          <img src="http://jiangbei.online/images/swiper4.jpg" />
        </sv-swiper-item>
      </sv-swiper>
    </div>
    <div class="demo-title">手动切换的文字型左右轮播</div>
    <div class="demo-container">
      <sv-swiper
        v-model="index2"
        @on-slide="slide2"
        direction="horizontal"
        :pagination="true"
      >
        <sv-swiper-item v-for="(i, index) in 7" :key="index">{{
          index
        }}</sv-swiper-item>
      </sv-swiper>
      <div class="demo-btn-container">
        <sv-button
          type="info"
          size="small"
          icon="arrow-right"
          position="right"
          @click.native="slideTo(7)"
          >下一页</sv-button
        >
        <sv-button type="info" size="small" icon="bell"
          >当前页 {{ index2 }}</sv-button
        >
      </div>
    </div>

    <div class="demo-title">渐隐渐显</div>
    <div class="demo-container">
      <sv-swiper
        @on-slide="slide3"
        v-model="index3"
        :loop="true"
        :auto="false"
        effect="fade"
        direction="horizontal"
        :pagination="true"
      >
        <sv-swiper-item>
          <img src="http://jiangbei.online/images/swiper1.jpg" />
        </sv-swiper-item>
        <sv-swiper-item>
          <img src="http://jiangbei.online/images/swiper2.jpg" />
        </sv-swiper-item>
        <sv-swiper-item>
          <img src="http://jiangbei.online/images/swiper3.jpg" />
        </sv-swiper-item>
        <sv-swiper-item>
          <img src="http://jiangbei.online/images/swiper4.jpg" />
        </sv-swiper-item>
      </sv-swiper>
    </div>
    <div class="demo-title">
      异步加载
      <sv-button
        type="info"
        size="small"
        icon="plus"
        position="right"
        @click.native="add"
        >Add</sv-button
      >
      <sv-button
        type="info"
        size="small"
        icon="plus"
        position="right"
        @click.native="deletefn"
        >delete</sv-button
      >
    </div>
    <div class="demo-container">
      <div class="demo-swiper-box">
        <sv-swiper
          v-model="index4"
          :loop="true"
          :auto="false"
          effect="slide"
          :pagination="true"
          @on-slide="slide4"
          ref="asyncdom"
        >
          <sv-swiper-item v-for="(img, i) in imgList" :key="i">
            <img :src="img" />
          </sv-swiper-item>
        </sv-swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
const route = {
  tags: '功能组件',
  label: 'swiper',
  path: 'swiper'
}
export default {
  ...route,
  data() {
    return {
      index: 0,
      index1: 0,
      index2: 5,
      index3: 1,
      index4: 0,
      imgList: [
        'http://jiangbei.online/images/swiper1.jpg',
        'http://jiangbei.online/images/swiper2.jpg',
        'http://jiangbei.online/images/swiper3.jpg',
        'http://jiangbei.online/images/swiper4.jpg'
      ]
    }
  },
  watch: {},
  created() {
    this.commitRoute(route)
  },
  methods: {
    ...mapMutations({
      commitRoute: 'changeRoute'
    }),
    slide(index) {
      //console.log(index)
    },
    slide1(index) {
      //console.log(index)
    },
    slide2(index) {
      //console.log(index)
    },
    slideTo(length) {
      if (this.index2 < length - 1) {
        this.index2++
      } else {
        this.index2 = 0
      }
    },
    slide3(index) {
      // console.log(index)
    },
    slide4(index) {
      //console.log(index)
    },
    add() {
      this.imgList.push('http://jiangbei.online/images/swiper5.jpg')
    },
    deletefn() {
      this.imgList.pop()
    }
  }
}
</script>

<style lang="less">
.demo-container .sv-swiper {
  height: 180px;
  line-height: 180px;
  font-size: 50px;
}
.demo-swiper-box {
  height: 180px;
}
</style>
```

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| index | v-model绑定 | number | - | 0 |
| loop | 是否循环 | boolean | - | true |
| auto | 是否自动循环 | boolean | - | false |
| effect | 类型 | string | slide/fade | slide |
| direction | 方向 | string | horizontal/vertical | horizontal |
| pagination | 是否显示分页 | boolean | - | false |
| delayed | 自动滑动的间隔时间 | number | - | 2000 |
| disabledHand | 禁用手动滑动 | boolean | - | false |
</ClientOnly>

<ClientOnly>
<font size=5>Event</font>
| 参数| 说明 | 回调参数 |
| :------ | ------ | ------ |
| on-slide | 滑动过程中触发的函数 | 下标 |
</ClientOnly>
