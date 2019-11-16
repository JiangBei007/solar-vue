import Icon from 'solar-vue/icon'
export default {
  props: {
    message: String,
    type: {
      type: String,
      default: 'danger',
      validator(value) {
        return ['primary', 'success', 'danger', 'warning'].includes(value)
      }
    },
    value: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 2000
    },
    background: String,
    color: String,
    icon: String
  },
  render(h) {
    const { value, message, type, color, background, icon } = this
    return (
      <transition name="sv-transition-top">
        <div
          vShow={value}
          style={{
            'transition-duration': `${0.2}s`,
            color: color,
            background: background
          }}
          class={`sv-notify sv-notify-${type}`}
        >
          {!!icon && <Icon name={icon} />}
          {message}
        </div>
      </transition>
    )
  }
}
