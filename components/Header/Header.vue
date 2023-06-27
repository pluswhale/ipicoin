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
        xl:fixed xl:top-[0] xl:left-[0] xl:h-[43px] xl:pl-[16px] xl:pr-[16px] "
    >
            <div class="flex w-[1400px] justify-between items-center">
                <div class="flex items-center  xl:h-[20px] xl:w-[66px]">
                    <!-- <img  class="xl:h-[20px] xl:w-[66px]" src="~/assets/images/ipi_logo_1.svg"> -->
                    <img class="max-h-[43px] ml-[11px] xl:ml-[1px] " src="~/assets/images/ipi_logo.svg">
                </div>
                <nav class="flex justify-between translate-x-[-30px] min-w-[395px] xl:hidden ">
                    <ul class="flex gap-[1.85rem]">
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow']" to="#platform">Platform</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow']" to="/">Coins</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow']" to="/">Roadmap</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow']" to="/">FAQ</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow']" to="/">Contacts</NuxtLink></li>
                    </ul>
                </nav>

                <button 
                    class="flex pr-[10px] pl-[10px] rounded-[20px] border-[2px] 
                    items-center h-44px translate-x-[10px] justify-center transition-all border-[#EC474E]  
                    font-['Barlow sans-serif'] hover:bg-[#EC474E]
                    xl:rounded-[8px] 
                    xl:pl-[10px] 
                    xl:pr-[10px] 
                    xl:border-[1px]
                    xl:h-[25px] 
                    xl:p-[0] 
                    xl:translate-x-[-6px]
                    button_coin
                    "
                >
                    <span class=" font-[500] text-[16px] uppercase whitespace-nowrap text-white font-['Inter'] mr-[5px] xl:text-[10px]">
                        Follow the ipicoin
                    </span>
                    <img class="no_hover_arrow xl:w-[20px]" src="~/assets/icons/arrow-right.svg" />
                    <img class="hover_arrow xl:w-[20px]" src="~/assets/images/IpiScan/arrow-right.png" />
                </button>

                <img  @click="handleOpenBurger" src="~/assets/icons/mobile/burger_menu.svg" class="relative z-[6] hidden  xl:block"/>
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

