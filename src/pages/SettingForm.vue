<script setup>
import { isReactive, isRef, reactive, ref, toRefs, unref } from 'vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import Select from '../components/Select.vue'
import BannerClickSetting from '../components/BannerClickSetting.vue'
import NavClickSetting from '../components/NavClickSetting.vue'
import { v4 as uuid } from 'uuid'
const address = ref('')
const formSetting = reactive({
  data: [
    {
      uid: uuid(),
      target: '',
      eventId: '',
      triggerType: 'click',
      eventDetail: {},
    },
  ],
})
const handleAddCondition = () => {
  formSetting.data.push({
    uid: uuid(),
    target: '',
    eventId: '',
    triggerType: 'click',
    eventDetail: {},
  })
}

const handleSettingUpdate = (setting, uid) => {
  formSetting.data = formSetting.data.map((item) => {
    if (item.uid === uid) {
      item.eventDetail = { ...setting }
    }
    return item
  })
}
</script>

<template>
  <div class="p-8">
    <router-link :to="{ name: 'Trace' }" class="block text-blue-500 mb-4">
      前往測試頁面</router-link
    >

    <div class="mb-4">
      <Input v-model="address" placeholder="請輸入埋碼網址" />
    </div>
    <h4 class="my-4">埋碼設定</h4>
    <div class="">
      <div v-for="item of formSetting.data" :key="item.uid" class="flex gap-2 my-2">
        <div class="">
          <Input v-model="item.target" placeholder="請輸入 css 選擇器" />
        </div>
        <div class="">
          <Select
            v-model="item.eventId"
            :option-lists="[
              { title: '點擊 Banner', value: '1' },
              { title: '點擊 Nav', value: '9' },
            ]"
            placeholder="選擇事件類型"
          />
        </div>
        <div class="">
          <Select
            v-model="item.triggerType"
            :option-lists="[
              { title: '點擊', value: 'click' },
              { title: '滑鼠移入目標', value: 'mouseenter' },
            ]"
            placeholder="選擇觸發方式"
          />
        </div>
        <BannerClickSetting
          v-if="item.eventId === '1'"
          @update-setting="handleSettingUpdate($event, item.uid)"
        />
        <NavClickSetting
          v-if="item.eventId === '9'"
          @update-setting="handleSettingUpdate($event, item.uid)"
        />
      </div>
    </div>
    <Button class="mt-4" @click="handleAddCondition">+ 新增條件</Button>
  </div>
</template>

<style></style>
