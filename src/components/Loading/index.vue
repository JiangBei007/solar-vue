<template>
<div class="misty-loading" v-show="show"  v-stop>
  <div :class="iconClass">
  	<i :class="iconClass"></i>
  	<p><slot></slot></p>
  </div>
</div>
</template>

<script>
export default {
  name: 'rm-loading',
  directives: {
    stop: {
      bind (el) {
        el.addEventListener('touchmove', event => {
          event.preventDefault()
        })
      }
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'loading'
    }
  },
  computed: {
    iconClass () {
      return {
        spot: this.icon === 'spot',
        spotcolor: this.icon === 'spotcolor',
        circle: this.icon === 'circle'
      }
    }
  },
  data () {
    return {
      text: 'Loading'
    }
  }
}
</script>

<style>
@import url("../../styles/css/reset.css");
@keyframes FlowerCircle{
	from{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg);
	}
}
.misty-loading {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5000;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,.3);
}
.misty-loading>div.circle,
.misty-loading>div.spot,
.misty-loading>div.spotcolor
{
	background:transparent;
}
.misty-loading  >div{
  	position: absolute;
  	left: 0;
  	top: 0;
  	bottom: 0;
  	right: 0;
	margin:auto;
	width: 130px;
	height: 120px;
	background: hsla(0,0%,7%,.6);
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
  }
.misty-loading  >div i{
	display: block;
	width: 48PX;
	height: 48PX;
	background: transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat;
	background-size: 100%;
	margin: 4PX;
	animation: FlowerCircle 1s steps(12, end) infinite;
}
.misty-loading  >div i.spot{
	background:url("../../icons/loading-spot.png") no-repeat center;
	background-size: 100%;
}
.misty-loading  >div .spotcolor{
	background:url("../../icons/loading-spot-color.png") no-repeat center;
	background-size: 100%;
}
.misty-loading  >div .circle{
	background:url("../../icons/loading.png") no-repeat center;
	background-size: 100%;
}
.misty-loading  >div	p{
	line-height: 20PX;
	font-size: 12PX;
	text-align: center;
	color: #fff;
	width: 100%;
}
</style>
