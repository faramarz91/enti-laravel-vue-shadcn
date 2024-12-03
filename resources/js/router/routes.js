import HomeView from "../views/HomeView.vue";
import HeroLayout from "@/layouts/HeroLayout.vue";
import AuthLoayout from "@/layouts/AuthLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import SettingLayout from "@/layouts/SettingLayout.vue";
import NavHeader2 from "@/components/section/Nav/NavHeader2.vue";

const routes = [
    {
        path: '/',
        component: HeroLayout,
        children: [
            {path: '', name: 'Home', component: HomeView},
        ]
    },
    {
        path: '/auth',
        redirect: '/auth/login',
        component: AuthLoayout,
        meta: {isGuest: true},
        children: [
            {path: 'login', name: 'Login', component: () => import('@/views/Auth/Login.vue')},
            {path: 'register', name: 'Register', component: () => import('@/views/Auth/Register.vue')},
        ],
    },
    {
        path: '/dashboard',
        component: DashboardLayout,
        meta: {requiresAuth: true},
        children: [
            {
                path: '', name: 'Dashboard',
                component: () => import('@/views/Dashboard/Dashboard.vue'),
            },
            {
                path: 'setting', name: 'Setting',
                component: () => import('@/views/Dashboard/Setting.vue'),
            },
            {
                path: 'chat', name: 'Chat',
                component: () => import('@/views/Dashboard/ChatBoard.vue'),
            },

        ]
    },
    {
        path: '/setting',
        component: SettingLayout,
        meta: {requiresAuth: true},
        children: [
            {
                path: '',
                name: 'setting',
                component: () => import('@/views/Dashboard/Setting.vue')
            }
        ]
    }
]


export default routes;
