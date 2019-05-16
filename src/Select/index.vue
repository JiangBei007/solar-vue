<template>
<div class="small-beautiful-select"> 
	<div class="small-beautiful-select-label">
		<label for="">{{title}}</label>
		<slot name="icon"></slot>
	</div>
	<div class="small-beautiful-select-content">
		<select v-model="defaultValue" 
				@change="selectChange"
			:class="{'small-beautiful-select-content-srtl':direction==='rtl','small-beautiful-select-content-sltr':direction==='ltr'}">
			<option disabled selected value="">{{placeholder}}</option>
			<template v-for="item in configure">
				<option :value="item[valueMap[0]]">{{item[valueMap[1]]}}</option>
			</template>
		</select>
		<i class="small-beautiful-select-content-clear" @click="selectClear" v-if="defaultValue"></i>
	</div>
</div>
</template>

<script>
export default{
	name:"vui-select",
	model:{
		prop:"valueSelect",
		event:"change"
	},
	props:{
		valueSelect:"",
		placeholder:"",
		title:{
			type:String,
			default:""
		},
		configure:{
			type:Array,
		},
		direction:{
			type:String,
			validator(value){
		        return ["rtl","ltr"].indexOf(value)!==-1
		     },
		    default:"rtl"
		},
		valueMap:{
			type:Array,
			validator(value){
				let arr = ["string","number"]
		        return arr.indexOf(typeof(value[0]))!==-1&&arr.indexOf(typeof(value[1]))!==-1
		     },
		     default:['key','value']
		}
	},
	watch:{
		valueSelect(nvl){
			this.defaultValue = nvl;
		}
	},
	data(){
		return{
			defaultValue:"",//key
			placeholderFlag:false,
		}
	},
	created(){
		this.Init()
	},
	methods:{
		Init(){
			const value = this.valueSelect;
			const keyName = this.valueMap[0];
			const valueName = this.valueMap[1];
			this.defaultValue = this.valueSelect;
			this.configure.forEach((item,index)=>{
				if(value==item[keyName]){
					this.placeholderFlag = true;
				}
			})
		},
		selectChange(){
			const value = event.target.value;
			const keyName = this.valueMap[0];
			const valueName = this.valueMap[1];
			if(value==this.placeholder)return;
			this.placeholderFlag = true;
			this.$emit("change",value);
			this.defaultValue = value;
		},
		selectClear(){
			this.placeholderFlag = false;
			this.$emit("change","");
			this.defaultValue = "";
		}
	}
}
</script>

<style>
@import url("../static/css/reset.css");
.small-beautiful-select{
	display: flex;
	align-items: center;
	padding:7px;
	color:inherit;
	background: #fff;
	border-top: .5px solid #e5e5e5;
	border-bottom: .5px solid #e5e5e5;
}
.small-beautiful-select-label{
	width: auto;
	text-align: left;
	display: flex;
}
.small-beautiful-select-label>label{
	line-height: 32px;
	font-size: 14px;
	display: block;
	flex:1;
}
.small-beautiful-select-content{
	flex:1;
	display: flex;
	position: relative;
	align-items: center;
	padding-right: 18px;
}
.small-beautiful-select-content	select{
	flex:1;
	display:block;
	width: 100%;
	direction:rtl;
	height:32px;
	font-size: 14px;
	line-height:normal;
	-webkit-appearance: none;
	background: transparent;
	position: relative;
}
.small-beautiful-select-content	select.small-beautiful-select-content-srtl{
	direction:rtl;
}
.small-beautiful-select-content	select.small-beautiful-select-content-sltr{
	direction:ltr;
}
.small-beautiful-select-content	i.small-beautiful-select-content-clear{
	width: 16px;
	height: 16px;
	position: relative;
	display: block;
	z-index: 1;
	border-radius: 50%;
	background:#fbfbfb url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAByUlEQVRIS61W0VHDMBTTmwC6AUxAmYC6C9ARygSwAe0GdAIYoV0gbjcoE9ANgAkeJ58TEvs5CUd9ly87kq2nJ1swMLz3lwDuAVwlS08Ads65rz4IKU1672cAHgEsBvawBbB2zh2tdRlB3PEzgKeh0yXzL5Goc6IOQQT3AKZ/BK+X8xSuLVtDcAZwk6RNwCNS83OMjXMuSBwIYkEpTWeo6jvdIyIXFquqfgM4iciNMU+p9jUBnUArNoPg8/l86r2fquo+JSG4iMzonqqqjgYJLbyQqP2nsQO64ZoFS0na4PH/DwDsl3RMSLAE8FoQvnFFTRJ0jTsfYYwHEqwA0Pel0SHhIsoyApxL1yQY456Ov0eCk2AziqCteXSdWXhDgkDQK5FRUEqUFb6gb5CoWGQDvO6VEAclC7fIQpFpr8ymBfA6ozJ3FZpxEhqtqio20l1yzKNz7ranoA1Jb6P1RQUAgvCisZqIv7IZefFY6fsbFZEki4ue3hiaCjERmrJeSSli5ljBNQTYybDY6eHiyS6c/5AwINvgGUGUinq/pek64gg7AMv0EdB76avqynBXh0tVDyKyYvZbmygStGsTXxZ0U/10oXP4bYeeLT9rPCQQBU3zLgAAAABJRU5ErkJggg==) no-repeat 0 0;
	background-size:100% ;
	margin-left: 5px;
}
.small-beautiful-select-content::after{
	content: "";
	position: absolute;
	right: 0;
	width: 14px;
	height: 14px;
	top: 9px;
	background: url(../static/icon/drop-down-right.png) no-repeat 0 0;
	background-size: 100%;
}
</style>