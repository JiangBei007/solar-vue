module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/common.js
const time = Date.now || function () {
  return +new Date()
}
const filter = (config)=>{
	if(!config){
		return false;
	}
	return true;
}
const filterString = function(){
	if(arguments[1].indexOf(arguments[0])<0){
		return arguments[1][0]
	}
	return arguments[0];
}



// CONCATENATED MODULE: ./src/index.js
//"use strict"



const fadeFloat = 0.05;

// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
if (typeof window !== 'undefined') {
  ;(function () {
    var lastTime = 0
    var vendors = ['ms', 'moz', 'webkit', 'o']
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
      window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
    }

    if (!window.requestAnimationFrame) {
      window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime()
        var timeToCall = Math.max(0, 16 - (currTime - lastTime))
        var id = window.setTimeout(function () { callback(currTime + timeToCall) },
              timeToCall)
        lastTime = currTime + timeToCall
        return id
      }
    }
    if (!window.cancelAnimationFrame) {
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id)
      }
    }
  }())
}
class src_Swiper{
	constructor(options={}){
		this._root = options.root;
		this._direction =  filterString(options.direction,['horizontal','vertical'])
		this._loop = filter(options.loop);
		this._auto = filter(options.auto);
		this._delayed = options.delayed>=2000?options.delayed:2000;
		this._effect = filterString(options.effect,['slide','fade'])
		this._showDots = filter(options['show-dots']);
		this._startTime = 0;
		this._callBack = typeof(options.callBack)==='function'?options.callBack:function(){};
		//this._endTime = 0;
		this._startingPoint = 0;
		//this._moveDistance = 0;
		//this._current = 0;
		this._isTracking = false;
		this._timer = null;
		this._defaultIndex = this._loop?-1:0;
		//this._lastTouch = null;
		this._slider = this._root.children[0];
		const children = this._slider.children;
		this._children = children;
		const length = children.length;
		this._length = length;
		this._scaleSize = this._direction === "horizontal"?children[0].getBoundingClientRect().width:children[0].getBoundingClientRect().height;
		const fadeScaleSize = children[0].getBoundingClientRect().height;
		//this._defaultMove = this._defaultIndex*this._scaleSize;
		if(this._loop&&this._effect==='slide'){
			const first = children[0].cloneNode(true);
			const last = children[length-1].cloneNode(true);
			this._slider.appendChild(first);
			this._slider.insertBefore(last,children[0]);
			//this._moveFun(this._defaultMove)
		}
		
		this.index = ((index)=>{
			if(typeof(index)!=='number'){
				index = 0;
			}
			if(Math.abs(index)>this._length-1){
				index = this._length-1;
			}
			
			if(this._effect==='slide'){
				if(this._loop){
					this._defaultIndex = -(index+1)
				}else{
					this._defaultIndex = -index
				}
				this._slideMove(this._defaultIndex*this._scaleSize)
				this._numericalConversion(this._defaultIndex);
			}
			if(this._effect==='fade'){
				this._callBack(index)
			}
			return index;
			})(options.index);
		if(this._effect==='fade'){
			for(let i=0;i<length;i++){
				children[i].style.transform = "translate3d(0,"+(-i*fadeScaleSize)+"px,0)";
			}
			this._fadeMove(this.index,1);
		}
		
		if(this._auto){
			this._timer = this._setInterval()
		}
		const will = false;

		this._slider.addEventListener("touchstart",()=>this._start(),will);
		this._slider.addEventListener("touchmove",()=>this._move(),will);
		this._slider.addEventListener("touchend",()=>this._end(),will);
		this._slider.addEventListener('mousedown', ()=>this._start(),will)
		this._slider.addEventListener('mousemove', ()=>this._move(),will)
		this._slider.addEventListener('mouseup', ()=>this._end(),will)
		
	}
	_setInterval(){
		return setInterval(()=>{
				this._aotoplay()
			},this._delayed)
	}
	_clear(){
		clearInterval(this._timer)
	}
	_start(ev){
		const e = ev || event;
		//e.preventDefault()
		const touches = e.touches;
		const target = touches ? touches[0] : e;
		this._startingPoint = this._direction === "horizontal" ? target.clientX : target.clientY;
		this._startTime = time();
		this._clear()
		this._isTracking = true;
	}
	_move(ev){
		if (!this._isTracking) {
		  return
		}
		const e = ev || event;
		e.preventDefault();
		const touches = e.changedTouches;
		const target = touches ? touches[0] : e;
		const moved = this._direction === "horizontal" ? target.clientX-this._startingPoint : target.clientY-this._startingPoint;
		this._clear();
		
		const scale = Math.max(0,1-Math.abs(moved/this._scaleSize));
		const index = this.index;
		switch (this._effect){
			case 'slide':
			this._moveFun(moved+this._defaultIndex*this._scaleSize,moved)
				break;
			case 'fade':
			this._fadeProcess(moved,scale);
				break;
			default:
				break;
		}
		
	}
	_end(ev){
		if (!this._isTracking) {
		  return
		}
		this._isTracking = false;
		const e = ev || event;
		//e.preventDefault();
		const touches = e.changedTouches;
		const target = touches ? touches[0] : e;
		let moved = this._direction === "horizontal" ? target.clientX-this._startingPoint : target.clientY-this._startingPoint;
		const stopDuration = time() - this._startTime;
		const enter = Math.abs(moved)>this._scaleSize/2 || stopDuration<300;
		const scale = Math.max(0,1-Math.abs(moved/this._scaleSize));
		const loop = this._loop;
		const oldIndex = this.index;
		const length = this._length;
		const min = this._length-1;
		const max = this._length+1;
		if(Math.abs(moved)===0){
			return 
		}
		
		
		if(this._effect==='fade'){
			if(enter){
				const newIndex = this._setGetIndex(moved)
				let isToNext = loop?oldIndex:null;
					this._startMove(1-scale,1,fadeFloat,newIndex,isToNext).then(res=>{
						if(this._auto){
							this._clear()
							this._timer = this._setInterval()
						}
					})
				
			}else{
				let newIndex = this.index;
				if(moved<0){
					newIndex += 1;
					if(newIndex > min){
						newIndex = 0;
					}
				}else{
					newIndex -= 1;
					if(newIndex < 0){
						newIndex = min
					}
				}
				this._startMove(scale,1,fadeFloat,this.index,newIndex).then(res=>{
					if(this._auto){
						this._clear()
						this._timer = this._setInterval()
					}
				})
			}
			return;
		}
		if(enter){
			let oldIndex = this._defaultIndex;
			if(moved>0){
				if(this._loop){
					this._defaultIndex+=1;
					if(this._defaultIndex>0){
						this._defaultIndex = 0;
					}
					//this._numericalConversion(this._defaultIndex)
					if(oldIndex>0&&this._defaultIndex>0){
						//Solve Occasionally present   bug
						return;
					}
				}else{
					if(this._defaultIndex<0){
						this._defaultIndex+=1;
						//this._numericalConversion(this._defaultIndex)
					}else{
						moved /= 3
					}
				}
				
			}
			if(moved<0){
				if(this._loop){
					this._defaultIndex-=1;
					if(this._defaultIndex <= -max){
						//console.log("hahaha",this._defaultIndex)
						this._defaultIndex = -max
						this._slideMove(this._defaultIndex*this._scaleSize)
					}
					//this._numericalConversion(this._defaultIndex)
					if(oldIndex<=-max&&this._defaultIndex<=-max){
						//Solve Occasionally present   bug
						return;
					}
				}else{
					if(Math.abs(this._defaultIndex) < min){
						this._defaultIndex-=1;
						//this._numericalConversion(this._defaultIndex)
					}else{
						moved /= 3
					}
				}
				
			}
			
			
			this._numericalConversion(this._defaultIndex)
			const nowDistance = moved+oldIndex*this._scaleSize;
			const targetDistance = this._defaultIndex*this._scaleSize;
			this._startMove(nowDistance,targetDistance).then(()=>{
				if(loop){
					if(this._defaultIndex <= -max){
						//1，Solution in Cycle
						//2，Slide from the first to the first
						//3，The problem of momentary blankness caused by stopping manual sliding and triggering the timer
						this._defaultIndex = -1;
						this._slideMove(this._defaultIndex*this._scaleSize)
					}
					if(this._defaultIndex >= 0 ){
						this._defaultIndex = -length;
						this._slideMove(this._defaultIndex*this._scaleSize)
					}
				}
				
				if(this._auto){
					this._clear()
					this._timer = this._setInterval()
				}
			})
		}else{
			
			if(!this._loop){
				const distance = this._defaultIndex*this._scaleSize+moved;
				if(distance>=0){
					moved /= 3
				}else{
					if(distance<=this._scaleSize*(-min)){
						moved/=3
					}
				}
			}
			const nowDistance = this._defaultIndex*this._scaleSize+moved;
			const targetDistance = nowDistance-moved;
			this._startMove(nowDistance,targetDistance).then(()=>{
				if(this._auto){
					this._clear()
					this._timer = this._setInterval()
				}
			})
		}
	}
	_fadeProcess(moved,scale){
		//Calculate the next subscript in the sliding process, 
		//find a new coordinate, 
		//and calculate the transparency of the current and transitional coordinates according to the sliding ratio.
		const min = this._length-1;
		const oldIndex = this.index;
		let newIndex = this.index;
		if(moved<0){
			newIndex += 1;
			if(newIndex > min){
				newIndex = 0;
			}
		}else{
			newIndex -= 1;
			if(newIndex < 0){
				newIndex = min
			}
		}
		this._fadeMove(oldIndex,scale,newIndex)
	}
	_setGetIndex(moved){
		//This applies to non-added loops//fade status
		const loop = this._loop;
		const oldIndex = this.index;
		if(moved>0){
			this.index-=1;
			if(this.index<0){
				if(loop){
					this.index = this._length-1;
				}else{
					this.index = 0;
				}
			}
		}
		if(moved<0){
			this.index+=1;
			if(this.index>this._length-1){
				if(loop){
					this.index = 0
				}else{
					this.index = this._length-1;
				}
				
			}
		}
		if(oldIndex===this.index){
			return this.index;
		}
		this._callBack(this.index)
		return this.index;
	}
	_moveFun(distance,moved){
		//手动滑动的时候
		if(!this._loop){
			if(distance>=0){
				distance /= 3
				this._slideMove(distance)
			}else{
				const max = this._length-1;
				if(distance<=this._scaleSize*(-max)){
					moved/=3
					distance = this._scaleSize*(-max)+moved
				}
				this._slideMove(distance)
			}
			return;
		}
		if(distance>=0){
			this._defaultIndex = -this._length;
			//this._numericalConversion(this._defaultIndex)
			this._slideMove(this._defaultIndex*this._scaleSize)
		}else if(distance<=-((this._length+1)*this._scaleSize)){
			this._defaultIndex = -1;
			//this._numericalConversion(this._defaultIndex)
			this._slideMove(this._defaultIndex*this._scaleSize)
		}else{
			this._slideMove(distance)
		}
		
	}
	moveTo(index){
		if(typeof(index) !== 'number'){
			index = 0;
		}
		index = Math.abs(parseInt(index))
		
		const max = this._length+1;
		const min = this._length-1;
		
		const speed = 50;
		
		if(index>min){
			index = min
		}
		const oldIndex = this.index;
		const newIndex = this.index = index;
		const length = this._length;
		
		if(this._effect==='fade'){
			if(newIndex === oldIndex){
				this._startMove(0,1,fadeFloat,newIndex)
			}else{
				this._callBack(newIndex)
				this._startMove(0,1,fadeFloat,newIndex,oldIndex)
			}
			return;
		}
		if(oldIndex===newIndex){
			return;
		}
		if(this._loop){
			if(index === min){
				index = -length;
				const nowDistance = this._defaultIndex*this._scaleSize;
				const targetDistance = index*this._scaleSize;
				this._defaultIndex = index;
				this._numericalConversion(this._defaultIndex);
				const s = Math.abs(oldIndex-Math.abs(this._defaultIndex))*speed<100?100:Math.abs(oldIndex-Math.abs(this._defaultIndex))*speed;
					
				this._startMove(nowDistance,targetDistance,s).then(()=>{
					//console.log(this._defaultIndex)
				})
				return;
			}
			if(index === 0){
				if(this._defaultIndex === -max){
					this._defaultIndex = -1;
					this._slideMove(this._defaultIndex*this._scaleSize)
					return;
				}
			}
			index = -index-1;
			
			const nowDistance = this._defaultIndex*this._scaleSize;
			const targetDistance = index*this._scaleSize;
			this._defaultIndex = index;
			let disparity = Math.max(Math.abs(oldIndex-Math.abs(this._defaultIndex)),3);
			const s = disparity*speed;
			this._numericalConversion(this._defaultIndex)
			this._startMove(nowDistance,targetDistance,s).then(()=>{
				
			})
		}else{
			index = -index;
			let disparity = Math.max(Math.abs(oldIndex-Math.abs(index)),3);
			const s = disparity*speed;
			const nowDistance = this._defaultIndex*this._scaleSize;
			const targetDistance = index*this._scaleSize;
			this._defaultIndex = index;
			this._callBack(Math.abs(index));
			this._startMove(nowDistance,targetDistance,s).then(()=>{
				
			})
			
		}
		
	}
	_numericalConversion(index){
		let num ;
		if(this._loop){
			switch (index){
				case -1:
				case (-(this._length+1)):
				num=0
					break;
				case 0:
				num = this._length-1
					break;
				default:
				num = Math.abs(index)-1
					break;
			}
			if(num!==this.index){
				this.index = num
				//console.log("转换后231",this.index,num)
			}
				
			this._callBack(this.index)
			
		}else{
			num = Math.abs(index);
			if(num!==this.index){
				this.index = num
				//console.log("转换后237",this.index)
				this._callBack(this.index)
			}
		}
		
		
	}
	_aotoplay(){
		const startplay = ()=>{
			const oldIndex = this._defaultIndex;
			const max = this._length+1;
			let speed = 50
			if(this._loop){
				this._defaultIndex-=1;
				if(this._defaultIndex <= -max){
					this._defaultIndex = -max
				}
				//this._numericalConversion(this._defaultIndex)
			}else{
				this._defaultIndex-=1;
				if(this._defaultIndex<=-this._length){
					this._defaultIndex = 0
				}
				//this._numericalConversion(this._defaultIndex)
			}
			this._numericalConversion(this._defaultIndex)
			speed*=Math.abs(Math.abs(oldIndex)-Math.abs(this._defaultIndex))
			const nowDistance = oldIndex*this._scaleSize;
			const targetDistance = this._defaultIndex*this._scaleSize;
			this._startMove(nowDistance,targetDistance,speed).then(()=>{
				if(this._loop){
					if(this._defaultIndex <= -max){
						this._defaultIndex = -1;
						this._slideMove(this._defaultIndex*this._scaleSize);
						//this._numericalConversion(this._defaultIndex)
					}
				}
			})
		}
		const fade_startplay = ()=>{
			const oldIndex = this.index;
			this.index+=1;
			if(this.index>this._length-1){
				this.index = 0
			}
			const newIndex = this.index;
			this._callBack(newIndex)
			this._startMove(0,1,fadeFloat,newIndex,oldIndex).then(res=>{
				//console.log(this.index)
			})
		}
		switch (this._effect){
			case 'slide':
			return startplay();
			case 'fade':
			return fade_startplay();
			default:
				break;
		}
		
	}
	_slideMove(distance){
		if(this._direction==="horizontal"){
			this._slider.style.transform = "translate3d("+(distance)+"px,0,0)";
		}
		if(this._direction==="vertical"){
			this._slider.style.transform = "translate3d(0,"+(distance)+"px,0)";
		}
		this._slider.style.transition = null;
	}
	_fadeMove(index,scale=1,oldIndex){
		let length = this._length;
		let list = this._children;
		for (let i=0;i<length;i++) {
			list[i].style.opacity = 0;
		}
		list[index].style.opacity = scale;
		if(typeof(oldIndex)==='number'){
			list[oldIndex].style.opacity = 1-scale;
		}
		
	}
	_startMove(nowDistance,targetDistance,speed=30,index,oldIndex){
		var n = nowDistance;
		var t = targetDistance;
		let signal = null;
		const pro = new Promise(res=>signal = res)
		const step = ()=>{
			if(n<t){
				n+=speed
				if(n>=t){
					n=t;
				}
			}else if(n>t){
				n-=speed
				if(n<=t){
					n=t;
				}
			}
			if(this._effect==='slide'){
				this._slideMove(n)
			}else{
				this._fadeMove(index,n,oldIndex)
			}
			if(nowDistance>targetDistance){
				if(n>t){
					window.requestAnimationFrame(step)
				}else{
					signal()
				}
			}
			
			if(nowDistance<targetDistance){
				if(n<t){
					window.requestAnimationFrame(step)
				}else{
					signal()
				}
			}
		}
		window.requestAnimationFrame(step)
		return pro;
	}
}

/* harmony default export */ var src = (src_Swiper);
// CONCATENATED MODULE: ./src/main.js




// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport SmallSwiper */__webpack_require__.d(__webpack_exports__, "SmallSwiper", function() { return src; });




/***/ })

/******/ });
//# sourceMappingURL=SmallSwiper.common.js.map