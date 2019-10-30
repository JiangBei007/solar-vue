<template>
  <div>
    <layout-card>
      <div>
        <layout-column title="扫码体验" tips="查看源代码" url="swiper" @handle="show = true"></layout-column>
      </div>
    </layout-card>
    <div class="file-blank"></div>
    <layout-card>
      <div class="site-introduce">
        <div class="site-introduce-title">介绍</div>
        <div class="site-introduce-text">
          <p>为了方便后期的维护，我们已经把此组件基于的class类抽离了出去单独封装</p>
          <p>我们尽可能地给您提供丰富细致的例子，如右侧-></p>
          <p>
            如果您特殊需要，你可以单独下载我们的
            <a
              href="https://www.npmjs.com/package/small-swiper"
              target="blank"
            >swiper</a>
            插件，自己实现符合您需求的组件使用，我们为您提供了丰富的
            <a
              href="https://www.npmjs.com/package/small-swiper"
              target="blank"
            >例子</a>
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
        <template slot="sv-swiper-slot">
          <div>
            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_2.png" />
          </div>
          <div>
            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_3.png" />
          </div>
          <div>
            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_4.png" />
          </div>
          <div>
            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_6.png" />
          </div>
        </template>
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
        <template slot="sv-swiper-slot">
          <div>
            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_2.png" />
          </div>
          <div>
            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_3.png" />
          </div>
          <div>
            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_4.png" />
          </div>
          <div>
            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_6.png" />
          </div>
        </template>
      </sv-swiper>
    </div>
    <div class="demo-title">手动切换的文字型左右轮播</div>
    <div class="demo-container">
      <sv-swiper v-model="index2" @on-slide="slide2" direction="horizontal" :pagination="true">
        <template slot="sv-swiper-slot">
          <div v-for="(i, index) in 7" :key="index">{{ index }}</div>
        </template>
      </sv-swiper>
      <div class="demo-btn-container">
        <sv-button
          type="info"
          size="small"
          icon="arrow-right"
          position="right"
          @click.native="slideTo(7)"
        >下一页</sv-button>
        <sv-button type="info" size="small" icon="bell">当前页 {{ index2 }}</sv-button>
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
        <template slot="sv-swiper-slot">
          <div>
            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_2.png" />
          </div>
          <div>
            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_3.png" />
          </div>
          <div>
            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_4.png" />
          </div>
          <div>
            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_6.png" />
          </div>
        </template>
      </sv-swiper>
    </div>
    <div class="demo-title">
      异步加载
      <sv-button type="info" size="small" icon="plus" position="right" @click.native="add">Add</sv-button>
    </div>
    <div class="demo-container">
      <div class="demo-swiper-box">
        <sv-swiper
          v-if="flag&&imgList.length"
          v-model="index4"
          :loop="true"
          :auto="false"
          effect="slide"
          :pagination="true"
          ref="asyncdom"
        >
          <template slot="sv-swiper-slot">
            <div v-for="(img, i) in imgList" :key="i">
              <img :src="img" />
            </div>
          </template>
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
        'https://static.zhongan.com/website/tech/img/index/case_bg_qu_2.png',
        'https://static.zhongan.com/website/tech/img/index/case_bg_qu_3.png',
        'https://static.zhongan.com/website/tech/img/index/case_bg_qu_4.png',
        'https://static.zhongan.com/website/tech/img/index/case_bg_qu_6.png'
      ],
      flag: true
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
    add() {
      this.flag = false
      setTimeout(() => {
        this.imgList.push(
          'https://static.zhongan.com/website/factoryOnline/assets/images/index/pro9.png'
        )
        this.flag = true
      }, 100)
    }
  }
}

`
    }
  }
}
</script>

