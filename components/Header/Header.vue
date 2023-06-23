<script setup>
const { isMobile, isTablet } = useDevice();

const stateMenu = reactive({ toDialogOpenIPI: false })

const handleOpenBurger = () => {
    stateMenu.toOpenBurger = !stateMenu.toOpenBurger
}

</script>

<template>
    <header 
        class="flex w-screen justify-center items-center shadow-sm bg-white/5 backdrop-blur-sm z-[1000]"
        :class="{
            'h-[43px]': isMobile || isTablet,
            'h-[93px]': !isMobile && !isTablet,
            'pl-[16px]': isMobile || isTablet,
            'pr-[16px]': isMobile || isTablet,
            'fixed': isMobile || isTablet,
            'relative': !isMobile && !isTablet,
            'top-[0]': isMobile || isTablet,
            'left-[0]': isMobile || isTablet,
        }"
    >
            <div class="flex w-[1400px] justify-between items-center">
                <div class="flex items-center">
                    <img 
                        :class="{
                            'hidden' : isMobile || isTablet,
                            'h-[20px]': isMobile || isTablet,
                            'w-[66px]': isMobile || isTablet,
                        }"
                        src="~/assets/images/ipi_logo_1.svg"
    
                    >
                    <img 
                        :class="{
                            'ml-[1px]': isMobile || isTablet, 
                            'h-[20px]': isMobile || isTablet,
                            'w-[66px]': isMobile || isTablet,
                        }"
                        class="max-h-[43px] ml-[11px]" 
                        src="~/assets/images/ipi_logo.svg"
    
                    >
                </div>
                <nav v-show="!isMobile || !isTablet" class="flex justify-between  translate-x-[-30px] min-w-[395px] ">
                    <ul class="flex gap-[1.85rem]">
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow']" to="#platform">Platform</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow']" to="/">Coins</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow']" to="/">Roadmap</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow']" to="/">FAQ</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[15px] text-white font-[500] font-['Barlow']" to="/">Contacts</NuxtLink></li>
                    </ul>
                </nav>

                <button 
                    class="flex pr-[10px] pl-[10px] items-center justify-center transition-all border-[#EC474E]  font-['Barlow sans-serif'] hover:bg-[#EC474E] button_coin"
                    :class="{
                        'rounded-[20px]': !isMobile || !isTablet,
                        'rounded-[8px]': isMobile || isTablet,
                        'pl-[10px]': isMobile || isTablet,
                        'pr-[10px]': isMobile || isTablet,
                        'border-[2px]': !isMobile && !isTablet,
                        'border-[1px]': isMobile || isTablet,
                        'h-[25px]': isMobile || isTablet,
                        'h-44px': !isMobile || !isTablet,
                        'p-[0]': isMobile || isTablet ,
                        'translate-x-[10px]': !isMobile && !isTablet,
                        'translate-x-[-6px]': isMobile || isTablet,
                    }"
                >
                    <span class=" font-[500] uppercase whitespace-nowrap text-white font-['Inter'] mr-[5px]"
                        :class="{
                            'text-[10px]': isMobile || isTablet,
                            'text-[16px]': !isMobile && !isTablet,
                        }">Follow the ipicoin</span>
                    <img :class="{'w-[20px]': isMobile || isTablet}" src="~/assets/icons/arrow-right.svg" class="no_hover_arrow"/>
                    <img :class="{'w-[20px]': isMobile || isTablet}" src="~/assets/images/IpiScan/arrow-right.png" class="hover_arrow"/>
                </button>

                <img v-show="isMobile || isTablet" @click="handleOpenBurger" src="~/assets/icons/mobile/burger_menu.svg" class="relative z-[6]"/>
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

