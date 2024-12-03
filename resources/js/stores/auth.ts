import { defineStore } from 'pinia';
import router from "@/router/index.ts";
import {useValidationStore} from "@/stores/validation";


export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: null,        // Store user data (can be extended)
        loading: false,    // Loading state for login process
        error: null,       // Store error message
    }),

    actions: {
        // Get User Info
        async checkUser() {
            if (!this.user){
                await this.fetchUser();
            }
            return !!this.user;
        },
        // CSRF token request
        async getCSRFToken() {
            try {
                // This endpoint should trigger Sanctum to send a CSRF token cookie
                await $axios.get('/sanctum/csrf-cookie');
            } catch (error) {
                console.error('Failed to get CSRF token:', error);
                throw error;
            }
        },

        // Register action with Sanctum
        async register(credential) {
            this.loading = true;
            this.error = null;
            try {
                await this.getCSRFToken();
                await $axios.post('/api/register', credential);
            } catch (error) {
                this.error = error
            } finally {
                this.loading = false;
            }
        },

        // Login action with Sanctum
        async login(credentials) {
            this.loading = true;
            this.error = null;
            try {
                // Get the CSRF token first
                await this.getCSRFToken();

                // Perform login
                await $axios.post('/api/login', credentials);

                // Assuming the user data comes back from the login request
                await this.fetchUser().data.user;

                // Redirect to home or another page after login
                await router.push({name: 'Dashboard'});

            } catch (error) {
                this.error = 'Login failed, please check your credentials.';
            } finally {
                this.loading = false;
                router.push({name: 'Dashboard'})
            }
        },

        // Logout action
        async logout() {
            try {
                await $axios.post('/api/logout');  // Sanctum logout
                this.user = null;

                // Redirect to the login page after logout
                await router.push({name: 'Login'});

            } catch (error) {
                console.error('Failed to logout:', error);
            }
        },

        // Fetch the authenticated user (e.g., after page reload)
        async fetchUser() {
            try {
                const response = await $axios.get('/api/user');
                this.user = response.data;
                localStorage.setItem('user', JSON.stringify(response.data));
                return response;
            } catch (error) {
                console.error('Failed to fetch user:', error);
                this.user = null;
            }
        },
    },

    getters: {
        isAuthenticated: (state) => !!state.user,
        avatar: (state) => {
            return !!state.user ? state.user.provider_image : false
        },
        userName: (state) => !!state.user ? state.user?.name : ''
    },

});
