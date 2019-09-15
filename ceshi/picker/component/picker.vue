<template>
  <div class="misty-picker">
    <div v-for="(current, i) in currentData" :key="i" :id="'misty-picker-' + mid + i"></div>
  </div>
</template>

<script>
import Scroll from './index'
const getData = (value, data) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].value === value) {
      if (data[i] && data[i].children) {
        return data[i].children
      } else {
        return []
      }
    }
  }
  if (data[0] && data[0].children) {
    return data[0].children
  } else {
    return []
  }
}
export default {
  name: 'rmPicker',
  model: {
    prop: 'values',
    event: 'change'
  },
  props: {
    values: {
      type: Array,
      default: () => []
    },
    list: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentData: []
    }
  },
  mounted() {
    this.mid = Math.random()
      .toString(36)
      .substring(3, 8)
    this.initCurrentData(this.values, this.list)
  },
  methods: {
    initCurrentData(values, list, index) {
      let data = null
      let columns = this.columns - 1
      const currentData = (this.currentData = [])
      currentData.push(list)
      for (let i = 0; i < columns; i++) {
        const entry = values && values[i] ? values[i] : null
        data = getData(entry, list)
        currentData.push(data)
        list = data
      }
      if (index !== undefined) {
        this.setValues(index)
      } else if (values.length === 0) {
        this.setValues()
      }
      this.$emit('change', this.values)
      this.initScroll()
    },
    initScroll() {
      const self = this
      const values = this.values
      const columns = this.columns
      this.$nextTick(() => {
        const currentData = this.currentData
        for (let i = 0; i < currentData.length; i++) {
          const root = document.getElementById('misty-picker-' + this.mid + i)
          root.innerHTML = ''
          new Scroll(root, {
            data: currentData[i],
            defaultValue: values[i] ? values[i] : '',
            onSelect(val) {
              values.splice(i, 1, val)
              if (i < columns) {
                self.initCurrentData(values, self.list, i)
              }
            }
          })
        }
      })
    },
    setValues(index) {
      const values = this.values
      const columns = this.columns
      const currentData = this.currentData
      let num = index === undefined ? 0 : index + 1
      for (let i = num; i < columns; i++) {
        if (currentData[i] && currentData[i][0] && currentData[i][0].value) {
          values.splice(i, 1, currentData[i][0].value)
        } else {
          values.splice(i, 1, '')
        }
      }
    }
  }
}
</script>
