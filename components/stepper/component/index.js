export default {
  name: 'SvStepper',
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    min: Number,
    max: Number,
    readonly: Boolean,
    disabled: Boolean
  },
  data() {
    return {
      initVal: this.value
    }
  },
  created() {
    this.reset()
  },
  methods: {
    reset() {
      const { initVal, min, max, value } = this
      let val = initVal
      if (typeof min === 'number') {
        val = Math.max(val, min)
      }
      if (typeof max === 'number') {
        val = Math.min(val, max)
      }
      this.initVal = val
      if (val !== value) {
        this.$emit('input', val)
      }
    },
    change(e) {
      const value = e.target.value
      let val = String(value).replace(/[^0-9.-]/g, '')
      e.target.value = val
      this.$emit('input', val)
      this.$emit('change', val)
    },
    reduce() {
      const { value, step, min } = this
      let val = value - step
      if (typeof min === 'number') {
        val = Math.max(val, min)
      }
      val = Math.round(val * 100) / 100
      this.$emit('input', val)
      this.$emit('reduce', val)
      this.$emit('change', val)
    },
    add() {
      const { value, step, max } = this
      let val = parseFloat(value) + step
      if (typeof max === 'number') {
        val = Math.min(val, max)
      }
      val = Math.round(val * 100) / 100
      this.$emit('input', val)
      this.$emit('add', val)
      this.$emit('change', val)
    },
    focus(e) {
      this.$emit('focus', e.target.value)
    },
    blur(e) {
      const value = e.target.value
      const { min, max } = this
      let val = parseFloat(value)

      if (typeof min === 'number') {
        val = Math.max(val, min)
      }
      if (typeof max === 'number') {
        val = Math.min(val, max)
      }
      if (isNaN(val)) {
        val = this.initVal
      }
      e.target.value = val
      this.$emit('input', val)
      this.$emit('change', val)
      this.$emit('blur', val)
    }
  },
  render(h) {
    const { value, min, max, readonly, disabled } = this
    const reducedis = (typeof min === 'number' && value <= min) || disabled
    const adddis = (typeof max === 'number' && value >= max) || disabled
    return (
      <div class="sv-stepper">
        <div
          class={{
            'sv-stepper-btn': true,
            'sv-stepper-reduce': true,
            'sv-stepper-btn-disabled': reducedis
          }}
          onClick={() => {
            !reducedis && this.reduce()
          }}
        ></div>
        <input
          type="tel"
          value={value}
          onInput={this.change}
          onFocus={this.focus}
          onBlur={this.blur}
          readonly={readonly || disabled}
          class="sv-stepper-write"
        />
        <div
          class={{
            'sv-stepper-btn': true,
            'sv-stepper-add': true,
            'sv-stepper-btn-disabled': adddis
          }}
          onClick={() => {
            !adddis && this.add()
          }}
        ></div>
      </div>
    )
  }
}
