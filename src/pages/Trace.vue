<template>
  <div class="p-4">
    <div class="mb-4">
      選擇事件：
      <Select v-model="selectedEventId" :option-lists="eventOptions" @change="change" />
      <Button class="ml-4" @click="sendEvent">送出事件</Button>
    </div>
    <div v-for="item of colInputLists" :key="`${selectedEventId}_${item.name}`" class="mb-4 w-1/2">
      {{ item.title }}：
      <Input v-model="item.value" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from '@vue/runtime-core'
import Banner from '../components/Banner.vue'
import Button from '../components/Button.vue'
import Select from '../components/Select.vue'
import Input from '../components/Input.vue'
const lists = ref([
  {
    id: 14,
    name: '購物行為新增',
    col: [
      {
        colName: 'col1',
        colValue: '會員ID'
      },
      {
        colName: 'col2',
        colValue: '同筆交易編號'
      },
      {
        colName: 'col3',
        colValue: '交易編號類型'
      },
      {
        colName: 'col4',
        colValue: '促銷金額'
      },
      {
        colName: 'col5',
        colValue: '原始金額'
      },
      {
        colName: 'col6',
        colValue: '購買數量'
      },
      {
        colName: 'col7',
        colValue: '商品大類別'
      },
      {
        colName: 'col8',
        colValue: '商品中類別'
      },
      {
        colName: 'col9',
        colValue: '商品小類別'
      },
      {
        colName: 'col10',
        colValue: '商品編號'
      },
      {
        colName: 'col11',
        colValue: '商品名稱'
      },
      {
        colName: 'col12',
        colValue: '商店編號'
      },
      {
        colName: 'col13',
        colValue: '購買來源'
      },
      {
        colName: 'col14',
        colValue: '銷售時間'
      }
    ]
  },
  {
    id: 15,
    name: '購物車商品新增',
    col: [
      {
        colName: 'col1',
        colValue: '會員ID'
      },
      {
        colName: 'col2',
        colValue: '促銷金額'
      },
      {
        colName: 'col3',
        colValue: '原始金額'
      },
      {
        colName: 'col4',
        colValue: '購買數量'
      },
      {
        colName: 'col5',
        colValue: '商品大類別'
      },
      {
        colName: 'col6',
        colValue: '商品中類別'
      },
      {
        colName: 'col7',
        colValue: '商品小類別'
      },
      {
        colName: 'col8',
        colValue: '商品編號'
      },
      {
        colName: 'col9',
        colValue: '商品名稱'
      },
      {
        colName: 'col10',
        colValue: '加入購物車來源'
      },
      {
        colName: 'col11',
        colValue: '加入時間'
      }
    ]
  },
  {
    id: 16,
    name: '購物車商品移除',
    col: [
      {
        colName: 'col1',
        colValue: '會員ID'
      },
      {
        colName: 'col2',
        colValue: '商品編號'
      },
      {
        colName: 'col3',
        colValue: '移除數量'
      }
    ]
  },
  {
    id: 17,
    name: '保固登錄',
    col: [
      {
        colName: 'col1',
        colValue: '會員ID'
      },
      {
        colName: 'col2',
        colValue: '商品大類別'
      },
      {
        colName: 'col3',
        colValue: '商品中類別'
      },
      {
        colName: 'col4',
        colValue: '商品小類別'
      },
      {
        colName: 'col5',
        colValue: '商品編號'
      },
      {
        colName: 'col6',
        colValue: '商品名稱'
      },
      {
        colName: 'col7',
        colValue: '商品型號'
      },
      {
        colName: 'col8',
        colValue: '購買日期'
      },
      {
        colName: 'col9',
        colValue: '購買通路'
      },
      {
        colName: 'col10',
        colValue: '購買縣市'
      }
    ]
  },
  {
    id: 18,
    name: '活動登錄',
    col: [
      {
        colName: 'col1',
        colValue: '會員ID'
      },
      {
        colName: 'col2',
        colValue: '活動名稱'
      },
      {
        colName: 'col3',
        colValue: '購買日期'
      },
      {
        colName: 'col4',
        colValue: '購買通路'
      },
      {
        colName: 'col5',
        colValue: '購買店家'
      },
      {
        colName: 'col6',
        colValue: '購買門市'
      },
      {
        colName: 'col7',
        colValue: '活動贈品配送縣市'
      }
    ]
  },
  {
    id: 19,
    name: '商品退貨行為',
    col: [
      {
        colName: 'col1',
        colValue: '原購買交易(發票)編號'
      },
      {
        colName: 'col2',
        colValue: '交易編號類型'
      },
      {
        colName: 'col3',
        colValue: '商品編號'
      },
      {
        colName: 'col4',
        colValue: '退貨時間'
      }
    ]
  },
  {
    id: 20,
    name: '商品加入追蹤/最愛',
    col: [
      {
        colName: 'col1',
        colValue: '會員ID'
      },
      {
        colName: 'col2',
        colValue: '追蹤日期'
      },
      {
        colName: 'col3',
        colValue: '大類別'
      },
      {
        colName: 'col4',
        colValue: '中類別'
      },
      {
        colName: 'col5',
        colValue: '小類別'
      },
      {
        colName: 'col6',
        colValue: '編號'
      },
      {
        colName: 'col7',
        colValue: '名稱'
      },
      {
        colName: 'col8',
        colValue: '原始金額'
      },
      {
        colName: 'col9',
        colValue: '促銷金額'
      },
      {
        colName: 'col10',
        colValue: '新增或取消追蹤'
      },
      {
        colName: 'col11',
        colValue: '是否仍有庫存'
      },
      {
        colName: 'col12',
        colValue: '加入或移除時間'
      }
    ]
  },
  {
    id: 10,
    name: '註冊會員',
    col: [
      {
        colName: 'col1',
        colValue: '會員ID'
      },
      {
        colName: 'col2',
        colValue: '姓名'
      },
      {
        colName: 'col3',
        colValue: '手機'
      },
      {
        colName: 'col4',
        colValue: 'email'
      },
      {
        colName: 'col5',
        colValue: '地址'
      },
      {
        colName: 'col6',
        colValue: '生日'
      },
      {
        colName: 'col7',
        colValue: '加入時間'
      },
      {
        colName: 'col8',
        colValue: '來源'
      },
      {
        colName: 'col9',
        colValue: '是否接收推播訊息'
      },
      {
        colName: 'col10',
        colValue: '會員等級'
      }
    ]
  },
  {
    id: 1,
    name: '點擊banner',
    col: [
      {
        colName: 'col1',
        colValue: 'Banner名稱'
      },
      {
        colName: 'col2',
        colValue: 'Banner類別'
      },
      {
        colName: 'col3',
        colValue: 'Banner代碼'
      },
      {
        colName: 'col4',
        colValue: 'Banner位置'
      }
    ]
  },
  {
    id: 2,
    name: '全站搜尋',
    col: [
      {
        colName: 'col1',
        colValue: '搜尋內容'
      },
      {
        colName: 'col2',
        colValue: '搜尋時間'
      },
      {
        colName: 'col3',
        colValue: '欲搜尋的欄位'
      },
      {
        colName: 'col4',
        colValue: '搜尋結果排序方式'
      },
      {
        colName: 'col5',
        colValue: '搜尋結果個數'
      },
      {
        colName: 'col6',
        colValue: '搜尋主類別'
      }
    ]
  },
  {
    id: 3,
    name: '商品列表頁',
    col: [
      {
        colName: 'col1',
        colValue: '商品主類別'
      },
      {
        colName: 'col2',
        colValue: '商品次類別'
      },
      {
        colName: 'col3',
        colValue: '商品版位'
      },
      {
        colName: 'col4',
        colValue: '版位停留時間'
      },
      {
        colName: 'col5',
        colValue: '商品代碼'
      },
      {
        colName: 'col6',
        colValue: '商品品牌名'
      },
      {
        colName: 'col7',
        colValue: '商品名稱'
      },
      {
        colName: 'col8',
        colValue: '商品金額_原價'
      },
      {
        colName: 'col9',
        colValue: '商品金額_優惠價'
      },
      {
        colName: 'col10',
        colValue: '商品活動'
      },
      {
        colName: 'col11',
        colValue: '點擊按鈕名稱'
      },
      {
        colName: 'col12',
        colValue: '點擊按鈕位置'
      }
    ]
  },
  {
    id: 4,
    name: '商品瀏覽',
    col: [
      {
        colName: 'col1',
        colValue: '商品主類別'
      },
      {
        colName: 'col2',
        colValue: '商品次類別'
      },
      {
        colName: 'col3',
        colValue: '商品代碼'
      },
      {
        colName: 'col4',
        colValue: '商品品牌名'
      },
      {
        colName: 'col5',
        colValue: '商品名稱'
      },
      {
        colName: 'col6',
        colValue: '商品金額_原價'
      },
      {
        colName: 'col7',
        colValue: '商品金額_優惠價'
      },
      {
        colName: 'col8',
        colValue: '商品活動'
      },
      {
        colName: 'col9',
        colValue: '點擊按鈕名稱'
      },
      {
        colName: 'col10',
        colValue: '點擊按鈕位置'
      }
    ]
  },
  {
    id: 5,
    name: '文章列表頁',
    col: [
      {
        colName: 'col1',
        colValue: '文章主類別'
      },
      {
        colName: 'col2',
        colValue: '文章次類別'
      },
      {
        colName: 'col3',
        colValue: '文章版位'
      },
      {
        colName: 'col4',
        colValue: '版位停留時間'
      },
      {
        colName: 'col5',
        colValue: '文章代碼'
      },
      {
        colName: 'col6',
        colValue: '文章名稱'
      },
      {
        colName: 'col7',
        colValue: '點擊按鈕名稱'
      },
      {
        colName: 'col8',
        colValue: '點擊按鈕位置'
      }
    ]
  },
  {
    id: 6,
    name: '文章瀏覽',
    col: [
      {
        colName: 'col1',
        colValue: '文章主類別'
      },
      {
        colName: 'col2',
        colValue: '文章次類別'
      },
      {
        colName: 'col3',
        colValue: '文章代碼'
      },
      {
        colName: 'col4',
        colValue: '文章名稱'
      },
      {
        colName: 'col5',
        colValue: '文章發佈日期'
      },
      {
        colName: 'col6',
        colValue: '文章作者'
      },
      {
        colName: 'col7',
        colValue: '點擊按鈕名稱'
      },
      {
        colName: 'col8',
        colValue: '點擊按鈕位置'
      }
    ]
  },
  {
    id: 7,
    name: '活動頁',
    col: [
      {
        colName: 'col1',
        colValue: '活動類別'
      },
      {
        colName: 'col2',
        colValue: '活動名稱'
      },
      {
        colName: 'col3',
        colValue: '點擊按鈕名稱'
      },
      {
        colName: 'col4',
        colValue: '點擊按鈕位置'
      }
    ]
  },
  {
    id: 8,
    name: '點擊熱門關鍵字',
    col: [
      {
        colName: 'col1',
        colValue: '關鍵字內容'
      },
      {
        colName: 'col2',
        colValue: '關鍵字類別'
      },
      {
        colName: 'col3',
        colValue: '關鍵字版位'
      }
    ]
  },
  {
    id: 9,
    name: '點擊NAV行為',
    col: [
      {
        colName: 'col1',
        colValue: 'Nav主類別'
      },
      {
        colName: 'col2',
        colValue: 'Nav次類別'
      }
    ]
  },
  {
    id: 11,
    name: '試算工具',
    col: [
      {
        colName: 'col1',
        colValue: '試算選擇類型'
      },
      {
        colName: 'col2',
        colValue: '試算輸入內容'
      },
      {
        colName: 'col3',
        colValue: '試算結果'
      },
      {
        colName: 'col4',
        colValue: '點擊按鈕名稱'
      },
      {
        colName: 'col5',
        colValue: '點擊按鈕位置'
      }
    ]
  },
  {
    id: 12,
    name: '撥打電話',
    col: [
      {
        colName: 'col1',
        colValue: '電話類別'
      },
      {
        colName: 'col2',
        colValue: '按鈕位置'
      }
    ]
  },
  {
    id: 13,
    name: '跨渠道綁定',
    col: [
      {
        colName: 'col1',
        colValue: '會員ID'
      },
      {
        colName: 'col2',
        colValue: 'Token'
      },
      {
        colName: 'col3',
        colValue: 'Token From'
      }
    ]
  }
])

const eventOptions = lists.value.map(item => {
  return { value: item.id, title: item.name }
})
const selectedEventId = ref(1)

const selectedEvent = computed(() =>
  lists.value.find(item => {
    return item.id === selectedEventId.value
  })
)

const colInputLists = ref([])
const change = () => {
  colInputLists.value = selectedEvent.value.col.map(item => {
    return { title: item.colValue, value: '', name: item.colName }
  })
}

const sendEvent = () => {
  const eventDetail = colInputLists.value.map(item => item.value)
  window.dos.beaconSend(1, 1, 1, selectedEventId.value, ...eventDetail)
  console.log(eventDetail)
}
</script>

<style></style>
