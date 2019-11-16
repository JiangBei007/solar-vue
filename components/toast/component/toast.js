import Icon from 'solar-vue/icon'
import Loading from 'solar-vue/loading'
export default {
  name: 'SvToast',
  props: {
    message: String,
    type: {
      type: String,
      default: 'icon',
      validator(value) {
        return ['loading', 'icon'].includes(value)
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
    loadingType: String,
    icon: String
  },
  watch: {
    value(nvl) {
      if (nvl) {
        setTimeout(() => {
          this.$emit('input', !nvl)
        }, this.duration)
      }
    }
  },
  directives: {
    stop: {
      bind(el) {
        el.addEventListener('touchmove', event => {
          event.preventDefault()
        })
      }
    }
  },
  methods: {
    onAfterEnter() {
      this.$emit('opened')
    },
    onAfterLeave() {
      this.$emit('closed')
    }
  },
  render(h) {
    const { value, message, type, icon, loadingType } = this
    const hasLoading = type === 'loading'
    const hasIcon = (type === 'icon' && icon) || hasLoading
    const ToastIcon = function() {
      if (type === 'icon' && icon) {
        return <Icon name={icon} />
      }

      if (hasLoading) {
        return <Loading type={loadingType} size={24} color="white" />
      }
    }
    return (
      <div style={{ display: 'table' }}>
        <transition
          name="sv-transition-fade"
          onAfterEnter={this.onAfterEnter}
          onAfterLeave={this.onAfterLeave}
        >
          <div
            class={
              'sv-toast ' +
              (hasIcon ? 'sv-toast-hasicon' : 'sv-toast-text') +
              ' ' +
              (hasLoading ? 'sv-toast-hasicon' : '')
            }
            vShow={value}
            vStop
          >
            <div class={hasIcon ? 'sv-toast-icon' : ''}>{ToastIcon()}</div>
            <div class="sv-toast-message">{message || this.$slots.default}</div>
          </div>
        </transition>
      </div>
    )
  }
}
