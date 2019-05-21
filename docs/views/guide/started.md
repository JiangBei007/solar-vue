---
title: '快速上手'
---
# 快速上手

```vue
<template>
  <div id="app">
    <rm-swiper 
    @on-slide="slide" 
    v-model="index"
    :loop="true"
    :auto="false"
    effect="slide"
    direction="horizontal"
    :pagination="true">
    	<template slot="misty-slide-list">
    		<div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=165624777,27724068&fm=26&gp=0.jpg" /> </div>
    		<div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1421658367,1385970853&fm=26&gp=0.jpg" /> </div>
    		<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3080038640,3834434929&fm=26&gp=0.jpg" /> </div>
    		<div><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4052373286,979797005&fm=26&gp=0.jpg" /> </div>
    	</template>
    </rm-swiper>
  </div>
</template>

<script>
import {RmSwiper} from 'rain-misty'
import 'rain-misty/dist/rain-misty.css'


export default {
  name: 'app',
  components: {
    RmSwiper
  },
	data(){
		return{
			index:0,
		}
	},
	methods:{
		slide(index){
			console.log(index)
		},
	}
}
</script>

```
<ClientOnly>
  
</ClientOnly>