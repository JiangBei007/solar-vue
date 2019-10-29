<template>
  <div ref="small-swiper-root" class="sv-swiper">
    <div class="sv-swiper-container" :class="classNames">
      <slot name="sv-swiper-slot">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </slot>
    </div>
    <div v-if="pagination" class="sv-swiper-pagination">
      <span v-for="(it, ind) in lth" :key="ind" :class="{ 'sv-swiper-active': ind == index }"></span>
    </div>
  </div>
</template>

<script>
import Swiper from 'small-swiper'
export default {
  name: 'sv-swiper',
  mounted() {
    this.init()
  },
  watch: {
    index(nvl) {
      this.swiper.moveTo(nvl)
    }
  },
  model: {
    prop: 'index',
    event: 'on-slide'
  },
  props: {
    index: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    },
    auto: {
      type: Boolean,
      default: false
    },
    effect: {
      type: String,
      validator(value) {
        return ['slide', 'fade'].indexOf(value) !== -1
      },
      default: 'slide'
    },
    delayed: {
      type: Number,
      default: 2000
    },
    direction: {
      type: String,
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      },
      default: 'horizontal'
    },
    slideWidth: Number,
    pagination: {
      type: Boolean,
      default: false
    },
    disabledHand: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      lth: 0
    }
  },
  computed: {
    classNames() {
      return {
        'sv-swiper-lr':
          this.direction === 'horizontal' && this.effect === 'slide',
        'sv-swiper-tb': this.direction === 'vertical'
      }
    }
  },
  methods: {
    init() {
      const ref = this.$refs['small-swiper-root']
      const _this = this
      const config = {
        root: ref,
        loop: _this.loop,
        auto: _this.auto,
        delayed: _this.delayed,
        effect: _this.effect,
        direction: _this.direction, // "horizontal""vertical"
        index: _this.index, // 默认第一张
        callBack(index) {
          _this.$emit('on-slide', index)
        }
      }
      const swiper = new Swiper(config)
      this.swiper = swiper
      this.lth = swiper.length
    }
  }
}
</script>

