<template>
  <div class="">
    <Input v-model="eventDetail.col1" placeholder="NAV 主類別" @change="handleChange" />
  </div>
  <div class="">
    <Input v-model="eventDetail.col2" placeholder="NAV 次類別" @change="handleChange" />
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import Input from './Input.vue'
const eventDetail = reactive({
  col1: '',
  col2: '',
})
const emit = defineEmits(['update-setting'])
const handleChange = () => {
  emit('update-setting', eventDetail)
}

onMounted(() => handleChange())
</script>

<style></style>
