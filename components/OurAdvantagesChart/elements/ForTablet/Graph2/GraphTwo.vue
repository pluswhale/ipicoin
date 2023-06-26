<script setup>
import {dynamicColumnsInTable, generateTextCoinInSwitch, generateIconInSwitch} from './constants';

const switchBlockState = ref([0,1,2]);

const incrementSwitchBlock = () => {

    console.log("state", switchBlockState.value);

    if (switchBlockState.value[2] === 6) {
        return;
    } else {
        console.log("im here");
        switchBlockState.value = [4,5,6]
    }
};

const decrementSwitchBlock = () => {
    if (switchBlockState.value[0] === 0) {
        return;
    } else {
        switchBlockState.value = [0,1,2]
    }
};
    
</script>

<template>
    <div  class="w-[563px]">
            <div class="flex w-full flex-col bg-white/10  backdrop-blur-sm rounded-[20px] graph">
                <div class="flex flex-col self-end items-end w-[405px]" >
                    <div class="flex flex-row mt-[27px] w-full justify-between">
                        <div class="flex flex-col items-center mr-[38px]">
                            <span class=" text-white text-[12px] font-[700] font-['Inter'] h-[26px] ">IPI</span>
                            <img class="w-[27px] h-[27px] " src="~/assets/icons/out_advantages/ipi_coin.svg"/>
                        </div>

                        <div class="flex pr-[25px] relative">
                            <img @click="decrementSwitchBlock" class="h-[24px] self-end mr-[14px]"  src="~/assets/icons/mobile/chevron-left.svg"/>                        
                            <div class="flex items-center gap-[93px] translate-y-[-10px]">
                                <div class="flex flex-col items-center">
                                    <span class=" text-white text-[12px] font-[700] font-['Inter'] h-[26px] absolute">{{generateTextCoinInSwitch(switchBlockState[0])}}</span>
                                    <img class=" h-[27px] translate-y-[27px]" :src="generateIconInSwitch(switchBlockState[0])"/>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class=" text-white text-[12px] font-[700] font-['Inter'] h-[26px] absolute">{{generateTextCoinInSwitch(switchBlockState[1])}}</span>
                                    <img class=" h-[27px] translate-y-[27px]" :src="generateIconInSwitch(switchBlockState[1])"/>
                                </div>
                                <div class="flex flex-col items-center">
                                    <span class=" text-white text-[12px] font-[700] font-['Inter'] h-[26px] absolute">{{generateTextCoinInSwitch(switchBlockState[2])}}</span>
                                    <img class=" h-[27px] translate-y-[27px]" :src="generateIconInSwitch(switchBlockState[2])"/>
                                </div>
                            </div>   
                            <img @click="incrementSwitchBlock" class="h-[24px] self-end ml-[14px]" src="~/assets/icons/mobile/chevron-right.svg"/>  
                        </div>
                    </div>
                    <span class="h-[1px] w-[405px] bg-white/10 mt-[14px] mb-[16px]">&nbsp;</span>
                </div>
                <!--header coins-->

                <!--table of advantages-->
                <div class="grid grid-row-15 grid-cols-5 gap-4">
                    <div class="w-full flex flex-col ">
                        <div class="flex text-white text-left items-center text-[11px] font-[300] font-['Inter'] w-[130px] ml-[17px] mb-[21px]">
                            Customer support
                        </div>
                        <div class="flex bg-white/20 text-white text-center items-center text-[11px] font-[300] font-['Inter'] w-[563px] h-[55px] mb-[21px] pl-[17px]">
                            Dependency
                        </div>
                        <div class="flex text-white text-left items-center text-[11px] font-[300] font-['Inter'] w-[130px] ml-[17px] mb-[21px]">
                            Scalability 
                        </div>
                        <div class="flex bg-white/20 text-white text-center items-center text-[11px] font-[300] font-['Inter'] w-[563px] h-[55px] mb-[21px] pl-[17px]">
                            Security risks
                        </div>
                        <div class="flex text-white text-left items-center text-[11px] font-[300] font-['Inter'] w-[130px] ml-[17px] mb-[21px]">
                            Real-time sync
                        </div>
                        <div class="flex bg-white/20 text-white text-center items-center text-[11px] font-[300] font-['Inter'] w-[563px] h-[55px] mb-[21px] pl-[17px]">
                            Experience
                        </div>
                        <div class="flex text-white text-left items-center text-[11px] font-[300] font-['Inter'] w-[130px] ml-[17px] mb-[21px]">
                            Coin (Supply)
                        </div>
                        <div class="flex bg-white/20 text-white text-left items-center text-[11px] font-[300] font-['Inter'] w-[563px] h-[55px] mb-[21px] pl-[17px]">
                            Knowledge of<br>  coding
                        </div>
                        <div class="flex text-white text-left items-center text-[11px] font-[300] font-['Inter'] w-[130px] ml-[17px] mb-[21px]">
                            Team recognition
                        </div>
                        <div class="flex bg-white/20 text-white text-left items-center text-[11px] font-[300] font-['Inter'] w-[563px] h-[55px] mb-[21px] pl-[17px]">
                            Consensus Type
                        </div>
                        <div class="flex text-white text-left items-center text-[11px] font-[300] font-['Inter'] w-[130px] ml-[17px] mb-[21px]">
                            Virtual Machine Type
                        </div>
                        <div class="flex bg-white/20 text-white text-left items-center text-[11px] font-[300] font-['Inter'] w-[563px] h-[55px] mb-[21px] pl-[17px]">
                            Compiler Types
                        </div>
                        <div class="flex text-white text-left items-center text-[11px] font-[300] font-['Inter'] w-[130px] ml-[17px] mb-[21px]">
                            Programming Languages
                        </div>
                        <div class="flex bg-white/20 text-white text-center items-center text-[11px] font-[300] font-['Inter'] w-[563px] h-[55px] mb-[21px] pl-[17px]">
                            Pros
                        </div>
                        <div class="flex text-white text-left items-center text-[11px] font-[300] font-['Inter'] w-[130px] ml-[17px] mb-[21px]">
                            Cons
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[21px] w-[50px] translate-x-[30px]">Available</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[28px] translate-y-[-2px] h-[55px]
                         mt-[2px]">Independent</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[30px] h-[55px] mt-[2px]">High</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[30px] h-[55px] mt-[2px]">Low</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[30px] h-[55px] mt-[2px]">-</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[25px] h-[55px] mt-[2px]">Mature</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[25px] h-[55px] mt-[2px]">100 М</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[25px] h-[55px] mt-[2px]">Required</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[30px] h-[55px] mt-[2px]">Strong</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[30px] h-[55px] mt-[2px]">-</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[30px] h-[55px] mt-[2px]">-</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[30px] h-[55px] mt-[2px]">-</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[30px] h-[55px] mt-[2px]">-</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[30px] h-[55px] mt-[2px]">-</div>
                        <div class="flex items-center text-white text-center text-[11px] font-[300] font-['Inter'] mb-[0px] w-[50px] translate-x-[30px] h-[55px] mt-[2px]">-</div>
                    </div>
                    <div class="flex flex-col">
                        <div v-for="value in dynamicColumnsInTable?.[switchBlockState[0]]" class="flex items-center text-white text-left text-[11px] font-[300] font-['Inter'] mb-[0px] translate-x-[30px] h-[55px] mt-[2px]">
                            <div :class="{
                                'od': switchBlockState % 2 != 0,
                                'even': switchBlockState % 2 === 0,
                                }">{{ value }}</div> 
                        </div>  
                    </div>

                    <div class="flex flex-col">
                        <div v-for="value in dynamicColumnsInTable?.[switchBlockState[1]]" class="flex items-center text-white text-left text-[11px] font-[300] font-['Inter'] mb-[0px] translate-x-[30px] h-[55px] mt-[2px]">
                            <div :class="{
                                'od': switchBlockState % 2 != 0,
                                'even': switchBlockState % 2 === 0,
                                }">{{ value }}</div> 
                        </div>  
                    </div>

                    <div class="flex flex-col">
                        <div v-for="value in dynamicColumnsInTable?.[switchBlockState[2]]" class="flex items-center text-white text-left text-[11px] font-[300] font-['Inter'] mb-[0px] translate-x-[30px] h-[55px] mt-[2px]">
                            <div :class="{
                                'od': switchBlockState % 2 != 0,
                                'even': switchBlockState % 2 === 0,
                                }">{{ value }}</div> 
                        </div>  
                    </div>
                </div>
            </div>
    </div>

</template>

<style lang="scss" scoped>

.od {
    transform: translateY(-21px) translateX(-40px);
    line-height: 13px;
}

.even {
    transform: translateY(-22px) translateX(-40px);
    line-height: 13px;
}

</style>