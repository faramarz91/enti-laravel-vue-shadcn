<script setup lang="ts">
import {ref} from 'vue'
import Spinner from "@/components/ui/Spinner.vue";
import {cn} from '@/lib/utils'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import GoogleAuthApproach from "@/components/section/Auth/GoogleAuthApproach.vue";

const isLoading = ref(false)
const registerForm = ref({
    fullName: '',
    email: '',
    password: '',
    password_confirmation: ''
})

async function onSubmit(event: Event) {
    isLoading.value = true

}

</script>

<template>
    <div :class="cn('grid gap-6', $attrs.class ?? '')">
        <form @submit.prevent="onSubmit">
            <div class="grid gap-8">
                <div class="grid gap-5">
                    <div class="grid gap-5">
                        <!--                Full Name-->
                        <div class="relative">
                            <Input peer-place-holder id="fullName" placeholder=" " type="text"
                                   v-model="registerForm.fullName"
                                   auto-capitalize="none" auto-complete="full-name" auto-correct="off"
                                   :disabled="isLoading"
                            />
                            <Label for="fullName" peer-place-holder>
                                Full Name
                            </Label>
                        </div>
                        <!--                Email-->
                        <div class="relative">
                            <Input peer-place-holder id="email" placeholder=" " type="email"
                                   v-model="registerForm.email"
                                   auto-capitalize="none" auto-complete="email" auto-correct="off" :disabled="isLoading"
                            />
                            <Label for="email" peer-place-holder>
                                Email
                            </Label>
                        </div>
                        <!--                Password-->
                        <div class="relative">
                            <Input autocomplete="off" id="password" name="password" type="password"
                                   v-model="registerForm.password"
                                   auto-capitalize="none" auto-complete="new-password" auto-correct="off"
                                   :disabled="isLoading"
                                   placeholder=" " peer-place-holder/>
                            <Label for="password" peer-place-holder>Password</Label>
                        </div>
                        <!--                Password Confirmation-->
                        <div class="relative">
                            <Input autocomplete="off" id="password-confirmation" name="password-confirmation"
                                   type="password"
                                   auto-capitalize="none" auto-complete="new-password" auto-correct="off"
                                   :disabled="isLoading"
                                   placeholder=" " peer-place-holder v-model="registerForm.password_confirmation"/>
                            <Label for="password-confirmation" peer-place-holder>Password Again</Label>
                        </div>
                    </div>
                </div>
                <Button :disabled="isLoading">
                    <Spinner v-if="isLoading" is-light class="mr-2 h-4 w-4 animate-spin"/>
                    Sign Up with Email
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
