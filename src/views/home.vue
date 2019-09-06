<template>
	<div :style="{height:currheight+'px',overflow:'hidden'}">
		<img src="./../static/images/mobile.png" style="height: 100%;width: 100%;"/>
	</div>
</template>

<script>
export default{
	path:'/',
	data(){
		return{
			currheight:window.innerHeight
		}
	}
}
</script>

<style>
</style>
