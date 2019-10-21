<template>
  <div class="introduce">
    <div class="introduce-card">
      <div class="introduce-bg">
        <canvas width="2500" height="800" style="min-width: 800px; width: 100%;"></canvas>
      </div>
      <div class="introduce-text-one">
        <div class="home-logo">
          <img src="../../public/images/logo200.png" class="logo-default" />
        </div>
        <h2>solar-vue</h2>
        <div class="home-text">轻量的，可靠的，人性化的</div>
      </div>
    </div>
    <div class="file-blank"></div>
    <div class="introduce-card">
      <h3>特性</h3>
      <ul>
        <li class="tips-list-item">00+的实用组件：满足移动端的基本开发</li>
        <li class="tips-list-item">统一的视觉规范：保证了应用的项目内部、项目之间都能保持高度的视觉一致性</li>
        <li class="tips-list-item">适用于多场景的产生：提供按需加载能力，使用灵活，避免引入无用代码</li>
      </ul>
    </div>
    <div class="file-blank"></div>
    <div class="introduce-card">
      <h3>浏览器支持</h3>
      <ul>
        <li class="tips-list-item">Android 4.4+,</li>
        <li class="tips-list-item">iOS 8+</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    var _createClass = (function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i]
          descriptor.enumerable = descriptor.enumerable || false
          descriptor.configurable = true
          if ('value' in descriptor) descriptor.writable = true
          Object.defineProperty(target, descriptor.key, descriptor)
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps)
        if (staticProps) defineProperties(Constructor, staticProps)
        return Constructor
      }
    })()

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function')
      }
    }

    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        )
      }
      return call && (typeof call === 'object' || typeof call === 'function')
        ? call
        : self
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError(
          'Super expression must either be null or a function, not ' +
            typeof superClass
        )
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
      if (superClass)
        Object.setPrototypeOf
          ? Object.setPrototypeOf(subClass, superClass)
          : (subClass.__proto__ = superClass)
    }

    var Point = (function(_F3$Obj) {
      _inherits(Point, _F3$Obj)

      function Point() {
        var radius =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5

        _classCallCheck(this, Point)

        var _this = _possibleConstructorReturn(
          this,
          (Point.__proto__ || Object.getPrototypeOf(Point)).call(this)
        )

        _this.radius = radius
        _this.color =
          'rgba(' +
          [
            (Math.random() * 255) | 0,
            (Math.random() * 255) | 0,
            (Math.random() * 255) | 0,
            Math.random()
          ].join(',') +
          ')'
        _this.prevCrood = null
        return _this
      }

      _createClass(Point, [
        {
          key: 'render',
          value: function render(ctx) {
            ctx.fillStyle = '#fff'
            ctx.fillRect(
              this.croods2D.position.x,
              this.croods2D.position.y,
              this.radius * this.croods2D.scale * this.yScale,
              this.radius * this.croods2D.scale * this.yScale
            )
          }
        }
      ])

      return Point
    })(F3.Obj)

    var Effect = (function(_F3$Time) {
      _inherits(Effect, _F3$Time)

      function Effect(renderer, scene, camera, cvs) {
        _classCallCheck(this, Effect)

        var _this2 = _possibleConstructorReturn(
          this,
          (Effect.__proto__ || Object.getPrototypeOf(Effect)).call(this)
        )

        _this2.renderer = renderer
        _this2.scene = scene
        _this2.camera = camera
        _this2.cvs = cvs

        _this2.xOffset = 0
        _this2.waveHeight = 0.4 // 波高
        _this2.waveWidth = 8 // 波长

        _this2.col = 33
        _this2.colPointNum = 33

        _this2.flyTime = 2000
        _this2.timePass = 0

        _this2.scale = 1
        _this2.scaleStep = 0.01

        _this2.planeFunction = function() {
          return 0
        }
        _this2.rotate = {
          x: false,
          y: false,
          z: false
        }

        _this2.pointGroup = new F3.Obj()
        _this2.scene.add(_this2.pointGroup)

        _this2.resize(cvs.width, cvs.height)
        _this2.init()
        return _this2
      }

      _createClass(Effect, [
        {
          key: 'resize',
          value: function resize(width, height) {
            this.cvs.width = width
            this.cvs.height = height
            this.stepWidth = (width * 1.8) / this.col
            this.pointGroup.setPosition(
              this.cvs.width / 2,
              this.cvs.height * 1.2,
              (-this.col * this.stepWidth) / 2
            )
            this.pointGroup.setRotation(0.1, 0, 0)
          }
        },
        {
          key: 'init',
          value: function init() {
            // create point
            var point
            for (
              var x = -(this.col - 1) / 2, count = 0;
              x <= (this.col - 1) / 2;
              x++
            ) {
              for (
                var z = -(this.colPointNum - 1) / 2;
                z <= (this.colPointNum - 1) / 2;
                z++
              ) {
                point = new Point(10)
                this.pointGroup.add(point)
                point.initPos = new F3.Vector3(0, 0, 0)
                point.flyDelay = 0 //Math.random() * 1000 | 0;
              }
            }
          }
        },
        {
          key: 'update',
          value: function update(delta) {
            this.timePass += delta
            this.xOffset = this.timePass / 500

            var point = void 0
            var flyPecent = void 0
            var x = void 0,
              y = void 0,
              z = void 0
            var count = 0

            // if (this.timePass < 100)
            for (x = -(this.col - 1) / 2; x <= (this.col - 1) / 2; x++) {
              for (
                z = -(this.colPointNum - 1) / 2;
                z <= (this.colPointNum - 1) / 2;
                z++
              ) {
                y = this.planeFunction(x, z, this.xOffset)

                point = this.pointGroup.children[count]
                point.yScale = 1 //(-y + 0.6)/(this.waveHeight) * 1.5;

                flyPecent = (this.timePass - point.flyDelay) / this.flyTime
                flyPecent = flyPecent > 1 ? 1 : flyPecent < 0 ? 0 : flyPecent

                point.setPosition(
                  x * this.stepWidth,
                  y * this.stepWidth,
                  z * this.stepWidth
                )
                count++
              }
            }
            if (this.rotate.x || this.rotate.y || this.rotate.z) {
              this.pointGroup.setRotation(
                this.rotate.x ? this.pointGroup.rotation.x + 0.001 : 0,
                this.rotate.y ? this.pointGroup.rotation.y + 0.001 : 0,
                this.rotate.z ? this.pointGroup.rotation.z + 0.001 : 0
              )
            }
          }
        },
        {
          key: 'setFunction',
          value: function setFunction(fun) {
            this.planeFunction = fun
          }
        },
        {
          key: 'toggleRotate',
          value: function toggleRotate(r) {
            this.rotate[r] = !this.rotate[r]
            if (!this.rotate[r]) {
              this.pointGroup.rotation[r] = 0
            }
          }
        },
        {
          key: 'animate',
          value: function animate() {
            var _this3 = this

            this.addTick(function(delta) {
              _this3.update(delta)
              _this3.renderer.render(_this3.scene, _this3.camera)
            })
          }
        }
      ])

      return Effect
    })(F3.Time)
    var planeFunctions = {
      'sin(sqrt(x^2+z^2))': function sinSqrtX2Z2(x, z, offset) {
        return Math.sin(
          Math.sqrt(Math.pow(x / 2, 2) + Math.pow(z / 2, 2)) - offset
        )
      },
      'cos(x)*sin(z)': function cosXSinZ(x, z, offset) {
        return Math.cos(x / 4 + offset) * Math.sin(z / 4 + offset) * 1
      }
    }
    function init(cvs) {
      var ctx = cvs.getContext('2d')

      var scene = new F3.Scene()
      var camera = new F3.Camera()
      camera.origin = new F3.Vector3(cvs.width / 2, cvs.height / 3)
      camera.p = 1200

      var renderer = new F3.Renderer(ctx, cvs)
      var effect = new Effect(renderer, scene, camera, cvs)
      effect.animate()
      effect.setFunction(planeFunctions['sin(sqrt(x^2+z^2))'])
      effect.toggleRotate('x')

      F3.TIME.start()
    }
    init(document.querySelector('canvas'))
  }
}
</script>

