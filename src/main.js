import '@mdi/font/css/materialdesignicons.css'
import 'bootstrap'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import './utils/SocketProvider.js'

const root = createApp(App)
async function init() {
  await registerGlobalComponents(root)
  root
    .use(router)
    .mount('#app')
}
init()
