import {createRouter, createWebHistory} from 'vue-router'
import routes from "@/router/routes.js";
import {useAuthStore} from "@/stores/auth.ts"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
router.beforeEach(async (to, from, next) => {
    document.title = 'NT | '+ to.name.toUpperCase();
    const authStore = useAuthStore();
    await authStore.checkUser();
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        try {
            // Attempt to fetch user if page reloaded
            await authStore.fetchUser();
            if (authStore.isAuthenticated) {
                next();
            } else {
                next({name: 'Login'});
            }
        } catch {
            next({name: 'Login'});
        }
    } else if (to.meta.isGuest && authStore.isAuthenticated){
        next({name: 'Dashboard'});
    } else {
        next()
    }
});
export default router
