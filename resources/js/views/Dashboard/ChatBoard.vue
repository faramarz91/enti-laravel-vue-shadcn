<template>
    <main class="flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
        <div class="relative flex h-full flex-col rounded-xl py-4 bg-muted/50 shadow lg:col-span-2">
            <Badge variant="outline" class="absolute right-3 top-3">
                Output
            </Badge>
            <div class="max-h-[calc(100vh-16rem)] overflow-auto p-5">
                <div class="max-w-4xl mx-auto mb-10">
                    <ChatRoot/>
                </div>
            </div>
            <div class="flex-1"/>
            <div class="flex justify-center">
                <form class="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring w-full max-w-4xl">
                    <Label for="message" class="sr-only">
                        Message
                    </Label>
                    <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                    />
                    <div class="flex items-center p-3 pt-0">

                        <Button size="sm" class="ml-auto gap-1.5">
                            Send Message
                            <CornerDownLeft class="size-3.5"/>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import {CornerDownLeft,} from 'lucide-vue-next'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import ChatRoot from "@/components/section/Chat/ChatRoot.vue";
</script>
