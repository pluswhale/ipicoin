<script setup>
const { isMobile } = useDevice();

</script>

<template>
    <header 
        class="flex justify-center items-center shadow-sm bg-white/5 backdrop-blur-sm"
        :class="{
            'h-[43px]': isMobile,
            'h-[93px]': !isMobile,
            'pl-[16px]': isMobile,
            'pr-[16px]': isMobile,
        }"
    >
            <div class="flex w-[1400px] justify-between items-center">
                <div class="flex items-center">
                    <img 
                        :class="{
                            'hidden' : isMobile,
                            'h-[20px]': isMobile,
                            'w-[66px]': isMobile,
                        }"
                        src="~/assets/images/ipi_logo_1.svg"
    
                    >
                    <img 
                        :class="{
                            'ml-[1px]': isMobile, 
                            'h-[20px]': isMobile,
                            'w-[66px]': isMobile,
                        }"
                        class="max-h-[43px] ml-[11px]" 
                        src="~/assets/images/ipi_logo.svg"
    
                    >
                </div>
                <nav v-show="!isMobile" class="flex justify-between  translate-x-[-30px] min-w-[395px] ">
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
                        'rounded-[20px]': !isMobile,
                        'rounded-[8px]': isMobile,
                        'pl-[10px]': isMobile,
                        'pr-[10px]': isMobile,
                        'border-[2px]': !isMobile,
                        'border-[1px]': isMobile,
                        'h-[25px]': isMobile,
                        'h-44px': !isMobile,
                        'p-[0]': isMobile,
                        'translate-x-[10px]': !isMobile,
                        'translate-x-[-6px]': isMobile,
                    }"
                >
                    <span class=" font-[500] uppercase whitespace-nowrap text-white font-['Inter'] mr-[5px]"
                        :class="{
                            'text-[10px]': isMobile,
                            'text-[16px]': !isMobile,
                        }">Follow the ipicoin</span>
                    <img :class="{'w-[20px]': isMobile}" src="~/assets/icons/arrow-right.svg" class="no_hover_arrow"/>
                    <img :class="{'w-[20px]': isMobile}" src="~/assets/images/IpiScan/arrow-right.png" class="hover_arrow"/>
                </button>

                <img v-show="isMobile" src="~/assets/icons/mobile/burger_menu.svg"/>
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

