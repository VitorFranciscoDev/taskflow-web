import LandingPage from '@/infrastructure/presentation/auth/screens/LandingPage.vue'
import LoginPage from '@/infrastructure/presentation/auth/screens/LoginPage.vue'
import SignUpPage from '@/infrastructure/presentation/auth/screens/SignUpPage.vue'
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
    SignUpPage: {
        path: '/signUp',
        name: 'Sign Up Page',
        component: SignUpPage
    },
} satisfies Record<string, RouteRecordRaw>

export const routes = Object.values(RouteDefs)

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;