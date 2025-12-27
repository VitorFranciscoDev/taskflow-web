import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name:'landing',
            component: () => import('@/infrastructure/presentation/auth/screens/LandingPage.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/infrastructure/presentation/auth/screens/LoginPage.vue'),
        },
    ]
});

export default router;