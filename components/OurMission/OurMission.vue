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
      
        class="flex flex-col items-center mt-[100px] h-[400px] max-w-[1400px] mx-auto my-0"
    >
        <h2 class="text-white uppercase text-[40px] font-[700] font-['Big Shoulders Stencil Text, cursive'] mb-[50px]">ipi scan</h2>


        <!-- Searc block -->
        <div class="flex w-full items-center h-[48px] bg-white/10 rounded-[10px] px-[20px] justify-between mb-[60px]" >

            <div class="flex gap-[5px]">
               <img src="../../assets/images/Ipi scan/search.png" alt="" class="mr-[17px]">  

                <p class="font-['Lato'] font-[400] text-[#E0E0E0] text-[14px]">Search by Token</p>
                <p class="font-['Lato'] font-[400] text-[#E0E0E0] text-[14px]">/</p>
                <p class="font-['Lato'] font-[400] text-[#E0E0E0] text-[14px]">Account</p>
                <p class="font-['Lato'] font-[400] text-[#E0E0E0] text-[14px]">/</p>
                <p class="font-['Lato'] font-[400] text-[#E0E0E0] text-[14px]">Contract</p>
                <p class="font-['Lato'] font-[400] text-[#E0E0E0] text-[14px]">/</p>
                <p class="font-['Lato'] font-[400] text-[#E0E0E0] text-[14px]">Block</p>
            </div>

            <div class="flex items-center">
                <p class=" font-['Lato'] font-[400] text-[#E0E0E0] text-[20px] mr-[20px]">|</p>
                <p class="font-['Lato'] font-[400] text-[#E0E0E0] text-[14px] mr-[7px]">All Filters</p>
                <img src="../../assets/images/Ipi scan/chevron-down.png" alt="" class="mt-[3px] cursor-pointer">
            </div>

        </div>
         <!-- /Searc block -->

         <!-- Index block -->
            <div class="flex w-full items-center justify-between">

                <div class="flex flex-col min-w-[881px] min-h-[175px] bg-white/10 rounded-[10px]">

                   <div class="flex w-full justify-between mt-[25px]"> <!--first line total-->
                        <div class="flex items-center w-[420px] justify-between ml-[20px]"><!-- Total 1 -->
                            <div class="flex"> 
                                <img src="../../assets/images/Ipi scan/accountIco-1.png" alt="">   

                                <div class="flex flex-col ml-[18px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px]">Total Accounts</p>
                                    <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[20px]">5,474,222,080</p>
                                </div>
                            </div>

                            <div class="flex items-end">
                                <div class="flex flex-col items-end mr-[20px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px]">24h</p>
                                    <p class="font-['Lato'] font-[400] text-[#27A17C] text-[14px]">+221,517</p>   
                                </div>
                            
                                <img src="../../assets/images/Ipi scan/pseudo.png" alt="">
                            </div>
                        </div><!--/ Total 1 -->

                        <div class="flex items-center w-[420px] justify-between ml-[20px]"><!-- Total 2 -->
                            <div class="flex"> 
                                <img src="../../assets/images/Ipi scan/accountIco-2.png" alt="">   

                                <div class="flex flex-col ml-[18px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px]">TVL</p>
                                    <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[20px]">$12,168</p>
                                </div>
                            </div>

                            <div class="flex items-end">
                                <div class="flex flex-col items-end mr-[20px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px]">24h</p>
                                    <p class="font-['Lato'] font-[400] text-[#27A17C] text-[14px]">+0.53</p>   
                                </div>
                            </div>
                        </div><!--/ Total 2 -->
                   </div><!--/first line total-->

                   <div class="flex w-full justify-between mt-[20px]"> <!--second line total-->
                        <div class="flex items-center w-[420px] justify-between ml-[20px]"><!-- Total 3 -->
                            <div class="flex"> 
                                <img src="../../assets/images/Ipi scan/accountIco-3.png" alt="">   

                                <div class="flex flex-col ml-[18px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px]">Total IPI</p>
                                    <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[20px]">5,474,222</p>
                                </div>
                            </div>

                            <div class="flex items-end">
                                <div class="flex flex-col items-end mr-[20px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px]">24h</p>
                                    <p class="font-['Lato'] font-[400] text-[#27A17C] text-[14px]">+7,872</p>   
                                </div>
                            
                                <img src="../../assets/images/Ipi scan/pseudo.png" alt="">
                            </div>
                        </div><!--/ Total 3 -->

                        <div class="flex items-center w-[420px] justify-between ml-[20px]"><!-- Total 4 -->
                            <div class="flex"> 
                                <img src="../../assets/images/Ipi scan/accountIco-4.png" alt="">   

                                <div class="flex flex-col ml-[18px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px]">Total Transfer Volume</p>
                                    <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[20px]">$7,505,038</p>
                                </div>
                            </div>

                            <div class="flex items-end">
                                <div class="flex flex-col items-end mr-[20px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px]">24h</p>
                                    <p class="font-['Lato'] font-[400] text-[#27A17C] text-[14px]">+$12,601</p>   
                                </div>
                            </div>
                        </div><!--/ Total 4 -->
                   </div><!--/second line total-->

            
                </div>

                <div class="flex min-w-[427px] items-end min-h-[175px] bg-white/10 rounded-[10px] px-[20px] "><!--Schedule price-->

                    <div class="flex w-[286px] relative">

                        <span class="flex w-[290px] justify-between">
                            <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px]">1 Apr</p>
                            <p>10 Apr</p>
                            <p>20 Apr</p>
                            <p>30 Apr</p>
                            <p>1 May</p>
                        </span>

                       <!--  <img src="../../assets/images/Ipi scan/schedule/bg.png" alt="" class="absolute"> -->
                       
                    </div>

                </div>  

            </div><!--/Schedule price-->
         <!-- /Index block -->

        

       

    </div>
 </template>

<script setup>





</script>

<style lang="scss" scoped>

</style>