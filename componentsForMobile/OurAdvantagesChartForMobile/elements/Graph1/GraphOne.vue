<script setup>
import {dynamicColumnsInTable, generateTextCoinInSwitch, generateIconInSwitch} from './constants';

const switchBlockState = ref(0);

const incrementSwitchBlock = () => {
    if (switchBlockState.value === 6) {
        return
    } else {
        switchBlockState.value++
    }
};

const decrementSwitchBlock = () => {
    if (switchBlockState.value === 0) {
        return
    } else {
        switchBlockState.value--;
    }
};
    
</script>

<template>
    <div 
        class=" w-[343px] h-[630px]" 
    >
            <div
                class="flex w-full flex-col bg-white/10  backdrop-blur-sm rounded-[20px] graph"
             >
                <div class="flex flex-col self-end items-center " >
                    <div class="flex flex-row mt-[27px] justify-between">
                        <div class="flex flex-col items-center mr-[41px]">
                            <span class=" text-white text-[12px] font-[700] font-['Inter'] h-[26px] ">IPI</span>
                            <img class="w-[27px] h-[27px] " src="~/assets/icons/out_advantages/ipi_coin.svg"/>
                        </div>

                        <div class="flex">
                            <img @click="decrementSwitchBlock" class="h-[24px] self-end mr-[18px]"  src="~/assets/icons/mobile/chevron-left.svg"/>                        
                            <div class="flex flex-col items-center">
                                <span class=" text-white text-[12px] font-[700] font-['Inter'] h-[26px] ">{{generateTextCoinInSwitch(switchBlockState)}}</span>
                                <img class="w-[27px] h-[27px]" :src="generateIconInSwitch(switchBlockState)"/>
                            </div>
                            <img @click="incrementSwitchBlock" class="h-[24px] self-end ml-[18px]" src="~/assets/icons/mobile/chevron-right.svg"/>  
                        </div>
                    </div>
                    <span class="h-[2px] w-full bg-white/10 mt-[14px]">&nbsp;</span>
                </div>
                <!--header coins-->

                <!--table of advantages-->
                <div class="grid grid-row-9 grid-cols-3 gap-4">
                    <div class="w-[93px] flex flex-col ">
                        <div class="text-white text-center items-center text-[11px] font-[500] font-['Inter']">
                            Customer support
                        </div>
                        <div class="text-white  text-center items-center text-[11px] font-[500] font-['Inter']">
                            Marketing strategy
                        </div>
                        <div class="text-white text-center items-center text-[11px] font-[500] font-['Inter']">
                            Project financing
                        </div>
                        <div class="text-white text-center items-center text-[11px] font-[500] font-['Inter']">
                            Vulnerability
                        </div>
                        <div class="text-white text-center items-center text-[11px] font-[500] font-['Inter']">
                            Gas prices
                        </div>
                        <div class="text-white text-center items-center text-[11px] font-[500] font-['Inter']">
                            Network separation
                        </div>
                        <div class="text-white text-center items-center text-[11px] font-[500] font-['Inter']">
                            Capitalization
                        </div>
                        <div class="text-white  text-center items-center text-[11px] font-[500] font-['Inter']">
                            Programming Languages
                        </div>
                        <div class="text-white text-center items-center text-[11px] font-[500] font-['Inter']">
                            Team recognition
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class=" text-white text-center text-[11px] font-[500] font-['Inter']">Available</div>
                        <div class=" text-white text-center text-[11px] font-[500] font-['Inter']">&nbsp;</div>
                        <div class=" text-white text-center text-[11px] font-[500] font-['Inter']">Funded</div>
                        <div class=" text-white text-center text-[11px] font-[500] font-['Inter']">Low</div>
                        <div class=" text-white text-center text-[11px] font-[500] font-['Inter']">Low</div>
                        <div class=" text-white text-center text-[11px] font-[500] font-['Inter']">Low risk</div>
                        <div class=" text-white text-center text-[11px] font-[500] font-['Inter']">High</div>
                        <div class=" text-white text-center text-[11px] font-[500] font-['Inter']">java-like</div>
                        <div class=" text-white text-center text-[11px] font-[500] font-['Inter']">Strong</div>
                    </div>
                    <div  class="flex flex-col">
                        <div v-for="value in dynamicColumnsInTable?.[switchBlockState]" class=" text-white text-center text-[11px] font-[500] font-['Inter']">{{ value }}</div>  
                    </div>
                </div>
            </div>
    </div>

</template>

<style lang="scss" scoped>

</style>