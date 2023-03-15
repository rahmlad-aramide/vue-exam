import { createApp } from 'vue'
import App from './App.vue'
import Home from '@/views/Home.vue'
import Stats from '@/views/Stats.vue'
import Repo from '@/views/Repo.vue'
import Repos from '@/views/Repos.vue'
import NotFound from '@/views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

import './assets/main.css'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/stats',
            name: 'Stats',
            component: Stats
        },
        {
            path: '/repos',
            name: 'Repos',
            component: Repos
        },
        {
            path: '/repos/:id',
            name: 'Repo',
            component: Repo,
            props: true
        },
        {
            path: '/:catchAll(.*)',
            name: 'Error',
            component: NotFound
        }
    ]
})



createApp(App).use(router).mount('#app')
