import './assets/tailwind.css'
// @ts-ignore
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// @ts-ignore
import App from '@/App.vue';
import router from './router'
// @ts-ignore
import {setupI18n} from "@/i18n";

const app = createApp(App)
setupI18n(app);
app.use(createPinia())
app.use(router)


app.mount('#app')
