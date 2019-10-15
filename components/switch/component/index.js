export default {
  name: 'SvSwitch',
  props: {
    value: false
  },
  render(h) {
    this.onClick = value => {
      this.$emit('input', !value)
      this.$emit('change', !value)
      console.log(value)
    }
    const { value } = this
    const on = value ? 'sv-switch-on' : ''
    return (
      <div
        class={`sv-switch ${on}`}
        role="switch"
        aria-checked={value}
        onClick={e => {
          this.onClick(value)
        }}
      >
        <div class={`sv-switch ${on}`} />
      </div>
    )
  }
}
