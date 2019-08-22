<template>
	<rm-card>
		<rm-tree></rm-tree>
		<template v-slot:code>
			<pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
	</rm-card>

</template>

<script>
	import Vue from "vue";
	import VueHighlightJS from 'vue-highlightjs'
	import RmTree from "../../../src/Tree/index"
	Vue.use(VueHighlightJS)

	export default {
		name: "m-tree",
		components: {
			RmTree
		},
		data() {
			return {
				code: `ee`.replace(/^ {8}/gm, "").trim(),
			}
		}
	}
</script>

<style>

</style>
