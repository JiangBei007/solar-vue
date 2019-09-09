<template>
	<section class="layout-simulator" v-show="ifrboolean"><iframe :src="url"></iframe></section>
</template>

<script>
export default {
	watch:{
		'$route'(nvl){
			if(nvl.fullPath !== '/'){
				this.hash = nvl.hash.replace('#','')
			}
		}
	},
	computed:{
		url(){
			return this.src + this.hash
		}
	},
	data(){
		return{
			ifrboolean:true,
			src:'/mobile/index.html#/',
			hash:''
		}
	}
}
</script>

<style lang="scss">
.layout-simulator {
	width: 320px;
	min-width: 320px;
	position: absolute;
	right: 50%;
	margin-right: -160px;
	top: 50%;
	margin-top: -280px;
	height: 560px;
	overflow: hidden;
	border-radius: 6px;
	z-index:10;
	background: #f5f5f9;
	iframe {
		border: none;
		height: 100%;
		width: 100%;
	}
}
</style>
