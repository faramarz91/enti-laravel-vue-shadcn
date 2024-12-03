<template>
    <div class=" flex gap-10 max-w-4xl mx-auto w-full">
        <div class="flex w-fit h-fit">
            <span class="p-1 ring-[1px] ring-gray-600 bg-gray-200 rounded-full ">
                <Brain class="h-6 w-6"/>
            </span>
        </div>
        <div class=" w-full mt-3">
            <ChatSection>
                <p>
                    To manage login in Vue using Axios and Pinia, you can follow these steps to create a reusable and
                    maintainable authentication flow.
                </p>
                <div>
                    <h2 class="text-xl py-3">Step-by-Step Guide</h2>

                    <div class="p-2">
                        <ul class="list-decimal list-inside">
                            <li>Set up Axios for API requests</li>
                            <li>Set up Axios for API requests</li>
                            <li>Set up Axios for API requests</li>
                        </ul>
                    </div>
                </div>
            </ChatSection>
            <ChatSection>

                <div class="flex justify-center ">
                    <AreaChart/>
                </div>
            </ChatSection>
            <ChatSection>
                <div class="flex justify-center ">
                    <DonutChart/>
                </div>
            </ChatSection>
        </div>
    </div>
</template>
<script setup lang="ts">
import {Brain} from "lucide-vue-next";
import DonutChart from "@/components/section/Chart/DonutChart.vue";
import AreaChart from "@/components/section/Chart/AreaChart.vue";
import ChatSection from "@/components/section/Chat/ChatSection.vue";
</script>
