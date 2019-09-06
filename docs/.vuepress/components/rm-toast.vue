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
	name: 'm-toast',
	components: {
		RmToast
	},
	data() {
		return {
			codeshow:false,
			show: false,
			type: '',
			message:"",
			code: `,
			
			<rm-toast :type="type" v-model="show">{{ message }}</rm-toast>
			
`
				.replace(/^ {8}/gm, '')
				.trim()
		}
	},
	methods: {
		toast(type,text) {
			this.type = type
			this.codeshow = true
			this.message = text
		},
		toastpublin(type) {
			if (type) {
				this.$rm.toast.show({
					type,
					text: '出来吧我的小伙'
				})
			} else {
				this.$rm.toast.text('出来吧我的小伙伴')
			}
		}
	}
}
</script>

<style></style>
