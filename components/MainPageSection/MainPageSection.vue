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
        class="flex h-[582px] max-w-[1424px] mx-auto my-0 justify-between relative z-0
        max-[450px]:h-auto max-[450px]:mt-[30px] max-[450px]:max-w-[480px] max-[450px]:flex-col
        max-[1450px]:h-[550px] max-[1450px]:w-[900px] max-[1450px]:mt-[100px] max-[1450px]:justify-between"
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

</script>

<style lang="scss" scoped>

</style>