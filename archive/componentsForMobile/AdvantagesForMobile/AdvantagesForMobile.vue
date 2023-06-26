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
        class="flex flex-col items-center w-full mt-[130px] mx-[auto] "   
     >
        <h2 class="text-white uppercase text-[22px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[30px] translate-y-[2px] translate-x-[-5px]">Perhaps the best project in web 3.0</h2>
        <div class="flex flex-col flex-wrap w-[343px] gap-[38px]">
                <div class="flex flex-col items-center justify-center relative w-[343px]">
                    <img src="~/assets/icons/advantages/home_icon.svg"/>
                    <span class="text-[12px] font-[700] text-white mt-[10px] font-['Inter']">Growth Potential</span>
                    <span class="text-[12px]  font-[400] leading-[22px] text-[#749DCA] text-center font-['Inter']   mt-[9px] ">Our mission is to create a next -
                    generation cryptocurrency with high
                    growth potential.
                    </span>  
                </div>
                <div  class="flex flex-col items-center relative w-[343px]">
                    <img src="~/assets/icons/advantages/drum_icon.svg"/>
                    <span class="text-[12px] font-[700] text-white mt-[10px] font-['Inter']">Limited Edition Coins</span>
                    <span class="text-[12px] font-[500] leading-[22px] text-[#749DCA] font-['Inter'] text-center   mt-[9px]">we offer a limited edition of 100 million coins and no more.</span>  
                </div>
                
                <div class="flex flex-col items-center relative w-[343px]">
                    <img src="~/assets/icons/advantages/settings_icon.svg"/>
                    <span class="text-[12px] font-[700] text-white mt-[10px] font-['Inter']">Developers</span>
                    <span class="text-[12px] font-[500] leading-[22px] text-[#749DCA] text-center font-['Inter']   mt-[9px]">we provide fast smart contracts with the best virtual machine and consensus. We also provide oracle and Chainlink services, as well as an easy way to create your own dApps and contracts</span>                      
                </div>

                <div class="flex flex-col items-center w-[343px]">
                    <img src="~/assets/icons/advantages/piramyd_icon.svg"/>
                    <span class="text-[12px] font-[700] text-white mt-[10px] font-['Inter']">Financial indicators</span>
                    <span class="text-[12px] font-[500] leading-[22px] text-[#749DCA] text-center font-['Inter']   mt-[9px]">we strive to ensure the sustainability and development of the ecosystem for new projects.</span>  
                </div>

                <div class="flex flex-col items-center w-[343px] relative">
                    <img src="~/assets/icons/advantages/quad_icon.svg"/>
                    <span class="text-[12px] font-[700] text-white mt-[10px] font-['Inter']">Ease of programming</span>
                    <span class="text-[12px] font-[500] leading-[22px] text-[#749DCA] text-center font-['Inter']   mt-[9px]">Our blockchain with smart contracts is so easy to program that creating a backend on our blockchain and off the blockchain will be easier than using cloud services or any other technology.</span>  
                </div>

                <div class="flex flex-col items-center  relative w-[343px] ">
                    <img src="~/assets/icons/advantages/lock_icon.svg"/>
                    <span class="text-[12px] font-[600] text-white mt-[10px] font-['Inter']">Speed and security</span>
                    <span class="text-[12px] font-[500] leading-[22px] text-[#749DCA] text-center font-['Inter']   mt-[9px]">our system provides speed and security, preventing fraud of participants among themselves, especially for gambling projects.</span>  
                </div>

                <div class="flex flex-col items-center relative w-[343px]">
                    <img src="~/assets/icons/advantages/qrcode_icon.svg"/>
                    <span class="text-[12px] font-[700] text-white mt-[10px] font-['Inter']">Scanning system</span>
                    <span  class="text-[12px] font-[500] leading-[22px] text-[#749DCA] text-center  font-['Inter']  mt-[9px]">We offer a system with our own scanner that anyone can predict and get data for any period of time.</span>  
                </div>                
                <div class="flex flex-col items-center w-[343px]">
                    <img src="~/assets/icons/advantages/code_icon.svg"/>
                    <span class="text-[12px] font-[700] text-white mt-[10px] font-['Inter']">Programming in programming languages</span>
                    <span class="text-[12px] font-[400] leading-[22px] text-[#749DCA] text-center font-['Inter']   mt-[9px]">we provide the ability to create your own contracts and easy access to our protocol, as well as easy entry into the creation of your dApps with any commands. We are also exploring the use of artificial intelligence in our protocol.</span>  
                </div>                
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