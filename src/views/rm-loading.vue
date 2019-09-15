<template>
  <div class="s-loading">
    <rm-loading :show="show" :icon="icon">加载中</rm-loading>
    <div class="vui-button" @click="load('')">loading</div>
    <p></p>
    <div class="vui-button" @click="load('spot')">icon='spot'</div>
    <p></p>
    <div class="vui-button" @click="load('spotcolor')">icon='spotcolor'</div>
    <p></p>
    <div class="vui-button" @click="load('circle')">icon='circle'</div>
  </div>
</template>

<script>
export default {
  tags: '反馈组件',
  label: 'loading',
  path: 'loading',
  data() {
    return {
      show: false,
      icon: '',
      code: `
			<div class="s-loading">
				<rm-loading :show="show" :icon="icon">加载中</rm-loading>
				<div class="vui-button" @click="load('')">loading</div>
				<div class="vui-button" @click="load('spot')">icon='spot'</div>
				<div class="vui-button" @click="load('spotcolor')">icon='spotcolor'</div>
				<div class="vui-button" @click="load('circle')">icon='circle'</div>
			</div>

	import rmLoading from "../../../src/Loading/index"

	export default {
		name: "s-loading",
		components: {
			rmLoading
		},
		data() {
			return {
				show:false,
				icon:"",
			}
		},
		load(type){
			this.icon = type;
			this.show = true;
			setTimeout(()=>{
				this.show = false;
			},2000)
		}
	}
`
        .replace(/^ {8}/gm, '')
        .trim()
    }
  },
  methods: {
    load(type) {
      this.icon = type
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 2000)
    }
  }
}
</script>

<style></style>
