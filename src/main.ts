import {createApp} from 'vue'
import App from './App.vue'
import router from '@/config/navigation'
import {createPinia} from 'pinia';

export const baseURL = 'http://localhost:8067';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');