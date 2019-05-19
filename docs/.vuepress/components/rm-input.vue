<template>
	<rm-card>
		<rm-body>
			<div class="s-input">
				<div>
					<div class="title">简单示例，只能输入10个字符</div>
					<rm-input title="只能输入10个字符：" v-model="val1" :max="10" type="text"></rm-input>
				</div>
				<div>
					<div class="title">电话号码</div>
					<rm-input title="电话号码：" v-model="val2" type="tel" :regexp="regexp" :isReturn="return1" placeholder="请输入电话号码"
					 @change="change2">
					</rm-input>
					<div class="btn" @click="output1">点击查看此次验证结果</div>
				</div>
				<div>
					<div class="title">身份证号</div>
					<rm-input title="身份证号：" v-model="val3" type="id" placeholder="请输入身份证号" :regexp="regexpid" :isReturn="return2">
					</rm-input>
					<div class="btn" @click="output2">点击查看此次验证结果</div>
				</div>
				<div>
					<div class="title">身份证号的年龄校验（0-180岁）</div>
					<rm-input title="身份证号：" v-model="val4" type="id" :regexp="regexpid" :isReturn="return3" :maxage="180" :minage="0"
					 placeholder="请输入身份证号" align="right" :warn="true" :getAge="getAge">
					</rm-input>
					<div class="btn" @click="output3">点击查看此次验证结果</div>
				</div>
			</div>
		</rm-body>
		<template v-slot:code>
			<pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
	</rm-card>

</template>

<script>
	import Vue from "vue";
	import VueHighlightJS from 'vue-highlightjs'
	import RmInput from "../../../src/Input/index"
	Vue.use(VueHighlightJS)

	export default {
		name: "m-input",
		components: {
			RmInput
		},
		created() {
			const telReg = /^[1][3,4,5,7,8][0-9]{9}$/;
			this.regexp = telReg;
			const idReg18 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
			this.regexpid = idReg18;
		},
		data() {
			return {
				val1: "",
				val2: "",
				val3: "",
				val4: "",
				return1: {},
				return2: {},
				return3: {},
				regexp: null,
				regexpid: null,
				code: `
<div class="s-input">
<div>
	<div class="title">简单示例，只能输入10个字符</div>
	<rm-input title="只能输入10个字符：" v-model="val1" :max="10" type="text"></rm-input>
</div>
<div>
	<div class="title">电话号码</div>
	<rm-input title="电话号码：" 
							v-model="val2" 
							type="tel" 
							:regexp="regexp"
							:isReturn="return1" 
							placeholder="请输入电话号码"
							@change="change2">
	</rm-input>
	<div class="btn" @click="output1">点击查看此次验证结果</div>
</div>
<div>
	<div class="title">身份证号</div>
	<rm-input title="身份证号：" 
							v-model="val3" 
							type="id" 
							placeholder="请输入身份证号"
							:regexp="regexpid"
							:isReturn="return2" >
	</rm-input>
	<div class="btn" @click="output2">点击查看此次验证结果</div>
</div>
<div>
	<div class="title">身份证号的年龄校验（0-180岁）</div>
	<rm-input title="身份证号：" 
							v-model="val4" 
							type="id" 
							:regexp="regexpid"
							:isReturn="return3"
							:maxage="180"
							:minage="0"
							placeholder="请输入身份证号"
							align="right"
							:warn="true"
							:getAge="getAge"
							>
	</rm-input>
	<div class="btn" @click="output3">点击查看此次验证结果</div>
</div>
</div>

import Vue from "vue";
import VueHighlightJS from 'vue-highlightjs'
import rmInput from "../../../src/Input/index"
Vue.use(VueHighlightJS)

export default{
	name:"s-input",
	components:{
		rmInput
	},
	created(){
		const telReg = /^[1][3,4,5,7,8][0-9]{9}$/;
		this.regexp = telReg;
		const idReg18 = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
		this.regexpid = idReg18;
	},
	data(){
		return{
			val1:"",
			val2:"",
			val3:"",
			val4:"",
			return1:{},
			return2:{},
			return3:{},
			regexp:null,
			regexpid:null,
		}
	},
	methods:{
		change2(val){
			
		},
		output1(){
			console.log(this.return1)
			alert(this.return1.message)
			alert(this.return1.type)
		},
		output2(){
			console.log(this.return2)
			alert(this.return2.message)
			alert(this.return2.type)
		},
		output3(){
			console.log(this.return3)
			alert(this.return3.message)
			alert(this.return3.type)
		},
		getAge(insurerId) {
			const len = (insurerId + "").length;
			if ((len != 15) && (len != 18)){
					return 0;
			}
			let strBirthday = "";
			if (len == 18)
			{
				strBirthday = insurerId.substr(6, 4) + "/" + insurerId.substr(10, 2) + "/" + insurerId.substr(12, 2);
			}
			if (len == 15) {
				strBirthday = "19" + insurerId.substr(6, 2) + "/" + insurerId.substr(8, 2) + "/" + insurerId.substr(10, 2);
			}
			const birthDate = new Date(strBirthday);
			const nowDateTime = new Date();
			let age = nowDateTime.getFullYear() - birthDate.getFullYear();
			if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
				age--;
			}
			return age;
		}
	}
}

<style>
.s-input .title{
	text-align: center;
	line-height: 36px;
	
}
.s-input .btn{
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

`
					.replace(/^ {8}/gm, "").trim(),
			}
		},
		methods: {
			change2(val) {

			},
			output1() {
				console.log(this.return1)
				alert(this.return1.message)
				alert(this.return1.type)
			},
			output2() {
				console.log(this.return2)
				alert(this.return2.message)
				alert(this.return2.type)
			},
			output3() {
				console.log(this.return3)
				alert(this.return3.message)
				alert(this.return3.type)
			},
			getAge(insurerId) {
				const len = (insurerId + "").length;
				if ((len != 15) && (len != 18)) {
					return 0;
				}
				let strBirthday = "";
				if (len == 18) {
					strBirthday = insurerId.substr(6, 4) + "/" + insurerId.substr(10, 2) + "/" + insurerId.substr(12, 2);
				}
				if (len == 15) {
					strBirthday = "19" + insurerId.substr(6, 2) + "/" + insurerId.substr(8, 2) + "/" + insurerId.substr(10, 2);
				}
				const birthDate = new Date(strBirthday);
				const nowDateTime = new Date();
				let age = nowDateTime.getFullYear() - birthDate.getFullYear();
				if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime
						.getDate() < birthDate.getDate())) {
					age--;
				}
				return age;
			}
		}
	}
</script>

<style>
	.s-input .title {
		text-align: left;
		line-height: 36px;
		text-indent: 0.5em;
	}

	.s-input .btn {
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
