<template>
    <div
        v-motion
            :initial="{
                y: 100,
                opacity: 0,
            }"
            :enter="{
                y: 0,
                opacity: 1,
                transition: {
                duration: 1500,
                type: 'keyframes',
                ease: 'easeIn',
                },
        }"        
        class="flex  h-[582px] mx-auto my-0 justify-between "
        :class="{
            'max-w-[1190px]': isThinkLaptop,
            'max-w-[1424px]': !isThinkLaptop,
        }"
        >
        <TitleAndAppsDownload/>
        <DiagramBlock/>
        <SwapWallet/>
    </div>
</template>

<script setup>

import TitleAndAppsDownload from './elements/TitleAndAppsDownload/TitleAndAppsDownload.vue'
import DiagramBlock from './elements/GraphicBlock/GraphicBlock.vue'
import SwapWallet from './elements/SwapWallet/SwapWallet.vue'
import { useMediaQuery } from '@vueuse/core';

const isThinkLaptop = useMediaQuery('(max-width: 1600px)');


</script>

<style lang="scss" scoped>

</style>