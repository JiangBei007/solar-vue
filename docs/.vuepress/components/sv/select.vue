<template>
	<div>
		<layout-card>
			<div>
				<layout-column title="代码演示" tips="查看源代码" @handle="show=true"></layout-column>
			</div>
		</layout-card>
		<layout-code title="搜索" v-model="show">
				<pre v-highlightjs><code class="vue">{{ code }}</code></pre>
		</layout-code>
	</div>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

Vue.use(VueHighlightJS)

export default {
	name: 'm-select',
	data() {
		return {
			show:false,
			code: `
<div class="s-select">
	<div class="vui-title">select示例</div>
	<rm-select
		:value-map="['key', 'value']"
		title="身份证号："
		placeholder="请选择"
		v-model="seval"
		direction="rtl"
		@change="schange"
		:configure="configures"
	></rm-select>
	<div class="vui-result">
		<span>选中值：</span>
		<p>{{ seval }}</p>
	</div>
	<div class="vui-title">附带轻触按钮 value-map="['label', 'value']"</div>
	<rm-select
		:value-map="['label', 'value']"
		title="狗的种类："
		placeholder="请选择"
		v-model="seval2"
		direction="rtl"
		:clear="true"
		@change="schange2"
		:configure="configures2"
	></rm-select>
	<div class="vui-result">
		<span>选中值：</span>
		<p>{{ seval2 }}</p>
	</div>
</div>
export default{
	name:"s-select",
	components:{
		rmSelect
	},
	data(){
		return{
			configures: [{ key: 1, value: '大黄' }, { key: 2, value: '小黑' }],
			seval: '',
			configures2: [{ label: 'a', value: '金毛附带轻触按钮附带轻触按钮附带轻触按钮附带轻触按钮' }, { label: 'b', value: '哈士奇' }],
			seval2: '',
		}
	},
	methods:{
		schange(val) {
			console.log(val, this.seval)
		},
		schange2(val) {
			console.log(val, this.seval2)
		}
	}
}
`
				.replace(/^ {8}/gm, '')
				.trim()
		}
	}
}
</script>

<style></style>
