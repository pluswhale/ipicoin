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
        max-[1420px]:h-auto max-[1420px]:mt-[30px] max-[1420px]:max-w-[480px] max-[1420px]:flex-col
        "
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