(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{221:function(s,t,o){"use strict";var a=o(18),c=o(143)(!0);a(a.P,"Array",{includes:function(s){return c(this,s,arguments.length>1?arguments[1]:void 0)}}),o(144)("includes")},222:function(s,t,o){"use strict";var a=o(18),c=o(225);a(a.P+a.F*o(226)("includes"),"String",{includes:function(s){return!!~c(this,s,"includes").indexOf(s,arguments.length>1?arguments[1]:void 0)}})},223:function(s,t,o){"use strict";var a=o(3),c=o(24),n=o(31),r=o(101),e=o(98),l=o(8),i=o(142).f,d=o(145).f,u=o(13).f,v=o(228).trim,p=a.Number,f=p,g=p.prototype,b="Number"==n(o(99)(g)),m="trim"in String.prototype,h=function(s){var t=e(s,!1);if("string"==typeof t&&t.length>2){var o,a,c,n=(t=m?t.trim():v(t,3)).charCodeAt(0);if(43===n||45===n){if(88===(o=t.charCodeAt(2))||120===o)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:a=2,c=49;break;case 79:case 111:a=8,c=55;break;default:return+t}for(var r,l=t.slice(2),i=0,d=l.length;i<d;i++)if((r=l.charCodeAt(i))<48||r>c)return NaN;return parseInt(l,a)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(s){var t=arguments.length<1?0:s,o=this;return o instanceof p&&(b?l(function(){g.valueOf.call(o)}):"Number"!=n(o))?r(new f(h(t)),o,p):h(t)};for(var C,y=o(9)?i(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;y.length>_;_++)c(f,C=y[_])&&!c(p,C)&&u(p,C,d(f,C));p.prototype=g,g.constructor=p,o(19)(a,"Number",p)}},225:function(s,t,o){var a=o(100),c=o(30);s.exports=function(s,t,o){if(a(t))throw TypeError("String#"+o+" doesn't accept regex!");return String(c(s))}},226:function(s,t,o){var a=o(2)("match");s.exports=function(s){var t=/./;try{"/./"[s](t)}catch(o){try{return t[a]=!1,!"/./"[s](t)}catch(s){}}return!0}},228:function(s,t,o){var a=o(18),c=o(30),n=o(8),r=o(229),e="["+r+"]",l=RegExp("^"+e+e+"*"),i=RegExp(e+e+"*$"),d=function(s,t,o){var c={},e=n(function(){return!!r[s]()||"​"!="​"[s]()}),l=c[s]=e?t(u):r[s];o&&(c[o]=l),a(a.P+a.F*e,"String",c)},u=d.trim=function(s,t){return s=String(c(s)),1&t&&(s=s.replace(l,"")),2&t&&(s=s.replace(i,"")),s};s.exports=d},229:function(s,t){s.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},287:function(s,t,o){},288:function(s,t,o){},289:function(s,t,o){},529:function(s,t,o){"use strict";var a=o(287);o.n(a).a},530:function(s,t,o){"use strict";var a=o(288);o.n(a).a},531:function(s,t,o){"use strict";var a=o(289);o.n(a).a},559:function(s,t,o){"use strict";o.r(t);o(12),o(4),o(221),o(222),o(223);var a={name:"s-row",props:{gutter:{type:[Number,String]},align:{validator:function(s){return["center","left","right"].includes(s)}}},computed:{rowStyle:function(){var s=this.gutter;return"margin-left: -".concat(s/2,"px;margin-right: -").concat(s/2,"px;")},rowClass:function(){var s=this.align;return s&&"align-".concat(s)}},mounted:function(){var s=this;this.$children.forEach(function(t){t.gutter=s.gutter})}},c=(o(529),o(1)),n=Object(c.a)(a,function(){var s=this.$createElement;return(this._self._c||s)("div",{staticClass:"s-row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"08d0f13a",null).exports,r=o(17),e=(o(14),o(32),function(s){return Object.keys(s).every(function(s){return"span"===s||"offset"===s})}),l={name:"s-col",props:{span:{type:[Number,String],deault:24},offset:{type:[Number,String],default:0},xs:{validator:e},sm:{validator:e},md:{validator:e},lg:{validator:e},xl:{validator:e}},methods:{createClass:function(s,t){if(!t)return[];var o=t.span,a=t.offset,c=[];return o&&c.push("col-".concat(s).concat(o)),a&&c.push("offset-".concat(s).concat(a)),c}},computed:{colClasses:function(){var s=this.span,t=this.offset,o=this.xs,a=this.sm,c=this.md,n=this.lg,e=this.xl;return Object(r.a)(this.createClass("",{span:s,offset:t})).concat(Object(r.a)(this.createClass("xs-",o)),Object(r.a)(this.createClass("sm-",a)),Object(r.a)(this.createClass("md-",c)),Object(r.a)(this.createClass("lg-",n)),Object(r.a)(this.createClass("xl-",e)))},colStyle:function(){var s=this.gutter;return"padding: 0 ".concat(s/2,"px")}},data:function(){return{gutter:0}}},i=(o(530),{data:function(){return{code1:'\n        <s-row class="row-bg">\n          <s-col span="4">\n            <div class="demo-col" style="backgroundColor:#d4b1b5"></div>\n          </s-col>\n          <s-col span="4">\n            <div class="demo-col" style="backgroundColor:#E3CBA8"></div>\n          </s-col>\n          <s-col span="4">\n            <div class="demo-col" style="backgroundColor:#BF827E"></div>\n          </s-col>\n          <s-col span="4">\n            <div class="demo-col" style="backgroundColor:#f69e9f"></div>\n          </s-col>\n          <s-col span="4">\n            <div class="demo-col" style="backgroundColor:#fce6e6"></div>\n          </s-col>\n          <s-col span="4">\n            <div class="demo-col" style="backgroundColor:#5f4d58"></div>\n          </s-col>\n        </s-row>\n    '.replace(/^ {8}/gm,"").trim(),code2:'\n        <s-row class="row-bg">\n          <s-col span="6">\n            <div class="demo-col"  style="backgroundColor:#d4b1b5"></div>\n          </s-col>\n          <s-col span="6">\n            <div class="demo-col"  style="backgroundColor:#E3CBA8"></div>\n          </s-col>\n          <s-col span="6" offset="6">\n            <div class="demo-col" style="backgroundColor:#d4b1b5"></div>\n          </s-col>\n        </s-row>\n      '.replace(/^ {8}/gm,"").trim(),code3:'\n        <s-row class="row-bg" gutter="20">\n          <s-col span="6">\n            <div class="demo-col" style="backgroundColor:#d4b1b5"></div>\n          </s-col>\n          <s-col span="6">\n            <div class="demo-col" style="backgroundColor:#d4b1b5"></div>\n          </s-col>\n          <s-col span="6">\n            <div class="demo-col" style="backgroundColor:#d4b1b5"></div>\n          </s-col>\n          <s-col span="6">\n            <div class="demo-col" style="backgroundColor:#d4b1b5"></div>\n          </s-col>\n        </s-row>\n      '.replace(/^ {8}/gm,"").trim(),code4:'\n        <s-row class="row-bg" align="left">\n          <s-col span="8" :xl="{span:1}" :md="{span:10}" >\n            <div class="demo-col" style="backgroundColor:#d4b1b5"></div>\n          </s-col>\n          <s-col span="8" :xl="{span:10}" :md="{span:2}">\n            <div class="demo-col" style="backgroundColor:#E3CBA8"></div>\n          </s-col>\n          <s-col span="8" :xl="{span:2}" :md="{span:3}">\n            <div class="demo-col" style="backgroundColor:#BF827E"></div>\n          </s-col>\n        </s-row>\n      '.replace(/^ {8}/gm,"").trim()}},components:{"s-row":n,"s-col":Object(c.a)(l,function(){var s=this.$createElement;return(this._self._c||s)("div",{staticClass:"s-col",class:this.colClasses,style:this.colStyle},[this._t("default")],2)},[],!1,null,"43af360c",null).exports}}),d=(o(531),Object(c.a)(i,function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("div",[o("h3",[s._v("基础用法")]),s._v(" "),o("sakura-card",{scopedSlots:s._u([{key:"code",fn:function(){return[o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[o("code",{staticClass:"vue"},[s._v(s._s(s.code1))])])]},proxy:!0}])},[o("s-row",{staticClass:"row-bg"},[o("s-col",{attrs:{span:"4"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#d4b1b5"}})]),s._v(" "),o("s-col",{attrs:{span:"4"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#E3CBA8"}})]),s._v(" "),o("s-col",{attrs:{span:"4"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#BF827E"}})]),s._v(" "),o("s-col",{attrs:{span:"4"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#f69e9f"}})]),s._v(" "),o("s-col",{attrs:{span:"4"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#fce6e6"}})]),s._v(" "),o("s-col",{attrs:{span:"4"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#5f4d58"}})])],1)],1),s._v(" "),o("h3",[s._v("分栏偏移")]),s._v(" "),o("sakura-card",{scopedSlots:s._u([{key:"code",fn:function(){return[o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[o("code",{staticClass:"vue"},[s._v(s._s(s.code2))])])]},proxy:!0}])},[o("s-row",{staticClass:"row-bg"},[o("s-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#d4b1b5"}})]),s._v(" "),o("s-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#E3CBA8"}})]),s._v(" "),o("s-col",{attrs:{span:"6",offset:"6"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#d4b1b5"}})])],1)],1),s._v(" "),o("h3",[s._v("分栏间隔")]),s._v(" "),o("sakura-card",{scopedSlots:s._u([{key:"code",fn:function(){return[o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[o("code",{staticClass:"vue"},[s._v(s._s(s.code3))])])]},proxy:!0}])},[o("s-row",{staticClass:"row-bg",attrs:{gutter:"20"}},[o("s-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#d4b1b5"}})]),s._v(" "),o("s-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#d4b1b5"}})]),s._v(" "),o("s-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#d4b1b5"}})]),s._v(" "),o("s-col",{attrs:{span:"6"}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#d4b1b5"}})])],1)],1),s._v(" "),o("h3",[s._v("响应式布局")]),s._v(" "),o("sakura-card",{scopedSlots:s._u([{key:"code",fn:function(){return[o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[o("code",{staticClass:"vue"},[s._v(s._s(s.code4))])])]},proxy:!0}])},[o("s-row",{staticClass:"row-bg",attrs:{align:"left"}},[o("s-col",{attrs:{span:"8",xl:{span:1},md:{span:10}}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#d4b1b5"}})]),s._v(" "),o("s-col",{attrs:{span:"8",xl:{span:10},md:{span:2}}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#E3CBA8"}})]),s._v(" "),o("s-col",{attrs:{span:"8",xl:{span:2},md:{span:3}}},[o("div",{staticClass:"demo-col",staticStyle:{backgroundColor:"#BF827E"}})])],1)],1)],1)},[],!1,null,"c2829932",null));t.default=d.exports}}]);