<template>
  <div class="sv-swiper-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sv-swiper-item',
  mounted() {
    this.$parent && this.$parent.init()
  },
  beforeDestroy() {
    const $parent = this.$parent
    this.$nextTick(() => {
      $parent && $parent.reset()
    })
  }
}
</script>
