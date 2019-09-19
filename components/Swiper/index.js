<template>
	<div ref="small-swiper-root" class="misty-swiper">
		<div class="misty-container" :class="classNames">
			<slot name="misty-slide-list">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</slot>
		</div>
		<div v-if="pagination" class="misty-swiper-pagination"><span v-for="(it, ind) in lth" :key="ind" :class="{ 'misty-swiper-active': ind == index }"></span></div>
	</div>
</template>

<script>
import Swiper from 'small-swiper'
export default {
	name: 'rm-swiper',
	mounted() {
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
		this.lth = swiper._length
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
				'misty-lr': this.direction === 'horizontal' && this.effect === 'slide',
				'misty-tb': this.direction === 'vertical'
			}
		}
	},
	methods: {}
}
</script>

<style>
@import url('../../styles/css/reset.css');

.misty-swiper {
	height: 300px;
	width: 100%;
	overflow: hidden;
	background: moccasin;
	position: relative;
	cursor: pointer;
}

.misty-swiper .misty-container {
	height: 100%;
	width: 100%;
}

.misty-swiper .misty-lr {
	display: flex;
}

.misty-swiper .misty-container > div {
	flex-shrink: 0;
	height: 100%;
	width: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
}

.misty-swiper img {
	align-items: center;
	display: block;
	width: 100%;
}

.misty-swiper .misty-swiper-pagination {
	position: absolute;
	display: flex;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 20px;
	justify-content:center;
	align-items: center;
}

.misty-swiper .misty-swiper-pagination span {
	display: inline-block;
	width: 5px;
	height: 5px;
	border: 1px solid #fff;
	border-radius: 50%;
	margin: 0 2px;
	background: rgba(0, 0, 0, 0.3);
	transition: width 0.3s;
}

.misty-swiper .misty-swiper-pagination .misty-swiper-active {
	background: rgba(255, 255, 255, 0.8);
	border-radius: 5px;
	transition: width 0.3s;
}
</style>
