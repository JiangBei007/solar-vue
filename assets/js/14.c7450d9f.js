(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{11:function(n,t){var e=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},12:function(n,t,e){var r=e(26),o=e(31);n.exports=e(15)?function(n,t,e){return r.f(n,t,o(1,e))}:function(n,t,e){return n[t]=e,n}},13:function(n,t,e){var r=e(14);n.exports=function(n){if(!r(n))throw TypeError(n+" is not an object!");return n}},14:function(n,t){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},15:function(n,t,e){n.exports=!e(16)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},16:function(n,t){n.exports=function(n){try{return!!n()}catch(n){return!0}}},17:function(n,t){n.exports=function(n){if(null==n)throw TypeError("Can't call method on  "+n);return n}},18:function(n,t){var e=n.exports={version:"2.6.10"};"number"==typeof __e&&(__e=e)},19:function(n,t){var e=Math.ceil,r=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?r:e)(n)}},20:function(n,t,e){var r=e(22)("wks"),o=e(23),i=e(11).Symbol,c="function"==typeof i;(n.exports=function(n){return r[n]||(r[n]=c&&i[n]||(c?i:o)("Symbol."+n))}).store=r},21:function(n,t,e){var r=e(11),o=e(12),i=e(27),c=e(23)("src"),u=e(42),a=(""+u).split("toString");e(18).inspectSource=function(n){return u.call(n)},(n.exports=function(n,t,e,u){var l="function"==typeof e;l&&(i(e,"name")||o(e,"name",t)),n[t]!==e&&(l&&(i(e,c)||o(e,c,n[t]?""+n[t]:a.join(String(t)))),n===r?n[t]=e:u?n[t]?n[t]=e:o(n,t,e):(delete n[t],o(n,t,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[c]||u.call(this)}))},22:function(n,t,e){var r=e(18),o=e(11),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(n.exports=function(n,t){return i[n]||(i[n]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:e(33)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},23:function(n,t){var e=0,r=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++e+r).toString(36))}},24:function(n,t,e){"use strict";var r,o,i=e(40),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,l=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),s=void 0!==/()??/.exec("")[1];(l||s)&&(a=function(n){var t,e,r,o,a=this;return s&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),l&&(t=a.lastIndex),r=c.call(a,n),l&&r&&(a.lastIndex=a.global?r.index+r[0].length:t),s&&r&&r.length>1&&u.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),n.exports=a},25:function(n,t,e){var r=e(11),o=e(18),i=e(12),c=e(21),u=e(32),a=function(n,t,e){var l,s,f,v,d=n&a.F,p=n&a.G,h=n&a.S,g=n&a.P,x=n&a.B,y=p?r:h?r[t]||(r[t]={}):(r[t]||{}).prototype,m=p?o:o[t]||(o[t]={}),w=m.prototype||(m.prototype={});for(l in p&&(e=t),e)f=((s=!d&&y&&void 0!==y[l])?y:e)[l],v=x&&s?u(f,r):g&&"function"==typeof f?u(Function.call,f):f,y&&c(y,l,f,n&a.U),m[l]!=f&&i(m,l,v),g&&w[l]!=f&&(w[l]=f)};r.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,n.exports=a},26:function(n,t,e){var r=e(13),o=e(34),i=e(36),c=Object.defineProperty;t.f=e(15)?Object.defineProperty:function(n,t,e){if(r(n),t=i(t,!0),r(e),o)try{return c(n,t,e)}catch(n){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(n[t]=e.value),n}},27:function(n,t){var e={}.hasOwnProperty;n.exports=function(n,t){return e.call(n,t)}},28:function(n,t){var e={}.toString;n.exports=function(n){return e.call(n).slice(8,-1)}},29:function(n,t,e){var r=e(19),o=Math.min;n.exports=function(n){return n>0?o(r(n),9007199254740991):0}},30:function(n,t,e){var r=e(17);n.exports=function(n){return Object(r(n))}},31:function(n,t){n.exports=function(n,t){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:t}}},32:function(n,t,e){var r=e(43);n.exports=function(n,t,e){if(r(n),void 0===t)return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)}}return function(){return n.apply(t,arguments)}}},33:function(n,t){n.exports=!1},34:function(n,t,e){n.exports=!e(15)&&!e(16)((function(){return 7!=Object.defineProperty(e(35)("div"),"a",{get:function(){return 7}}).a}))},35:function(n,t,e){var r=e(14),o=e(11).document,i=r(o)&&r(o.createElement);n.exports=function(n){return i?o.createElement(n):{}}},36:function(n,t,e){var r=e(14);n.exports=function(n,t){if(!r(n))return n;var e,o;if(t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;if("function"==typeof(e=n.valueOf)&&!r(o=e.call(n)))return o;if(!t&&"function"==typeof(e=n.toString)&&!r(o=e.call(n)))return o;throw TypeError("Can't convert object to primitive value")}},37:function(n,t,e){"use strict";var r=e(44)(!0);n.exports=function(n,t,e){return t+(e?r(n,t).length:1)}},38:function(n,t,e){"use strict";var r=e(45),o=RegExp.prototype.exec;n.exports=function(n,t){var e=n.exec;if("function"==typeof e){var i=e.call(n,t);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(n))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(n,t)}},39:function(n,t,e){"use strict";e(46);var r=e(21),o=e(12),i=e(16),c=e(17),u=e(20),a=e(24),l=u("species"),s=!i((function(){var n=/./;return n.exec=function(){var n=[];return n.groups={a:"7"},n},"7"!=="".replace(n,"$<a>")})),f=function(){var n=/(?:)/,t=n.exec;n.exec=function(){return t.apply(this,arguments)};var e="ab".split(n);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();n.exports=function(n,t,e){var v=u(n),d=!i((function(){var t={};return t[v]=function(){return 7},7!=""[n](t)})),p=d?!i((function(){var t=!1,e=/a/;return e.exec=function(){return t=!0,null},"split"===n&&(e.constructor={},e.constructor[l]=function(){return e}),e[v](""),!t})):void 0;if(!d||!p||"replace"===n&&!s||"split"===n&&!f){var h=/./[v],g=e(c,v,""[n],(function(n,t,e,r,o){return t.exec===a?d&&!o?{done:!0,value:h.call(t,e,r)}:{done:!0,value:n.call(e,t,r)}:{done:!1}})),x=g[0],y=g[1];r(String.prototype,n,x),o(RegExp.prototype,v,2==t?function(n,t){return y.call(n,this,t)}:function(n){return y.call(n,this)})}}},40:function(n,t,e){"use strict";var r=e(13);n.exports=function(){var n=r(this),t="";return n.global&&(t+="g"),n.ignoreCase&&(t+="i"),n.multiline&&(t+="m"),n.unicode&&(t+="u"),n.sticky&&(t+="y"),t}},41:function(n,t,e){"use strict";var r=e(13),o=e(30),i=e(29),c=e(19),u=e(37),a=e(38),l=Math.max,s=Math.min,f=Math.floor,v=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;e(39)("replace",2,(function(n,t,e,p){return[function(r,o){var i=n(this),c=null==r?void 0:r[t];return void 0!==c?c.call(r,i,o):e.call(String(i),r,o)},function(n,t){var o=p(e,n,this,t);if(o.done)return o.value;var f=r(n),v=String(this),d="function"==typeof t;d||(t=String(t));var g=f.global;if(g){var x=f.unicode;f.lastIndex=0}for(var y=[];;){var m=a(f,v);if(null===m)break;if(y.push(m),!g)break;""===String(m[0])&&(f.lastIndex=u(v,i(f.lastIndex),x))}for(var w,b="",_=0,S=0;S<y.length;S++){m=y[S];for(var j=String(m[0]),k=l(s(c(m.index),v.length),0),E=[],R=1;R<m.length;R++)E.push(void 0===(w=m[R])?w:String(w));var M=m.groups;if(d){var O=[j].concat(E,k,v);void 0!==M&&O.push(M);var $=String(t.apply(void 0,O))}else $=h(j,v,k,E,M,t);k>=_&&(b+=v.slice(_,k)+$,_=k+j.length)}return b+v.slice(_)}];function h(n,t,r,i,c,u){var a=r+n.length,l=i.length,s=d;return void 0!==c&&(c=o(c),s=v),e.call(u,s,(function(e,o){var u;switch(o.charAt(0)){case"$":return"$";case"&":return n;case"`":return t.slice(0,r);case"'":return t.slice(a);case"<":u=c[o.slice(1,-1)];break;default:var s=+o;if(0===s)return e;if(s>l){var v=f(s/10);return 0===v?e:v<=l?void 0===i[v-1]?o.charAt(1):i[v-1]+o.charAt(1):e}u=i[s-1]}return void 0===u?"":u}))}}))},42:function(n,t,e){n.exports=e(22)("native-function-to-string",Function.toString)},426:function(n,t,e){"use strict";e.r(t);e(41);var r=e(0),o=e(47),i=e.n(o);e(48);r.a.use(i.a);var c={data:function(){return{codeshow:!1,show:!1,type:"",message:"",code:',\n<template>\n  <div>\n    <div class="demo-title">基本用法</div>\n    <div>\n      <sv-write placeholder="基本用法" v-model="value1"></sv-write>\n    </div>\n    <div class="demo-title">右侧带图标，只能输入手机号，11位</div>\n    <div>\n      <sv-write type="tel" :max-length="11" placeholder="请输入手机号" v-model="value2" right-icon="edit"></sv-write>\n    </div>\n    <div class="demo-title">左右都有图标</div>\n    <div>\n      <sv-write\n        label="信息"\n        type="text"\n        placeholder="请输入信息"\n        v-model="value3"\n        right-icon="edit"\n        left-icon="records"\n      ></sv-write>\n    </div>\n    <div class="demo-title">必须为数字并且内容居右，带有验证</div>\n    <div>\n      <sv-write\n        label="信息"\n        type="number"\n        errmessage="您输入的号码不符合规则"\n        :regexp="telReg"\n        placeholder="请输入号码"\n        align="right"\n        v-model="value4"\n      ></sv-write>\n    </div>\n    <div class="demo-title">带有验证的必填项</div>\n    <div>\n      <sv-write\n        label="姓名"\n        type="text"\n        align="right"\n        :max-length="10"\n        required\n        placeholder="请输入您的姓名"\n        v-model="value5"\n        RightIcon="edit"\n        errmessage="您好！姓名是必填项"\n      ></sv-write>\n    </div>\n    <div class="demo-title">textarea</div>\n    <div>\n      <sv-write\n        label="介绍"\n        type="textarea"\n        align="right"\n        :max-length="100"\n        required\n        placeholder="请介绍"\n        v-model="value6"\n        right-icon="message"\n        left-icon="records"\n        errmessage="您必须介绍"\n      ></sv-write>\n    </div>\n    <div class="demo-title">事件</div>\n    <div>\n      <sv-write\n        label="信息"\n        type="text"\n        placeholder="请输入信息"\n        v-model="value7"\n        right-icon="edit"\n        left-icon="records"\n        @on-change="change"\n        @on-clear="onclear"\n        @on-focus="onfocus"\n        @on-blur="onblur"\n        @right-click="rightclick"\n        @left-click="leftclick"\n      ></sv-write>\n    </div>\n    <div class="demo-blank"></div>\n  </div>\n</template>\n\nexport default {\n  created() {\n    //const idReg18 = /^[1-9]d{5}(18|19|([23]d))d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)d{3}[0-9Xx]$/\n  },\n  data() {\n    return {\n      value1: \'\',\n      value2: \'\',\n      value3: \'\',\n      value4: \'\',\n      value5: \'\',\n      value6: \'\',\n      value7: \'\',\n      telReg: /^[1][3,4,5,7,8][0-9]{9}$/\n    }\n  },\n  methods: {\n    change(val) {\n      console.log(val)\n    },\n    onclear(val) {\n      console.log(\'清除\')\n    },\n    onfocus() {\n      console.log(\'获得焦点\')\n    },\n    onblur() {\n      console.log(\'失去焦点\')\n    },\n    leftclick() {\n      console.log(\'点击左侧图标\')\n    },\n    rightclick() {\n      console.log(\'点击右侧图标\')\n    }\n  }\n}\n\n\n'.replace(/^ {8}/gm,"").trim()}}},u=e(1),a=Object(u.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("layout-card",[e("div",[e("layout-column",{attrs:{title:"代码演示",url:"write",tips:"查看源代码"},on:{handle:function(t){n.show=!0}}})],1)]),n._v(" "),e("div",{staticClass:"file-blank"}),n._v(" "),e("layout-card",[e("div",{staticClass:"site-introduce"},[e("div",{staticClass:"site-introduce-title"},[n._v("介绍")]),n._v(" "),e("div",{staticClass:"site-introduce-text"},[e("p",[n._v("我们为此组件内置了一个状态state用来判断验证结果，当然，您也可以自己验证")]),n._v(" "),e("p",[n._v("当您设置了regexp,minLength,required等属性时，我们默认您开启了自动验证")]),n._v(" "),e("p",[n._v("我们推荐您结合本文的Form组件搭配使用")])])])]),n._v(" "),e("layout-code",{attrs:{title:"搜索"},model:{value:n.show,callback:function(t){n.show=t},expression:"show"}},[e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e("code",{staticClass:"vue"},[n._v(n._s(n.code))])])])],1)}),[],!1,null,null,null);t.default=a.exports},43:function(n,t){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},44:function(n,t,e){var r=e(19),o=e(17);n.exports=function(n){return function(t,e){var i,c,u=String(o(t)),a=r(e),l=u.length;return a<0||a>=l?n?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===l||(c=u.charCodeAt(a+1))<56320||c>57343?n?u.charAt(a):i:n?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}}},45:function(n,t,e){var r=e(28),o=e(20)("toStringTag"),i="Arguments"==r(function(){return arguments}());n.exports=function(n){var t,e,c;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(e=function(n,t){try{return n[t]}catch(n){}}(t=Object(n),o))?e:i?r(t):"Object"==(c=r(t))&&"function"==typeof t.callee?"Arguments":c}},46:function(n,t,e){"use strict";var r=e(24);e(25)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})}}]);