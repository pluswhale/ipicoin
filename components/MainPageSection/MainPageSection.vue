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
        sm:h-auto sm:mt-[30px] sm:max-w-[480px] sm:flex-col
        xl:h-[550px] xl:w-[900px] xl:mt-[100px] xl:justify-between"
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