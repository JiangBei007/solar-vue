export default {
  name: 'SvForm',
  props: {
    resolve: {
      type: Object
    }
  },
  mounted() {
    let pro = null
    const cb = () => {
      pro = new Promise(res => {
        this.resolve.res = res
      })
      this.resolve.then = () => {
        const arr = this.$children.map(child => ({
          state: child.state,
          message: child.errmessage
        }))
        cb()
        this.resolve.res(arr)
        return pro
      }
    }
    cb()
  },
  methods: {
    getStates() {
      return this.$children.map(child => ({
        state: child.state,
        message: child.errmessage
      }))
    }
  },
  render(h) {
    return h('div', {}, this.$slots.default)
  }
}
