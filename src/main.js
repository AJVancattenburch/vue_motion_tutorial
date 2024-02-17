import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import './utils/SocketProvider.js'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { MotionPlugin } from "@vueuse/motion"

const root = createApp(App)
async function init() {
  await registerGlobalComponents(root)
  root
    .use(router)
    .use(autoAnimatePlugin)
    .use(MotionPlugin)
    .mount('#app')
}
init()
