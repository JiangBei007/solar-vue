export default {
  name: 'SvPopup',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'center',
      validator(value) {
        return ['top', 'bottom', 'left', 'right', 'center'].includes(value)
      }
    },
    overlay: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '30%'
    }
  },
  computed: {
    contentStyle() {
      const { position, height } = this
      if (['left', 'right'].includes(position)) {
        return { width: height }
      }
      if (['top', 'bottom'].includes(position)) {
        return { height: height }
      }
      return {}
    }
  },
  methods: {
    close() {
      this.$emit('change', false)
      this.$emit('close')
    }
  },
  render(h) {
    const { value, position, overlay, contentStyle } = this
    return (
      <div class="sv-popup">
        <transition name="sv-transition-fade">
          {value && overlay && (
            <div class="sv-popup-mask" onClick={this.close} />
          )}
        </transition>
        <transition name={`sv-transition-${position}`}>
          {value && (
            <div
              class={`sv-popup-content sv-popup-${position}`}
              style={contentStyle}
            >
              {this.$slots.default}
            </div>
          )}
        </transition>
      </div>
    )
  }
}
