<script setup>
import AnimateTitleBlock from './components/AnimatedTitleBlock.vue';
import { reactive } from 'vue';
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
    <div class="flex flex-wrap ml-[0] max-[1420px]:mx-auto max-[1420px]">
        <div class="flex mt-[72px] flex-col max-[1420px]:mt-[15px] max-[1420px]:w-[200px] max-[1420px]:translate-x-[20px]">
            <!-- main title block-->

            <!--first text block-->
            <AnimateTitleBlock 
                :is-all-block-displaying="state.block.length <= 4"
                :is-first-row-displaying="state.block.includes(0)"
                :is-second-row-displaying="state.block.includes(1)"
                :is-third-row-displaying="state.block.includes(2)"
                :is-fourth-row-displaying="state.block.includes(3)"
                first-word="ndependent"
                second-word="rotocol"
                third-word="nfrastructure"
            />
            <!--first text block-->

            <!--second text block-->
            <AnimateTitleBlock 
                :is-all-block-displaying="state.block.length > 4 && state.block.length <= 8"
                :is-first-row-displaying="state.block.includes(4)"
                :is-second-row-displaying="state.block.includes(5)"
                :is-third-row-displaying="state.block.includes(6)"
                :is-fourth-row-displaying="state.block.includes(7)"
                first-word="nnovative"
                second-word="ayment"
                third-word="nfrastructure"
            />

            <!--third text block-->
            <AnimateTitleBlock 
                :is-all-block-displaying="state.block.length > 8 && state.block.length <= 12"
                :is-first-row-displaying="state.block.includes(8)"
                :is-second-row-displaying="state.block.includes(9)"
                :is-third-row-displaying="state.block.includes(10)"
                :is-fourth-row-displaying="state.block.includes(11)"
                first-word="ntegrated"
                second-word="latform"
                third-word="nfrastructure"
            />

            <!--fourth text block-->
            <AnimateTitleBlock 
                :is-all-block-displaying="state.block.length > 12 && state.block.length <= 16"
                :is-first-row-displaying="state.block.includes(12)"
                :is-second-row-displaying="state.block.includes(13)"
                :is-third-row-displaying="state.block.includes(14)"
                :is-fourth-row-displaying="state.block.includes(15)"
                first-word="nclusive"
                second-word="ayment"
                third-word="nfrastructure"
            />

            <!-- download apps block-->
            <!-- <DownloadButtonBlock :isVisible="true"/> -->
                <!-- download apps block-->
            <div class="flex items-center mt-[77px] gap-[15px] translate-y-[-50px] translate-x-[-5px] max-[1420px]:hidden"
            >
                <div class="flex flex-row items-center justify-center w-[187px] h-[55px] border-[2px] border-[#EC474E] rounded-[20px] hover:bg-[#EC474E] cursor-pointer">
                    <div class="flex pl-[10px] gap-[20px]">
                        <img src="~/assets/icons/apple_icon.svg" class="translate-y-[3px] translate-x-[0px] w-[30px] h-[37px]"/>
                        <div class="flex flex-col">
                            <span class="text-white whitespace-nowrap font-[400] font-['Lato'] text-[11px] translate-y-[0px] translate-x-[-9px] IOS_text">Download on the</span>
                            <span class="text-white whitespace-nowrap font-[500] font-['Lato'] text-[20px] translate-y-[-5px] translate-x-[-11px] IOS_title">App Store</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-row items-center w-[187px] justify-center h-[55px] border-[2px] border-[#EC474E] rounded-[20px] hover:bg-[#EC474E] cursor-pointer">
                    <div class="flex pl-[10px] gap-[20px]">
                        <img src="~/assets/icons/playmarket_icon.svg" class="translate-y-[3px] translate-x-[3px] w-[33px] h-[37px]"/>
                        <div class="flex flex-col">
                            <span  class="text-white whitespace-nowrap font-[400] font-['Montserrat'] text-[11px] translate-y-[3px] translate-x-[-9px] uppercase ">Get It On </span>
                            <span class="text-white whitespace-nowrap font-[600] font-['Montserrat'] text-[19px] translate-y-[-3px] translate-x-[-9px]">Google Play</span>
                        </div>
                    </div>
                </div>

                    <div class="flex flex-row items-center w-[187px] justify-center h-[55px] border-[2px] border-[#EC474E] rounded-[20px] hover:bg-[#EC474E] cursor-pointer">
                    <div class="flex pl-[10px] gap-[20px]">
                        <img src="../../../../assets/icons/mainpage/Vector.png" class="translate-y-[5px] translate-x-[3px] w-[42px] h-[36px]"/>
                        <div class="flex flex-col">
                            <span  class="text-white whitespace-nowrap font-[400] font-['Montserrat'] text-[11px] translate-y-[3px] translate-x-[-9px] uppercase ">Available as a</span>
                            <span class="text-white whitespace-nowrap font-[600] font-['Montserrat'] text-[21px] translate-y-[-3px] translate-x-[-9px]">Web App</span>
                        </div>
                    </div>
                </div>
            </div> 
    <!-- download apps block-->
            <!-- download apps block-->
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>