import { createRouter, createWebHistory } from 'vue-router'
import SettingForm from '../pages/SettingForm.vue'
import Trace from '../pages/Trace.vue'
const routes = [
  { path: '/', name: 'Setting', component: Trace }
  // { path: '/trace', name: 'Trace', component: Trace },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
