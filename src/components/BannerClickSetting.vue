<template>
  <div class="">
    <Input v-model="eventDetail.col1" placeholder="Banner 名稱" @change="handleChange" />
  </div>
  <div class="">
    <Input v-model="eventDetail.col2" placeholder="Banner 類別" @change="handleChange" />
  </div>
  <div class="">
    <Input v-model="eventDetail.col3" placeholder="Banner 代碼" @change="handleChange" />
  </div>
  <div class="">
    <Input v-model="eventDetail.col4" placeholder="Banner 位置" @change="handleChange" />
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import Input from './Input.vue'
const eventDetail = reactive({
  col1: '',
  col2: '',
  col3: '',
  col4: '',
})
const emit = defineEmits(['update-setting'])
const handleChange = () => {
  emit('update-setting', eventDetail)
}
onMounted(() => handleChange())
</script>

<style></style>
