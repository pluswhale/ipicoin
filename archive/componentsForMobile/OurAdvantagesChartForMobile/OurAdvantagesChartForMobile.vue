<template>
  <!--   <div 
        class="flex flex-col items-center w-full mt-[107px] max-w-[1400px] h-[1130px] mx-auto my-0"
     >
        <h2 class="text-white uppercase text-[22px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[15px] translate-x-[-14px]">our advantages</h2>
        <div class="flex w-screen border-b-[2px] gap-[10px] no-scrollbar border-b-[#749DCA] h-[40px] justify-center mb-[61px] relative">
            <button @click="setActiveButton(1)" :class="state.active_button === 1 ? 'button_active' : 'button_unactive'" >investors Comparison </button>
            <button @click="setActiveButton(2)" :class="state.active_button === 2 ? 'button_active' : 'button_unactive'">developers Comparison  </button>
        </div>
        <GraphOne v-if="state.active_button === 1"/>
        <GraphTwo v-if="state.active_button === 2"/>
    </div> -->
</template>

<script setup>
/* import GraphOne from '../../components/OurAdvantagesChart/elements/ForMobile/Graph1';
import GraphTwo from '../../components/OurAdvantagesChart/elements/ForMobile/Graph2'; */

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
    height: 40px;
    text-transform: uppercase;
    white-space: nowrap;
    font-family: 'Inter';
    font-style: normal;
    font-size: 11px;
    line-height: 20px;
    transition: all .2s;
    width: 178px;
    cursor: pointer;

}

.button_active {

    color: #EC474E;
        border-bottom: 2px solid #EC474E;
            font-weight: 700;
}

.button_unactive {
    color: #749DCA;
/*     border-bottom: 1px solid #749DCA; */
    font-weight: 500;

}

</style>