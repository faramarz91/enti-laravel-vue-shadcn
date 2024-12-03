<template>
    <div class="grid h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardSideNav />
        <div class="flex flex-col">
            <DashboardNav/>
            <router-view v-slot="{ Component }">
                <transition name="scale" mode="out-in">
                    <component :is="Component"/>
                </transition>
            </router-view>
        </div>
    </div>

</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
    transition: all 0.2s ease;
}

.scale-enter-from,
.scale-leave-to {
    opacity: 0;
    transform: scale(0.5);
}
</style>
<script setup lang="ts">
import DashboardNav from "@/components/section/Nav/DashboardNav.vue";
import DashboardSideNav from "@/components/section/Nav/DashboardSideNav.vue";
</script>
