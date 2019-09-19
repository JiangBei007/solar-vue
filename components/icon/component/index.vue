<script>
export default {
  name: 'Icon',
  props: {
    name: String,
    tag: {
      type: String,
      default: 'i'
    },
    size: [String, Number],
    color: String
  },
  render(createElement) {
    const { color, size } = this
    let fontSize = null
    if (size) {
      fontSize = typeof size === 'string' ? size : size + 'px'
    }

    return createElement(this.tag, {
      class: {
        'sv-iconfont': true,
        ['sv-icon-' + this.name]: true
      },
      style: {
        color: this.color,
        fontSize: fontSize
      }
    })
  }
}
</script>