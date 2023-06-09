<template>
    <div class="flex items-center justify-center w-[100%] shadow-sm bg-white/5 backdrop-blur-sm h-[102px] ">
        <div class="flex h-[100%] w-[1400px] items-center justify-between">
            <div class="flex items-center">
                <img 
                    :class="{
                        'h-[20px]': isMobile,
                        'w-[66px]': isMobile,
                    }"
                    src="~/assets/images/ipi_logo_1.svg"

                >
                <img 
                    :class="{
                        'h-[20px]': isMobile,
                        'w-[66px]': isMobile,
                    }"
                    class="max-h-[43px] ml-[11px]" 
                    src="~/assets/images/ipi_logo.svg"

                >
            </div>
            <div>
                <ul class="flex items-center justify-between w-[395px]">
                    <a href="/" class="text-white text-[15px] font-['Barlow'] font-[600]">Platform</a>
                    <a href="/" class="text-white text-[15px] font-['Barlow'] font-[600]">Coins</a>
                    <a href="/" class="text-white text-[15px] font-['Barlow'] font-[600]">Roadmap</a>
                    <a href="/" class="text-white text-[15px] font-['Barlow'] font-[600]">FAQ</a>
                    <a href="/" class="text-white text-[15px] font-['Barlow'] font-[600]">Contacts</a>
                </ul>
            </div>
            <div>
                <ul class="flex items-center justify-between w-[255px]">
                    <img src="../../assets/icons/Footer/ico-twitter.svg" alt="ico" class="cursor-pointer">
                    <img src="../../assets/icons/Footer/ico-M.svg" alt="ico" class="cursor-pointer">
                    <img src="../../assets/icons/Footer/ico-facebook.svg" alt="ico" class="cursor-pointer">
                    <img src="../../assets/icons/Footer/ico-tube.svg" alt="ico" class="cursor-pointer">
                    <img src="../../assets/icons/Footer/ico-bit.svg" alt="ico" class="cursor-pointer">
                    <img src="../../assets/icons/Footer/ico-hub.svg" alt="ico" class="cursor-pointer">
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>