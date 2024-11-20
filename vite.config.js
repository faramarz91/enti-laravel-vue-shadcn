import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vueDevTools from "vite-plugin-vue-devtools"
import vue from "@vitejs/plugin-vue"
import {fileURLToPath, URL} from "node:url";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'resources/js/app.inertia.js'],
            refresh: true,
        }),
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
            '@components': fileURLToPath(new URL('./resources/js/components/ui', import.meta.url)),
            '@css': fileURLToPath(new URL('./resources/css', import.meta.url))
        }
    }
});
