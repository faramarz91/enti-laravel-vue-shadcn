<script setup lang="ts">
import {cn} from '@/lib/utils'
import {buttonVariants} from '@/components/ui/button'
import {useRouter} from "vue-router";
</script>

<template>
    <div class="md:hidden">
        <VPImage
            alt="Authentication"
            width="1280"
            height="1214" class="block" :image="{
        dark: '/examples/authentication-dark.png',
        light: '/examples/authentication-light.png',
      }"
        />
    </div>

    <div
        class="container relative lg:mt-0 h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <RouterLink
            :to=" ($route.name === 'Login') ? { name: 'Register' } : {name: 'Login'}"
            v-text="($route.name === 'Login') ? 'Register' : 'Login'"
            :class="cn(
        buttonVariants({ variant: 'ghost' }),
        'lg:absolute right-4 top-4 md:right-8 md:top-8',
      )"
        />
        <div class="relative hidden h-screen flex-col bg-muted p-10 text-white dark:border-r lg:flex">
            <div class="absolute inset-0 bg-zinc-900"/>
            <div class="relative z-20 flex items-center text-lg font-medium">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="mr-2 h-6 w-6"
                >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>
                </svg>
                Acme Inc
            </div>
            <div class="relative z-20 mt-auto">
                <blockquote class="space-y-2">
                    <p class="text-lg">
                        &ldquo;This library has saved me countless hours of work and
                        helped me deliver stunning designs to my clients faster than
                        ever before.&rdquo;
                    </p>
                    <footer class="text-sm">
                        FaRaMaRz M.
                    </footer>
                </blockquote>
            </div>
        </div>
        <router-view v-slot="{ Component }">
            <transition name="scale" mode="out-in">
                <component :is="Component"/>
            </transition>
        </router-view>
    </div>
</template>
<style>
.scale-enter-active,
.scale-leave-active {
    transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>
