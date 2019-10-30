<template>
  <div class="column-container">
    <div class="column-qr-box">
      <span>{{ title }}</span>
      <div class="column-qr-container">
        <img src="./../../public/images/qr.png" />
        <div class="column-qr" ref="qrcode"></div>
      </div>
    </div>
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
    },
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      prefix: 'http://jiangbei.online/solar-vue/mobile/index.html#/'
    }
  },
  mounted() {
    const root = this.$refs['qrcode']
    new QRCode(root, {
      width: 100,
      height: 100
    }).makeCode(this.prefix + this.url)
  },
  methods: {
    handle() {
      this.$emit('handle')
    }
  }
}
</script>

<style lang="less">
.column-container {
  padding: 16px 24px;
  border-bottom: 1px solid #e8e8e8;
  color: rgba(0, 0, 0, 0.65);
  border-radius: 4px 4px 0 0;
  background: #fff;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  line-height: 1.2;
  .column-qr-box {
    display: flex;
    align-items: center;
  }
  .column-qr-container {
    width: 16px;
    height: 16px;
    position: relative;
    > img {
      opacity: 0.8;
    }
    > img:hover {
      opacity: 1;
    }
    .column-qr {
      border: 1px solid #e5e5e5;
      padding: 10px;
      background: #fff;
      position: absolute;
      z-index: 10000;
      top: 30px;
      left: -67px;
      transform: scale(0);
      transform-origin: 50% 0;
      transition: all 0.3s;
      border-radius: 3px;
      img {
        width: 130px;
        height: 130px;
        max-width: 130px;
      }
    }
    .column-qr::after {
      content: '';
      position: absolute;
      top: -16px;
      left: 67px;
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid #e5e5e5;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    }
  }
  .column-qr-container:hover {
    .column-qr {
      transform: scale(1);
      transition: all 0.3s;
      transform-origin: 50% 0;
    }
  }
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
