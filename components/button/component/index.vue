<script>
import Icon from './../../icon'
export default {
  name: 'SvButton',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'info', 'warning', 'danger'].includes(
          value
        )
      }
    },
    size: {
      default: 'normal',
      validator(value) {
        return ['large', 'normal', 'small', 'mini'].includes(value)
      }
    },
    plain: Boolean,
    hairline: Boolean,
    square: Boolean,
    round: Boolean,
    icon: String,
    color: String,
    position: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value)
      }
    }
  },
  data() {
    return {}
  },
  render(createElement) {
    const {
      type,
      size,
      plain,
      hairline,
      square,
      round,
      icon,
      color,
      position
    } = this
    const colorTest = /(radial|linear)/g
    const style = {
      color: color,
      'border-color': color
    }
    if (!plain) {
      style.background = color
      style.color = '#fff'
    }
    if (!plain && type === 'default') {
      style.color = 'inherit'
    }
    if (color) {
      if (colorTest.test(color)) {
        style.background = color
        style.color = '#fff'
        style.borderWidth = '0px'
      }
    }

    const children = [
      createElement(
        'span',
        {
          style: {
            [`margin-${position}`]: '5px'
          }
        },
        this.$slots.default
      )
    ]
    const elementIcon = icon
      ? createElement(Icon, {
          props: {
            name: icon
          }
        })
      : ''
    if (position === 'left') {
      children.unshift(elementIcon)
    }
    if (position === 'right') {
      children.push(elementIcon)
    }
    return createElement(
      'button',
      {
        class: {
          'sv-button': true,
          [`sv-button-${type}`]: true,
          [`sv-button-${size}`]: true,
          'sv-button-plain': plain,
          'sv-button-hairline': hairline,
          'sv-button-square': square,
          'sv-button-round': round
        },
        style
      },
      children
    )
  }
}
</script>