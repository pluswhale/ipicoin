<template>
    <div class="flex flex-col items-center w-full mt-[107px] max-w-[1400px] h-[1680px] mx-auto my-0 max-[1420px]:hidden" >
        <h2 class="text-white uppercase text-[40px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[15px] translate-x-[-14px]">our advantages</h2>
        <div class="flex w-[789px] border-b-[4px] border-b-[#749DCA] h-[100px] justify-center mb-[61px]">
            <button @click="setActiveButton(1)" :class="state.active_button === 1 ? 'button_active' : 'button_unactive'" >investors Comparison </button>
            <button @click="setActiveButton(2)" :class="state.active_button === 2 ? 'button_active' : 'button_unactive'">developers Comparison  </button>
        </div>
        <Graph v-if="state.active_button === 1"/>
        <GraphTwo v-if="state.active_button === 2"/>
    </div>

     <div class="hidden flex-col items-center w-full mt-[107px] max-w-[1400px] h-[1130px] mx-auto my-0 max-[1420px]:flex">
        <h2 class="text-white uppercase text-[22px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[62px] translate-x-[-14px]">our advantages</h2>
        <div class="flex w-screen border-b-[4px] gap-[10px] no-scrollbar border-b-[#749DCA] h-[40px] justify-center mb-[61px] relative">
            <button @click="setActiveButton(1)" :class="state.active_button === 1 ? 'button_activeMob' : 'button_unactiveMob'" >investors Comparison </button>
            <button @click="setActiveButton(2)" :class="state.active_button === 2 ? 'button_activeMob' : 'button_unactiveMob'">developers Comparison  </button>
        </div>
        <GraphOneMob v-if="state.active_button === 1"/>
        <GraphTwoMob v-if="state.active_button === 2"/>
    </div>
</template>

<script setup>
import Graph from './elements/Graph.vue';
import GraphTwo from './elements/Graph2/GraphTwo.vue';

import GraphOneMob from './elements/ForMobile/Graph1/GraphOne.vue';
import GraphTwoMob from './elements/ForMobile/Graph2/GraphTwo.vue';

const state = reactive({ active_button: 1 })

const setActiveButton = (button) => {
    state.active_button = button;
}

</script>

<style lang="scss" scoped>
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);
.button_active,
.button_unactive {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    text-transform: uppercase;
    font-family: 'Barlow' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    width: 315px;
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

.button_activeMob,
.button_unactiveMob{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    text-transform: uppercase;
    font-family: 'Barlow' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    width: 315px;
    transition: all .2s;
    cursor: pointer;
    transform: translateY(-60px);
}

.button_activeMob {
    color: #EC474E;
        border-bottom: 4px solid #EC474E;
}

.button_unactiveMob {
    color: #749DCA;
    border-bottom: 4px solid #749DCA;
}


</style>