<template>
  <div
    class="sv-tab-wrap"
    :class="barPosition === 'top' ? 'sv-tab-bar-top' : ''"
  >
    <div class="sv-tab-container">
      <div
        class="sv-tab-self"
        :class="[
          { 'sv-tab-no-animate': !animate },
          { 'sv-tab-scrollable': scrollable }
        ]"
        ref="nav"
      >
        <slot></slot>
        <div
          v-if="animate"
          class="sv-tab-ink-bar"
          :class="barClass"
          :style="barStyle"
        >
          <span
            class="sv-tab-bar-inner"
            :style="innerBarStyle"
            v-if="customBarWidth"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SvTab',
  mounted() {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true
      }, 0)
    })
    if (this.value >= 0) {
      this.currentIndex = this.value
    }
    this.updateIndex()
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String],
    preventDefault: Boolean,
    scrollThreshold: {
      type: Number,
      default: 4
    },
    barPosition: {
      type: String,
      default: 'bottom',
      validator(val) {
        return ['bottom', 'top'].indexOf(val) !== -1
      }
    }
  },
  computed: {
    barLeft() {
      if (this.hasReady) {
        const nav = this.$refs.nav
        const child =
          this.$children[this.currentIndex || 0] || this.$children[0]
        const width = child.$el.getBoundingClientRect().width
        const count = this.scrollable ? nav.offsetWidth / width : this.number
        return `${this.currentIndex * (100 / count)}%`
      }
    },
    barRight() {
      if (this.hasReady) {
        const nav = this.$refs.nav
        const child =
          this.$children[this.currentIndex || 0] || this.$children[0]
        const width = child.$el.getBoundingClientRect().width
        const count = this.scrollable ? nav.offsetWidth / width : this.number
        return `${(count - this.currentIndex - 1) * (100 / count)}%`
      }
    },
    // when prop:custom-bar-width
    innerBarStyle() {
      return {
        width:
          typeof this.customBarWidth === 'function'
            ? this.customBarWidth(this.currentIndex)
            : this.customBarWidth,
        backgroundColor: this.barActiveColor || this.activeColor
      }
    },
    // end
    barStyle() {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      }
      if (!this.customBarWidth) {
        commonStyle.backgroundColor = this.barActiveColor || this.activeColor
      } else {
        commonStyle.backgroundColor = 'transparent' // when=prop:custom-bar-width
      }
      return commonStyle
    },
    barClass() {
      return {
        'sv-tab-bar-transition-forward': this.direction === 'forward',
        'sv-tab-bar-transition-backward': this.direction === 'backward'
      }
    },
    scrollable() {
      return this.number > this.scrollThreshold
    }
  },
  watch: {
    currentIndex(val, oldVal) {
      oldVal > -1 &&
        this.$children[oldVal] &&
        (this.$children[oldVal].currentSelected = false)
      val > -1 &&
        this.$children[val] &&
        (this.$children[val].currentSelected = true)

      this.direction = val > oldVal ? 'forward' : 'backward'
      this.$emit('input', val)
      this.$emit('on-index-change', val, oldVal)
      this.hasReady && this.scrollToActiveTab()
    },
    index(val) {
      this.currentIndex = val
    },
    value(val) {
      this.index = val
    }
  },
  data() {
    return {
      index: -1,
      currentIndex: this.index,
      number: this.$children.length,
      direction: 'forward',
      right: '100%',
      hasReady: false
    }
  },
  methods: {
    updateIndex() {
      if (!this.$children || !this.$children.length) return
      let children = this.$children
      this.number = children.length

      for (let i = 0; i < children.length; i++) {
        children[i].currentIndex = i
      }
      const childSelected = children.filter((child, index) => {
        return child.currentSelected
      })
      if (childSelected.length) {
        this.index = children.indexOf(childSelected[0])
      } else {
        this.index = 0
      }
    },
    scrollToActiveTab() {
      if (!this.scrollable || !this.$children || !this.$children.length) {
        return
      }
      const currentIndexTab = this.$children[this.currentIndex].$el
      let count = 0
      // scroll animation
      const step = () => {
        const scrollDuration = 15
        const nav = this.$refs.nav
        const distance =
          (currentIndexTab.offsetLeft -
            (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 -
            nav.scrollLeft) /
          scrollDuration
        nav.scrollLeft += distance
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step)
        }
      }
      window.requestAnimationFrame(step)
    }
  }
}
</script>
