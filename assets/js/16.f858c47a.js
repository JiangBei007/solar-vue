(window.webpackJsonp=window.webpackJsonp||[]).push([[16,20],{233:function(a,e,o){"use strict";var c=o(25),n=o(18),r=o(41),t=o(147),l=o(148),N=o(33),m=o(241),s=o(149);n(n.S+n.F*!o(104)(function(a){Array.from(a)}),"Array",{from:function(a){var e,o,n,i,A=r(a),p="function"==typeof this?this:Array,f=arguments.length,j=f>1?arguments[1]:void 0,u=void 0!==j,I=0,C=s(A);if(u&&(j=c(j,f>2?arguments[2]:void 0,2)),null==C||p==Array&&l(C))for(o=new p(e=N(A.length));e>I;I++)m(o,I,u?j(A[I],I):A[I]);else for(i=C.call(A),o=new p;!(n=i.next()).done;I++)m(o,I,u?t(i,j,[n.value,I],!0):n.value);return o.length=I,o}})},236:function(a,e,o){},241:function(a,e,o){"use strict";var c=o(13),n=o(67);a.exports=function(a,e,o){e in a?c.f(a,e,n(0,o)):a[e]=o}},262:function(a,e,o){"use strict";var c=o(236);o.n(c).a},263:function(a,e,o){},312:function(a,e,o){"use strict";o.r(e);o(150),o(233),o(4);var c={name:"sakura-color",props:{list:{type:Array}},data:function(){return{isOpen:!1}},mounted:function(){this.addFanDot()},watch:{isOpen:function(a){var e=this;Array.from(this.$refs.fan.children).forEach(function(o,c){if(a){var n=150/e.list.length*c;o.style.transform="rotate(".concat(n-73,"deg)")}else o.style.transform="none"})}},methods:{selectColor:function(a){this.$emit("selectColor",a)},addFanDot:function(){var a=this,e=document.createElement("div");e.style.cssText="height:14px;width:14px;background:#fff;border-radius:50%;position:absolute;bottom:4px;left:8px",this.$refs.fan.lastChild.appendChild(e),e.addEventListener("click",function(){a.isOpen=!a.isOpen})},getItemStyle:function(a,e){this.list.length;return{backgroundColor:a,transformOrigin:"10px 140px",zIndex:e}}}},n=(o(262),o(1)),r=Object(n.a)(c,function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{ref:"fan",staticClass:"fan"},a._l(a.list,function(e,c){return o("div",{key:c,staticClass:"item",style:a.getItemStyle(e.color,c),on:{click:function(o){return a.selectColor(e)}}})}),0)},[],!1,null,"1c7a57de",null);e.default=r.exports},511:function(a,e,o){"use strict";var c=o(263);o.n(c).a},567:function(a,e,o){"use strict";o.r(e);o(4);var c=o(312),n=[{color:"#DC9FB4",cnName:"撫子",jpName:"NADESHIKO"},{color:"#E16B8C",cnName:"紅梅",jpName:"KOHBAI"},{color:"#8E354A",cnName:"蘇芳",jpName:"SUOH"},{color:"#F8C3CD",cnName:"退紅",jpName:"TAIKOH"},{color:"#F4A7B9",cnName:"一斥染",jpName:"IKKONZOME"},{color:"#64363C",cnName:"桑染",jpName:"KUWAZOME"},{color:"#F596AA",cnName:"桃",jpName:"MOMO"},{color:"#B5495B",cnName:"苺",jpName:"ICHIGO"},{color:"#E87A90",cnName:"薄紅",jpName:"USUBENI"},{color:"#D05A6E",cnName:"今様",jpName:"IMAYOH"},{color:"#DB4D6D",cnName:"中紅",jpName:"NAKABENI"},{color:"#FEDFE1",cnName:"桜",jpName:"SAKURA"}],r=[{color:"#BC9F77",cnName:"白茶",jpName:"SHIRACHA"},{color:"#876633",cnName:"媚茶",jpName:"KOBICHA"},{color:"#C18A26",cnName:"黄唐茶",jpName:"KIGARACHA"},{color:"#FFB11B",cnName:"山吹",jpName:"YAMABUKI"},{color:"#D19826",cnName:"山吹茶",jpName:"YAMABUKICHA"},{color:"#DDA52D",cnName:"櫨染",jpName:"HAJIZOME"},{color:"#C99833",cnName:"桑茶",jpName:"UWACHA"},{color:"#F9BF45",cnName:"玉子",jpName:"TAMAGO"},{color:"#DCB879",cnName:"白橡",jpName:"SHIROTSURUBAMI"},{color:"#BA9132",cnName:"黄橡",jpName:"KITSURUBAMI"},{color:"#E8B647",cnName:"玉蜀黍",jpName:"TAMAMOROKOSHI"},{color:"#F7C242",cnName:"花葉",jpName:"HANABA"}],t=[{color:"#A5A051",cnName:"鶸茶",jpName:"HIWACHA"},{color:"#BEC23F",cnName:"鶸",jpName:"HIWA"},{color:"#6C6A2D",cnName:"鶯",jpName:"UGUISU"},{color:"#939650",cnName:"柳茶",jpName:"YANAGICHA"},{color:"#838A2D",cnName:"苔",jpName:"KOKE"},{color:"#B1B479",cnName:"麹塵",jpName:"KIKUJIN"},{color:"#616138",cnName:"璃寛茶",jpName:"RIKANCHA"},{color:"#4B4E2A",cnName:"藍媚茶",jpName:"AIKOBICHA"},{color:"#5B622E",cnName:"海松",jpName:"MIRU"},{color:"#4D5139",cnName:"千歳茶",jpName:"SENSAICHA"},{color:"#89916B",cnName:"梅幸茶",jpName:"BAIKOCHA"},{color:"#91AD70",cnName:"柳染",jpName:"YANAGIZOME"}],l=[{color:"#5DAC81",cnName:"若竹",jpName:"WAKATAKE"},{color:"#36563C",cnName:"千歳緑",jpName:"CHITOSEMIDORI"},{color:"#227D51",cnName:"緑, MIDORI",jpName:"緑, MIDORI"},{color:"#A8D8B9",cnName:"白緑",jpName:"BYAKUROKU"},{color:"#6A8372",cnName:"老竹",jpName:"OITAKE"},{color:"#2D6D4B",cnName:"木賊",jpName:"TOKUSA"},{color:"#465D4C",cnName:"御納戸茶",jpName:"ONANDOCHA"},{color:"#24936E",cnName:"緑青",jpName:"ROKUSYOH"},{color:"#86A697",cnName:"錆青磁",jpName:"SABISEIJI"},{color:"#00896C",cnName:"青竹",jpName:"AOTAKE"},{color:"#20604F",cnName:"虫襖",jpName:"MUSHIAO"},{color:"#00AA90",cnName:"青緑",jpName:"AOMIDORI"}],N=[{color:"#81C7D4",cnName:"水",jpName:"MIZU"},{color:"#33A6B8",cnName:"浅葱",jpName:"ASAGI"},{color:"#0D5661",cnName:"藍",jpName:"AI"},{color:"#0089A7",cnName:"新橋",jpName:"SHINBASHI"},{color:"#336774",cnName:"錆御納戸",jpName:"SABIONANDO"},{color:"#1E88A8",cnName:"花浅葱",jpName:"HANAASAGI"},{color:"#577C8A",cnName:"舛花",jpName:"MASUHANA"},{color:"#58B2DC",cnName:"空",jpName:"SORA"},{color:"#2B5F75",cnName:"熨斗目花",jpName:"NOSHIMEHANA"},{color:"#3A8FB7",cnName:"千草",jpName:"CHIGUSA"},{color:"#7DB9DE",cnName:"勿忘草",jpName:"WASURENAGUSA"},{color:"#51A8DD",cnName:"群青",jpName:"GUNJYO"}],m=[{color:"#7B90D2",cnName:"紅碧",jpName:"BENIMIDORI"},{color:"#6E75A4",cnName:"藤鼠",jpName:"FUJINEZUMI"},{color:"#8B81C3",cnName:"藤",jpName:"FUJI"},{color:"#70649A",cnName:"二藍",jpName:"FUTAAI"},{color:"#9B90C2",cnName:"楝",jpName:"OUCHI"},{color:"#8A6BBE",cnName:"藤紫",jpName:"FUJIMURASAKI"},{color:"#6A4C9C",cnName:"桔梗",jpName:"KIKYO"},{color:"#8F77B5",cnName:"紫苑",jpName:"SHION"},{color:"#B28FCE",cnName:"薄",jpName:"USU"},{color:"#986DB2",cnName:"半",jpName:"HASHITA"},{color:"#77428D",cnName:"江戸紫",jpName:"EDOMURASAKI"},{color:"#B481BB",cnName:"紅藤",jpName:"BENIFUJI"}],s={name:"sakura-color",data:function(){return{display:{cnName:"桜",jpName:"SAKURA",color:"#FEDFE1"},value:"",list1:n,list2:r,list3:t,list4:l,list5:N,list6:m}},mounted:function(){var a=this.$refs;[a.fan1,a.fan2,a.fan3,a.fan4,a.fan5,a.fan6].forEach(function(a,e){setTimeout(function(){a.isOpen=!0},1200*e)})},methods:{changeDisplay:function(a){this.display=a}},components:{"sakura-fan":c.default}},i=(o(511),o(1)),A=Object(i.a)(s,function(){var a=this,e=a.$createElement,o=a._self._c||e;return o("div",{staticClass:"color-wrapper"},[o("div",{staticClass:"palette"},[o("div",{staticStyle:{height:"50px",width:"100%"}},[a._v(" 点击扇子上的颜色，还有下方白色按钮可以折叠的哦~~")]),a._v(" "),o("div",{staticClass:"row"},[o("sakura-fan",{ref:"fan1",attrs:{list:a.list1},on:{selectColor:a.changeDisplay}}),a._v(" "),o("sakura-fan",{ref:"fan2",attrs:{list:a.list2},on:{selectColor:a.changeDisplay}})],1),a._v(" "),o("div",{staticClass:"row"},[o("sakura-fan",{ref:"fan3",attrs:{list:a.list3},on:{selectColor:a.changeDisplay}}),a._v(" "),o("sakura-fan",{ref:"fan4",attrs:{list:a.list4},on:{selectColor:a.changeDisplay}})],1),a._v(" "),o("div",{staticClass:"row"},[o("sakura-fan",{ref:"fan5",attrs:{list:a.list5},on:{selectColor:a.changeDisplay}}),a._v(" "),o("sakura-fan",{ref:"fan6",attrs:{list:a.list6},on:{selectColor:a.changeDisplay}})],1)]),a._v(" "),o("div",{staticClass:"introduction",style:{backgroundColor:a.display.color,transition:"1.5s"}},[o("div",{staticClass:"color-cn"},[a._v(a._s(a.display.cnName))]),a._v(" "),o("div",{staticClass:"color-jp"},[a._v(a._s(a.display.jpName))]),a._v(" "),o("div",{staticClass:"color-value"},[a._v(a._s(a.display.color))])])])},[],!1,null,"53ade85d",null);e.default=A.exports}}]);