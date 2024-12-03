<script setup lang="ts">
import {
    Bird,
    Book,
    Bot,
    Code2,
    CornerDownLeft,
    LifeBuoy,
    Mic,
    Paperclip,
    Rabbit,
    Settings,
    Settings2,
    Share,
    SquareTerminal,
    SquareUser,
    Triangle,
    Turtle
} from 'lucide-vue-next'

import {Badge} from '@/components/ui/badge'
import {Button} from '@/components/ui/button'

import {Label} from '@/components/ui/label'
import {Textarea} from '@/components/ui/textarea'
import {Tooltip, TooltipContent, TooltipTrigger} from '@/components/ui/tooltip'
import ChatRoot from "@/components/section/Chat/ChatRoot.vue";
</script>

<template>
    <main class="flex flex-col p-4 max-h-[calc(100vh-3.5rem)] h-full lg:max-h-[calc(100vh-60px)]">
        <div class="relative flex-1 overflow-auto flex flex-col rounded-xl bg-muted/30 shadow shadow-gray-300 p-4 lg:col-span-2">
            <Badge variant="outline" class="absolute right-3 top-3">
                Output
            </Badge>
            <div class=" overflow-auto">
                <ChatRoot/>
            </div>
            <div class="flex-1"/>
            <div class="flex-1 mb-36"/>
            <div class="max-w-4xl mx-auto w-full">
                <form
                    class="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
                    <Label for="message" class="sr-only">
                        Message
                    </Label>
                    <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                    />
                    <div class="flex items-center p-3 pt-0">

                        <Button type="submit" size="sm" class="ml-auto gap-1.5">
                            Send Message
                            <CornerDownLeft class="size-3.5"/>
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>
