export default {
  name: 'SvLoading',
  props: {
    color: {
      type: String,
      default: '#A2A2A2'
    },
    type: {
      type: String,
      default: 'circle',
      validator(value) {
        return ['spot', 'circle'].includes(value)
      }
    },
    size: [String, Number],
    TextSize: [String, Number],
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  render(h) {
    const { color, type, size, TextSize, vertical } = this
    let fontSize = null
    if (TextSize) {
      fontSize = typeof TextSize === 'string' ? TextSize : TextSize + 'px'
    }
    const iconStyle = {
      color: color
    }
    const SvIcon = function() {
      if (type === 'spot') {
        return (
          <span class="sv-spin-spot">
            <i class="sv-spin-spot-item" />
            <i class="sv-spin-spot-item" />
            <i class="sv-spin-spot-item" />
            <i class="sv-spin-spot-item" />
          </span>
        )
      }
      return (
        <span class="sv-loading-spiner">
          <svg class="sv-loading__circular" viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none" />
          </svg>
        </span>
      )
    }
    return h(
      'div',
      {
        class: {
          'sv-loading': true,
          'sv-loading-vertical': vertical
        },
        style: {
          fontSize: typeof size === 'string' ? size : size + 'px'
        }
      },
      [
        h(
          'span',
          {
            class: {
              'sv-loading-icon': true
            },
            style: iconStyle
          },
          [SvIcon()]
        ),
        h(
          'span',
          {
            class: {
              'sv-loading-message': !!this.$slots.default
            },
            style: {
              fontSize: fontSize
            }
          },
          this.$slots.default
        )
      ]
    )
  }
}
