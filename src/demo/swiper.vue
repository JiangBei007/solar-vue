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
        'https://static.zhongan.com/website/tech/img/index/case_bg_qu_2.png',
        'https://static.zhongan.com/website/tech/img/index/case_bg_qu_3.png',
        'https://static.zhongan.com/website/tech/img/index/case_bg_qu_4.png',
        'https://static.zhongan.com/website/tech/img/index/case_bg_qu_6.png'
      ],
      flag: true
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
