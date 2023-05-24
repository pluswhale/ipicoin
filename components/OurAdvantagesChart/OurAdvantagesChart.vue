<template>
    <div class="flex flex-col items-center w-full mt-[152px] ">
        <h2 class="text-white uppercase text-[40px] font-['Quicksand sans-serif'] mb-[70px]">our advantages</h2>
        <div class="flex w-[789px] border-b-[2px] border-b-[#749DCA] h-[50px] justify-center mb-[61px]">
            <button @click="setActiveButton(1)" :class="state.active_button === 1 ? 'button_active' : 'button_unactive'" >investors Comparison </button>
            <button @click="setActiveButton(2)" :class="state.active_button === 2 ? 'button_active' : 'button_unactive'">developers Comparison  </button>
        </div>
        <Graph/>
    </div>
</template>

<script setup>
import Graph from './elements/Graph.vue';

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
    height: 50px;
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
        border-bottom: 2px solid #EC474E;
}

.button_unactive {
    color: #749DCA;
    border-bottom: 2px solid #749DCA;
}

</style>