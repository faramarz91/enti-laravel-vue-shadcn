<script setup lang="ts">
import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {h, onMounted} from "vue";
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/toast/use-toast'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ExclamationTriangleIcon } from '@radix-icons/vue'

const { toast } = useToast()
onMounted(() => {
    toast({
        title: 'Uh oh! Something was demo!!!1.',
        description: 'Setting page are not completed and has many ways to complete.',
        variant: 'warning',
        duration: 10000,

    });
})
</script>

<template>
    <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 bg- flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div class="mx-auto grid w-full max-w-6xl gap-2">
            <h1 class="text-3xl font-semibold">
                Settings <span class="text-red-500 text-sm">(Demo)</span>
            </h1>
        </div>
        <div class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
            <nav class="grid gap-4 text-sm text-muted-foreground">
                <a href="#" class="font-semibold text-primary">
                    General
                </a>
                <a href="#">
                    Security
                </a>
                <a href="#">
                    Integrations
                </a>
                <a href="#">
                    Support
                </a>
                <a href="#">
                    Organizations
                </a>
                <a href="#">
                    Advanced
                </a>
            </nav>
            <div class="grid gap-6">
                <Alert variant="destructive" class="ring-2 ring-offset-2 ring-destructive">
                    <ExclamationTriangleIcon class="w-4 h-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        Your session has expired. Please log in again.
                    </AlertDescription>
                </Alert>
                <Card>
                    <CardHeader>
                        <CardTitle>Store Name</CardTitle>
                        <CardDescription>
                            Used to identify your store in the marketplace.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <Input placeholder="Store Name" />
                        </form>
                    </CardContent>
                    <CardFooter class="border-t px-6 py-4">
                        <Button>Save</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Plugins Directory</CardTitle>
                        <CardDescription>
                            The directory within your project, in which your plugins are
                            located.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form class="flex flex-col gap-4">
                            <Input
                                placeholder="Project Name"
                                default-value="/content/plugins"
                            />
                            <div class="flex items-center space-x-2">
                                <Checkbox id="include" default-checked />
                                <label
                                    for="include"
                                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Allow administrators to change the directory.
                                </label>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter class="border-t px-6 py-4">
                        <Button>Save</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    </main>
</template>
