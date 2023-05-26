<template>
    <div class="inline-flex relative z-[2]">
        <img class="absolute top-0 right-0 z-[1]" src="~/assets/images/Planet.svg"/> 
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