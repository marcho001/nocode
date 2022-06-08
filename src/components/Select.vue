<template>
  <select v-model="selected" class="p-2 rounded border border-gray-400 h-full">
    <option v-for="item of optionLists" :key="item.value" :value="item.value">
      {{ item.title }}
    </option>
  </select>
</template>

<script setup>
import { computed, ref, toRefs } from 'vue'
const props = defineProps({
  optionLists: { type: Array, required: true },
  modelValue: { type: String, required: true },
})
const emit = defineEmits(['update:modelValue'])
const { optionLists } = toRefs(props)
const selected = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})
</script>

<style></style>
