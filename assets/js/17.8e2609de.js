(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{223:function(t,e,i){"use strict";var n=i(3),s=i(24),r=i(31),o=i(101),c=i(98),a=i(8),l=i(142).f,f=i(145).f,u=i(13).f,p=i(228).trim,d=n.Number,h=d,v=d.prototype,m="Number"==r(i(99)(v)),g="trim"in String.prototype,N=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var i,n,s,r=(e=g?e.trim():p(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+e}for(var o,a=e.slice(2),l=0,f=a.length;l<f;l++)if((o=a.charCodeAt(l))<48||o>s)return NaN;return parseInt(a,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof d&&(m?a(function(){v.valueOf.call(i)}):"Number"!=r(i))?o(new h(N(e)),i,d):N(e)};for(var y,I=i(9)?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;I.length>_;_++)s(h,y=I[_])&&!s(d,y)&&u(d,y,f(h,y));d.prototype=v,v.constructor=d,i(19)(n,"Number",d)}},228:function(t,e,i){var n=i(18),s=i(30),r=i(8),o=i(229),c="["+o+"]",a=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(t,e,i){var s={},c=r(function(){return!!o[t]()||"​"!="​"[t]()}),a=s[t]=c?e(u):o[t];i&&(s[i]=a),n(n.P+n.F*c,"String",s)},u=f.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(a,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},229:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},298:function(t,e,i){},299:function(t,e,i){},540:function(t,e,i){"use strict";var n=i(298);i.n(n).a},541:function(t,e,i){"use strict";var n=i(299);i.n(n).a},565:function(t,e,i){"use strict";i.r(e);i(12),i(223);var n={name:"s-sticky",props:{offsetTop:{type:Number,default:0}},data:function(){return{limitY:0,sticky:!1,top:0,left:0,g_scrollHandler:void 0,msg:""}},mounted:function(){this.init()},methods:{init:function(){this.initData(),this.addListener()},addListener:function(){this.g_scrollHandler=this.scrollHandler.bind(this),window.addEventListener("scroll",this.g_scrollHandler)},initData:function(){var t=this.$refs.stickyItem.getBoundingClientRect(),e=t.top,i=t.left;this.limitY=e-this.offsetTop,this.left=i+"px",this.top=this.offsetTop+"px"},scrollHandler:function(){window.scrollY>this.limitY?this.sticky=!0:this.sticky=!1}},beforeDestroy:function(){window.removeEventListener("scroll",this.g_scrollHandler)}},s=(i(540),i(1)),r={data:function(){return{cont:"",top:54,code:'\n        <s-sticky :offset-top="top">\n          <div class="box">滚动下看我是不是被黏住了~</div>\n        </s-sticky>\n      '.replace(/^ {8}/gm,"").trim()}},components:{"s-sticky":Object(s.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"stickyItem"},[e("div",{staticClass:"slot-wrapper",class:{sticky:this.sticky},style:{top:this.top,left:this.left}},[this._t("default")],2)])},[],!1,null,"5baf7d31",null).exports}},o=(i(541),Object(s.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("sakura-card",{scopedSlots:t._u([{key:"code",fn:function(){return[i("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[i("code",{staticClass:"vue"},[t._v(t._s(t.code))])])]},proxy:!0}])},[i("s-sticky",{attrs:{"offset-top":t.top}},[i("div",{staticClass:"box"},[t._v("滚动下看我是不是被黏住了~")])])],1)],1)},[],!1,null,"7741a08c",null));e.default=o.exports}}]);