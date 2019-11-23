import Icon from 'solar-vue/icon'
const write = {
  name: 'SvWrite'
}
write.props = {
  value: String,
  label: String,
  type: {
    type: String,
    default: 'text',
    validator(value) {
      return ['text', 'tel', 'number', 'textarea', 'password'].includes(value)
    }
  },
  regexp: RegExp,
  LeftIcon: String,
  RightIcon: String,
  clear: {
    type: Boolean,
    default: true
  },
  errmessage: String,
  required: Boolean,
  placeholder: String,
  maxLength: Number,
  minLength: {
    type: Number,
    validator(value) {
      return value > 0
    }
  },
  align: {
    type: String,
    validator(value) {
      return ['left', 'right', 'center'].includes(value)
    }
  }
}
write.created = function() {
  if (this.value) {
    this.judge()
  } else {
    if (!this.required && !this.regexp && !this.minLength) {
      this.state = true
    }
  }
}
write.data = function() {
  return {
    clearIcon: false,
    reg: false,
    state: false
  }
}
write.watch = {
  value(nvl) {
    this.judge(nvl)
  }
}
write.methods = {
  input(e) {
    const { type, maxLength } = this
    let value = e.target.value
    value = value.replace(/\s/g, '')
    if (maxLength) {
      value = value.substring(0, maxLength)
    }
    if (type === 'tel' || type === 'number') {
      value = value.replace(/[^0-9]/gi, '')
    }
    e.target.value = value
    this.$emit('input', value)
    this.$emit('on-change', value)
    this.autosize()
  },
  focus(e) {
    this.clearIcon = true
    const value = e.target.value
    this.$emit('on-focus', value)
  },
  blur(e) {
    setTimeout(() => {
      this.clearIcon = false
    }, 0)
    this.judge(e.target.value)
    this.$emit('on-blur', e.target.value)
  },
  clearFn() {
    this.$emit('input', '')
    this.$emit('on-clear', '')
    this.autosize()
  },
  rightClick() {
    this.$emit('right-click')
  },
  leftClick() {
    this.$emit('left-click')
  },
  judge(value) {
    const { required, regexp, minLength } = this
    const judge = () => {
      if (regexp) {
        if (!regexp.test(value)) {
          this.reg = true
          this.state = false
        } else {
          this.reg = false
          this.state = true
        }
      } else if (minLength) {
        if (value.length < minLength) {
          this.reg = true
          this.state = false
        } else {
          this.reg = false
          this.state = true
        }
      } else {
        this.reg = false
        this.state = true
      }
    }
    if (!value) {
      if (!required && !regexp && !minLength) {
        this.reg = false
        this.state = true
      } else {
        this.reg = true
        this.state = false
      }
    } else {
      judge()
    }
  },
  autosize() {
    this.$nextTick(() => {
      const { write } = this.$refs
      if (!write) return
      write.style.height = 'auto'
      write.style.height = write.scrollHeight + 'px'
    })
  }
}
write.mounted = function() {
  this.autosize()
}
write.render = function(h) {
  const {
    value,
    type,
    label,
    required,
    placeholder,
    clear,
    clearIcon,
    LeftIcon,
    RightIcon,
    errmessage,
    reg,
    align
  } = this

  return (
    <div class="sv-write">
      <div
        class={{ 'sv-write-container': true, 'sv-write-required': required }}
      >
        {label && (
          <div class="sv-write-label">
            {LeftIcon && (
              <Icon name={LeftIcon} nativeOnClick={this.leftClick}></Icon>
            )}
            <span>{label}</span>
          </div>
        )}
        <div class="sv-write-body">
          <div class="sv-write-inner">
            {type !== 'textarea' && (
              <input
                type={type}
                class={{
                  'sv-write-input': true,
                  ['sv-write-' + align]: !!align
                }}
                placeholder={placeholder}
                value={value}
                onFocus={this.focus}
                onBlur={this.blur}
                onInput={this.input}
              />
            )}
            {type === 'textarea' && (
              <textarea
                ref="write"
                type="text"
                class={{
                  'sv-write-input': true,
                  ['sv-write-' + align]: !!align
                }}
                placeholder={placeholder}
                value={value}
                onFocus={this.focus}
                onBlur={this.blur}
                onInput={this.input}
              ></textarea>
            )}
            {clear && !!value && clearIcon && (
              <i
                class="sv-write-clear sv-iconfont sv-icon-close"
                onClick={this.clearFn}
              ></i>
            )}
            {RightIcon && (
              <Icon name={RightIcon} nativeOnClick={this.rightClick}></Icon>
            )}
          </div>
          {reg && errmessage && (
            <div
              class={{
                'sv-write-err': true,
                ['sv-write-' + align]: !!align
              }}
            >
              {errmessage}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default write
