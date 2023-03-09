import { createApp } from 'vue'
import App from './App.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

import './assets/main.css'



createApp(App).use(router).mount('#app')
