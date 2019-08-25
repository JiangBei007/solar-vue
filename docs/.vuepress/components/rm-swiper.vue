<template>
	<rm-card>
		<rm-body>
			<div class="rm-swiper-con">
				<div class="lr">
					<div class="vui-title">左右方向循环</div>
					<rm-swiper @on-slide="slide" v-model="index" :loop="true" :auto="false" effect="slide" direction="horizontal" :pagination="true">
						<template slot="misty-slide-list">
							<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>
						</template>
					</rm-swiper>
				</div>
				<div class="lr">
					<div class="vui-title">左右方向不循环</div>
					<rm-swiper @on-slide="slide" v-model="index" :loop="false" :auto="false" effect="slide" direction="horizontal" :pagination="true">
						<template slot="misty-slide-list">
							<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>
						</template>
					</rm-swiper>
				</div>
				<div class="tb">
					<div class="vui-title">纵向滚动循环</div>
					<rm-swiper @on-slide="slide1" v-model="index1" :loop="true" :auto="false" effect="slide" direction="vertical" :pagination="true">
						<template slot="misty-slide-list">
							<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>
						</template>
					</rm-swiper>
				</div>
				<div class="tb">
					<div class="vui-title">纵向滚动不循环</div>
					<rm-swiper @on-slide="slide1" v-model="index1" :loop="false" :auto="false" effect="slide" direction="vertical" :pagination="true">
						<template slot="misty-slide-list">
							<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>
						</template>
					</rm-swiper>
				</div>
				<div>
					<div class="vui-title">手动切换的文字型左右轮播</div>
					<rm-swiper v-model="index2" @on-slide="slide2" direction="horizontal" :pagination="true">
						<template slot="misty-slide-list">
							<div v-for="(i, index) in 7" :key="index">{{ index }}</div>
						</template>
					</rm-swiper>
					<div class="vui-button" @click="slideTo(7)">下一页</div>
					<div class="vui-button" @click="slideTo(7)">当前页{{ index2 }}</div>
				</div>

				<div class="vui-title">渐隐渐显</div>
				<rm-swiper @on-slide="slide3" v-model="index3" :loop="true" :auto="false" effect="fade" direction="horizontal" :pagination="true">
					<template slot="misty-slide-list">
						<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>
						<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>
						<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>
						<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>
					</template>
				</rm-swiper>
				<div class="vui-title">异步加载</div>
				<rm-swiper v-if="imgList.length" v-model="index4" :loop="true" :auto="false" effect="slide" :pagination="true">
					<template slot="misty-slide-list">
						<div v-for="(img, i) in imgList" :key="i"><img :src="img" /></div>
					</template>
				</rm-swiper>
			</div>
		</rm-body>
		<template v-slot:code>
			<pre v-highlightjs><code class="vue">{{code}}</code></pre>
		</template>
	</rm-card>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import RmSwiper from '../../../src/Swiper/index'
Vue.use(VueHighlightJS)

