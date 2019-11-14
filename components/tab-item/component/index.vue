<template>
  <div
    class="sv-tab-item"
    :class="[
      currentSelected ? activeClass : '',
      {
        'sv-tab-selected': currentSelected,
        'sv-tab-disabled': disabled
      }
    ]"
    :style="style"
    @click="onItemClick"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SvTabItem',
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    activeClass: String,
    disabled: Boolean
  },
  computed: {
    style() {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected
          ? this.$parent.activeColor
          : this.disabled
          ? this.$parent.disabledColor
          : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      }
    }
  },
  mounted() {
    this.$parent.updateIndex()
  },
  beforeDestroy() {
    const $parent = this.$parent
    this.$nextTick(() => {
      $parent.updateIndex()
    })
  },
  methods: {
    onItemClick() {
      if (this.$parent.preventDefault) {
        this.$parent.$emit('on-before-index-change', this.currentIndex)
        return
      }
      if (typeof this.disabled === 'undefined' || this.disabled === false) {
        this.currentSelected = true
        this.$parent.currentIndex = this.currentIndex
        this.$nextTick(() => {
          this.$emit('on-item-click', this.currentIndex)
        })
      }
    }
  },
  watch: {
    currentSelected(val) {
      if (val) {
        this.$parent.index = this.currentIndex
      }
    },
    selected(val) {
      this.currentSelected = val
    }
  },
  data() {
    return {
      currentIndex: -1,
      currentSelected: this.selected
    }
  }
}
</script>
