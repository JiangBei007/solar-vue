<template>
	<div class="misty-picker">
		<div v-for="(current, i) in currentData" :key="i" :id="'misty-picker-' + i"></div>
	</div>
</template>

<script>
import Scroll from './index'
const getData = (value, data) => {
	for (let i = 0; i < data.length; i++) {
		if (data[i].value === value) {
			if(data[i]&&data[i].children){
				return data[i].children
			}else{
				return []
			}
		}
	}
	if(data[0]&&data[0].children){
		return data[0].children
	}else{
		return []
	}
	
}
export default {
	name:"rmPicker",
	model: {
		prop: 'values',
		event: 'change'
	},
	props: {
		values: {
			type: Array,
			default: () => []
		},
		list: {
			type: Array,
			default: () => []
		},
		columns: {
			type: Number,
			default: 1
		}
	},
	data() {
		return {
			currentData: []
		}
	},
	mounted() {
		this.initCurrentData(this.values, this.list)
	},
	methods: {
		initCurrentData(values, list, index) {
			let data = null
			let columns = this.columns - 1
			const currentData = (this.currentData = [])
			currentData.push(list)
			for (let i = 0; i < columns; i++) {
				const entry = values && values[i] ? values[i] : null
				data = getData(entry, list)
				currentData.push(data)
				list = data
			}
			if (index !== undefined) {
				this.setValues(index)
			} else if(values.length===0){
				this.setValues()
			}
			this.$emit('change', this.values)
			this.initScroll()
		},
		initScroll() {
			const self = this
			const values = this.values
			const columns = this.columns
			this.$nextTick(() => {
				const currentData = this.currentData
				for (let i = 0; i < currentData.length; i++) {
					const root = document.getElementById('misty-picker-' + i)
					root.innerHTML = ''
					new Scroll(root, {
						data: currentData[i],
						defaultValue: values[i] ? values[i] : '',
						onSelect(val) {
							values.splice(i, 1, val)
							if (i < columns) {
								self.initCurrentData(values, self.list, i)
							}
						}
					})
				}
			})
		},
		setValues(index) {
			const values = this.values
			const columns = this.columns
			const currentData = this.currentData
			let num = index === undefined ? 0 : index + 1
			for (let i = num; i < columns; i++) {
				if (currentData[i] && currentData[i][0] && currentData[i][0].value) {
					values.splice(i, 1, currentData[i][0].value)
				} else {
					values.splice(i, 1, '')
				}
			}
		}
	}
}
</script>

<style>
.misty-picker {
	width: 100%;
	display: flex;
}

.misty-picker> div {
	flex: 1;
}
.misty-picker-scroller-component {
	display: block;
	position: relative;
	height: 238px;
	overflow: hidden;
	width: 100%;
}

.misty-picker-scroller-content {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 1;
}

.misty-picker-scroller-mask {
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	margin: 0 auto;
	width: 100%;
	z-index: 3;
	transform: translateZ(0px);
	background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)),
		-webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
	background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
	background-position: top, bottom;
	background-size: 100% 102px;
	background-repeat: no-repeat;
}

.misty-picker-scroller-item {
	text-align: center;
	font-size: 16px;
	height: 34px;
	line-height: 34px;
	color: #000;
}
.misty-picker-scroller-item-selected {
	color: #2f86f6;
	font-weight: 500;
}
.misty-picker-scroller-indicator {
	width: 100%;
	height: 34px;
	position: absolute;
	left: 0;
	top: 102px;
	z-index: 3;
	background-image: -webkit-linear-gradient(top, #d0d0d0, #d0d0d0, transparent, transparent), -webkit-linear-gradient(bottom, #d0d0d0, #d0d0d0, transparent, transparent);
	background-image: linear-gradient(to bottom, #d0d0d0, #d0d0d0, transparent, transparent), linear-gradient(to top, #d0d0d0, #d0d0d0, transparent, transparent);
	background-position: top, bottom;
	background-size: 100% 1px;
	background-repeat: no-repeat;
}
.misty-picker-scroller-item {
	line-clamp: 1;
	-webkit-line-clamp: 1;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
