<template>
	<div class="">
		<rm-picker v-model="values" :list="list2" :columns="2"></rm-picker>
		<p></p>
		<rm-picker v-model="values2" :list="list2" :columns="3"></rm-picker>
		<p></p>
		
	</div>
</template>

<script>
const changeFn = data => {
	data.forEach(item => {
		item.name = item.label
		if (item.children) {
			changeFn(item.children)
		}
	})
}
const data = window.__addressChildren__
changeFn(data)
export default {
	path: 'picker',
	data() {
		return {
			values: [],
			list: [],
			values2:[],
			list2:data,
		}
	}
}
</script>

<style></style>