export default {
	components: {
		RmSwiper
	},
	data() {
		return {
			index: 0,
			index1: 0,
			index2: 5,
			index3: 1,
			index4: 0,
			imgList: [],
			code: `,
			<div class="rm-swiper-con">
				<div class="lr">
					<div class="vui-title">左右方向循环</div>
					<rm-swiper @on-slide="slide" v-model="index" :loop="true" :auto="false" effect="slide" direction="horizontal" :pagination="true">
						<template slot="misty-slide-list">
							<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>
						</template>
					</rm-swiper>
				</div>
				<div class="lr">
					<div class="vui-title">左右方向不循环</div>
					<rm-swiper @on-slide="slide" v-model="index" :loop="false" :auto="false" effect="slide" direction="horizontal" :pagination="true">
						<template slot="misty-slide-list">
							<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>
						</template>
					</rm-swiper>
				</div>
				<div class="tb">
					<div class="vui-title">纵向滚动循环</div>
					<rm-swiper @on-slide="slide1" v-model="index1" :loop="true" :auto="false" effect="slide" direction="vertical" :pagination="true">
						<template slot="misty-slide-list">
							<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>
						</template>
					</rm-swiper>
				</div>
				<div class="tb">
					<div class="vui-title">纵向滚动不循环</div>
					<rm-swiper @on-slide="slide1" v-model="index1" :loop="false" :auto="false" effect="slide" direction="vertical" :pagination="true">
						<template slot="misty-slide-list">
							<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>
							<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>
						</template>
					</rm-swiper>
				</div>
				<div>
					<div class="vui-title">手动切换的文字型左右轮播</div>
					<rm-swiper v-model="index2" @on-slide="slide2" direction="horizontal" :pagination="true">
						<template slot="misty-slide-list">
							<div v-for="(i, index) in 7" :key="index">{{ index }}</div>
						</template>
					</rm-swiper>
					<div class="vui-button" @click="slideTo(7)">下一页</div>
					<div class="vui-button" @click="slideTo(7)">当前页{{ index2 }}</div>
				</div>

				<div class="vui-title">渐隐渐显</div>
				<rm-swiper @on-slide="slide3" v-model="index3" :loop="true" :auto="false" effect="fade" direction="horizontal" :pagination="true">
					<template slot="misty-slide-list">
						<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /></div>
						<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /></div>
						<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /></div>
						<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /></div>
					</template>
				</rm-swiper>
				<div class="vui-title">异步加载</div>
				<rm-swiper v-if="imgList.length" v-model="index4" :loop="true" :auto="false" effect="slide" :pagination="true">
					<template slot="misty-slide-list">
						<div v-for="(img, i) in imgList" :key="i"><img :src="img" /></div>
					</template>
				</rm-swiper>
			</div>

export default {
	components: {
		RmSwiper
	},
	data() {
		return {
			index: 0,
			index1: 0,
			index2: 5,
			index3: 1,
			index4: 0,
			imgList: [],
		}
	},
	watch: {},
	created() {
		const arr = [
			'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg',
			'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg',
			'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg',
			'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg'
		]
		setTimeout(()=>{
			this.imgList.push(...arr)
		},2000)
	},
	methods: {
		slide(index) {
			console.log(index)
		},
		slide1(index) {
			console.log(index)
		},
		slide2(index) {
			console.log(index)
		},
		slideTo(length) {
			if (this.index2 < length - 1) {
				this.index2++
			} else {
				this.index2 = 0
			}
		},
		slide3(index) {
			console.log(index)
		}
	}
}

.rm-swiper-con {
	color: #fff;
	img {
		height: 100%;
		width: 100%;
		display: block;
	}
	.misty-container{
		>div:nth-child(odd){
			background:#66c6f2;
		}
		>div:nth-child(even){
			background:#39a9ed;
		}
	}
}
.rm-swiper-con .misty-swiper {
	height: 180px;
	line-height: 180px;
	font-size: 50px;
}

`
		}
	},
	watch: {},
	created() {
		const arr = [
			'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg',
			'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg',
			'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg',
			'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg'
		]
		setTimeout(()=>{
			this.imgList.push(...arr)
		},2000)
	},
	methods: {
		slide(index) {
			console.log(index)
		},
		slide1(index) {
			console.log(index)
		},
		slide2(index) {
			console.log(index)
		},
		slideTo(length) {
			if (this.index2 < length - 1) {
				this.index2++
			} else {
				this.index2 = 0
			}
		},
		slide3(index) {
			console.log(index)
		}
	}
}
</script>

<style lang="scss">
.rm-swiper-con {
	color: #fff;
	img {
		height: 100%;
		width: 100%;
		display: block;
	}
	.misty-container{
		>div:nth-child(odd){
			background:#66c6f2;
		}
		>div:nth-child(even){
			background:#39a9ed;
		}
	}
}
.rm-swiper-con .misty-swiper {
	height: 180px;
	line-height: 180px;
	font-size: 50px;
}
</style>
