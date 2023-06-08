<script setup>
import { reactive } from 'vue'

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




// setTimeout(() => {
//     increment(1)
//     setTimeout(() => {
//         increment(2)
//         setTimeout(() => {
//             increment(3)
//         }, 1000)
//     }, 1000)
// }, 1000);

//Instant Protocol Integration 
//Innovative Payment Infrastructure
 //Integrated Platform Interface
//Inclusive Payment Infrastructure

</script>



<template>
    <div class="flex flex-wrap ml-[0]">
        <div class="flex mt-[72px] flex-col">
            <!-- main title block-->

            <!--first text block-->
            <div v-if="state.block.length <= 4" class="flex flex-col h-[414px] w-[970px]">
                <div v-if="state.block.includes(0) " class="flex items-center">
                    <span class="text-[#EC474E] text-[88px] font-[600] first_letter h-[136px] ">I</span>
                    <span class="text-[60px] font-[500]  text-white leading-[60px] uppercase mt-[12px] typing_without_caret ">ndependent</span>
                </div>
                <div v-if="state.block.includes(1)" class="flex items-center translate-y-[-41px]">
                    <span class="text-[#EC474E] text-[88px] font-[600] first_letter ">P</span>
                    <span class="text-[60px] font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_without_caret ">rotocol</span>
                </div>
                <div v-if="state.block.includes(2)" class="flex items-center translate-y-[-81px]">
                    <span class="text-[#EC474E] text-[88px] font-[600] first_letter ">I</span>
                    <span class="text-[60px] font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_with_caret">nfrastructure</span>
                </div>
                <span v-if="state.block.includes(3)" class="text-[#EC474E] font-[500] font-['Quicksand'] text-[43px] translate-y-[-100px]" >coin</span>
            </div>
            <!--first text block-->

            <!--second text block-->
            <div v-if="state.block.length > 4 && state.block.length <= 8 " class="flex flex-col h-[414px] w-[970px]">
                <div v-if="state.block.includes(4) " class="flex items-center">
                    <span class="text-[#EC474E] text-[88px] font-[600] first_letter h-[136px] ">I</span>
                    <span class="text-[60px] font-[500]  text-white leading-[60px] uppercase mt-[12px] typing_without_caret ">nnovative</span>
                </div>
                <div v-if="state.block.includes(5)" class="flex items-center translate-y-[-41px]">
                    <span class="text-[#EC474E] text-[88px] font-[600] first_letter ">P</span>
                    <span class="text-[60px] font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_without_caret ">ayment</span>
                </div>
                <div v-if="state.block.includes(6)" class="flex items-center translate-y-[-81px]">
                    <span class="text-[#EC474E] text-[88px] font-[600] first_letter ">I</span>
                    <span class="text-[60px] font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_with_caret">nfrastructure</span>
                </div>
                <span v-if="state.block.includes(7)" class="text-[#EC474E] font-[500] font-['Quicksand'] text-[43px] translate-y-[-100px]" >coin</span>
            </div>
            <!--second text block-->

            <!--third text block-->
            <div v-if="state.block.length > 8 && state.block.length <= 12 " class="flex flex-col h-[414px] w-[970px]">
                <div v-if="state.block.includes(8) " class="flex items-center">
                    <span class="text-[#EC474E] text-[88px] font-[600] first_letter h-[136px] ">I</span>
                    <span class="text-[60px] font-[500]  text-white leading-[60px] uppercase mt-[12px] typing_without_caret ">ntegrated</span>
                </div>
                <div v-if="state.block.includes(9)" class="flex items-center translate-y-[-41px]">
                    <span class="text-[#EC474E] text-[88px] font-[600] first_letter ">P</span>
                    <span class="text-[60px] font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_without_caret ">latform</span>
                </div>
                <div v-if="state.block.includes(10)" class="flex items-center translate-y-[-81px]">
                    <span class="text-[#EC474E] text-[88px] font-[600] first_letter ">I</span>
                    <span class="text-[60px] font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_with_caret">nfrastructure</span>
                </div>
                <span v-if="state.block.includes(11)" class="text-[#EC474E] font-[500] font-['Quicksand'] text-[43px] translate-y-[-100px]" >coin</span>
            </div>
            <!--third text block-->

            <!--third text block-->
            <div v-if="state.block.length > 12 && state.block.length <= 16 " class="flex flex-col h-[414px] w-[970px]">
                <div v-if="state.block.includes(12) " class="flex items-center">
                    <span class="text-[#EC474E] text-[88px] font-[600] first_letter h-[136px] ">I</span>
                    <span class="text-[60px] font-[500]  text-white leading-[60px] uppercase mt-[12px] typing_without_caret ">nclusive</span>
                </div>
                <div v-if="state.block.includes(13)" class="flex items-center translate-y-[-41px]">
                    <span class="text-[#EC474E] text-[88px] font-[600] first_letter ">P</span>
                    <span class="text-[60px] font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_without_caret ">ayment</span>
                </div>
                <div v-if="state.block.includes(14)" class="flex items-center translate-y-[-81px]">
                    <span class="text-[#EC474E] text-[88px] font-[600] first_letter ">I</span>
                    <span class="text-[60px] font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_with_caret">nfrastructure</span>
                </div>
                <span v-if="state.block.includes(15)" class="text-[#EC474E] font-[500] font-['Quicksand'] text-[43px] translate-y-[-100px]" >coin</span>
            </div>
            <!--third text block-->


            <!-- download apps block-->
            <div class="flex items-center mt-[77px] gap-[20px] translate-y-[-50px] translate-x-[-5px]">

                <img src="../../../../assets/images/mainpage/test_bg_2.png" alt="">
                <img src="../../../../assets/images/mainpage/Button_Gplay.png" alt="">
              <!--   <div class="flex flex-row items-center w-[217px] h-[65px] border-[2px] border-[#EC474E] rounded-[20px]">
                    <div class="flex pl-[10px] gap-[20px]">
                        <img src="~/assets/icons/apple_icon.svg"/>
                        <div class="flex flex-col">
                            <span class="text-white whitespace-nowrap font-[400] font-['Quicksand'] text-[14px] ">Download on the</span>
                            <span class="text-white whitespace-nowrap font-[500] font-['Quicksand'] text-[22px] ">App Store</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-row items-center w-[217px] h-[65px] border-[2px] border-[#EC474E] rounded-[20px]">
                    <div class="flex pl-[10px] gap-[20px]">
                        <img src="~/assets/icons/playmarket_icon.svg"/>
                        <div class="flex flex-col">
                            <span  class="text-white whitespace-nowrap font-[400] font-['Quicksand'] text-[14px] ">Download on the</span>
                            <span class="text-white whitespace-nowrap font-[500] font-['Quicksand'] text-[22px] ">Google Play</span>
                        </div>
                    </div>
                </div> -->
            </div> 
            <!-- download apps block-->
        </div>
    </div>

</template>

<style lang="scss" scoped>

.first_letter {
    font-family: 'Quicksand', sans-serif;
}


.typing_with_caret,
.typing_without_caret {
  display: inline-block;
  -webkit-animation: type 1s steps(50, end);
  animation: type 1s steps(50, end);
  color: #fff;
  font-family: 'Quicksand', sans-serif;
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