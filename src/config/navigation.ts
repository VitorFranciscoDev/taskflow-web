import LandingPage from '@/infrastructure/presentation/auth/screens/LandingPage.vue'
import LoginPage from '@/infrastructure/presentation/auth/screens/LoginPage.vue'
import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

export const RouteDefs = {
    LandingPage: {
        path: '/',
        name: 'Landing Page',
        component: LandingPage
    },
    LoginPage: {
        path: '/login',
        name: 'Login Page',
        component: LoginPage
    },
} satisfies Record<string, RouteRecordRaw>

export const routes = Object.values(RouteDefs)

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;