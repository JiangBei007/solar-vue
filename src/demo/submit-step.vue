<template>
  <div class="demo-button">
    <div class="demo-title">基本用法</div>
    <div class="demo-button-container">
      <sv-button type="default" @click.native="nextStep">点击购买</sv-button>
    </div>
    <sv-popup v-model="visible" position="bottom"  height="400px">
     <sv-submit-step :list="options" :step-index="stepIndex" @change="navChange" @close="close">
				<div class="rq-purchase-confirm">
					<div style="height:200px;">
						
					</div>
					<div class="rq-purchase-process-btncontainer">
						<sv-button type="danger" @click.native="confirmNext">
							<template v-if="stepIndex>navIndex">
							  已同意，下一步
							</template>
							<template v-else>
								阅读并同意上述内容
							</template>
						</sv-button>
					</div>
				</div>
			</sv-submit-step>
    </sv-popup>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
const route = {
  tags: '基础组件',
  label: 'submit-step',
  path: 'submit-step'
}
export default {
  ...route,
  data() {
    return {
      visible:true,
      stepIndex:0,//确认到第几步
			options:[
				{
					label:"保险条款"
				},
				{
					label:"如实告知业务"
				},
				{
					label:"免责条款"
				},
				{
					label:"特殊声明"
				}
			],
      navIndex:0,//当前标题导航的下标
    }
  },
  created() {
    
  },
  methods: {
    nextStep(){
      console.log("下一步")
    },
    navChange(index){
			if(this.stepIndex < index)return
			this.navIndex = index
			console.log(index)
		},
    close(){
			this.popupShow = false
		},
    confirmNext(){
			if(this.stepIndex>=this.options.length)return;
			this.stepIndex++
			this.navIndex = Math.min(this.stepIndex,this.options.length-1)
			console.log(this.navIndex)
			if(this.stepIndex>=this.options.length){
				console.log("此处判断条件全部完善之后跳转页面，如果条件不完善咋直接弹框关闭")
			}
		},
  }
}
</script>
<style lang="less">
.rq-purchase-process-btncontainer{
    box-sizing: border-box;
    width: 100%;
    background: #ffffff;
    box-shadow: 0 -5px 10px 0 #EAEBEC;
    padding: 12px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
}
</style>
