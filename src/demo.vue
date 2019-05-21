<template>
  <div>
		<div class="rm-swiper-con">
			<div class="lr">
				<h5>左右方向循环</h5>
				<rm-swiper 
				@on-slide="slide" 
				v-model="index"
				:loop="true"
				:auto="false"
				effect="slide"
				direction="horizontal"
				:pagination="true">
					<template slot="misty-slide-list">
						<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /> </div>
						<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /> </div>
						<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /> </div>
						<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /> </div>
					</template>
				</rm-swiper>
			</div>
			<div class="lr">
				<h5>左右方向不循环</h5>
				<rm-swiper 
				@on-slide="slide" 
				v-model="index"
				:loop="false"
				:auto="false"
				effect="slide"
				direction="horizontal"
				:pagination="true">
					<template slot="misty-slide-list">
						<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /> </div>
						<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /> </div>
						<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /> </div>
						<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /> </div>
					</template>
				</rm-swiper>
			</div>
			<div class="tb">
				<h5>上下方向循环</h5>
				<rm-swiper 
				@on-slide="slide1" 
				v-model="index1"
				:loop="true"
				:auto="false"
				effect="slide"
				direction="vertical"
				:pagination="true">
					<template slot="misty-slide-list">
						<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /> </div>
						<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /> </div>
						<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /> </div>
						<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /> </div>
					</template>
				</rm-swiper>
			</div>
			<div class="tb">
				<h5>上下方向不循环</h5>
				<rm-swiper 
				@on-slide="slide1" 
				v-model="index1"
				:loop="false"
				:auto="false"
				effect="slide"
				direction="vertical"
				:pagination="true">
					<template slot="misty-slide-list">
						<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /> </div>
						<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /> </div>
						<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /> </div>
						<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /> </div>
					</template>
				</rm-swiper>
			</div>
			<div class="lr small-text">
				<h5>手动切换的文字型左右轮播</h5>
				<rm-swiper v-model="index2" @on-slide="slide2"  direction="horizontal" :pagination="true">
					<template slot="misty-slide-list">
						<div v-for="(i,index) in 7">{{index}}</div>
					</template>
				</rm-swiper>
				<div class="btn">
					<span v-for="(i,index) in 7"  @click="slideTo(index)">切换到第{{index}}个</span>
				</div>
			</div>
			<rm-swiper 
			@on-slide="slide3" 
			v-model="index3"
			:loop="true"
			:auto="false"
			effect="fade"
			direction="horizontal"
			:pagination="true">
				<template slot="misty-slide-list">
					<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /> </div>
					<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /> </div>
					<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /> </div>
					<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /> </div>
				</template>
			</rm-swiper>
		</div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data () {
    return {
      index:0,
      index1:0,
      index2:5,
      index3:1,
    }
  },
  computed: {

  },
  methods:{
  	slide(index){
  		console.log(index)
  	},
  	slide1(index){
  		console.log(index)
  	},
  	slide2(index){
  		console.log(index)
  	},
  	slideTo(index){
  		this.index2 = index;
  	},
  	slide3(index){
  		console.log(index)
  	},
  }
}
</script>
<style>
.rm-swiper-con{
	text-align: center;
	color: #ff711e;
}
.rm-swiper-con h3{
	line-height: 42px;
	font-size: 24px;
}
.rm-swiper-con>.lr h5{
	line-height: 32px;
	font-size: 16px;
}
.rm-swiper-con>.tb h5{
	line-height: 42px;
	font-size: 14px;
}
.rm-swiper-con .btn{
	display: flex;
	align-items: center;
	justify-content:space-around;
}
.rm-swiper-con .btn span{
	border: .5px solid #E5E5E5;
	display: block;
	padding: 5px 10px;
}
.small-text .rm-slide >div:nth-child(1){
	height: 300px;
}
.small-text .rm-slide >div:nth-child(1)>div{
	line-height:300px ;
	background: rgba(0,0,0,0.3);
	color: #fff;
	font-size: 28px;
}
</style>

