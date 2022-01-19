<template>
  <div class="fine-scroll-container">
    <div>
      <slot name="header"></slot>
    </div>
    <div class="fine-scroll-body">
      <div
        :style="refreshStatusStyle"
        ref="refreshBox"
        class="fine-scroll-refresh-container"
      >
        <div class="fine-scroll-refresh" v-if="refresh">
          {{ getTextByStatus }}
        </div>
        <slot></slot>
        <div ref="downdom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getScroller, getScrollTop } from 'solar-vue/utils/scroll.js'
import { TouchMixin } from 'solar-vue/utils/touch.js'
export default {
  name: 'sv-scroll-view',
  mixins: [TouchMixin],
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    offset: {
      type: Number,
      default: 20
    },
    refresh: {
      type: Boolean,
      default: true
    },
    pullDistance: {
      type: Number,
      default: 50
    },
    animationDuration: {
      type: [Number, String],
      default: 300
    },
    successDuration: {
      type: [Number, String],
      default: 500
    },
    pulling: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    pulling(nvl) {
      if (!nvl) {
        this.status = 4
        this.loaded()
      }
    }
  },
  computed: {
    refreshStatusStyle() {
      return {
        transitionDuration: `${this.duration}ms`,
        transform: this.distance ? `translate3d(0,${this.distance}px, 0)` : ''
      }
    },
    getTextByStatus() {
      const status = this.status
      switch (status) {
        case 0:
          return ''
        case 1:
          return '下拉刷新'
        case 2:
          return '松开手刷新'
        case 3:
          return '刷新中...'
        case 4:
          return '刷新成功'
      }
      return ''
    }
  },
  data() {
    return {
      ceiling: null,
      distance: 0, //下拉距离
      duration: 0, //下拉延时
      status: 0,
      state: 'pending'
    }
  },
  mounted() {
    this.scroller = getScroller(this.$el)
    this.scroller.addEventListener('scroll', this.scroll)
    this.refreshBox = this.$refs.refreshBox
    this.bindTouchEvent(this.refreshBox)
  },
  methods: {
    onTouchStart(event) {
      if (!this.refresh) return
      this.ceiling = getScrollTop(this.scroller) === 0
      if (!this.ceiling) return
      if (this.state === 'resolved') {
        return
      }
      this.duration = 0
      this.touchStart(event)
    },
    onTouchMove(event) {
      if (!this.refresh || !this.ceiling) return
      if (this.state === 'resolved') {
        return event.preventDefault()
      }
      this.duration = 0
      this.status = 1
      this.touchMove(event)
      if (this.deltaY >= 0 && this.direction === 'vertical') {
        event.preventDefault()
        this.setDistance(this.offsetY)
      }
    },
    onTouchEnd() {
      if (!this.refresh || !this.ceiling) return
      if (this.state === 'resolved') {
        return
      }
      this.duration = this.animationDuration
      if (this.status === 2) {
        this.status = 3
        this.state = 'resolved'
        this.distance = this.pullDistance
        this.$emit('update:pulling', true)
        this.$emit('refreshFn')
      } else {
        this.status = 'normal'
        this.distance = 0
      }
    },
    setDistance(offsetY) {
      const pullDistance = this.pullDistance
      if (offsetY > pullDistance) {
        if (offsetY < pullDistance * 2) {
          offsetY = pullDistance + (offsetY - pullDistance) / 2
        } else {
          offsetY = pullDistance * 1.5 + (offsetY - pullDistance * 2) / 4
        }
      }
      this.status = offsetY < pullDistance ? 1 : 2
      this.distance = Math.round(offsetY)
    },
    scroll() {
      if (this.loading) return
      this.$nextTick(() => {
        const scrollerRect = this.scroller.getBoundingClientRect()
        const downdomRect = this.$refs.downdom.getBoundingClientRect()
        const offset = this.offset
        if (downdomRect.top - scrollerRect.bottom <= offset) {
          this.$emit('update:loading', true)
          this.$emit('load')
        }
      })
    },
    loaded() {
      this.duration = 300
      setTimeout(() => {
        this.distance = 0
        this.state = 'pending'
      }, 300)
    }
  },
  beforeDestroy() {
    this.scroller.removeEventListener('scroll', this.scroll)
  }
}
</script>
