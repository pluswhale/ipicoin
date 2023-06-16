<template>
<div 
    class="w-[100%] relative"
    v-motion
    :initial="{
        opacity: 0,
        y: 100,
        duration: 1000,
        type: 'keyframes',
        ease: 'easeIn',
    }"
    :enter="{
        opacity: 1,
        y: 0,
        transition: {
            duration: 1000,
            type: 'keyframes',
            ease: 'easeIn',
        },
    }"
    :visible="{
        opacity: 1,
        y: 0,
        transition: {
            duration: 1000,
            type: 'keyframes',
            ease: 'easeIn',

        },
    }"
    :leave="{
    y: -100,
        opacity: 0,
        transition: {
            delay: 1000,
        },
    }"   
  >
    <div class="flex flex-col items-center h-[950px] w-full mt-[136px] max-w-[1360px] mx-auto my-0">
        <h2 class="text-white uppercase font-[700] text-[40px] font-['Big_Shoulders_Stencil_Text']">FAQS</h2>
        <span class="text-[#97AFD5] text-[16px] font-['Roboto sans-serif'] text-center max-w-[500px] mt-[24px] mb-[46.7px]">Below we’ve provided a FAQ of IPICOIN and few others. If you have any other questions, please get in touch.</span>
        <div class="flex w-[1094px] border-b-[4px] border-b-[#749DCA] h-[100px] justify-center mb-[61px]">
            <button @click="setActiveButton(1)" :class="state.active_button === 1 ? 'button_active' : 'button_unactive'" >General Questions</button>
            <button @click="setActiveButton(2)" :class="state.active_button === 2 ? 'button_active' : 'button_unactive'">Coin Sales</button>
            <button @click="setActiveButton(3)" :class="state.active_button === 3 ? 'button_active' : 'button_unactive'">Development</button>
            <button @click="setActiveButton(4)" :class="state.active_button === 4 ? 'button_active' : 'button_unactive'">Team & Legal</button>
        </div>
        <div class="flex w-[994px] min-h-[358px]">
            <GeneralQuestions v-if="state.active_button === 1"/>
            <!--TODO: недостающие динамические блоки-->
        </div>
    </div>
    <IncrisingTrust/>
</div>   
</template>

<script setup>
import GeneralQuestions from './elements/GeneralQuestions.vue';

    const state = reactive({ active_button: 1 })
    const setActiveButton = (button) => {
        state.active_button = button;
    }

</script>

<style lang="scss" scoped>
.button_active,
.button_unactive {
    align-items: center;
    justify-content: center;
    height: 100px;
    text-transform: uppercase;
    font-family: 'Barlow' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    width: 233px;
    transition: all .2s;
    cursor: pointer;
}

.button_active {
    color: #EC474E;
        border-bottom: 4px solid #EC474E;
}

.button_unactive {
    color: #749DCA;
    border-bottom: 4px solid #749DCA;
}


</style>