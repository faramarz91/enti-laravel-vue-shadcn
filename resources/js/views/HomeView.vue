<template>
    <Introduction class="h-screen"/>
    <Carousel />
    <Pricing/>
    <Promo/>
    <Footer/>
</template>
<script setup lang="ts">
import Introduction from "@/components/section/Hero/Introduction.vue";
import Pricing from "@/components/section/Hero/Pricing.vue";
import Promo from "@/components/section/Hero/Promo.vue";
import Footer from "@/components/section/Footer/Footer.vue";
import Carousel from "@/components/section/Hero/Carousel.vue";

</script>
