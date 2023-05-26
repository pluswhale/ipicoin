<template>
    <header class="flex h-[94px] justify-center items-center shadow-sm bg-white/5 backdrop-blur-sm">
            <div class="flex w-[1347px] max-w-7xl justify-between">
                <img class="max-h-11" src="~/assets/images/ipi_logo.svg"/>
                <nav class="translate-y-[10px]">
                    <ul class="flex gap-[1.85rem]">
                        <li class="list-none"><NuxtLink class=" text-[17px] text-white font-[600] font-['Barlow']" to="#platform">Platform</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[17px] text-white font-[600] font-['Barlow']" to="/">Coins</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[17px] text-white font-[600] font-['Barlow']" to="/">Roadmap</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[17px] text-white font-[600] font-['Barlow']" to="/">FAQ</NuxtLink></li>
                        <li class="list-none"><NuxtLink class=" text-[17px] text-white font-[600] font-['Barlow']" to="/">Contacts</NuxtLink></li>
                    </ul>
                </nav>
                <button class="flex pl-[16px] pb-[11px] pt-[10px] pr-[13px] h-[44px] items-center justify-center  transition-all border-[2px] border-[#EC474E] rounded-[20px] font-['Barlow sans-serif'] hover:bg-[#EC474E]">
                    <span class="text-[16px] font-[700] uppercase text-white font-['Barlow'] mr-[5px]">Follow the ipicoin</span>
                    <img src="~/assets/icons/arrow-right.svg"/>
                </button>
            </div>
    </header>
</template>

<script setup>

</script>
