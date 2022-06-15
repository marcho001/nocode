<template>
  <div class="py-12 border border-gray-400 rounded shadow">
    <p class="text-4xl text-center">{{ title }}</p>
  </div>
</template>
<script setup>
import { toRefs } from '@vue/reactivity'

const props = defineProps({
  title: { type: String, required: true },
})

toRefs(props)
</script>
