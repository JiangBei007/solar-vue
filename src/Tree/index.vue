<script>
export default {
	name:"rm-tree",
	props: {
		type: {
			type: String,
			default: 'normal'
		},
		text: {
			type: String,
			default: 'normal'
		},
		selectedData: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			options: [
				{
					label: '我是一级标题1',
					value: 'school1',
					children: [
						{
							label: '我是一，二级标题1',
							value: 'grade1-1',
							children: [
								{
									label: '我是三级标题1',
									value: 'class1-1-1'
								},
								{
									label: '我是三级标题2',
									value: 'class1-1-2',
									children: [
										{
											label: '我是三级标题1',
											value: 'class1-1-1'
										},
										{
											label: '我是三级标题2',
											value: 'class1-1-2'
										},
										{
											label: '我是三级标题2',
											value: 'class1-1-2',
											children: [
												{
													label: '我是三级标题1',
													value: 'class1-1-1'
												},
												{
													label: '我是三级标题2',
													value: 'class1-1-2'
												},
												{
													label: '我是三级标题2',
													value: 'class1-1-2',
													children: [
														{
															label: '我是三级标题1',
															value: 'class1-1-1'
														},
														{
															label: '我是三级标题2',
															value: 'class1-1-2'
														},
														{
															label: '我是三级标题2',
															value: 'class1-1-2',
															children: [
																{
																	label: '我是三级标题1',
																	value: 'class1-1-1'
																},
																{
																	label: '我是三级标题2',
																	value: 'class1-1-2'
																}
															]
														},
													]
												},
											]
										},
									]
								},
								{
									label: '我是三级标题1',
									value: 'class1-1-1'
								}
							]
						}
					]
				}
			]
		}
	},
	mounted() {
		this.Init()
	},
	render(h) {
		return h(
			'div',
			{
				class: {
					'misty-tree': true
				},
				on: {
					click: () => {}
				},
				ref: 'TreeMain'
			},
			[this.createNode(h)]
		)
	},
	methods: {
		Init() {
			const targetList = this.$refs.TreeMain.querySelectorAll('span')
			const initSetAllLLine = this.initSetAllLLine
			for (let i = targetList.length - 1; i >= 0; i--) {
				initSetAllLLine(targetList[i])
			}
		},
		initSetAllLLine(target) {
			const container = target.parentNode.parentNode
			const chlidList = [...container.querySelectorAll('span')]
			chlidList.shift()
			const everySelected = chlidList.length && chlidList.every(span => span.classList.contains('tree-every-checked'))
			const someSelected = chlidList.some(span => span.classList.contains('tree-every-checked'))
			if (target.classList.contains('tree-every-checked')) {
				if (chlidList.length) {
					chlidList.forEach(span => span.classList.add('tree-every-checked'))
				}
			} else {
				if (everySelected) {
					target.classList.add('tree-every-checked')
				}
				if (someSelected) {
					target.classList.add('tree-some-checked')
				}
			}
		},
		ToggleSwitch() {
			const list = event.currentTarget.parentNode.classList
			if ([].includes.call(list, 'tree-menu-open')) {
				list.remove('tree-menu-open')
			} else {
				list.add('tree-menu-open')
			}
		},
		toggleChecked() {
			const target = event.currentTarget
			this.watchAllLine(target)
		},
		watchAllLine(target) {
			const container = target.parentNode.parentNode
			const chlidList = [...container.querySelectorAll('span')]
			if (target.classList.contains('tree-every-checked')) {
				chlidList.forEach(span => span.classList.remove('tree-every-checked', 'tree-some-checked'))
			} else {
				chlidList.forEach(span => span.classList.add('tree-every-checked'))
			}
			this.RecursionGetParentNode(target)
		},
		RecursionGetParentNode(target) {
			const WithChildNodesSetParent = this.WithChildNodesSetParent
			const next = this.$nextTick
			let parent = target.parentNode
			while (parent) {
				if (parent.classList.contains('misty-tree')) {
					return
				}
				if (parent.classList.contains('misty-tree-container')) {
					;(function(parent) {
						next(() => {
							WithChildNodesSetParent(parent)
						})
					})(parent)
				}
				parent = parent.parentNode
			}
		},
		WithChildNodesSetParent(parent) {
			const list = [...parent.querySelectorAll('span')]
			const mspan = list.shift()
			const everySelected = list.length && list.every(span => span.classList.contains('tree-every-checked'))
			const someSelected = list.some(span => span.classList.contains('tree-every-checked'))
			if (!someSelected && list.length > 0) {
				mspan.classList.remove('tree-every-checked')
				mspan.classList.add('tree-some-checked')
			}
			if (everySelected) {
				mspan.classList.add('tree-every-checked')
			} else if (someSelected) {
				mspan.classList.remove('tree-every-checked')
				mspan.classList.add('tree-some-checked')
			} else {
				mspan.classList.remove('tree-some-checked')
			}
		},
		createNode(h) {
			const data = this.options
			const createdElement = data => {
				if (!data) return
				return data.map(dom => {
					return h(
						'div',
						{
							class: {
								'misty-tree-container': true,
								'misty-tree-container-no':(dom.children&&dom.children.length)
							},
							attrs: {
								'data-data': '' // JSON.stringify(dom)
							}
						},
						[
							h(
								'div',
								{
									class: {
										'misty-tree-title': true
									}
								},
								[
									(function(children) {
										if (children && children.length) {
											return h('i', {
												class: {
													'tree-menu-open': false
												},
												on: {
													click: () => {
														this.ToggleSwitch(dom)
													}
												}
											})
										}
									}).bind(this)(dom.children),
									h('span', {
										class: {
											'tree-every-checked': dom.checked
										},
										domProps: {
											innerHTML: ''
										},
										on: {
											click: () => {
												this.toggleChecked()
											}
										}
									}),
									h('label', {
										domProps: {
											innerHTML: dom.label
										},
										on: {
											click: () => {
												// this.ToggleSwitch(dom)
											}
										}
									})
								]
							),
							createdElement(dom.children)
						]
					)
				})
			}
			return createdElement(data)
		}
	}
}
</script>
<style>
.misty-tree {
	text-align: left;
	overflow: hidden;
}
.misty-tree-container {
	margin-left: 45px;
}
.misty-tree-container-no{
	margin-left: 30px;
}
.misty-tree-title {
	display: flex;
	align-items: center;
	line-height: 42px;
	height: 42px;
	overflow: hidden;
	transition: all 0.3s;
}
.misty-tree-container:has(.tree-menu-open){
	
}
.misty-tree div.tree-menu-open ~ .misty-tree-container > div {
	height: 0;
	overflow: hidden;
	transition: all 0.3s;
}


.misty-tree-title i {
	display: inline-block;
	width: 15px;
	height: 15px;
	background: url(../static/icon/open.png) no-repeat center;
	background-size: 15px;
	transform: rotate(0deg);
	transition: all 0.3s;
}
.tree-menu-open i {
	transform: rotate(90deg);
	transition: all 0.3s;
}
.misty-tree-title span {
	display: inline-block;
	width: 13px;
	height: 13px;
	border: 1px solid #dcdee2;
	border-radius: 2px;
	transition: all 0.2s;
}
.misty-tree-title .tree-some-checked {
	background: url(../static/icon/nothing.png) no-repeat center;
	background-size: 15px;
	border: none;
	width: 15px;
	height: 15px;
	border-radius: 0;
	transition: all 0.2s;
}
.misty-tree-title .tree-every-checked {
	background: url(../static/icon/selected.png) no-repeat center;
	background-size: 15px;
	border: none;
	width: 15px;
	height: 15px;
	border-radius: 0;
	transition: all 0.2s;
}
.misty-tree-title label {
	margin-left: 10px;
	display: inline-block;
}

</style>
