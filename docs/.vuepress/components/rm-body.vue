<template>
	<div class="vui-body">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:"m-body",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.vui-body{
	width: 375px;
	height: 600px;
	border-radius: 5px;
	border-bottom: 1px solid #ccc;
	box-shadow: 0 0 3px 0 #ccc;
	margin: 0 auto;
	overflow-y: scroll;
}
.vui-body::-webkit-scrollbar {
    width:1px;  
    height:2px;
}
</style>
