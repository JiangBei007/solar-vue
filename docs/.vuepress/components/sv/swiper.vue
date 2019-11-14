<template>
  <div>
    <layout-card>
      <div>
        <layout-column
          title="扫码体验"
          tips="查看源代码"
          url="swiper"
          @handle="show = true"
        ></layout-column>
      </div>
    </layout-card>
    <div class="file-blank"></div>
    <layout-card>
      <div class="site-introduce">
        <div class="site-introduce-title">介绍</div>
        <div class="site-introduce-text">
          <p>
            为了方便后期的维护，我们已经把此组件基于的class类抽离了出去单独封装
          </p>
          <p>我们尽可能地给您提供丰富细致的例子，如右侧-></p>
          <p>
            如果您特殊需要，你可以单独下载我们的
            <a href="https://www.npmjs.com/package/small-swiper" target="blank"
              >swiper</a
            >
            插件，自己实现符合您需求的组件使用，我们为您提供了丰富的
            <a href="https://www.npmjs.com/package/small-swiper" target="blank"
              >例子</a
            >
          </p>
        </div>
      </div>
    </layout-card>
    <layout-code title="icon" v-model="show">
      <pre v-highlightjs><code class="vue">{{ code }}</code></pre>
    </layout-code>
  </div>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
Vue.use(VueHighlightJS)

export default {
  data() {
    return {
      show: false,
      code: `,
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

export default {
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
  methods: {
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


`
    }
  }
}
</script>
