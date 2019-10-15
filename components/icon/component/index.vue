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
    const { color, size, name } = this
    let fontSize = null
    if (size) {
      fontSize = typeof size === 'string' ? size : size + 'px'
    }

    return createElement(this.tag, {
      class: {
        'sv-iconfont': true,
        ['sv-icon-' + name]: true
      },
      style: {
        color: color,
        fontSize: fontSize
      }
    })
  }
}
</script>