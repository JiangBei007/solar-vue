<template>
  <div class="sv-swiper-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sv-swiper-item',
  mounted() {
    this.$parent.init()
  },
  beforeDestroy() {
    const $parent = this.$parent
    this.$nextTick(() => {
      $parent.reset()
    })
  }
}
</script>
