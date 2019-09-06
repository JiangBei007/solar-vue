<template>
  <div class="app">
	<router-view></router-view>
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
  	},
  	slide1(index){
  	},
  	slide2(index){
  	},
  	slideTo(index){
  		this.index2 = index;
  	},
  	slide3(index){
  	},
  }
}
</script>
<style>
 ::-webkit-scrollbar {
 	width:6px;
 	height:6px;
 }
 ::-webkit-scrollbar-track{
   background: rgb(239, 239, 239);
   border-radius:2px;
 }
 ::-webkit-scrollbar-thumb{
   background: #bfbfbf;
   border-radius:10px;
 }
 ::-webkit-scrollbar-thumb:hover{
   background: #333;
 }
 ::-webkit-scrollbar-corner{
   background: #179a16;
 }
.vui-body {
	width: 375px;
	height: 600px;
	border-radius: 5px;
	border-bottom: 1px solid #ccc;
	box-shadow: 0 0 3px 0 #ccc;
	margin: 0 auto;
	overflow-y: scroll;
	background: #f8f8f8;
	font-size: 14px;
}
.vui-body::-webkit-scrollbar {
	width: 1px;
	height: 2px;
}
.vui-title {
	font-size: 14px;
	padding: 30px 12px 5px;
	color: rgba(69, 90, 100, 0.6);
	background: #f8f8f8;
}
.vui-result {
	display: flex;
	margin-top: 10px;
	padding-left: 14px;
	padding-right: 14px;
	box-sizing: border-box;
	font-size: 14px;
	text-decoration: none;
	line-height: 28px;
	overflow: hidden;
}
.vui-result span {
	color: #f44;
	line-height: 28px;
}
.vui-result p {
	flex: 1;
	text-align: left;
	line-height: 28px;
}
.vui-button {
	background: linear-gradient(90deg, rgb(29, 98, 240), rgb(25, 213, 253));
	color: rgb(255, 255, 255);
	position: relative;
	display: inline-block;
	margin-left: auto;
	margin-right: auto;
	margin-top: 10px;
	padding-left: 14px;
	padding-right: 14px;
	box-sizing: border-box;
	font-size: 18px;
	text-align: center;
	text-decoration: none;
	color: #ffffff;
	line-height: 2.33333333;
	border-radius: 5px;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	overflow: hidden;
	min-width: 100px;
}
</style>

