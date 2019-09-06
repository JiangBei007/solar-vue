<template>
	<div class="layout-simulator" v-show="ifrboolean"><iframe :src="url"></iframe></div>
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
			src:'/dist/index.html#/',
			hash:''
		}
	}
}
</script>

<style lang="scss">
.layout-simulator {
	width: 320px;
	min-width: 320px;
	position: fixed;
	right: 20px;
	top: 0px;
	bottom: 0;
	margin: auto;
	height: 520px;
	overflow: hidden;
	background: #fafafa;
	border-radius: 6px;
	iframe {
		border: none;
		height: 100%;
		width: 100%;
	}
}
</style>
