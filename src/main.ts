import './assets/tailwind.css'
import i18n from "@/i18n";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore
import App from '@/App.vue';
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
