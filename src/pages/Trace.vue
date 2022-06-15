<template>
  <div class="p-4">
    <router-link :to="{ name: 'Setting' }" class="block text-blue-500 mb-4">回設定頁</router-link>
    <Banner id="banner_1" class="bg-blue-500 mb-2 cursor-pointer" title="Banner 1" />
    <Banner id="banner_2" class="bg-red-500 mb-2 cursor-pointer" title="Banner 2" />
    <Banner id="banner_3" class="bg-orange-500 mb-2 cursor-pointer" title="Banner 3" />

    <div class="inline-flex gap-2 p-2 border border-gray-400">
      <div id="nav_1" class="border border-gray-400 rounded py-4 w-36 text-center cursor-pointer">
        Nav 1
      </div>
      <div id="nav_2" class="border border-gray-400 rounded py-4 w-36 text-center cursor-pointer">
        Nav 2
      </div>
      <div id="nav_3" class="border border-gray-400 rounded py-4 w-36 text-center cursor-pointer">
        Nav 3
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core'
import Banner from '../components/Banner.vue'

// onMounted(() => {
//   import('../../test.js')
// })
</script>

<style></style>
