<script setup lang="ts">
import {ref} from 'vue'
import Spinner from "@/components/ui/Spinner.vue";
import {cn} from '@/lib/utils'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import GoogleAuthApproach from "@/components/section/Auth/GoogleAuthApproach.vue";
import {useAuthStore} from "@/stores/auth";
import {Checkbox} from "@/components/ui/checkbox";
import {useValidationStore} from "@/stores/validation";

const validation = useValidationStore();
const isLoading = ref(false)
const loginForm = ref({
    email: 'test@example.com',
    password: 'password',
    remember: true
})
const authStore = useAuthStore();

async function onSubmit(event: Event) {
    isLoading.value = true
    await authStore.login(loginForm.value)
    isLoading.value = authStore.loading;
}
</script>

<template>
    <p v-if="validation.message" class="text-destructive font-medium">{{validation.message}}</p>
    <div :class="cn('grid gap-6', $attrs.class ?? '')">
        <form @submit.prevent="onSubmit">
            <div class="grid gap-2">
                <div class="grid gap-5">
                    <div class="relative">
                        <!--                        Email-->
                        <Input peer-place-holder id="email" placeholder=" " type="email"
                               auto-capitalize="none" auto-complete="email" auto-correct="off" :disabled="isLoading"
                               v-model="loginForm.email"
                               name="email"
                        />
                        <div v-for="error in validation?.errors?.email"><span>{{error}}</span></div>
                        <Label for="email" peer-place-holder>
                            Email
                        </Label>
                    </div>
                    <!--                    Password-->
                    <div class="relative">
                        <Input autocomplete="off" id="password" name="password" type="password"
                               auto-capitalize="none" auto-complete="password" auto-correct="off" :disabled="isLoading"
                               v-model="loginForm.password"
                               placeholder=" " peer-place-holder/>
                        <Label for="password" peer-place-holder>Password</Label>
                    </div>
                    <div class="relative">
                        <div class="items-top flex gap-x-2">
                            <Checkbox id="remember" v-model="loginForm.remember"/>
                            <div class="grid gap-1.5 leading-none">
                                <label
                                    for="remember"
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Remember Me
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <Button :disabled="isLoading" class="mt-5">
                    <Spinner v-if="isLoading" is-light class="mr-2 h-4 w-4 animate-spin"/>
                    Sign In with Email
                </Button>
            </div>
        </form>
        <div class="relative">
            <div class="absolute inset-0 flex items-center">
                <span class="w-full border-t"/>
            </div>
            <div class="relative flex justify-center text-xs uppercase">
        <span class="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
            </div>
        </div>
        <GoogleAuthApproach :is-loading="isLoading"/>
    </div>
</template>
