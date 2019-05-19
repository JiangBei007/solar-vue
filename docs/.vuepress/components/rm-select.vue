<template>
	<rm-card>
		<rm-body>
			<div class="s-select">
				<div class="title">select示例</div>
				<rm-select 
					:value-map="['key','value']" 
					title="身份证号" 
					placeholder="请选择" 
					v-model="seval"
					direction="rtl"
					@change="schange"
					:configure="configures">
				</rm-select>
				<div>选中值{{seval}}</div>
			</div>
		</rm-body>
		<template v-slot:code>
			<pre v-highlightjs><code class="vue">{{code}}</code></pre>
		</template>
	</rm-card>
</template>

<script>
	import Vue from "vue";
	import VueHighlightJS from 'vue-highlightjs'
	import RmSelect from "../../../src/Select/index"
	Vue.use(VueHighlightJS)

export default{
	name:"m-select",
	components:{
		RmSelect
	},
	data(){
		return{
			configures:[{key:1,value:"大黄"},{key:2,value:"小黑"}],
			seval:"",
			code:`,
	<div class="s-select">
		<div class="title">select示例</div>
		<rm-select 
			:value-map="['key','value']" 
			title="身份证号" 
			placeholder="请选择" 
			v-model="seval"
			direction="rtl"
			@change="schange"
			:configure="configures">
		</rm-select>
	</div>

import rmSelect from "../../../src/Select/index"
export default{
	name:"s-select",
	components:{
		rmSelect
	},
	data(){
		return{
			configures:[{key:1,value:"大黄"},{key:2,value:"小黑"}],
			seval:"",
		}
	},
	methods:{
		schange(val){
			console.log(val,this.seval)
		}
	}
}

.s-select .title{
		text-align: center;
		line-height: 36px;
		font-size: 16px;
	}

`
		}
	},
	methods:{
		schange(val){
			console.log(val,this.seval)
		}
	}
}
</script>

<style>
.s-select .title{
		text-align: center;
		line-height: 36px;
		font-size: 16px;
	}
</style>
