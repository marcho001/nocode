<template>
  <input
    v-model="inputVal"
    type="text"
    class="rounded p-2 border border-gray-400 w-full"
    :placeholder="placeholder"
    v-bind="$attrs"
  />
</template>

<script setup>
import { toRefs, computed } from 'vue'
const props = defineProps({
  placeholder: { type: String, default: '請輸入' },
  modelValue: { type: String, required: true },
})
const emit = defineEmits(['update:modelValue'])

const { placeholder } = toRefs(props)

const inputVal = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})
</script>

<style></style>
