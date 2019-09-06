<template>
	<div>
		<layout-card>
			<div><layout-column title="代码演示" tips="查看源代码" @handle="show = true"></layout-column></div>
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
	name: 'm-loading',
	data() {
		return {
			show: false,
			code: `
	<div class="s-loading">
		<rm-loading :show="show" :icon="icon">加载中</rm-loading>
		<div class="vui-button" @click="load('')">loading</div>
		<div class="vui-button" @click="load('spot')">icon='spot'</div>
		<div class="vui-button" @click="load('spotcolor')">icon='spotcolor'</div>
		<div class="vui-button" @click="load('circle')">icon='circle'</div>
	</div>
	import rmLoading from "../../../src/Loading/index"
	export default {
		name: "s-loading",
		components: {
			rmLoading
		},
		data() {
			return {
				show:false,
				icon:"",
			}
		},
		load(type){
			this.icon = type;
			this.show = true;
			setTimeout(()=>{
				this.show = false;
			},2000)
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
