<template>
	<transition name="code-fade">
		<div v-if="value" class="layout-code">
			<div class="layout-code-container">
				<div class="layout-code-head">
					<strong>{{ title }}</strong>
					<i @click="close"></i>
				</div>
				<div class="layout-code-content"><slot></slot></div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		value: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: ''
		}
	},
	methods: {
		close() {
			this.$emit('input', false)
		}
	}
}
</script>

<style lang="scss">
.code-fade-enter-active,
.code-fade-leave-active {
	transition: opacity 0.5s;
}
.code-fade-enter,
.code-fade-leave-to {
	opacity: 0;
}
.layout-code {
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10000;
	.layout-code-container {
		max-height: 100%;
		max-width: 100%;
		height: 80%;
		width: 80%;
		display: flex;
		flex-direction: column;
		padding-bottom: 10px;
		background: #fff;
		.layout-code-head {
			padding: 16px 24px;
			border-bottom: 1px solid #e8e8e8;
			color: rgba(0, 0, 0, 0.65);
			border-radius: 4px 4px 0 0;
			background: #fff;
			display: flex;
			justify-content: space-between;
			cursor: pointer;
			i {
				display: block;
				height: 16px;
				width: 16px;
				background: url(../../public/close.png) no-repeat center;
				background-size: 16px;
			}
		}
		.layout-code-content {
			background: #fff;
			flex: 1;
			border-radius: 0px 0px 4px 4px;
			padding: 0 24px;
			overflow-y: auto;
			overflow-x: hidden;
		}
	}
}
</style>
