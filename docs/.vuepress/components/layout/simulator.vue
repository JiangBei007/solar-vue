<template>
	<div class="layout-simulator"><iframe :src="url"></iframe></div>
</template>

<script>
export default {
	watch:{
		'$route'(nvl){
			console.log(nvl.fullPath)
			//this.hash = nvl.replace('#','')
		}
	},
	computed:{
		url(){
			return this.src + this.hash
		}
	},
	data(){
		return{
			src:'/dist/index.html#/',
			hash:'input'
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
	top: 70px;
	height: 520px;
	overflow: hidden;
	background: #fafafa;
	border-radius: 6px;
	box-shadow: #ebedf0 0 4px 12px;
	iframe {
		border: none;
		height: 100%;
		width: 100%;
	}
}
</style>
