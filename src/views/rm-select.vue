<template>
  <div>
    <div>
      <div class="s-select">
        <div class="vui-title">select示例</div>
        <rm-select
          :value-map="['key', 'value']"
          title="身份证号："
          placeholder="请选择"
          v-model="seval"
          direction="rtl"
          @change="schange"
          :configure="configures"
        ></rm-select>
        <div class="vui-result">
          <span>选中值：</span>
          <p>{{ seval }}</p>
        </div>
        <div class="vui-title">附带轻触按钮 value-map="['label', 'value']"</div>
        <rm-select
          :value-map="['label', 'value']"
          title="狗的种类："
          placeholder="请选择"
          v-model="seval2"
          direction="rtl"
          :clear="true"
          @change="schange2"
          :configure="configures2"
        ></rm-select>
        <div class="vui-result">
          <span>选中值：</span>
          <p>{{ seval2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  tags: 'Form 组件',
  label: 'select',
  path: 'select',
  data() {
    return {
      show: false,
      configures: [{ key: 1, value: '大黄' }, { key: 2, value: '小黑' }],
      seval: '',
      configures2: [
        {
          label: 'a',
          value: '金毛附带轻触按钮附带轻触按钮附带轻触按钮附带轻触按钮'
        },
        { label: 'b', value: '哈士奇' }
      ],
      seval2: ''
    }
  },
  methods: {
    schange(val) {
      console.log(val, this.seval)
    },
    schange2(val) {
      console.log(val, this.seval2)
    }
  }
}
</script>

<style></style>
