<script setup>
const {  isTablet } = useDevice();
const stateMenu = reactive({ toDialogOpenIPI: false })

const handleOpenBurger = () => {
    stateMenu.toOpenBurger = !stateMenu.toOpenBurger
}

</script>

<template>
    <header 
        class="flex w-screen h-[93px] relative justify-center items-center shadow-sm bg-white/5 backdrop-blur-sm z-[1000] 
        sm:fixed sm:top-[0] sm:left-[0] sm:h-[43px] sm:pl-[16px] sm:pr-[16px] 
        xl:fixed xl:top-[0] xl:left-[0] xl:h-[72px]
        md:fixed md:top-[0] md:left-[0] md:h-[40px]"
    >
            <div class="flex w-[1400px] justify-between items-center xl:w-[900px] md:w-[560px]">
                <div class="flex items-center sm:h-[20px] sm:w-[66px] xl:h-[30px] xl:w-[100px] md:h-[20px] md:w-[66px]">
                    <!-- <img  class="max-[1420px]:h-[20px] max-[1420px]:w-[66px]" src="~/assets/images/ipi_logo_1.svg"> -->
                    <img class="max-h-[43px] ml-[11px] max-[450]:ml-[1px] " src="~/assets/images/ipi_logo.svg">
                </div>
                <nav class="flex justify-between translate-x-[-30px] min-w-[395px] sm:hidden md:hidden xl:flex xl:min-w-[313px] xl:translate-x-[15px]">
                    <ul class="flex gap-[1.85rem]">
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow'] xl:text-[12px]" to="/">IPI Scan</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow'] xl:text-[12px]" to="/">Advantages</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow'] xl:text-[12px]" to="/">Ecosystem</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow'] xl:text-[12px]" to="#platform">Platform</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow'] xl:text-[12px]" to="/">FAQ</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow'] xl:text-[12px]" to="/">Contacts</NuxtLink></li>
                    </ul>
                </nav>

                <button 
                    class="flex pr-[10px] pl-[10px] rounded-[20px] border-[2px] 
                    items-center h-44px translate-x-[10px] justify-center transition-all border-[#EC474E]  
                    font-['Barlow sans-serif'] hover:bg-[#EC474E]
                    sm:rounded-[8px] 
                    sm:pl-[10px] 
                    sm:pr-[10px] 
                    sm:border-[1px]
                    sm:h-[25px] 
                    sm:p-[0] 
                    sm:translate-x-[-6px]
                    button_coin

                    xl:rounded-[14px]
                    xl:pl-[9px]
                    xl:pr-[7px]
                    xl:h-[30px]
                    xl:translate-x-[-6px]

                    md:rounded-[6px]
                    md:pl-[5px]
                    md:pr-[7px]
                    md:py-[2px]
                    md:h-[20px]
                    md:border-[1px]
                    "
                >
                    <span class="font-[500] text-[16px] uppercase whitespace-nowrap text-white font-['Inter'] mr-[5px] sm:text-[10px] xl:text-[10px] md:text-[8px]">
                        Follow the ipicoin
                    </span>
                    <img class="no_hover_arrow xl:w-[24px] sm:w-[20px] md:w-[17px]" src="~/assets/icons/arrow-right.svg"/>
                    <img class="hover_arrow xl:w-[24px] sm:w-[20px] md-[17px]" src="~/assets/images/IpiScan/arrow-right.png" />
                </button>

                <img  @click="handleOpenBurger" src="~/assets/icons/mobile/burger_menu.svg" class="relative z-[6] hidden  sm:block md:block xl:hidden"/>
                    <div v-if="stateMenu.toOpenBurger" class="flex flex-col items-center absolute w-full left-[0] top-[0px] h-screen bg-[#1C0D30]">
                        <div class="flex flex-col items-center h-[615px]">

                            <div class="flex items-center gap-[15px] mt-[46px] mb-[40px]">
                                <img src="~/assets/icons/mobile/burger/img_logo1.png" alt="">
                                <img src="~/assets/icons/mobile/burger/img_logo2.png" alt="" class="mt-[5px]">
                            </div>

                            <div class="flex flex-col gap-[25px]">
                                <p class="text-[16px] text-white font-[600] font-['Inter'] uppercase text-center">IPI Scan</p>
                                <p class="text-[16px] text-white font-[600] font-['Inter'] uppercase text-center">Advantages</p>
                                <p class="text-[16px] text-white font-[600] font-['Inter'] uppercase text-center">Ecosystem</p>
                                <p class="text-[16px] text-white font-[600] font-['Inter'] uppercase text-center">platform</p>
                                <p class="text-[16px] text-white font-[600] font-['Inter'] uppercase text-center">FAQ</p>
                                <p class="text-[16px] text-white font-[600] font-['Inter'] uppercase text-center">Contacts</p>
                            </div>

                            <button class="flex justify-center items-center w-[228px] h-[43px] border-[2px] border-[#EC474E] rounded-[20px] mt-[45px]">
                                <p class="text-[13px] text-white font-[600] font-['Inter'] uppercase text-center mr-[5px]">Follow the iPIcoin</p>
                                <img src="~/assets/icons/arrow-right.svg">
                            </button>
                        </div>
                    </div>
            </div>
    </header>
</template>

<style lang="scss" scoped>

.button_coin:hover{
    .hover_arrow{
        display: block;
    }

    .no_hover_arrow{
        display: none;
    }
}
.hover_arrow{
    display: none;
}
</style>

