<template>
  <div class="confirmation-process">
    <div class="confirmation-process-nav">
      <div class="confirmation-process-nav-container" ref="scrollBox">
        <div class="confirmation-process-nav-bgleft"></div>
        <div class="confirmation-process-nav-bgright"></div>
        <ul class="confirmation-process-nav-box" ref="scrollInner">
          <li
            v-for="(item, index) in list"
            :key="item.label"
            :class="{
              'confirmation-process-prev': stepIndex >= index,
              'confirmation-process-activenav': index === currentIndex
            }"
            @click="navTab(index)"
          >
            {{ item.label }}
            <span
              :class="{ 'cp-guide-confirm-next': stepIndex > index }"
            ></span>
          </li>
        </ul>
      </div>
      <div class="confirmation-process-close" @click="close"></div>
    </div>
    <div class="confirmation-process-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SvSubmitStep',
  props: {
    stepIndex: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    stepIndex: {
      handler(nvl) {
        this.currentIndex = Math.min(this.list.length - 1, nvl)
      },
      immediate: true
    },
    currentIndex: {
      handler(index) {
        this.setDistance(index)
      },
      immediate: true
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    navTab(index) {
      if (index > this.stepIndex) {
        const newIndex = Math.min(this.list.length - 1, this.stepIndex)
        this.setDistance(newIndex)
      } else {
        this.currentIndex = index
        this.setDistance(index)
      }
      this.$nextTick(() => {
        this.$emit('change', index)
      })
    },
    setDistance(index) {
      this.$nextTick(() => {
        const scrollBox = this.$refs.scrollBox
        const { distance, currentWidth } = this.getScrollDistance(index)
        scrollBox.scrollLeft =
          distance - (scrollBox.offsetWidth - currentWidth) / 2
      })
    },
    getScrollDistance(boundaryValue) {
      if (boundaryValue === 0) return 0
      const scrollInner = this.$refs.scrollInner
      const children = scrollInner.children
      let distance = 0
      const currentWidth = children[boundaryValue].offsetWidth
      for (let i = 0; i < boundaryValue; i++) {
        const child = children[i]
        distance += child.offsetWidth
      }
      return {
        distance,
        currentWidth
      }
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>
