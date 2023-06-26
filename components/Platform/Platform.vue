    <template>
        <div 
         class="w-100% "
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
            <div class="flex flex-col items-center w-full mt-[30px] h-[900px]  max-w-[1400px] mx-auto my-0">
                <h2 class="text-white uppercase text-[40px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[15px] max-[1200px]:text-[26px]">platform</h2>
                <div class="flex w-[994px] border-b-[3px] border-b-[#749DCA] h-[100px] justify-center mb-[61px] max-[1200px]:w-[833px] max-[1200px]:h-[80px] max-[910px]:w-[553px] max-[910px]:h-[60px] max-[910px]:mb-[20px]">
                    <button @click="setActiveButton(1)" :class="state.active_button === 1 ? 'button_active' : 'button_unactive'" >FOR CRYPTO USERS</button>
                    <button @click="setActiveButton(2)" :class="state.active_button === 2 ? 'button_active' : 'button_unactive'">FOR PROGRAMMERS</button>
                    <button @click="setActiveButton(3)" :class="state.active_button === 3 ? 'button_active' : 'button_unactive'">for investors</button>
                </div>
                <div >
                    <CryptoUserBlockVue v-if="state.active_button === 1"/>
                    <ProgrammersBlockVue v-else-if="state.active_button === 2"/>               
                    <InvestorsBlockVue v-else-if="state.active_button === 3"/> 
                </div>
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
        height: 100px;
        text-transform: uppercase;
        font-family: 'Barlow';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        width: 281px;
        transition: all .2s;
        cursor: pointer;

        @media (max-width:1200px) {
            font-size: 14px;
            width: 250px;

            height: 80px;
        }
        @media (max-width:910px) {
            font-size: 11px;
            width: 150px;

            height: 60px;
        }
    }

    .button_active {
        color: #EC474E;
            border-bottom: 3px solid #EC474E;
    }

    .button_unactive {
        color: #749DCA;
        border-bottom: 3px solid #749DCA;
    }


    </style>