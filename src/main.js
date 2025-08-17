import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import { createPinia } from 'pinia'
import vTooltip from './directives/v-tooltip.js'
const app = createApp(App)
app.use(router)
app.use(createPinia())
app.directive('tooltip', vTooltip)
app.mount('#app')
