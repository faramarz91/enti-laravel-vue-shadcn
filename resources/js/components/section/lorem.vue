<template>
    <div v-for="count in loremIpsum"><p>{{ randContent(count) }}</p><br></div>
</template>
<script setup lang="ts">
import {computed, ref} from "vue";
    defineProps<{
        loremIpsum?: number
    }>()
    const content = ref({
        1: 'Aliquam sollicitudin vulputate est ac porta. Sed nec nunc et nulla hendrerit dapibus ac eu elit. Nulla facilisi. Duis tincidunt turpis non mauris facilisis, quis faucibus ligula scelerisque. In hac habitasse platea dictumst. Vivamus non dapibus nibh. Suspendisse dapibus, lorem at feugiat luctus, massa sapien pretium tortor, et venenatis lectus risus ac libero. Suspendisse eu neque ac eros tincidunt bibendum sit amet eget lorem. Pellentesque vel eros lacinia, efficitur felis non, convallis dui.\n',
        2: 'Vestibulum sed mollis eros, nec fermentum nulla. Cras luctus magna non nunc maximus, ut egestas justo malesuada. Nunc dignissim lorem nisl, vitae ornare risus varius quis. Aliquam ullamcorper, ex sed volutpat convallis, mi lectus elementum justo, eu congue arcu orci non velit. Integer pharetra massa vitae purus mollis sodales. Quisque dapibus, libero in condimentum tincidunt, leo ante posuere felis, vel volutpat libero nibh interdum elit. Aliquam et aliquet turpis. Integer metus magna, tempor quis sapien ac, blandit venenatis tellus. Praesent eros nulla, pharetra quis congue nec, ornare et enim. Aliquam erat volutpat.\n',
        3: 'Curabitur molestie risus sit amet ex vulputate, eget pellentesque quam dignissim. Vestibulum eu erat ullamcorper, pellentesque odio nec, ultricies ante. In hendrerit dolor nulla, sed aliquam elit ornare sit amet. Nam mi velit, luctus eu diam sit amet, fringilla aliquet mauris. Ut libero eros, posuere eu arcu eu, suscipit scelerisque nibh. Nulla quis rhoncus justo, in dictum libero. Integer quis sollicitudin velit. Pellentesque at mauris porta, luctus quam eu, bibendum eros. Etiam ullamcorper viverra ipsum eget sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pretium, orci in euismod ullamcorper, felis lectus gravida arcu, ut interdum tortor enim in magna. Phasellus rutrum euismod metus, ut ultricies tellus faucibus vulputate. Maecenas mollis in sapien et porta.\n'
    })
    const randContent = (countedNumber) => {
        if (countedNumber%3===0){
            return content.value['3']
        } else if (countedNumber%2===0){
            return content.value['2']
        } else return content.value['1']
    }
</script>
