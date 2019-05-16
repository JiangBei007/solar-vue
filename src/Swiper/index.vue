<template>
	<div ref="small-swiper-root" class="small-beautiful-swiper">
		<div class="small-beautiful-box" :class="classNames">
			<slot name="small-beautiful-slide-list">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</slot>
		</div>
		<div v-if="pagination">
			<span v-for="(it,ind) in lth" :key="ind" :class="{'small-beautiful-swiper-active':ind==index}"></span>
		</div>
	</div>
</template>

<script>
import SmallSwiper from 'small-swiper'
export default {
  name: 'vui-swiper',
  mounted () {
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
      callBack (index) {
        _this.$emit('on-slide', index)
      }
    }
    const swiper = new SmallSwiper(config)
    this.swiper = swiper
    this.lth = swiper._length
  },
  watch: {
    index (nvl) {
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
      validator (value) {
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
      validator (value) {
	        	return ['horizontal', 'vertical'].indexOf(value) !== -1
	     	},
	     	default: 'horizontal'
    },
    slideWidth: Number,
    pagination: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      lth: 0
    }
  },
  computed: {
    classNames () {
      return {
        'small-beautiful-lr': this.direction === 'horizontal' && this.effect === 'slide',
        'small-beautiful-tb': this.direction === 'vertical'
      }
    }
  },
  methods: {

  }
}
</script>

<style>
@import url("../static/css/reset.css");
.small-beautiful-swiper{
	height: 300px;
	width: 100%;
	overflow: hidden;
	background: moccasin;
	position: relative;
}
.small-beautiful-swiper .small-beautiful-box{
	height: 300px;
	width: 100%;
}
.small-beautiful-swiper .small-beautiful-lr{
	display: flex;
}
.small-beautiful-swiper .small-beautiful-box>div{
	flex-shrink:0;
	height:100%;
	width: 100%;
	line-height: 500px;
	text-align: center;
	display: flex;
	justify-content: center;
}

.small-beautiful-swiper img{
	align-items: center;
	display: block;
	width: 100%;
}
.small-beautiful-swiper >div:nth-child(2){
	position: absolute;
	bottom: 0;
	left: 0;
	text-align: center;
	width: 100%;
	height: 20px;
	line-height: 20px;
}
.small-beautiful-swiper >div:nth-child(2)>span{
	display: inline-block;
	width: 10px;
	height: 10px;
	border: 1px solid #fff;
	border-radius: 50%;
	margin: 0 3px;
	background: rgba(0,0,0,0.3);
	transition: width .3s;
}
.small-beautiful-swiper >div:nth-child(2)>span.small-beautiful-swiper-active{
	width:24px;
	border-radius: 10px;
	transition: width .3s;
}
</style>
