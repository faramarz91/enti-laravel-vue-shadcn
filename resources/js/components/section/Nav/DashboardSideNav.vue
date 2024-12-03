<template>
    <div class="hidden border-r bg-muted/40 md:block">
        <div class="flex h-full max-h-screen flex-col gap-2">
            <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <a href="/" class="flex p-2 mr-5 items-center gap-2 font-semibold">
                    <img class="w-auto" src="/public/enti.jpg" alt="" srcset="">
                </a>
                <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
                    <Bell class="h-4 w-4" />
                    <span class="sr-only">Toggle notifications</span>
                </Button>
            </div>
            <div class="flex-1">
                <nav class="grid items-start px-2 text-sm font-medium lg:px-4 mt-10">
                    <RouterLink
                        :to="{name: 'Dashboard'}"
                        exact-active-class="bg-muted text-primary"
                        class="flex items-center gap-3 rounded-lg px-3 hover:scale-[102%] py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <LineChart class="h-4 w-4" />
                        Analytics
                    </RouterLink>
                    <RouterLink
                        exact-active-class="bg-muted text-primary"
                        :to="{name: 'Chat'}"
                        class="flex items-center gap-3 rounded-lg px-3 hover:scale-[102%] py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                        <Package class="h-4 w-4" />
                        Chat
                    </RouterLink>
                </nav>
            </div>
            <div class="mt-auto p-4">
                <Card>
                    <CardHeader class="p-2 pt-0 md:p-4">
                        <CardTitle>Upgrade to Pro</CardTitle>
                        <CardDescription>
                            Unlock all features and get unlimited access to our support
                            team.
                        </CardDescription>
                    </CardHeader>
                    <CardContent class="p-2 pt-0 md:p-4 md:pt-0">
                        <Button size="sm" class="w-full">
                            Upgrade
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Bell, Package, LineChart} from "lucide-vue-next";
</script>
