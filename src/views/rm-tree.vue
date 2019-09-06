<template>
	<div>
		<div><rm-tree :list="list"></rm-tree></div>
	</div>
</template>

<script>
export default {
	path: 'tree',
	data() {
		return {
			show: false,
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
