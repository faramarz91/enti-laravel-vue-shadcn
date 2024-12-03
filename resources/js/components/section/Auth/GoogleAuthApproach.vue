<script setup lang="ts">
import {Button} from "@/components/ui/button";
import Spinner from "@/components/ui/Spinner.vue";
import {OhVueIcon as VIcon, addIcons} from "oh-vue-icons";
import {FcGoogle} from "oh-vue-icons/icons/fc"

defineProps({
    isLoading: {type: Boolean, default: false},
})
addIcons(FcGoogle)

function redirect(){
    location.href = '/auth/google/redirect'
}
</script>

<template>
    <Button variant="outline" type="button" role="link" :disabled="isLoading" @click="redirect">
        Continue with Google
        <Spinner v-if="isLoading" class="ml-2 h-4 w-4 animate-spin"/>
        <v-icon name="fc-google" v-else class="ml-2 h-4 w-4"/>
    </Button>
</template>

<style scoped>

</style>
