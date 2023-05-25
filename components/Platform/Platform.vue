    <template>
        <div class="flex flex-col items-center w-full mt-[136px]">
            <h2 class="text-white uppercase text-[40px] font-['Quicksand sans-serif'] mb-[70px]">platform</h2>
            <div class="flex w-[994px] border-b-[2px] border-b-[#749DCA] h-[50px] justify-center mb-[61px]">
                <button @click="setActiveButton(1)" :class="state.active_button === 1 ? 'button_active' : 'button_unactive'" >FOR CRYPTO USERS</button>
                <button @click="setActiveButton(2)" :class="state.active_button === 2 ? 'button_active' : 'button_unactive'">FOR PROGRAMMERS</button>
                <button @click="setActiveButton(3)" :class="state.active_button === 3 ? 'button_active' : 'button_unactive'">for investors</button>
            </div>
            <div class="w-[90%]">
                <CryptoUserBlockVue v-if="state.active_button === 1"/>
                 <ProgrammersBlockVue v-else-if="state.active_button === 2"/>               
                <InvestorsBlockVue v-else-if="state.active_button === 3"/> 
            </div>
        </div>
    </template>

    <script setup>
    import CryptoUserBlockVue from './elements/CryptoUserBlock.vue';
    import InvestorsBlockVue from './elements/InvestorsBlock.vue';
    import ProgrammersBlockVue from './elements/ProgrammersBlock.vue';

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
        width: 281px;
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