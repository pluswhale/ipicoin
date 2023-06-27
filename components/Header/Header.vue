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
        max-[450px]:fixed max-[450px]:top-[0] max-[450px]:left-[0] max-[450px]:h-[43px] max-[450px]:pl-[16px] max-[450px]:pr-[16px] 
        max-[1450px]:fixed max-[1450px]:top-[0] max-[1450px]:left-[0] max-[1450px]:h-[72px] max-[1450px]:"
    >
            <div class="flex w-[1400px] justify-between items-center max-[1450px]:w-[900px]">
                <div class="flex items-center max-[450px]:h-[20px] max-[450px]:w-[66px] max-[1450px]:h-[30px] max-[1450px]:w-[100px]">
                    <!-- <img  class="max-[1420px]:h-[20px] max-[1420px]:w-[66px]" src="~/assets/images/ipi_logo_1.svg"> -->
                    <img class="max-h-[43px] ml-[11px] max-[450]:ml-[1px] " src="~/assets/images/ipi_logo.svg">
                </div>
                <nav class="flex justify-between translate-x-[-30px] min-w-[395px] max-[450px]:hidden max-[1450px]:flex max-[1450px]:min-w-[313px] max-[1450px]:translate-x-[15px]">
                    <ul class="flex gap-[1.85rem]">
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow'] max-[1450px]:text-[12px]" to="#platform">Platform</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow'] max-[1450px]:text-[12px]" to="/">Coins</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow'] max-[1450px]:text-[12px]" to="/">Roadmap</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow'] max-[1450px]:text-[12px]" to="/">FAQ</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow'] max-[1450px]:text-[12px]" to="/">Contacts</NuxtLink></li>
                    </ul>
                </nav>

                <button 
                    class="flex pr-[10px] pl-[10px] rounded-[20px] border-[2px] 
                    items-center h-44px translate-x-[10px] justify-center transition-all border-[#EC474E]  
                    font-['Barlow sans-serif'] hover:bg-[#EC474E]
                    max-[450px]:rounded-[8px] 
                    max-[450px]:pl-[10px] 
                    max-[450px]:pr-[10px] 
                    max-[450px]:border-[1px]
                    max-[450px]:h-[25px] 
                    max-[450px]:p-[0] 
                    max-[450px]:translate-x-[-6px]
                    button_coin

                    max-[1450px]:rounded-[14px]
                    max-[1450px]:pl-[8px]
                    max-[1450px]:pr-[8px]
                    max-[1450px]:h-[30px]
                    max-[1450px]:translate-x-[-6px]
                    "
                >
                    <span class="font-[500] text-[16px] uppercase whitespace-nowrap text-white font-['Inter'] mr-[5px] max-[450px]:text-[10px]  max-[1450px]:text-[10px]">
                        Follow the ipicoin
                    </span>
                    <img class="no_hover_arrow max-[450px]:w-[20px]" src="~/assets/icons/arrow-right.svg" />
                    <img class="hover_arrow max-[450px]:w-[20px]" src="~/assets/images/IpiScan/arrow-right.png" />
                </button>

                <img  @click="handleOpenBurger" src="~/assets/icons/mobile/burger_menu.svg" class="relative z-[6] hidden  max-[450px]:block  max-[1450px]:hidden"/>
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

