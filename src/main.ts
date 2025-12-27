import {createApp} from 'vue'
import App from './App.vue'
import router from '@/config/navigation'

const app = createApp(App);
app.use(router);
app.mount('#app');