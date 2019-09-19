<template>
	<div>
		<layout-card>
			<div>
				<layout-column title="代码演示" tips="查看源代码" @handle="show = true"></layout-column>
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
	name: 'm-tree',
	data() {
		return {
			show: false,
			code: `,
<rm-tree :list="list"></rm-tree>
export default{
	data(){
		return{
			list: [
				{
					label: '我是一级标题1',
					value: 'school1',
					open:true,
					children: [
						{
							label: '我是一，二级标题1',
							value: 'grade1-1',
							open:true,
							children: [
								{
									label: '我是三级标题1',
									value: 'class1-1-1',
									open:true,
								},
								{
									label: '我是三级标题2',
									value: 'class1-1-2',
									open:true,
									children: [
										{
											label: '我是三级标题1',
											value: 'class1-1-1',
										},
										{
											label: '我是三级标题2',
											value: 'class1-1-2'
										}
									]
								}
							]
						},
						{
							label: '我是二，二级标题1',
							value: 'grade2-1-1',
						}
					]
				}
			]
		}
	}
}
			`
				.replace(/^ {8}/gm, '')
				.trim(),
			list: [
				{
					label: '我是一级标题1',
					value: 'school1',
					open: true,
					children: [
						{
							label: '我是一，二级标题1',
							value: 'grade1-1',
							open: true,
							children: [
								{
									label: '我是三级标题1',
									value: 'class1-1-1',
									open: true
								},
								{
									label: '我是三级标题2',
									value: 'class1-1-2',
									open: true,
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
								}
							]
						},
						{
							label: '我是二，二级标题1',
							value: 'grade2-1-1'
						}
					]
				}
			]
		}
	}
}
</script>

<style></style>
