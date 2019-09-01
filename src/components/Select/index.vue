<template>
	<div class="misty-select">
		<div class="misty-select-label">
			<label for="">{{ title }}</label>
			<slot name="icon"></slot>
		</div>
		<div class="misty-select-content">
			<select v-model="defaultValue" @change="selectChange" :class="classObj">
				<option disabled selected value="">{{ placeholder }}</option>
				<template v-for="(item, index) in configure">
					<option :value="item[valueMap[0]]" :key="index">{{ item[valueMap[1]] }}</option>
				</template>
			</select>
			<i class="misty-select-content-clear" @click="selectClear" v-if="clear && defaultValue"></i>
		</div>
	</div>
</template>

<script>
export default {
	name: 'rm-select',
	model: {
		prop: 'valueSelect',
		event: 'change'
	},
	props: {
		valueSelect: null,
		placeholder: null,
		title: {
			type: String,
			default: ''
		},
		configure: {
			type: Array
		},
		clear:{
			type:Boolean,
			default:false,
		},
		direction: {
			type: String,
			validator(value) {
				return ['rtl', 'ltr'].indexOf(value) !== -1
			},
			default: 'rtl'
		},
		valueMap: {
			type: Array,
			validator(value) {
				let arr = ['string', 'number']
				return arr.indexOf(typeof value[0]) !== -1 && arr.indexOf(typeof value[1]) !== -1
			},
			default: () => ['key', 'value']
		}
	},
	watch: {
		valueSelect(nvl) {
			this.defaultValue = nvl
		}
	},
	computed:{
		classObj(){
			return{ 
				'misty-select-content-srtl': this.direction === 'rtl',
				'misty-select-content-sltr': this.direction === 'ltr',
				'misty-select-content-placeholder':!this.placeholderFlag
			}
		}
	},
	data() {
		return {
			defaultValue: '', // key
			placeholderFlag: false
		}
	},
	created() {
		this.Init()
	},
	methods: {
		Init() {
			const value = this.valueSelect
			const keyName = this.valueMap[0]
			this.defaultValue = this.valueSelect
			this.configure.forEach((item, index) => {
				if (value === item[keyName]) {
					this.placeholderFlag = true
				}
			})
		},
		selectChange() {
			const value = event.target.value
			if (value === this.placeholder) return
			this.placeholderFlag = true
			this.$emit('change', value)
			this.defaultValue = value
		},
		selectClear() {
			this.placeholderFlag = false
			this.$emit('change', '')
			this.defaultValue = ''
		}
	}
}
</script>

<style>
@import url('../../styles/css/reset.css');

.misty-select {
	display: flex;
	align-items: center;
	padding: 7px;
	font-size: 14px;
	color: inherit;
	background: #fff;
	border-top: 0.5px solid #e5e5e5;
	border-bottom: 0.5px solid #e5e5e5;
}

.misty-select-label {
	width: auto;
	text-align: left;
	display: flex;
}

.misty-select-label > label {
	line-height: 32px;
	font-size: 14px;
	display: block;
	flex: 1;
}

.misty-select-content {
	flex: 1;
	display: flex;
	position: relative;
	align-items: center;
	padding-right: 18px;
	margin-left: 10px;
}

.misty-select-content select {
	flex: 1;
	display: block;
	width: 100%;
	direction: rtl;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	-webkit-appearance: none;
	background: transparent;
	position: relative;
	color: inherit;
}
.misty-select-content .misty-select-content-placeholder{
	color: #ccc;
}
.misty-select-content select.misty-select-content-srtl {
	direction: rtl;
}

.misty-select-content select.misty-select-content-sltr {
	direction: ltr;
}

.misty-select-content i.misty-select-content-clear {
	width: 14px;
	height: 14px;
	position: relative;
	display: block;
	z-index: 1;
	border-radius: 50%;
	background: #fbfbfb
		url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAByUlEQVRIS61W0VHDMBTTmwC6AUxAmYC6C9ARygSwAe0GdAIYoV0gbjcoE9ANgAkeJ58TEvs5CUd9ly87kq2nJ1swMLz3lwDuAVwlS08Ads65rz4IKU1672cAHgEsBvawBbB2zh2tdRlB3PEzgKeh0yXzL5Goc6IOQQT3AKZ/BK+X8xSuLVtDcAZwk6RNwCNS83OMjXMuSBwIYkEpTWeo6jvdIyIXFquqfgM4iciNMU+p9jUBnUArNoPg8/l86r2fquo+JSG4iMzonqqqjgYJLbyQqP2nsQO64ZoFS0na4PH/DwDsl3RMSLAE8FoQvnFFTRJ0jTsfYYwHEqwA0Pel0SHhIsoyApxL1yQY456Ov0eCk2AziqCteXSdWXhDgkDQK5FRUEqUFb6gb5CoWGQDvO6VEAclC7fIQpFpr8ymBfA6ozJ3FZpxEhqtqio20l1yzKNz7ranoA1Jb6P1RQUAgvCisZqIv7IZefFY6fsbFZEki4ue3hiaCjERmrJeSSli5ljBNQTYybDY6eHiyS6c/5AwINvgGUGUinq/pek64gg7AMv0EdB76avqynBXh0tVDyKyYvZbmygStGsTXxZ0U/10oXP4bYeeLT9rPCQQBU3zLgAAAABJRU5ErkJggg==)
		no-repeat 0 0;
	background-size: 100%;
	margin-left: 5px;
}

.misty-select-content::after {
	content: '';
	position: absolute;
	right: 0;
	width: 14px;
	height: 14px;
	top: 8px;
	background: url(../../icons/drop-down-right.png) no-repeat 0 0;
	background-size: 100%;
}
</style>
