<template>
	<div v-transfer>
		<misty-popup v-model="show" @close="close">
			<div>
				<div class="misty-picker-title">
					<span @click="cancel">取消</span>
					<span @click="confirm">确定</span>
				</div>
				<misty-picker :list="list" :columns="columns" v-model="selection"></misty-picker>
			</div>
		</misty-popup>
	</div>
</template>

<script>
import MistyPopup from './../popup/index.vue'
import MistyPicker from './../picker/picker.vue'
import Transfer from './../directives/transfer-dom/index'
export default {
	name:"rmPopupPicker",
	directives:{
		Transfer
	},
	components: {
		MistyPopup,
		MistyPicker
	},
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		value: {
			type: Boolean,
			default: false
		},
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
	computed: {
		show: {
			set(val) {
				this.$emit('change', val)
			},
			get() {
				return this.value
			}
		}
	},
	created() {
		if (this.values.length) {
			this.selection.length = 0
			this.selection.push(...this.values)
		}
	},
	data() {
		return {
			selection: []
		}
	},
	methods: {
		close() {
			this.selection.length = 0
			this.selection.push(...this.values)
			this.$emit('cancel', this.values)
			this.$emit('change', false)
		},
		cancel() {
			this.selection.length = 0
			this.selection.push(...this.values)
			this.$emit('cancel', this.values)
			this.$emit('change', false)
		},
		confirm() {
			this.values.length = 0
			this.values.push(...this.selection)
			const rootVal = this.getRootValue(this.list,this.values)
			this.$emit('confirm', this.values,rootVal)
			this.$emit('change', false)
		},
		getRootValue(list, values) {
			const arr = []
			let data = null
			const getData = (value, list) => {
				for (let i = 0; i < list.length; i++) {
					if (list[i].value === value) {
						return list[i]
					}
				}
				return { children: [] }
			}
			for (let i = 0; i < values.length; i++) {
				data = getData(values[i], list)
				arr.push(data)
				list = data.children || []
			}
			return arr
		}
	}
}
</script>

<style>
.misty-picker-title {
	height: 42px;
	line-height: 42px;
	position: relative;
	display: flex;
	padding: 0 24px;
	justify-content: space-between;
	background: #f8f8f8;
	color: #108ee9;
	font-size: 16px;
}
.misty-picker-title::after {
	content: '';
	position: absolute;
	background-color: #ddd;
	display: block;
	z-index: 1;
	top: auto;
	right: auto;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 1px;
	transform-origin: 50% 100%;
	transform: scaleY(0.5);
}
</style>
