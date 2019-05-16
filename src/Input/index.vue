<template>
<div class="small-beautiful-input">
	<div class="small-beautiful-input-label">
		<label :for="textId">{{title}}</label>
	</div>
	<div class="small-beautiful-input-form">
		<input :type="nativeType" ref="input"
			:id="textId"
			:style="{'text-align':align}"
			:placeholder="placeholder"
			@input="valueChange"
			v-model="thisValue"
			@focus="valueFocus"
			@blur="valueBlur"
			:maxlength="max"
		/>
		<i class="small-beautiful-input-icon" @click="vulueClear" v-show="iconWarnClear"></i>
		<i class="small-beautiful-input-warn" v-show="verification"></i>
	</div>
</div>
</template>

<script>
import {idReg18,idReg15,telReg} from './../reg/index.js'
import { RandomCharacter ,getAge } from './../static/js/com.js'
export default{
	name:"vui-input",
	model: {
	    prop: 'value',
	    event: 'change'
 	},
	props:{
		placeholder:[String, Number],
		title:String,
		type:{
			type:String,
			default:"text",
			validator: function (value) {
				let valueType = ['text',"number","tel","id"].indexOf(value) !== -1 ;
				if(valueType){
					 return valueType;
				}else{
					console.warn("The value of isType should be'tel''email''id'.")
				}
		      }
		},
		'align':String,
		value:"",
		regexp:RegExp,
		getAge:Function,
		isReturn:{
			type:Object,
			default:()=>({type:false,massage:"错误信息"}),
		},
		warn:{
			type:Boolean,
			default:false,
		},
		max:Number,
		maxage:{
			type:Number,
			default:60,
		},
		minage:{
			type:Number,
			default:18,
		}
	},
	data(){
		return{
			thisValue:"",
			verification:false,
			iconWarnClear:false,
			textId:"",
			nativeType:""
		}
	},
	watch:{
		value(nvl){
			this.thisValue = nvl
		},
	},
	created(){
		const nvl = this.type;
		switch (nvl){
			case 'id':
			this.nativeType = 'text'
				break;
			case 'tel':
			this.nativeType = 'tel'
				break;
			case 'number':
			this.nativeType = 'tel'
				break;
			default:
			this.nativeType = 'text'
				break;
		}
		this.textId = "pa-" + RandomCharacter();
		this.thisValue = this.value;
		this.verificationChange(this.value);
	},
	methods:{
		valueChange(){
			const val = event.target.value;
			if(this.type==='tel'){
				const le = 11;
				if(val.length>le){
					this.thisValue = val.substring(0,le)
					return
				}
			} 
			if(this.type==='id'){
				const le = 18;
				if(val.length>le){
					this.thisValue = val.substring(0,le)
					return
				}
			}
			const max = this.max;
			if(max){
				if(val.length>max){
					this.thisValue = val.substring(0,max)
					return
				}
			}
			this.$emit('change', val);
			this.verificationChange(val);
			this.clearIcon(val);
		},
		vulueClear(){
			this.$emit('change', "");
			this.$emit('clear', "");
			this.thisValue = "";
			this.verificationChange("");
			this.clearIcon("")
			this.$refs.input.focus()
		},
		valueFocus(){
			this.clearIcon(this.thisValue)
		},
		valueBlur(){
			const thisDom = event.target;
			setTimeout(()=>{
				this.clearIcon('');
			},310)
		},
		clearIcon(value){
			if(value!==''){
				this.iconWarnClear = true;
			}else{
				this.iconWarnClear = false;
			}
		},
		verificationChange(value){
			const isType = this.type;
			if(isType==="tel"){
				const telreg = this.regexp || telReg;
				if(telreg.test(value)){
					this.verification = false;
					this.isReturn.type = true;
					this.isReturn.message = "Y";
				}else{
					if(this.warn){
						this.verification = true;
					}
					this.isReturn.type = false;
					this.isReturn.message = "请输入正确的手机号码";
				}
				return;
			}
			if(isType==="id"){
				const fun = (value)=>{
					const telreg = this.regexp;
					if(telreg){
						return telreg.test(value)
					}else{
						return (idReg18.test(value)||idReg18.test(value))
					}
				}
				if(fun(value)){
					const age = this.getAge||getAge;
					if(age(value)<this.minage || age(value)>this.maxage){
						if(this.warn){
							this.verification = true;
						}
						this.isReturn.type = false;
						this.isReturn.message = "合法年龄在"+ this.minage +"--"+ this.maxage + "之间";
						return;
					}
					this.verification = false;
					this.isReturn.type = true;
					this.isReturn.message = "Y";
				}else{
					if(this.warn){
						this.verification = true;
					}
					this.isReturn.type = false;
					this.isReturn.message = "请输入正确的身份证号码";
				}
			}
		},
	}
}
</script>

