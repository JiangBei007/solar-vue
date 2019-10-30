(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{428:function(n,i,e){"use strict";e.r(i);var t=e(0),s=e(54),a=e.n(s);e(55);t.a.use(a.a);var o={data:function(){return{show:!1,code:',\n<template>\n  <div>\n    <div class="demo-title">水平方向</div>\n    <div class="demo-container">\n      <sv-swiper\n        @on-slide="slide"\n        v-model="index"\n        :loop="true"\n        :auto="false"\n        effect="slide"\n        direction="horizontal"\n        :pagination="true"\n      >\n        <template slot="sv-swiper-slot">\n          <div>\n            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_2.png" />\n          </div>\n          <div>\n            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_3.png" />\n          </div>\n          <div>\n            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_4.png" />\n          </div>\n          <div>\n            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_6.png" />\n          </div>\n        </template>\n      </sv-swiper>\n    </div>\n    <div class="demo-title">垂直方向循环</div>\n    <div class="demo-container">\n      <sv-swiper\n        @on-slide="slide1"\n        v-model="index1"\n        :loop="true"\n        :auto="false"\n        effect="slide"\n        direction="vertical"\n        :pagination="true"\n      >\n        <template slot="sv-swiper-slot">\n          <div>\n            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_2.png" />\n          </div>\n          <div>\n            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_3.png" />\n          </div>\n          <div>\n            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_4.png" />\n          </div>\n          <div>\n            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_6.png" />\n          </div>\n        </template>\n      </sv-swiper>\n    </div>\n    <div class="demo-title">手动切换的文字型左右轮播</div>\n    <div class="demo-container">\n      <sv-swiper v-model="index2" @on-slide="slide2" direction="horizontal" :pagination="true">\n        <template slot="sv-swiper-slot">\n          <div v-for="(i, index) in 7" :key="index">{{ index }}</div>\n        </template>\n      </sv-swiper>\n      <div class="demo-btn-container">\n        <sv-button\n          type="info"\n          size="small"\n          icon="arrow-right"\n          position="right"\n          @click.native="slideTo(7)"\n        >下一页</sv-button>\n        <sv-button type="info" size="small" icon="bell">当前页 {{ index2 }}</sv-button>\n      </div>\n    </div>\n\n    <div class="demo-title">渐隐渐显</div>\n    <div class="demo-container">\n      <sv-swiper\n        @on-slide="slide3"\n        v-model="index3"\n        :loop="true"\n        :auto="false"\n        effect="fade"\n        direction="horizontal"\n        :pagination="true"\n      >\n        <template slot="sv-swiper-slot">\n          <div>\n            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_2.png" />\n          </div>\n          <div>\n            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_3.png" />\n          </div>\n          <div>\n            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_4.png" />\n          </div>\n          <div>\n            <img src="https://static.zhongan.com/website/tech/img/index/case_bg_qu_6.png" />\n          </div>\n        </template>\n      </sv-swiper>\n    </div>\n    <div class="demo-title">\n      异步加载\n      <sv-button type="info" size="small" icon="plus" position="right" @click.native="add">Add</sv-button>\n    </div>\n    <div class="demo-container">\n      <div class="demo-swiper-box">\n        <sv-swiper\n          v-if="flag&&imgList.length"\n          v-model="index4"\n          :loop="true"\n          :auto="false"\n          effect="slide"\n          :pagination="true"\n          ref="asyncdom"\n        >\n          <template slot="sv-swiper-slot">\n            <div v-for="(img, i) in imgList" :key="i">\n              <img :src="img" />\n            </div>\n          </template>\n        </sv-swiper>\n      </div>\n    </div>\n  </div>\n</template>\n\n\nexport default {\n  data() {\n    return {\n      index: 0,\n      index1: 0,\n      index2: 5,\n      index3: 1,\n      index4: 0,\n      imgList: [\n        \'https://static.zhongan.com/website/tech/img/index/case_bg_qu_2.png\',\n        \'https://static.zhongan.com/website/tech/img/index/case_bg_qu_3.png\',\n        \'https://static.zhongan.com/website/tech/img/index/case_bg_qu_4.png\',\n        \'https://static.zhongan.com/website/tech/img/index/case_bg_qu_6.png\'\n      ],\n      flag: true\n    }\n  },\n  methods: {\n    slide(index) {\n      //console.log(index)\n    },\n    slide1(index) {\n      //console.log(index)\n    },\n    slide2(index) {\n      //console.log(index)\n    },\n    slideTo(length) {\n      if (this.index2 < length - 1) {\n        this.index2++\n      } else {\n        this.index2 = 0\n      }\n    },\n    slide3(index) {\n      // console.log(index)\n    },\n    add() {\n      this.flag = false\n      setTimeout(() => {\n        this.imgList.push(\n          \'https://static.zhongan.com/website/factoryOnline/assets/images/index/pro9.png\'\n        )\n        this.flag = true\n      }, 100)\n    }\n  }\n}\n\n'}}},d=e(1),c=Object(d.a)(o,(function(){var n=this,i=n.$createElement,e=n._self._c||i;return e("div",[e("layout-card",[e("div",[e("layout-column",{attrs:{title:"扫码体验",tips:"查看源代码",url:"swiper"},on:{handle:function(i){n.show=!0}}})],1)]),n._v(" "),e("div",{staticClass:"file-blank"}),n._v(" "),e("layout-card",[e("div",{staticClass:"site-introduce"},[e("div",{staticClass:"site-introduce-title"},[n._v("介绍")]),n._v(" "),e("div",{staticClass:"site-introduce-text"},[e("p",[n._v("为了方便后期的维护，我们已经把此组件基于的class类抽离了出去单独封装")]),n._v(" "),e("p",[n._v("我们尽可能地给您提供丰富细致的例子，如右侧->")]),n._v(" "),e("p",[n._v("\n          如果您特殊需要，你可以单独下载我们的\n          "),e("a",{attrs:{href:"https://www.npmjs.com/package/small-swiper",target:"blank"}},[n._v("swiper")]),n._v("\n          插件，自己实现符合您需求的组件使用，我们为您提供了丰富的\n          "),e("a",{attrs:{href:"https://www.npmjs.com/package/small-swiper",target:"blank"}},[n._v("例子")])])])])]),n._v(" "),e("layout-code",{attrs:{title:"icon"},model:{value:n.show,callback:function(i){n.show=i},expression:"show"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",{staticClass:"vue"},[n._v(n._s(n.code))])])])],1)}),[],!1,null,null,null);i.default=c.exports}}]);