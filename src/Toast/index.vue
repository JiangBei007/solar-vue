<template>
	<transition name="MistyToastFade">
		<div class="misty-toast" v-show="show" v-stop>
			<div class="misty-toast-all">
				<template v-if="type === 'success' || type === 'cancel' || type === 'text'">
					<div>
						<i :class="ipStyle" v-if="!(type === 'text')"></i>
						<p :class="ipStyle">
							<slot>{{ text }}</slot>
						</p>
					</div>
				</template>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'rmToast',
	directives: {
		stop: {
			bind(el) {
				el.addEventListener('touchmove', event => {
					event.preventDefault()
				})
			}
		}
	},
	watch: {
		show(newv, oldv) {
			if (newv) {
				this.trigger()
			}
		},
		value(nvl) {
			this.show = nvl
		}
	},
	computed: {
		ipStyle() {
			return {
				'misty-toast-success': this.type === 'success',
				'misty-toast-cancel': this.type === 'cancel',
				'misty-toast-text': this.type === 'text'
			}
		}
	},
	props: {
		value: {
			type:Boolean,
			default:false
		},
		type: {
			type: String,
			validator(value) {
				return ['success', 'cancel', 'text'].indexOf(value) !== -1 || !value
			},
			default: 'success'
		},
		time: {
			type: Number,
			default: 2000
		},
		text: {
			type: String
		}
	},
	data() {
		return {
			timeout: null,
			show: this.value
		}
	},
	methods: {
		trigger() {
			this.$emit('input', true)
			this.$emit('on-show')
			clearTimeout(this.timeout)
			this.timeout = setTimeout(() => {
				this.$emit('input', false)
				this.show = false
				this.$emit('on-hide')
			}, this.time)
		}
	}
}
</script>

<style>
@import url('../static/css/reset.css');
.MistyToastFade-enter-active,
.MistyToastFade-leave-active {
	transition: opacity 0.5s;
}
.MistyToastFade-enter,
.MistyToastFade-leave-to {
	opacity: 0;
}
.misty-toast {
	position: fixed;
	left: 0;
	top: 0;
	z-index: 5000;
	width: 100%;
	height: 100%;
	font-size: 16px;
}
.misty-toast .misty-toast-all {
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	width: 125px;
	max-width: 70%;
	padding-left: 10px;
	padding-right: 10px;
	background: hsla(0, 0%, 7%, 0.7);
	border-radius: 5px;
	display: table;
}
.misty-toast .misty-toast-all > div {
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px 0;
}
.misty-toast .misty-toast-all i {
	display: block;
	width: 28px;
	height: 28px;
}
.misty-toast .misty-toast-all i.misty-toast-success {
	background: transparent
		url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAwCAYAAABNPhkJAAADPklEQVRoQ92ZvY9NURTF11L4SKh8dEJCSXQIpZKCioqCIFHMJEbNtD6CiUqjRlQSNEJoVLT8ATS+EiQkxJIzzp2ceXPuPfucd9+bd+/rJuecvfcv+9671zpD9Pwn6QqAHyRnHSr7yivJsd0BcMIzzpC81ktgSSsBPABwaKChM70DlrQWwBMA+yNP71yvgCVtBPAUwM4I7CPX8d4AS9oC4DmArRHY167jJH/1AljSDt/ZTRHY9wB2kfzci6+0pH3+nV0Xgf0GYDfJd9Vapzss6aD/Gq+KwP4GcIDky3Cts8CSjvs5u6JGSxwleW9wrZPAks4BuNUgmmZJXoqtdw5Y0mUAFxpg75I8VrfeGeCIVIwxvfDv7Z9OAzdIxZDrrf8if2/yBxPf4YRUrNg++Vn7IWWGJho4IRUrtp9eRb1JwU608EhIxYrt77w+Jh9bYCcWOCEVQ7YpknNW2IkETkjFkO02yTM5sBMHnJCKIdt/q0eqs8AGqVixLVi9XNhFHZZ0EYCzWadJfi0JVnrGIBWr0IusXkm++bEk6TyAqz7ARwAnST4sCZh7xiAVq5BLrF5urvkOD8CGMe4DOEvyS0ng1BmjVKzCRK1eKkds3QHfADBVc3gk3TZKxbCkqNUrBXaPtbvSPNIQoLVuG6ViWEqt1SsC9u/wagDPAOxtCDJ0t41SMSyh0eoVA3vo9QBeAdieCFTUbaNUDFMnrd5QwB56m4fekAiW1e0MqVilNVm9oYE99B7/eK8xBEx2O0MqVunMVs9Q35ItUXso6bD/kNVdkIWBarudIRWreFlWrzVg3+lpANczgi7qdoZUrFJkW72M2ha2Nl4ASHLADtz6c90+BWBz4lYxFm+a5E1rotJ9KWDLjC7NHZ4rsnoliZNXPJIsM7okd3Wm2OqVJE0C+/fZOqNzaxjK6uUmc/tNwB7aOqOtdQxt9ayJwn1mYA+dM6Ob6mnF6o0c2EPnzOhYTa1ZvbEAF87osLbWrN7YgD10k4+uq6VVqzdu4NwZ3brVGyuw77J1Ro/E6o0d2DijR2b1lgU4MaNHavWWDbhmRo/c6i0r8MCMdn9m/VevpPiSM1lKy5JAkrOTGofVs9QzuOcf2L5OPIUlCegAAAAASUVORK5CYII=)
		no-repeat center;
	background-size: 100%;
}
.misty-toast .misty-toast-all i.misty-toast-cancel {
	background: transparent url(../static/icon/cancel.png) no-repeat center;
	background-size: 100%;
}
.misty-toast .misty-toast-all i.misty-toast-text {
	display: none;
}
.misty-toast .misty-toast-all p {
	flex: 1;
	line-height: 24px;
	text-align: center;
	color: #fff;
}
.misty-toast .misty-toast-all p.misty-toast-success {
	color: #fff;
}
.misty-toast .misty-toast-all p.misty-toast-cancel {
	color: #fff;
}
</style>
