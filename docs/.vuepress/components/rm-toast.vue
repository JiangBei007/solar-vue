<template>
	<div>
		<layout-card>
			<div>
				<layout-column title="代码演示" tips="查看源代码" @handle="codeshow=true"></layout-column>
			<rm-body>
				<div class="s-toast">
					<rm-toast :type="type" v-model="codeshow">{{ message }}</rm-toast>
					<div class="vui-title">成功提示</div>
					<div class="vui-button" @click="toast('success','成功')">success</div>
					<div class="vui-title">失败提示</div>
					<div class="vui-button" @click="toast('cancel','失败')">cancel</div>
					<div class="vui-title">文字提示</div>
					<div class="vui-button" @click="toast('text','这是一行文字')">text</div>
					<div class="vui-title">全局调用</div>
					<div class="vui-button" @click="toastpublin('')">text调用</div>
					<p></p>
					<div class="vui-button" @click="toastpublin('success')">success</div>
				</div>
			</rm-body>
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
import RmToast from '../../../src//components/Toast/index'
import ToastPlugin from '../../../src/components/Toast/plugin'
Vue.use(ToastPlugin)
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
			this.show = true
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
