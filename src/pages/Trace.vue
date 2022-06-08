<template>
  <div class="p-4">
    <router-link :to="{ name: 'Setting' }" class="block text-blue-500 mb-4">回設定頁</router-link>
    <div id="test_id_1" class="">內容1</div>
    <button id="test_id_2" class="bg-blue-500 rounded text-white p-2">內容2</button>
    <div id="test_id_3" class="p-4">
      <div class="test_class_1 p-4 bg-blue-200">內容3</div>
    </div>
    <a href="#" id="test_id_4" class="">內容4</a>
    <div id="test_id_5" class="">內容5</div>
    <div id="test_id_6" class="">內容6</div>
    <div id="test_id_7" class="">內容7</div>
    <div id="test_id_8" class="">內容8</div>
  </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'

onMounted(() => {
  import('../../test.js')
})
</script>

<style></style>
