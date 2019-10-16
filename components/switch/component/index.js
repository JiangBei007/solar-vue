export default {
  name: 'SvSwitch',
  props: {
    value: false,
    size: {
      type: [Number, String],
      default: '30px'
    },
    disabled: Boolean,
    activeColor: String,
    inactiveColor: String,
    activeValue: {
      default: true
    },
    inactiveValue: {
      default: false
    },
    confirm: Function
  },
  render(h) {
    const {
      value,
      size,
      disabled,
      activeColor,
      inactiveColor,
      activeValue,
      inactiveValue,
      confirm
    } = this
    const checked = value === activeValue
    const fontSize = typeof size === 'string' ? size : parseFloat(size) + 'px'
    const switchStyle = {
      fontSize: fontSize,
      backgroundColor: checked ? activeColor : inactiveColor
    }
    const on = checked ? 'sv-switch-on' : ''
    const dis = disabled ? 'sv-switch-disabled' : ''
    this.onClick = () => {
      if (confirm && !confirm(checked)) return
      if (!disabled) {
        const newValue = checked ? inactiveValue : activeValue
        this.$emit('input', newValue)
        this.$emit('change', newValue)
      }
    }

    return (
      <div
        class={`sv-switch ${on} ${dis}`}
        role="switch"
        aria-checked={value}
        style={switchStyle}
        onClick={this.onClick}
      >
        <div class="sv-switch-node" />
      </div>
    )
  }
}
