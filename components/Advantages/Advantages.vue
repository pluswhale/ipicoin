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
        class="flex flex-col items-center w-full mt-[130px] max-w-[1456px] mx-auto my-0 sm:max-w-auto xl:max-w-[900px]"   
     >
        <h2 class="text-white uppercase text-[40px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[77px] translate-y-[2px] translate-x-[-5px]
        sm:text-[22px] sm:mb-[30px] xl:text-[26px] xl:mb-[40px]">Perhaps the best project in web 3.0</h2>
        <div class="flex flex-col flex-wrap w-full gap-[38px] xl:gap-[20px] sm:hidden">
            <!--first row-->
            <div class="flex flex-row justify-between w-full min-h-[200px] xl:">
                <div @mouseover="handleSetVisibleBlock(1)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center relative min-w-[250px] max-w-[250px]
                xl:min-w-[150px] xl:max-w-[150px]">
                    <img src="~/assets/icons/advantages/home_icon.svg" class="xl:w-[39px] xl:h-[39px]"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow'] xl:text-[12px]">Growth Potential</span>
                    <Transition>
                        <span v-show="visibleBlockState.block === 1" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] text-center font-['Roboto'] mt-[9px] 
                        xl:text-[12px] xl:leading-[13px]">
                        Our mission is to create a next - generation cryptocurrency with high growth potential.
                        </span>  
                    </Transition>
                 <img src="../../assets/icons/advantages/line_1.png" alt="" class="absolute top-[25px] left-[180px] xl:w-[142px] xl:left-[100px]">
                </div>

                <div @mouseover="handleSetVisibleBlock(2)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center relative max-w-[250px] min-w-[250px]
                xl:min-w-[150px] xl:max-w-[150px] xl:translate-x-[29px] ">
                    <img src="~/assets/icons/advantages/drum_icon.svg" class="xl:w-[39px] xl:h-[39px]"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow'] xl:text-[12px]">Limited Edition Coins</span>
                                        <Transition>
                                                <span v-show="visibleBlockState.block === 2" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] font-['Roboto'] text-center mt-[9px] 
                                                xl:text-[12px] xl:leading-[13px]">we offer a limited edition of 100 million coins and <br> no more.</span>  
                                        </Transition>
                   
                    <img src="../../assets/icons/advantages/line_2.png" alt="" class="absolute top-[25px] left-[200px] xl:w-[142px] xl:left-[125px]">
                </div>
                
                <div @mouseover="handleSetVisibleBlock(3)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center relative max-w-[375px] min-w-[375px]
                xl:min-w-[257px] xl:max-w-[257px] xl:translate-x-[22px] ">
                    <img src="~/assets/icons/advantages/settings_icon.svg" class="xl:w-[39px] xl:h-[39px]"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow'] xl:text-[12px]">Developers</span>
                    <Transition>
                        <span v-show="visibleBlockState.block === 3" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] text-center font-['Roboto']  
                         mt-[9px] xl:text-[12px] xl:leading-[13px]">
                         we provide fast smart contracts with the best virtual machine and consensus. We also provide oracle and Chainlink services, 
                         as well as an easy way to create your own dApps and contracts
                        </span>  

                    </Transition>
                    <img src="../../assets/icons/advantages/line_3.png" alt="" class="absolute top-[25px] left-[260px] xl:w-[142px] xl:left-[175px]">
                </div>

                <div @mouseover="handleSetVisibleBlock(4)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center max-w-[290px] min-w-[290px]
                 xl:min-w-[208px] xl:max-w-[208px] xl:translate-x-[-10px]">
                    <img src="~/assets/icons/advantages/piramyd_icon.svg" class="xl:w-[39px] xl:h-[39px]"/>
                    <Transition>
                        <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow'] xl:text-[12px]">Financial indicators</span>

                    </Transition>
                    <span v-show="visibleBlockState.block === 4" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] text-center font-['Roboto']
                    mt-[9px] xl:text-[12px] xl:leading-[13px]">we strive to ensure the sustainability <br>and development of the ecosystem <br>for new projects.</span>  
                </div>
            </div>
            <!--first row-->

            <!--second row-->
            <div class="flex flex-row justify-between min-h-[220px]">

                <div @mouseover="handleSetVisibleBlock(5)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center max-w-[270px] min-w-[270px] relative
                 xl:min-w-[183px] xl:max-w-[196px] xl:translate-x-[4px]">
                    <img src="~/assets/icons/advantages/quad_icon.svg" class="xl:w-[39px] xl:h-[39px]"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow'] xl:text-[12px]">Ease of programming</span>
                    <Transition>
                        <span v-show="visibleBlockState.block === 5" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] text-center font-['Roboto'] 
                          mt-[9px] xl:text-[12px] xl:leading-[13px]">Our blockchain with smart contracts is so easy to program that creating a 
                          backend on our blockchain and off the blockchain will 
                          be easier than using cloud services or any other technology.
                        </span>  
                    </Transition>
                    <img src="../../assets/icons/advantages/line_1.png" alt="" class="absolute top-[35px] left-[185px] xl:w-[142px] xl:left-[138px] xl:top-[18px]">
                </div>

                <div @mouseover="handleSetVisibleBlock(6)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center  relative max-w-[250px] min-w-[250px]
                xl:min-w-[145px] xl:max-w-[145px] xl:translate-x-[1px]">
                    <img src="~/assets/icons/advantages/lock_icon.svg" class="xl:w-[39px] xl:h-[39px]"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow'] xl:text-[12px]">Speed and security</span>
                    <Transition>
                        <span v-show="visibleBlockState.block === 6" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] text-center font-['Roboto']  
                         mt-[9px] xl:text-[12px] xl:leading-[13px]">our system provides speed and security, preventing fraud of participants among themselves, 
                         especially for gambling projects.
                        </span>  
                    </Transition>
                    <img src="../../assets/icons/advantages/line_2.png" alt="" class="absolute top-[35px] left-[185px] xl:w-[142px] xl:left-[115px] xl:top-[18px]">
                </div>

                <div @mouseover="handleSetVisibleBlock(7)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center relative max-w-[280px] min-w-[280px]
                xl:min-w-[169px] xl:max-w-[169px] xl:translate-x-[2px]">
                    <img src="~/assets/icons/advantages/qrcode_icon.svg" class="xl:w-[39px] xl:h-[39px]"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow'] xl:text-[12px]">Scanning system</span>
                    <Transition>
                        <span v-show="visibleBlockState.block === 7" class="text-[14px] font-[400] leading-[22px] text-[#749DCA] text-center  font-['Roboto'] 
                         mt-[9px] xl:text-[12px] xl:leading-[13px]">
                         We offer a system with our own scanner that anyone can predict and get data for any period of time.
                        </span>  
                    </Transition>
                    <img src="../../assets/icons/advantages/line_3.png" alt="" class="absolute top-[35px] left-[190px] xl:w-[142px] xl:left-[124px] xl:top-[18px]">
                </div>
                
                <div @mouseover="handleSetVisibleBlock(8)" @mouseleave="handleSetVisibleBlock(0)" class="flex flex-col items-center max-w-[350px] min-w-[350px]
                xl:min-w-[175px] xl:max-w-[175px] xl:translate-x-[-23px]">
                    <img src="~/assets/icons/advantages/code_icon.svg" class="xl:w-[39px] xl:h-[39px]"/>
                    <span class="text-[16px] font-[600] text-white mt-[10px] font-['Barlow'] xl:text-[11px]">Programming in programming languages</span>
                    <Transition>
                        <span v-show="visibleBlockState.block === 8" class="text-[13px] font-[400] leading-[22px] text-[#749DCA] text-center font-['Roboto'] 
                          mt-[9px] xl:text-[12px] xl:leading-[13px]">
                          We provide the ability to create your own contracts and easy access to our protocol, as well as easy entry into the creation of your 
                          dApps with any commands. We are also exploring the use of artificial intelligence in our protocol.
                        </span>  
                    </Transition>
                </div>  

            </div>
            <!--second row-->
        </div>
        <div class="flex gap-[64px] mt-[50px] sm:hidden">
            <button class="flex pl-[20px] pb-[10px] w-[211px] pt-[10px] pr-[10px] h-[44px] items-center justify-center font-['Barlow sans-serif'] bg-[#EC474E] transition-all rounded-[20px] hover:bg-transparent hover:border-[2px] hover:border-[#EC474E]">
                <span class="text-[16px] font-[500] uppercase text-white font-['Barlow]">Wallet</span>
                <img class="pt-[0] ml-[15px]" src="~/assets/icons/arrow_right_white.svg"/>
            </button>
            <button class="flex pl-[20px] pb-[10px] w-[211px] pt-[10px] pr-[10px] h-[44px] items-center justify-center font-['Barlow sans-serif'] border-[2px] border-[#EC474E] transition-all rounded-[20px] hover:bg-[#EC474E]">
                <span class="text-[16px] font-[500] uppercase text-white font-['Barlow']">Buy coin</span>
                <img class="pt-[0] ml-[15px]" src="~/assets/icons/arrow_right_white.svg"/>
            </button>
        </div>

        <!--mobile version-->
        <div class="flex-col hidden flex-wrap w-[343px] gap-[38px] sm:flex">
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
        <!--mobile version-->
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