<style lang="less">
.introduce {
  position: relative;
  .introduce-bg {
    background: radial-gradient(circle, #1989fa, #001938);
    padding-bottom: 10px;
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 0;
  }
  .introduce-text-one {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    color: #fff;
  }
  .introduce-card {
    max-width: 100%;
    box-shadow: 0 0 5px #f0f0f0;
    color: #34495e;
    transition: all 0.3s;
    padding: 10px;
    position: relative;
  }
  .introduce-card:hover {
    box-shadow: 0 0 10px #ccc;
    transition: all 0.3s;
    color: rgba(25, 137, 250, 1);
    transform: translateY(-10px);
  }
  .home-logo {
    padding: 30px 0;
    display: flex;
    justify-content: center;
    img {
      height: 100px;
      width: 100px;
    }
  }
  h2 {
    margin: 0;
    text-align: center;
    font-size: 32px;
    line-height: 42px;
    border: none;
  }
  h3 {
    text-align: left;
    font-size: 18px;
    line-height: 36px;
    text-indent: 1em;
    font-weight: 500;
  }
  .home-text {
    text-align: center;
    font-size: 14px;
    line-height: 26px;
    padding-bottom: 20px;
  }
  .tips-list-item {
    position: relative;
    font-size: 14px;
    line-height: 22px;
    padding: 2px;
    padding-left: 20px;
  }
  .tips-list-item::after {
    position: absolute;
    top: 50%;
    left: 0;
    box-sizing: border-box;
    width: 6px;
    height: 6px;
    margin-top: -3px;
    border: 1px solid #666;
    border-radius: 50%;
    content: '';
  }
}
</style>
