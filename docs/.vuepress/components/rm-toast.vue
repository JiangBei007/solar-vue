<template>
	<rm-card>
		<rm-body>
			<div class="s-toast">
				<rm-toast :type="type" v-model="show">你好</rm-toast>
				<div class="vui-title">成功提示</div>
				<div class="vui-button" @click="toast('success')">success</div>
				<div class="vui-title">警告提示</div>
				<div class="vui-button" @click="toast('warn')">warn</div>
				<div class="vui-title">失败提示</div>
				<div class="vui-button" @click="toast('cancel')">cancel</div>
				<div class="vui-title">文字提示</div>
				<div class="vui-button" @click="toast('text')">text</div>
				<div class="vui-title">全局调用</div>
				<div class="vui-button" @click="toastpublin('')">text调用</div>
				<div class="vui-button" @click="toastpublin('success')">success</div>
			</div>
		</rm-body>
		<template v-slot:code>
			<pre v-highlightjs><code class="vue">{{code}}</code></pre>
		</template>
	</rm-card>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import RmToast from '../../../src/Toast/index'
import ToastPlugin from '../../../src/Toast/plugin'
Vue.use(ToastPlugin)
Vue.use(VueHighlightJS)
export default {
	name: 'm-toast',
	components: {
		RmToast
	},
	data() {
		return {
			show: false,
			type: '',
			code: `
`
				.replace(/^ {8}/gm, '')
				.trim()
		}
	},
	methods: {
		toast(type) {
			this.type = type
			this.show = true
		},
		toastpublin(type) {
			if (type) {
				this.$rm.toast.show({
					type: 'success',
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
