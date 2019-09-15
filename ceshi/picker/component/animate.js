const time = Date.now || function() {
	return +new Date()
}

let running = {}
let counter = 1; //总数
let desiredFrames = 60; //期望帧
let millisecondsPerSecond = 1000; //毫秒
if (typeof window !== 'undefined') {;
	(function() {
		var lastTime = 0
		var vendors = ['ms', 'moz', 'webkit', 'o']
		for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
			window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] +
				'CancelRequestAnimationFrame']
		}

		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function(callback, element) {
				var currTime = new Date().getTime()
				var timeToCall = Math.max(0, 16 - (currTime - lastTime))
				var id = window.setTimeout(function() {
					callback(currTime + timeToCall)
				}, timeToCall)
				lastTime = currTime + timeToCall
				return id
			}
		}
		if (!window.cancelAnimationFrame) {
			window.cancelAnimationFrame = function(id) {
				clearTimeout(id)
			}
		}
	}())
}

export default {

	// A requestAnimationFrame wrapper / polyfill.
	requestAnimationFrame: (function() {
		if (typeof window !== 'undefined') {
			var requestFrame = window.requestAnimationFrame
			return function(callback, root) {
				requestFrame(callback, root)
			}
		}
	})(),


	stop(id) {
		var cleared = running[id] != null
		if (cleared) {
			running[id] = null
		}
		return cleared
	},
	isRunning(id) {
		return running[id] != null
	},

	//步骤回调，验证回调，完成回调，持续时间，EaseIn方法，root
	start(stepCallback, verifyCallback, completedCallback, animationDuration, easingMethod) {
		var self = this
		var start = time()
		var lastFrame = start
		var percent = 0
		var dropCounter = 0
		var id = counter++

		if (id % 20 === 0) {
			var newRunning = {}
			for (var usedId in running) {
				newRunning[usedId] = true
			}
			running = newRunning
		}


		var step = function(virtual) {
			var render = true
			var now = time()

			if (!running[id] || (verifyCallback && !verifyCallback(id))) {
				running[id] = null

				completedCallback && completedCallback(id, false)
				return
			}

			if (animationDuration) {
				percent = (now - start) / animationDuration;
				if (percent > 1) {
					percent = 1
				}
			}
			var value = easingMethod ? easingMethod(percent) : percent;
			if (stepCallback(value, now, render) === false || percent === 1) {
				running[id] = null
				completedCallback && completedCallback(id, percent === 1 || animationDuration == null)
			} else {
				self.requestAnimationFrame(step)
			}
		}
		running[id] = true
		self.requestAnimationFrame(step)
		return id
	}
}
