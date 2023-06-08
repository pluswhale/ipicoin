<script setup>
const visibleBlockState = reactive({ block: 0 });

const handleSetVisibleBlock = (block) => {
    visibleBlockState.block = block;
};
</script>
<template>
    <div 
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
        class="flex flex-col items-center w-full mt-[130px] max-w-[1456px] mx-auto my-0"   
     >
        <h2 class="text-white uppercase text-[40px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[77px] translate-y-[2px] translate-x-[-5px]">Perhaps the best project in web 3.0</h2>
        <div class="flex flex-col flex-wrap w-full gap-[38px]">

            <!--first row-->
            <div class="flex flex-row justify-between w-full min-h-[200px]">
                <!-- <Card 
                image="/_nuxt/assets/icons/advantages/home_icon.svg" 
                title="Growth Potential" 
                adv_text="Our mission is to create a next -
                 generation cryptocurrency with high
                 growth potential."/> -->
                <div @mouseover="handleSetVisibleBlock(1)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center relative min-w-[250px] max-w-[250px]">
                    <img src="~/assets/icons/advantages/home_icon.svg"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow']">Growth Potential</span>
                    <Transition>
                        <span v-show="visibleBlockState.block === 1" class="text-[14px]  font-[400] leading-[22px] text-[#749DCA] text-center font-['Roboto']   mt-[9px] ">Our mission is to create a next -
                    generation cryptocurrency with high
                    growth potential.</span>  
                    </Transition>

                 <img src="../../assets/icons/advantages/line_1.png" alt="" class="absolute top-[25px] left-[180px]">
                </div>

                

                <!-- <Card 
                image="/_nuxt/assets/icons/advantages/drum_icon.svg" 
                title="Limited Edition Coins" 
                adv_text="we offer a limited edition of 100 million coins and no more."/> -->

                <div @mouseover="handleSetVisibleBlock(2)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center relative max-w-[250px] min-w-[250px]">
                    <img src="~/assets/icons/advantages/drum_icon.svg"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow']">Limited Edition Coins</span>
                                        <Transition>
                                                <span v-show="visibleBlockState.block === 2" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] font-['Roboto'] text-center   mt-[9px]">we offer a limited edition of 100 million coins and no more.</span>  
                                        </Transition>
                   
                    <img src="../../assets/icons/advantages/line_2.png" alt="" class="absolute top-[25px] left-[200px]">
                </div>

                <!-- <Card 
                image="/_nuxt/assets/icons/advantages/settings_icon.svg" 
                title="Developers" 
                adv_text="we provide fast smart contracts with the best virtual machine and consensus. We also provide oracle and Chainlink services, as well as an easy way to create your own dApps and contracts"/> -->
                
                <div @mouseover="handleSetVisibleBlock(3)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center relative max-w-[375px] min-w-[375px]">
                    <img src="~/assets/icons/advantages/settings_icon.svg"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow']">Developers</span>
                    <Transition>
                        <span v-show="visibleBlockState.block === 3" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] text-center font-['Roboto']   mt-[9px]">we provide fast smart contracts with the best virtual machine and consensus. We also provide oracle and Chainlink services, as well as an easy way to create your own dApps and contracts</span>  

                    </Transition>
                    <img src="../../assets/icons/advantages/line_3.png" alt="" class="absolute top-[25px] left-[260px]">
                </div>

                <!-- <Card 
                image="/_nuxt/assets/icons/advantages/piramyd_icon.svg" 
                title="Financial indicators" 
                adv_text="we strive to ensure the sustainability and development of the ecosystem for new projects."/> -->

                <div @mouseover="handleSetVisibleBlock(4)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center max-w-[290px] min-w-[290px]">
                    <img src="~/assets/icons/advantages/piramyd_icon.svg"/>
                    <Transition>
                        <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow']">Financial indicators</span>

                    </Transition>
                    <span v-show="visibleBlockState.block === 4" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] text-center font-['Roboto']   mt-[9px]">we strive to ensure the sustainability and development of the ecosystem for new projects.</span>  
                </div>
            </div>
            <!--first row-->

            <!--second row-->
            <div class="flex flex-row justify-between min-h-[220px]">
                <!-- <Card 
                image="/_nuxt/assets/icons/advantages/quad_icon.svg" 
                title="Ease of programming" 
                adv_text="Our blockchain with smart contracts is so easy to program that creating a backend on our blockchain and off the blockchain will be easier than using cloud services or any other technology."/> -->
                <div @mouseover="handleSetVisibleBlock(5)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center max-w-[270px] min-w-[270px] relative">
                    <img src="~/assets/icons/advantages/quad_icon.svg"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow']">Ease of programming</span>
                    <Transition>
                        <span v-show="visibleBlockState.block === 5" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] text-center font-['Roboto']   mt-[9px]">Our blockchain with smart contracts is so easy to program that creating a backend on our blockchain and off the blockchain will be easier than using cloud services or any other technology.</span>  
                    </Transition>
                    <img src="../../assets/icons/advantages/line_1.png" alt="" class="absolute top-[35px] left-[185px]">
                </div>

                <!-- <Card 
                image="/_nuxt/assets/icons/advantages/lock_icon.svg" 
                title="Speed and security" 
                adv_text="our system provides speed and security, preventing fraud of participants among themselves, especially for gambling projects."/> -->

                <div @mouseover="handleSetVisibleBlock(6)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center  relative max-w-[250px] min-w-[250px]">
                    <img src="~/assets/icons/advantages/lock_icon.svg"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow']">Speed and security</span>
                    <Transition>
                        <span v-show="visibleBlockState.block === 6" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] text-center font-['Roboto']   mt-[9px]">our system provides speed and security, preventing fraud of participants among themselves, especially for gambling projects.</span>  
                    </Transition>
                    <img src="../../assets/icons/advantages/line_2.png" alt="" class="absolute top-[35px] left-[185px]">
                </div>

                <!-- <Card 
                image="/_nuxt/assets/icons/advantages/qrcode_icon.svg" 
                title="Scanning system" 
                adv_text="We offer a system with our own scanner that anyone can predict and get data for any period of time."/> -->

                <div @mouseover="handleSetVisibleBlock(7)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center relative max-w-[280px] min-w-[280px]">
                    <img src="~/assets/icons/advantages/qrcode_icon.svg"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow']">Scanning system</span>
                    <Transition>
                        <span v-show="visibleBlockState.block === 7" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] text-center  font-['Roboto']  mt-[9px]">We offer a system with our own scanner that anyone can predict and get data for any period of time.</span>  
                    </Transition>
                    <img src="../../assets/icons/advantages/line_3.png" alt="" class="absolute top-[35px] left-[190px]">
                </div>

                <!-- <Card 
                image="/_nuxt/assets/icons/advantages/code_icon.svg" 
                title="Programming in programming languages" 
                adv_text="we provide the ability to create your own contracts and easy access to our protocol, as well as easy entry into the creation of your dApps with any commands. We are also exploring the use of artificial intelligence in our protocol."/> -->
                
                <div @mouseover="handleSetVisibleBlock(8)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center max-w-[350px] min-w-[350px]">
                    <img src="~/assets/icons/advantages/code_icon.svg"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow']">Programming in programming languages</span>
                    <Transition>
                        <span v-show="visibleBlockState.block === 8" class="text-[13px] font-[400] leading-[22px] text-[#749DCA] text-center font-['Roboto']   mt-[9px]">we provide the ability to create your own contracts and easy access to our protocol, as well as easy entry into the creation of your dApps with any commands. We are also exploring the use of artificial intelligence in our protocol.</span>  
                    </Transition>
                </div>                
            </div>
            <!--second row-->
        </div>
        <div class="flex gap-[64px] mt-[50px]">
            <button class="flex pl-[20px] pb-[10px] w-[211px] pt-[10px] pr-[10px] h-[44px] items-center justify-center font-['Barlow sans-serif'] bg-[#EC474E] transition-all rounded-[20px] hover:bg-transparent hover:border-[2px] hover:border-[#EC474E]">
                <span class="text-[16px] font-[500] uppercase text-white font-['Barlow]">Wallet</span>
                <img class="pt-[0] ml-[15px]" src="~/assets/icons/arrow_right_white.svg"/>
            </button>
            <button class="flex pl-[20px] pb-[10px] w-[211px] pt-[10px] pr-[10px] h-[44px] items-center justify-center font-['Barlow sans-serif'] border-[2px] border-[#EC474E] transition-all rounded-[20px] hover:bg-[#EC474E]">
                <span class="text-[16px] font-[500] uppercase text-white font-['Barlow']">Buy coin</span>
                <img class="pt-[0] ml-[15px]" src="~/assets/icons/arrow_right_white.svg"/>
            </button>
            <!-- <button class="flex pl-[20px] pb-[10px] w-[211px] pt-[10px] pr-[10px] h-[44px] items-center justify-center font-['Barlow sans-serif'] border-[2px] border-[#EC474E] transition-all rounded-[20px] hover:bg-[#EC474E]">
                <span class="text-[16px] font-[500] uppercase text-white font-['Barlow']">scanner</span>
                <img class="pt-[0] ml-[15px]" src="~/assets/icons/arrow_right_white.svg"/>
            </button> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>