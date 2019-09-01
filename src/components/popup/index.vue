<template>
<div class="misty-popup">
	<transition name="misty-popup-fade"><div v-if="value" class="misty-popup-mask" @click="close"></div></transition>
	<transition name="misty-popup-bottom">
		<div v-if="value" class="misty-popup-content">
			<slot></slot>
		</div>
	</transition>
</div>
</template>

<script>
export default{
	name:"rmPopup",
	model:{
		prop:"value",
		event:"change"
	},
	props:{
		value:{
			type:Boolean,
			default:false,
		}
	},
	methods:{
		close(){
			this.$emit("change",false)
			this.$emit("close")
		}
	}
}
</script>

<style>
.misty-popup-fade-enter-active,
.misty-popup-fade-leave-active {
	transition: opacity 0.5s;
}
.misty-popup-fade-enter, .misty-popup-fade-leave-to{
	opacity: 0;
}
.misty-popup-bottom-enter-active,
.misty-popup-bottom-leave-active {
	transition: transform 0.5s;
}
.misty-popup-bottom-enter, .misty-popup-bottom-leave-to{
	transform: translateY(100%);
}
.misty-popup-mask {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 1000;
}
.misty-popup-content {
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	background: #fff;
	z-index: 1001;
}
</style>
