import AuthLayout from "@/layouts/AuthLayout.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import SettingLayout from "@/layouts/SettingLayout.vue";

const routes = [
    {
        path: '/auth',
        redirect: '/auth/login',
        component: AuthLayout,
        meta: {isGuest: true},
        children: [
            {path: 'login', name: 'Login', component: () => import('@/views/Auth/Login.vue')},
            {path: 'register', name: 'Register', component: () => import('@/views/Auth/Register.vue')},
        ],
    },
    {
        path: '/',
        component: DashboardLayout,
        meta: {requiresAuth: true},
        children: [
            {
                path: '', name: 'Dashboard',
                component: () => import('@/views/Dashboard/Dashboard.vue'),
            },
            {
                path: 'settings', name: 'Setting',
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
