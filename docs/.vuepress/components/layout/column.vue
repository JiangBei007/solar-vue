<template>
  <div class="column-container">
    <strong>{{ title }}</strong>
    <div class="column-container-icon" @click="handle">
      <span>{{ tips }}</span>
      <i></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'column',
  props: {
    tips: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    handle() {
      this.$emit('handle')
    }
  }
}
</script>

<style lang="scss">
.column-container {
  padding: 16px 24px;
  border-bottom: 1px solid #e8e8e8;
  color: rgba(0, 0, 0, 0.65);
  border-radius: 4px 4px 0 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  .column-container-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  span {
    margin-right: 5px;
  }
  i {
    display: block;
    height: 16px;
    width: 16px;
    background: url(../../public/images/open-code.png) no-repeat center;
    background-size: 16px;
    transform: scale(1);
    transition: all 0.5s;
  }
  i:hover {
    transform: scale(1.5);
    transition: all 0.5s;
  }
}
</style>
