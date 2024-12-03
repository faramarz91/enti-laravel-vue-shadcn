<template>
    <div class="mt-10 flex flex-col gap-5 ">
        <RightBubble/>
        <LeftBubble/>
    </div>
</template>
<script setup>
import {Brain} from "lucide-vue-next";
import RightBubble from "@/components/section/Chat/RightBubble.vue";
import LeftBubble from "@/components/section/Chat/LeftBubble.vue";
</script>
