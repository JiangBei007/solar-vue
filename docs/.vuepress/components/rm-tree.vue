<template>
	<rm-card>
		<rm-tree :list="list"></rm-tree>
		<template v-slot:code>
			<pre v-highlightjs><code class="vue">{{code}}</code></pre>
		</template>
	</rm-card>
</template>

<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'
import RmTree from '../../../src/Tree/index'
Vue.use(VueHighlightJS)

export default {
	name: 'm-tree',
	components: {
		RmTree
	},
	data() {
		return {
			code: `ee`.replace(/^ {8}/gm, '').trim(),
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
</script>

<style></style>
