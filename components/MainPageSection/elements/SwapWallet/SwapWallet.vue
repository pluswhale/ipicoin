<template>
    <div class="flex flex-col translate-x-[-10px] relative">
        <!-- <img src="~/assets/images/Planet.svg" class="absolute planet"/> -->
        <!--swap card-->
        <div class=" ml-[20px] mt-[119px] bg-white/10 backdrop-blur-sm rounded-[20px]" :class="{'h-[349px]':!isMobile,'h-[254px]':isMobile,
        'w-[471px]':!isMobile,'w-[343px]':isMobile, 'mt-[119px]':!isMobile,'mt-[75px]':isMobile,'px-[50px]':!isMobile, 'px-[25px]':isMobile,'py-[28px]':!isMobile, 'py-[20px]':isMobile,}">
            <div class="flex flex-col w-full">
                <!--header-->
                <div class="flex justify-center items-center gap-[10px]" :class="{'mb-[22px]':!isMobile, 'mb-[12px]':isMobile}">
                    <span class="text-[#749DCA] uppercase font-[700] font-['Quicksand']" :class="{'text-[29px]': !isMobile, 'text-[20px]':isMobile, }">swap</span>
                    <img src="~/assets/icons/swap_header_icon.svg" :class="{'w-[25px]':isMobile, 'h-[28px]':isMobile}"/>
                </div>
                <!--header-->

                <!--inputs-->
                <div class="flex flex-col">
                    <div  class="flex items-center justify-between w-full border-[1px] rounded-[8px] mb-[10px]" :class="{'pr-[30px]':!isMobile,
                    'pr-[17px]':isMobile,'pl-[10px]':!isMobile,'pl-[7px]':isMobile,'py-[5px]':!isMobile,'py-[4px]':isMobile,}">
                        <div class="flex items-center">
                            <span class="text-white font-[500] mr-[10px] mt-[5px] font-['Quicksand']" :class="{'text-[16px]':!isMobile,'text-[12px]':isMobile,}">From</span>
                            <span class="text-[#749DCA] font-[700] uppercase font-['Quicksand']" :class="{'text-[24px]':!isMobile,'text-[17px]':isMobile,}">ipicoin</span>
                        </div>
                       <input type="text" maxlength="10"  placeholder="0" class="outline-none bg-[transparent] text-white font-['Quicksand'] w-[150px] text-right"  :class="{'text-[24px]':!isMobile,'text-[17px]':isMobile, 'font-[700]':!isMobile,'font-[500]':isMobile, 'my-[2px]': isMobile,'translate-y-[0px]':isMobile, 'placeholder:text-[24px]':!isMobile,'placeholder:text-[17px]':isMobile,}">
                    </div>
                    <div class="flex items-center justify-between w-full border-[1px] rounded-[8px]" :class="{'pr-[30px]':!isMobile,
                    'pr-[17px]':isMobile,'pl-[10px]':!isMobile,'pl-[7px]':isMobile,'py-[5px]':!isMobile,'py-[4px]':isMobile,}">
                        <div class="flex items-center relative">
                            <span class="text-white font-[500] mr-[10px] mt-[5px] font-['Quicksand']" :class="{'text-[16px]':!isMobile,'text-[12px]':isMobile,}">To</span>
                            <span class="text-[#749DCA] font-[700] font-['Quicksand'] ml-[20px] uppercase" :class="{'text-[24px]':!isMobile,'text-[17px]':isMobile,}">usd</span>
                            <span class="cursor-pointer"><img @click="handleOpenToDialog" src="../../../../assets/icons/chevron-down.png" alt="" :class="{'w-[20px]':isMobile,'h-[20px]':isMobile, 'ml-[15px]':!isMobile,'ml-[5px]':isMobile}"></span>
                            <div v-if="state.toDialogOpen" class="absolute left-[-10px] top-[40px] bg-white/10 border-[1px] border-[white] backdrop-blur-sm  
                            rounded-[8px]" :class="{'w-[371px]':!isMobile,'w-[294px]':isMobile,}">
                                <span class="text-[#749DCA] font-[700] font-['Quicksand'] ml-[20px] uppercase" 
                                :class="{'text-[24px]':!isMobile,'text-[17px]':isMobile,}">USD</span>
                            </div>
                        </div>
                        <input type="text" maxlength="10" placeholder="0" class="outline-none bg-[transparent] text-white font-['Quicksand'] w-[150px] text-right" :class="{'text-[24px]':!isMobile,'text-[17px]':isMobile, 'font-[700]':!isMobile,'font-[500]':isMobile, 'my-[2px]': isMobile,'translate-y-[0px]':isMobile, 'placeholder:text-[24px]':!isMobile,'placeholder:text-[17px]':isMobile,}" >
                    </div>
                </div> 
                <!--inputs-->

                <!--button connect-->
                <button class="rounded-[20px] justify-center items-center bg-[#EC474E] text-white uppercase" :class="{'h-[46px]':!isMobile,'h-[34px]':isMobile,'text-[21px]':!isMobile,'text-[14px]':isMobile,'font-[700px]':!isMobile,'font-[500]':isMobile,'font-[Barlow]':!isMobile,'font-[Inter]':isMobile,'rounded-[20px]':!isMobile, 'rounded-[8px]':isMobile,'mt-[22px]':!isMobile, 'mt-[16px]':isMobile,}">connect wallet</button>
                <!--button connect-->

                <!--wallets icon -->

                <div class="flex flex-row items-center justify-between" :class="{'w-full':!isMobile, 'w-[61px]':isMobile, 'mt-[35]':!isMobile, 'mt-[15px]':isMobile,}">
                    <img src="~/assets/icons/swap_wallet_binance_icon.svg"/>
                    <img src="~/assets/icons/swap_wallet_google_icon.svg"/>
                    <img src="~/assets/icons/swap_wallet_apple_icon.svg"/>
                    <img src="~/assets/icons/swap_wallet_visa_icon.svg"/>
                    <img src="~/assets/icons/swap_wallet_mc_icon.svg"/>
                </div>

                <!--wallets icon -->

            </div>
        </div>
        <!--swap card-->

        <!--link line-->
        <div class="flex items-center justify-center w-full gap-[30px] ml-[20px]" :class="{'mt-[50px]':!isMobile,'mt-[22px]':isMobile,}">
            <div class="flex items-center">
                <span class=" text-white font-['Inter'] uppercase text-[14.5px] whitespace-nowrap" :class="{'font-[600]':!isMobile, 'font-[400]':isMobile,}">IPI SCANER</span>
                <img src="~/assets/icons/arrow-right.svg"/>
            </div>
            <div class="flex items-center">
                <span class=" text-white font-['Inter'] uppercase whitespace-nowrap text-[14.5px]" :class="{'font-[600]':!isMobile, 'font-[400]':isMobile,}">IPI WALLET</span>
                <img src="~/assets/icons/arrow-right.svg"/>
            </div>
         <!--    <div class="flex items-center">
                <span class="font-[600] text-white font-['SF_Pro_Text'] uppercase text-[14.5px] whitespace-nowrap">ipi scaner</span>
                <img src="~/assets/icons/arrow-right.svg"/>
            </div>
            <div class="flex items-center">
                <span class="font-[600] text-white uppercase font-['SF_Pro_Text'] text-[14.5px] whitespace-nowrap">ipi scaner</span>
                <img src="~/assets/icons/arrow-right.svg"/>
            </div> -->
        </div>

        <div class="flex items-center mt-[77px] gap-[20px] translate-y-[-50px] translate-x-[-5px]" :class="{'mt-[77px]':!isMobile,'mt-[60px]':isMobile,'hidden':!isMobile,'block':isMobile,'translate-x-[-5px]':!isMobile, 'translate-x-[22px]':isMobile}">
            <div class="flex flex-row items-center justify-center border-[2px] border-[#EC474E]  hover:bg-[#EC474E] cursor-pointer"
            :class="{'w-[217px]':!isMobile, 'w-[163px]':isMobile,'h-[65px]':!isMobile, 'h-[49px]':isMobile, 'rounded-[20px]':!isMobile, 'rounded-[10px]':isMobile}">
                <div class="flex pl-[10px] gap-[20px]">
                    <img src="~/assets/icons/apple_icon.svg" class="translate-y-[-4px] translate-x-[0px]" :class="{'w-[30px]':isMobile,}"/>
                    <div class="flex flex-col">
                        <span class="text-white whitespace-nowrap font-[400] font-['Lato'] translate-y-[-3px] translate-x-[-9px] IOS_text"
                        :class="{'text-[14px]':!isMobile, 'text-[12px]':isMobile,}">Download on the</span>
                        <span class="text-white whitespace-nowrap font-[600] font-['Lato']  translate-y-[-3px] translate-x-[-11px] IOS_title"
                        :class="{'text-[23px]':!isMobile, 'text-[15px]':isMobile,}">App Store</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-row items-center justify-center border-[2px] border-[#EC474E] hover:bg-[#EC474E] cursor-pointer"
            :class="{'w-[217px]':!isMobile, 'w-[163px]':isMobile,'h-[65px]':!isMobile, 'h-[49px]':isMobile,'rounded-[20px]':!isMobile, 'rounded-[10px]':isMobile,}">
                <div class="flex pl-[10px] gap-[20px]">
                    <img src="~/assets/icons/playmarket_icon.svg" class="translate-y-[0px] translate-x-[3px]" :class="{'w-[30px]':isMobile,}"/>
                    <div class="flex flex-col">
                        <span class="text-white whitespace-nowrap font-[400] font-['Montserrat'] translate-y-[3px] translate-x-[-9px] uppercase"
                        :class="{'text-[14px]':!isMobile, 'text-[10px]':isMobile,}">Get It On </span>
                        <span class="text-white whitespace-nowrap font-[600] font-['Montserrat'] translate-y-[-3px] translate-x-[-9px]"
                        :class="{'text-[23px]':!isMobile, 'text-[15px]':isMobile,}">Google Play</span>
                    </div>
                </div>
            </div>
        </div> 

    </div>
</template>

<script setup>

import { useMediaQuery } from '@vueuse/core';

const isMobile = useMediaQuery('(max-width: 480px)');

const state = reactive({ toDialogOpen: false })

console.log("state open", state.toDialogOpen);

const handleOpenToDialog = () => {
  state.toDialogOpen = !state.toDialogOpen
}

</script>

<style lang="scss" scoped>

.planet {
    background-blend-mode: color-dodge;
    mix-blend-mode: color-dodge;
}

.quicksand {
    font-family: 'Quicksand' sans-serif;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}

</style>