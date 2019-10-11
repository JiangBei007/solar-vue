<script>
import Icon from './../../icon'
export default {
  name: 'SvLoading',
  props: {
    color: {
      type: String,
      default: '#A2A2A2'
    },
    type: {
      type: String,
      default: 'LightCircle',
      validator(value) {
        return ['HalfCircle', 'LightCircle'].includes(value)
      }
    },
    size: {
      type: [String, Number],
      default: 30
    },
    TextSize: [String, Number],
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  render(createElement) {
    const { color, type, size, TextSize, vertical } = this
    let fontSize = null
    if (TextSize) {
      fontSize = typeof TextSize === 'string' ? TextSize : TextSize + 'px'
    }
    let name = ''
    if (type === 'HalfCircle') {
      name = 'load'
    }
    if (type === 'LightCircle') {
      name = 'loading'
    }
    const SvIcon = createElement(Icon, {
      props: {
        name: name,
        size: size,
        color: color
      }
    })
    return createElement(
      'div',
      {
        class: {
          'sv-loading': true,
          'sv-loading-vertical': vertical
        }
      },
      [
        createElement(
          'span',
          {
            class: {
              'sv-loading-icon': true
            }
          },
          [SvIcon]
        ),
        createElement(
          'span',
          {
            class: {
              'sv-loading-message': true
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
</script>