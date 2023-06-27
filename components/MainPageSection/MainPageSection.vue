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
        sm:h-auto sm:mt-[30px] sm:max-w-[550px] sm:flex-col sm:justify-center sm:items-center sm:w-screen
        xl:h-[550px] xl:w-[900px] xl:mt-[100px] xl:justify-between
        md:h-[500px] md:w-[560px] md:mt-[47px] md:justify-between " 
        >
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