<style>
@import url("../static/css/reset.css");
.small-beautiful-input{
	text-align: left;
	display: flex;
	padding: 7px;
	font-size: 14px;
	background: #fff;
	color:inherit;
	border-top: .5px solid #e5e5e5;
	border-bottom: .5px solid #e5e5e5;
}
.small-beautiful-input-label label{
	display: block;
	width: auto;
	line-height: 24px;
	min-height: 24px;
}
.small-beautiful-input-form{
	flex: 1;
	display: flex;
	align-items: center;
}
.small-beautiful-input-form input{
	display: block;
	flex:1;
	height: 24px;
	font-size: inherit;
	color:inherit;
}
.small-beautiful-input-icon{
	display: block;
	height: 16px;
	width: 16px;
	border-radius: 50%;
	background:#fbfbfb url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAByUlEQVRIS61W0VHDMBTTmwC6AUxAmYC6C9ARygSwAe0GdAIYoV0gbjcoE9ANgAkeJ58TEvs5CUd9ly87kq2nJ1swMLz3lwDuAVwlS08Ads65rz4IKU1672cAHgEsBvawBbB2zh2tdRlB3PEzgKeh0yXzL5Goc6IOQQT3AKZ/BK+X8xSuLVtDcAZwk6RNwCNS83OMjXMuSBwIYkEpTWeo6jvdIyIXFquqfgM4iciNMU+p9jUBnUArNoPg8/l86r2fquo+JSG4iMzonqqqjgYJLbyQqP2nsQO64ZoFS0na4PH/DwDsl3RMSLAE8FoQvnFFTRJ0jTsfYYwHEqwA0Pel0SHhIsoyApxL1yQY456Ov0eCk2AziqCteXSdWXhDgkDQK5FRUEqUFb6gb5CoWGQDvO6VEAclC7fIQpFpr8ymBfA6ozJ3FZpxEhqtqio20l1yzKNz7ranoA1Jb6P1RQUAgvCisZqIv7IZefFY6fsbFZEki4ue3hiaCjERmrJeSSli5ljBNQTYybDY6eHiyS6c/5AwINvgGUGUinq/pek64gg7AMv0EdB76avqynBXh0tVDyKyYvZbmygStGsTXxZ0U/10oXP4bYeeLT9rPCQQBU3zLgAAAABJRU5ErkJggg==) no-repeat center;
	background-size:100% ;
	margin: 0 5px;
}
.small-beautiful-input-warn{
	display: block;
	height: 16px;
	width: 16px;
	background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB2ElEQVRYR+3Wv6vPURzH8ce7yEDyowwG3bqlpJTBqkQGg+hOTJYrkjLIcElK168/gIVBhqsU12ASi8VgI1IisqAsQkl9dHw/pK/v53vO58Ptu9yzntd5v5/n/T7v93mHEa8YsX/zAJ0iULEB67AG3/EWT4JnbVNaDFCxBIexD2sbHD3GVVwMvpbAFAFUPcensKLEKN7jSDCT0w8FqFiKG9ieM9SwfzI4PexsI0DlZ4XcxdaOzn8dmw5ONNkYBjCF6YzzY1hYoJsMLg+yNRCg6uX6DRZnABZhGd5ldB9TxQSf+3VNAOeRbpdbC+qHmR5dbk0FZ0sBXmEsZxFtAB4Fm7IAVa/Gnxc4T5I2AEm/Kvjwp+2/UlCxE7fnCGBz8CAHcDB1sjkC2BNcHyXA3v7uOCgFu3CrMAIbsRp3CvXbgnu5CLR5hIV+f8vGg5dDAdJmxQuMZ6x/wo7643mI5Rn902B9tgxrgJJGNBvsrvX3sSUDcDw4UwqwEq8zrfgb9uMLriG15abVrhXXt0qtOEXif6xD0VDauXngEg78I8HNYKLJRg4g7V/A0Y4Qs0i13zielY5kkzjXciRLv9+VHHgRQP0mRjeU9t9iJGN5LpRd94tT0NVB7tw8wA+iIWchMraXPwAAAABJRU5ErkJggg==) no-repeat center;
	background-size: 130%;
}
</style>