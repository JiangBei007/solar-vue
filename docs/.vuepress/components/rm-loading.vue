<template>
	<rm-card>
		<rm-body>
			<div class="s-loading">
				<rm-loading :show="show" :icon="icon">加载中</rm-loading>
				<div class="btn" @click="load('')">点击我显示</div>
				<div class="btn" @click="load('spot')">点击我显示spot--loading</div>
				<div class="btn" @click="load('spotcolor')">点击我显示spotcolor--loading</div>
				<div class="btn" @click="load('circle')">点击我显示circle--loading</div>
			</div>
		</rm-body>
		<template v-slot:code>
			<pre v-highlightjs><code class="vue">{{code}}</code></pre>
		</template>
	</rm-card>

</template>

<script>
	import Vue from "vue";
	import VueHighlightJS from 'vue-highlightjs'
	import RmLoading from "../../../src/Loading/index"
	Vue.use(VueHighlightJS)
	export default {
		name: "m-loading",
		components: {
			RmLoading
		},
		data() {
			return {
				show: false,
				icon: "",
				code: `
			<div class="s-loading">
				<rm-loading :show="show" :icon="icon">加载中</rm-loading>
				<div class="btn"  @click="load('')">点击我显示</div>
				<div class="btn"  @click="load('spot')">点击我显示spot--loading</div>
				<div class="btn"  @click="load('spotcolor')">点击我显示spotcolor--loading</div>
				<div class="btn"  @click="load('circle')">点击我显示circle--loading</div>
			</div>

	import rmLoading from "../../../src/Loading/index"

	export default {
		name: "s-loading",
		components: {
			rmLoading
		},
		data() {
			return {
				show:false,
				icon:"",
			}
		},
		load(type){
			this.icon = type;
			this.show = true;
			setTimeout(()=>{
				this.show = false;
			},2000)
		}
	}
	
.s-loading .btn{
	background: linear-gradient(90deg, rgb(29, 98, 240), rgb(25, 213, 253));
    color: rgb(255, 255, 255);
	position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
	margin-top: 10px;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: 18px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    line-height: 2.33333333;
    border-radius: 5px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    overflow: hidden;
	width: 88%;
}
`
					.replace(/^ {8}/gm, "").trim(),
			}
		},
		methods: {
			load(type) {
				this.icon = type;
				this.show = true;
				setTimeout(() => {
					this.show = false;
				}, 2000)
			}
		}
	}
</script>

<style>
	.s-loading .btn {
		background: linear-gradient(90deg, rgb(29, 98, 240), rgb(25, 213, 253));
		color: rgb(255, 255, 255);
		position: relative;
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 10px;
		padding-left: 14px;
		padding-right: 14px;
		box-sizing: border-box;
		font-size: 18px;
		text-align: center;
		text-decoration: none;
		color: #FFFFFF;
		line-height: 2.33333333;
		border-radius: 5px;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		overflow: hidden;
		width: 88%;
	}
</style>
