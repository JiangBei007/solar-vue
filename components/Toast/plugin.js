import ToastComponent from './index.vue'

let $vm, watcher
const plugin = {
	install(vue, pluginOptions = {}) {
		const Toast = vue.extend(ToastComponent)
		if (!$vm) {
			$vm = new Toast({
				el: document.createElement('div')
			})
			document.body.appendChild($vm.$el)
		}

		const toast = {
			show(options = {}) {
				for (let i in Object.assign({}, pluginOptions, options)) {
					if (i !== 'show') {
						$vm[i] = options[i]
					}
				}
				$vm.$watch('show', (val) => {
					val && options.onShow && options.onShow($vm)
					val === false && options.onHide && options.onHide($vm)
				})
				$vm.show = true
			},
			text(text) {
				this.show({
					type: 'text',
					text
				})
			},
			hide() {
				$vm.show = false
			},
			isVisible() {

			}
		}

		if (vue.prototype.$rm) {
			vue.prototype.$rm.toast = toast
		} else {
			vue.prototype.$rm = {
				toast
			}
		}

	}
}

export default plugin
