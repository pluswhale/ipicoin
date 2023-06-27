<template>
    <div class="flex  flex-col gap-[30px] w-full">
        <div class="flex pt-[20px] pb-[20px] pl-[30px] pr-[30px] flex-col w-full bg-white/5 justify-center rounded-[20px] min-h-[63.4px] relative ">
            <span :class="state.active_button.first ? 'question_active' : 'question_not_active'">What is an IPI Coin?</span>
            <div class="text-[#97AFD5] text-[16px] font-['Roboto'] mt-[15px] max-w-[780px] max-[550px]:text-[14px]" v-if="state.active_button.first">IPI Coin is an alternative to the expensive and unlimited supply ETH network and low-decentralized Smart Chain (Binance)</div>
            <img v-if="!state.active_button.first" @click="setActiveButton('first')" class="absolute top-[15px] right-[10px] cursor-pointer" src="~/assets/images/faqs/plus_icon.svg"/>
            <img v-if="state.active_button.first" @click="setActiveButton('first')" class="absolute top-[15px] right-[10px] cursor-pointer" src="~/assets/images/faqs/minus_icon.svg"/>
        </div>
        <div class="flex pt-[20px] pb-[20px] pl-[30px] pr-[30px] flex-col w-full bg-white/5 justify-center rounded-[20px] min-h-[63.4px]  relative ">
            <span :class="state.active_button.second ? 'question_active' : 'question_not_active'">What is an IPI Tokens?</span>
            <div class="text-[#97AFD5] text-[16px] font-['Roboto'] mt-[15px] max-w-[780px]" v-if="state.active_button.second">IPI Coin is an alternative to the expensive and unlimited supply ETH network and low-decentralized Smart Chain (Binance)</div>
            <img v-if="!state.active_button.second" @click="setActiveButton('second')" class="absolute top-[15px] right-[10px] cursor-pointer" src="~/assets/images/faqs/plus_icon.svg"/>
            <img v-if="state.active_button.second" @click="setActiveButton('second')" class="absolute top-[15px] right-[10px] cursor-pointer" src="~/assets/images/faqs/minus_icon.svg"/>
        </div>
        <div class="flex pt-[20px] pb-[20px] pl-[30px] pr-[30px] flex-col w-full bg-white/5 justify-center rounded-[20px] min-h-[63.4px] relative ">
            <span :class="state.active_button.third ? 'question_active' : 'question_not_active'">How can I participate in the IPI Coin sale?</span>
            <div class="text-[#97AFD5] text-[16px] font-['Roboto'] mt-[15px] max-w-[780px]" v-if="state.active_button.third">IPI Coin is an alternative to the expensive and unlimited supply ETH network and low-decentralized Smart Chain (Binance)</div>
            <img v-if="!state.active_button.third" @click="setActiveButton('third')" class="absolute top-[15px] right-[10px] cursor-pointer" src="~/assets/images/faqs/plus_icon.svg"/>
            <img v-if="state.active_button.third" @click="setActiveButton('third')" class="absolute top-[15px] right-[10px] cursor-pointer" src="~/assets/images/faqs/minus_icon.svg"/>
        </div>
        <div class="flex pt-[20px] pb-[20px] pl-[30px] pr-[30px] flex-col w-full bg-white/5 justify-center rounded-[20px] min-h-[63.4px] relative ">
            <span :class="state.active_button.fourth ? 'question_active' : 'question_not_active'">How do I benefit from the IPI Coin?</span>
            <div class="text-[#97AFD5] text-[16px] font-['Roboto'] mt-[15px] max-w-[780px]" v-if="state.active_button.fourth">IPI Coin is an alternative to the expensive and unlimited supply ETH network and low-decentralized Smart Chain (Binance)</div>
            <img v-if="!state.active_button.fourth" @click="setActiveButton('fourth')" class="absolute top-[15px] right-[10px] cursor-pointer" src="~/assets/images/faqs/plus_icon.svg"/>
            <img v-if="state.active_button.fourth" @click="setActiveButton('fourth')" class="absolute top-[15px] right-[10px] cursor-pointer" src="~/assets/images/faqs/minus_icon.svg"/>
        </div>
    </div>
</template>

<script setup>

const state = reactive({
    active_button: {
        first: false,
        second: false,
        third: false,
        fourth: false,
    }
})

const setActiveButton = (block) => {
    state.active_button[block] = !state.active_button[block];
}

</script>

<style lang="scss" scoped>



.question_active {
 font-family: 'Quicksand';
 font-size: 18px;
 font-weight: 500;
 color: #F42F54;

 @media (max-width:550px) {
    font-size: 14px;
 }

}

.question_not_active {
 font-family: 'Quicksand';
 font-size: 18px;
 font-weight: 500;
 color: white;

  @media (max-width:550px) {
    font-size: 14px;
 }

}

</style>