<script setup>
import { reactive } from 'vue';

import { useMediaQuery } from '@vueuse/core';

const isMobile = useMediaQuery('(max-width: 480px)');

const state = reactive({ block: [0], count: 1 })


function increment(block) {
    state.block.push(block)
};


const blockQueueInterval = setInterval(() => {
    increment(state.count);
    state.count++;
    if (state.block.length >= 16) {
        clearInterval(blockQueueInterval);
    };
}, 1000);

</script>

<template>
    <div class="flex flex-wrap ml-[0]">
        <div class="flex flex-col" :class="{'mt-[72px] ': !isMobile,'mt-[10px]': isMobile, 'max-w-[480px]':isMobile,'mx-[30%]': isMobile, }"><!-- Показать Eгору -->
            <!-- main title block-->
            <!--first text block-->
            <div v-if="state.block.length <= 4" class="flex flex-col" :class="{'w-[570px]':!isMobile ,'max-w-[210px]': isMobile,'h-[414px]':!isMobile ,'h-[188px]': isMobile,}">
                <div v-if="state.block.includes(0) " class="flex items-center" :class="{'mb-[20px]':isMobile}">
                    <span class="text-[#EC474E] first_letter" :class="{'text-[88px]':!isMobile,'text-[48px]':isMobile,'font-[600]':!isMobile,'font-[500]':isMobile,
                    'h-[136px]':!isMobile,'h-[44px]':isMobile,'translate-y-[-15px]':isMobile}">I</span>
                    <span class="font-[500] text-white leading-[60px] uppercase mt-[12px] typing_without_caret" :class="{'text-[60px]':!isMobile,
                    'text-[30px]':isMobile,}">ndependent</span>
                </div>
                <div v-if="state.block.includes(1)" class="flex items-center translate-y-[-41px]" :class="{'mb-[20px]':isMobile}">
                    <span class="text-[#EC474E] first_letter" :class="{'text-[88px]':!isMobile,'text-[48px]':isMobile,'font-[600]':!isMobile,'font-[500]':isMobile,
                    'h-[136px]':!isMobile,'h-[44px]':isMobile,'translate-y-[-15px]':isMobile}">P</span>
                    <span class="font-[500] text-white leading-[60px] uppercase mt-[12px] typing_without_caret" :class="{'text-[60px]':!isMobile,
                    'text-[30px]':isMobile,}">rotocol</span>
                </div>
                <div v-if="state.block.includes(2)" class="flex items-center translate-y-[-81px]" :class="{'mb-[20px]':isMobile}">
                    <span class="text-[#EC474E] first_letter" :class="{'text-[88px]':!isMobile,'text-[48px]':isMobile,'font-[600]':!isMobile,'font-[500]':isMobile,
                    'h-[136px]':!isMobile,'h-[44px]':isMobile,'translate-y-[-15px]':isMobile}">I</span>
                    <span class="font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_with_caret" :class="{'text-[60px]':!isMobile,
                    'text-[30px]':isMobile,}">nfrastructure</span>
                </div>
                <span v-if="state.block.includes(3)" class="text-[#EC474E] font-[500] font-['Big_Shoulders_Stencil_Text']" :class="{'text-[43px]':!isMobile,'text-[25px]':isMobile,'translate-y-[-100px]':!isMobile,'translate-y-[-110px]':isMobile,}">coin</span>
            </div>
            <!--first text block-->

            <!--second text block-->
            <div v-if="state.block.length > 4 && state.block.length <= 8 " class="flex flex-col" :class="{'w-[570px]':!isMobile ,'max-w-[210px]': isMobile,'h-[414px]':!isMobile ,'h-[188px]': isMobile,}">
                <div v-if="state.block.includes(4) " class="flex items-center" :class="{'mb-[20px]':isMobile}">
                    <span class="text-[#EC474E] first_letter" :class="{'text-[88px]':!isMobile,'text-[48px]':isMobile,'font-[600]':!isMobile,'font-[500]':isMobile,
                    'h-[136px]':!isMobile,'h-[44px]':isMobile,'translate-y-[-15px]':isMobile}">I</span>
                    <span class="font-[500]  text-white leading-[60px] uppercase mt-[12px] typing_without_caret" :class="{'text-[60px]':!isMobile,
                    'text-[30px]':isMobile,}">nnovative</span>
                </div>
                <div v-if="state.block.includes(5)" class="flex items-center translate-y-[-41px]" :class="{'mb-[20px]':isMobile}">
                    <span class="text-[#EC474E] first_letter" :class="{'text-[88px]':!isMobile,'text-[48px]':isMobile,'font-[600]':!isMobile,'font-[500]':isMobile,
                    'h-[136px]':!isMobile,'h-[44px]':isMobile,'translate-y-[-15px]':isMobile}">P</span>
                    <span class="font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_without_caret" :class="{'text-[60px]':!isMobile,
                    'text-[30px]':isMobile,}">ayment</span>
                </div>
                <div v-if="state.block.includes(6)" class="flex items-center translate-y-[-81px]" :class="{'mb-[20px]':isMobile}">
                    <span class="text-[#EC474E] first_letter" :class="{'text-[88px]':!isMobile,'text-[48px]':isMobile,'font-[600]':!isMobile,'font-[500]':isMobile,
                    'h-[136px]':!isMobile,'h-[44px]':isMobile,'translate-y-[-15px]':isMobile}">I</span>
                    <span class="font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_with_caret" :class="{'text-[60px]':!isMobile,
                    'text-[30px]':isMobile,}">nfrastructure</span>
                </div>
                <span v-if="state.block.includes(7)" class="text-[#EC474E] font-[500] font-['Big_Shoulders_Stencil_Text']" :class="{'text-[43px]':!isMobile,'text-[25px]':isMobile,'translate-y-[-100px]':!isMobile,'translate-y-[-110px]':isMobile,}">coin</span>
            </div>
            <!--second text block-->

            <!--third text block-->
            <div v-if="state.block.length > 8 && state.block.length <= 12 " class="flex flex-col" :class="{'w-[570px]':!isMobile ,'max-w-[210px]': isMobile,'h-[414px]':!isMobile ,'h-[188px]': isMobile,}">
                <div v-if="state.block.includes(8) " class="flex items-center" :class="{'mb-[20px]':isMobile}">
                    <span class="text-[#EC474E] first_letter" :class="{'text-[88px]':!isMobile,'text-[48px]':isMobile,'font-[600]':!isMobile,'font-[500]':isMobile,
                    'h-[136px]':!isMobile,'h-[44px]':isMobile,'translate-y-[-15px]':isMobile}">I</span>
                    <span class="font-[500]  text-white leading-[60px] uppercase mt-[12px] typing_without_caret" :class="{'text-[60px]':!isMobile,
                    'text-[30px]':isMobile,}">ntegrated</span>
                </div>
                <div v-if="state.block.includes(9)" class="flex items-center translate-y-[-41px]" :class="{'mb-[20px]':isMobile}">
                    <span class="text-[#EC474E] first_letter" :class="{'text-[88px]':!isMobile,'text-[48px]':isMobile,'font-[600]':!isMobile,'font-[500]':isMobile,
                    'h-[136px]':!isMobile,'h-[44px]':isMobile,'translate-y-[-15px]':isMobile}">P</span>
                    <span class="font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_without_caret" :class="{'text-[60px]':!isMobile,
                    'text-[30px]':isMobile,}">latform</span>
                </div>
                <div v-if="state.block.includes(10)" class="flex items-center translate-y-[-81px]" :class="{'mb-[20px]':isMobile}">
                    <span class="text-[#EC474E] first_letter" :class="{'text-[88px]':!isMobile,'text-[48px]':isMobile,'font-[600]':!isMobile,'font-[500]':isMobile,
                    'h-[136px]':!isMobile,'h-[44px]':isMobile,'translate-y-[-15px]':isMobile}">I</span>
                    <span class="font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_with_caret" :class="{'text-[60px]':!isMobile,
                    'text-[30px]':isMobile,}">nfrastructure</span>
                </div>
                <span v-if="state.block.includes(11)" class="text-[#EC474E] font-[500] font-['Big_Shoulders_Stencil_Text']" :class="{'text-[43px]':!isMobile,'text-[25px]':isMobile,'translate-y-[-100px]':!isMobile,'translate-y-[-110px]':isMobile,}">coin</span>
            </div>
            <!--third text block-->
          
            <!--third text block-->
            <div v-if="state.block.length > 12 && state.block.length <= 16 " class="flex flex-col" :class="{'w-[570px]':!isMobile ,'max-w-[210px]': isMobile,'h-[414px]':!isMobile ,'h-[188px]': isMobile,}">
                <div v-if="state.block.includes(12) " class="flex items-center" :class="{'mb-[20px]':isMobile}">
                    <span class="text-[#EC474E] first_letter" :class="{'text-[88px]':!isMobile,'text-[48px]':isMobile,'font-[600]':!isMobile,'font-[500]':isMobile,
                    'h-[136px]':!isMobile,'h-[44px]':isMobile,'translate-y-[-15px]':isMobile}">I</span>
                    <span class="font-[500] text-white leading-[60px] uppercase mt-[12px] typing_without_caret" :class="{'text-[60px]':!isMobile,'text-[30px]':isMobile,}">nclusive</span>
                </div>
                <div v-if="state.block.includes(13)" class="flex items-center translate-y-[-41px]" :class="{'mb-[20px]':isMobile}">
                    <span class="text-[#EC474E] first_letter" :class="{'text-[88px]':!isMobile,'text-[48px]':isMobile,'font-[600]':!isMobile,'font-[500]':isMobile,'h-[136px]':!isMobile,'h-[44px]':isMobile, 'translate-y-[-15px]':isMobile}">P</span>
                    <span class="font-[500] text-white leading-[60px] uppercase mt-[12px] typing_without_caret" :class="{'text-[60px]':!isMobile,'text-[30px]':isMobile,}">ayment</span>
                </div>
                <div v-if="state.block.includes(14)" class="flex items-center translate-y-[-81px]" :class="{'mb-[20px]':isMobile}">
                    <span class="text-[#EC474E] first_letter"   :class="{'text-[88px]':!isMobile,'text-[48px]':isMobile,'font-[600]':!isMobile,'font-[500]':isMobile,'h-[136px]':!isMobile,'h-[44px]':isMobile,'translate-y-[-15px]':isMobile}">I</span>
                    <span class="font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_with_caret" :class="{'text-[60px]':!isMobile,'text-[30px]':isMobile,}">nfrastructure</span>
                </div>
                <span v-if="state.block.includes(15)" class="text-[#EC474E] font-[500] font-['Big_Shoulders_Stencil_Text'] translate-y-[-100px]" :class="{'text-[43px]':!isMobile,'text-[25px]':isMobile,'translate-y-[-100px]':!isMobile,'translate-y-[-110px]':isMobile,}">coin</span>
            </div>
            <!--third text block-->


            <!-- download apps block-->
            <div class="flex items-center mt-[77px] gap-[20px] translate-y-[-50px] translate-x-[-5px]" :class="{'hidden':isMobile}">

             <!--    <img src="../../../../assets/images/mainpage/test_bg_2.png" alt="">
                <img src="../../../../assets/images/mainpage/Button_Gplay.png" alt=""> -->

                <div class="flex flex-row items-center justify-center w-[217px] h-[65px] border-[2px] border-[#EC474E] rounded-[20px] hover:bg-[#EC474E] cursor-pointer">
                    <div class="flex pl-[10px] gap-[20px]">
                        <img src="~/assets/icons/apple_icon.svg" class="translate-y-[-4px] translate-x-[0px]"/>
                        <div class="flex flex-col">
                            <span class="text-white whitespace-nowrap font-[400] font-['Lato'] text-[15px] translate-y-[-3px] translate-x-[-9px] IOS_text">Download on the</span>
                            <span class="text-white whitespace-nowrap font-[600] font-['Lato'] text-[22px] translate-y-[-3px] translate-x-[-11px] IOS_title">App Store</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-row items-center w-[217px] justify-center h-[65px] border-[2px] border-[#EC474E] rounded-[20px] hover:bg-[#EC474E] cursor-pointer">
                    <div class="flex pl-[10px] gap-[20px]">
                        <img src="~/assets/icons/playmarket_icon.svg" class="translate-y-[0px] translate-x-[3px]"/>
                        <div class="flex flex-col">
                            <span  class="text-white whitespace-nowrap font-[400] font-['Montserrat'] text-[14px] translate-y-[3px] translate-x-[-9px] uppercase ">Get It On </span>
                            <span class="text-white whitespace-nowrap font-[600] font-['Montserrat'] text-[23px] translate-y-[-3px] translate-x-[-9px]">Google Play</span>
                        </div>
                    </div>
                </div>
            </div> 
            <!-- download apps block-->
        </div>
    </div>

</template>

<style lang="scss" scoped>

.IOS_title{
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 31px;
    line-height: 26px;
}

.IOS_text{
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
}

.first_letter {
    font-family: 'Big Shoulders Stencil Text';
}


.typing_with_caret,
.typing_without_caret {
  display: inline-block;
  -webkit-animation: type 1s steps(50, end);
  animation: type 1s steps(50, end);
  color: #fff;
  font-family: 'Big Shoulders Stencil Text';
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 3px solid rgb(255, 255, 255); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
}

.typing_with_caret {
      animation: 
    typing 1s steps(30, end),
    blink-caret 1s step-end infinite;
}
.typing_without_caret {
      animation: 
    typing 1s steps(30, end),
    blink-caret_off_end 1s step-end;
    border-color: transparent;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 50% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 255, 255) }
}

@keyframes blink-caret_off_end {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 255, 255) }
  100% {
    border-color: transparent;
    border-right: none;
  }
}

</style>