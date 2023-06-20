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
        class="flex flex-col max-w-[480px] mx-auto my-0 justify-between relative z-[-1]">
        <TitleAndAppsDownload/>
        <SwapWallet/>
    </div>
</template>

<script setup>

import TitleAndAppsDownload from './elements/TitleAndAppsDownload/TitleAndAppsDownload.vue'
import SwapWallet from './elements/SwapWallet/SwapWallet.vue'

</script>

<style lang="scss" scoped>

</style>