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
      
        class="flex flex-col items-center mt-[100px] h-[574px] max-w-[1400px] mx-auto my-0"
    >
        <h2 class="text-white uppercase text-[40px] font-[700] font-['Big Shoulders Stencil Text, cursive'] mb-[50px]">ipi scan</h2>


        <!-- Searc block -->
        <div class="flex w-full items-center h-[48px] bg-white/10 rounded-[10px] px-[20px] justify-between mb-[20px]" >

            <div class="flex gap-[5px]">
               <img src="../../assets/images/Ipi scan/search.png" alt="" class="mr-[17px]">  

               <input type="text"  placeholder="Search by Token / Account / Contract / Block" class="placeholder:text-[#E0E0E0] placeholder:font-['Lato'] placeholder:font-[400] placeholder:text-[14px] outline-none w-[500px] bg-transparent text-[#E0E0E0] font-['Lato'] font-[400] text-[14px]">
            </div>

            <div class="flex items-center">
                <p class=" font-['Lato'] font-[400] text-[#E0E0E0] text-[20px] mr-[20px]">|</p>
                <p class="font-['Lato'] font-[400] text-[#E0E0E0] text-[14px] mr-[7px]">All Filters</p>
                <img src="../../assets/images/Ipi scan/chevron-down.png" alt="" class="mt-[3px] cursor-pointer">
            </div>

        </div>
         <!-- /Searc block -->

         <div class="flex items-center w-full mb-[60px]"><!-- Trending Searc -->
            <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] mr-[10px]">Trending Search：</p>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="../../assets/images/Ipi scan/trending/logo-1.png" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] uppercase">BNB</p>
            </div>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="../../assets/images/Ipi scan/trending/logo-2.png" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] uppercase">BNB</p>
            </div>

            <div class="flex items-cente mr-[20px] gap-[2px]">
                <img src="../../assets/images/Ipi scan/trending/logo-3.png" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] uppercase">BNB</p>
            </div>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="../../assets/images/Ipi scan/trending/logo-4.png" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] uppercase">BTC</p>
            </div>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="../../assets/images/Ipi scan/trending/logo-5.png" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] uppercase">BTC</p>
            </div>

            <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] ml-[10px]">More</p>


         </div> <!-- /Trending Search -->

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

                    <div class="flex flex-col w-[286px]"><!-- shedule -->

                        <div class="flex flex-col absolute w-[177px]  translate-x-[85px] translate-y-[-25px]">
                            <p class="font-['Inter'] font-[400] text-[#749DCA] text-[14px]">Current price IPI</p>
                            <div class="flex items-center">
                                <p class="font-['Inter'] font-[700] text-[#E0E0E0] text-[20px]">$0.325</p> 
                                <span class="flex items-center bg-[#6FCF97]/10 rounded-[10px] ml-[10px] p-[3px]">
                                    <p class="font-['Inter'] font-[400] text-[#219653] text-[12px]">+ 8,99%</p>
                                    <div>
                                    <img src="../../assets/images/Ipi scan/schedule/arrow top.png" alt="">
                                    </div>
                                </span>
                            </div>

                        </div>

                        <div class=" flex w-[270px]">
                            <img src="../../assets/images/Ipi scan/schedule/bg.png" alt="" class="relative top-0">  
                            <img src="../../assets/images/Ipi scan/schedule/white-line.png" alt="" class="absolute w-[176px] translate-y-[-2px]  translate-x-[94px] ">  
                            <img src="../../assets/images/Ipi scan/schedule/gray-line.png" alt="" class="absolute w-[95px] translate-y-[44px] translate-x-[0px] "> 
                            <img src="../../assets/images/Ipi scan/schedule/dot.png" alt="" class="absolute translate-y-[49px] translate-x-[86px] "> 
                        </div>

                        <span class="flex w-[270px] justify-between my-[10px]">
                            <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px]">1 Apr</p>
                            <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px]">10 Apr</p>
                            <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px]">20 Apr</p>
                            <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px]">30 Apr</p>
                            <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px]">1 May</p>
                        </span>

                    </div><!--/shedule -->

                    <div class="flex flex-col w-[126px] translate-y-[-55px]"><!--shedule text -->
                        <div class="flex items-center justify-between w-full mb-[5px]">
                            <p class="font-['Inter'] font-[400] text-[#749DCA] text-[12px]">Volume (24h):</p>
                            <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px]">$233.8</p>
                        </div>

                        <div class="flex items-center justify-between w-full">
                            <p class="font-['Inter'] font-[400] text-[#749DCA] text-[12px]">Market Cap :</p>
                            <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px]">$6.20</p>
                        </div>
                    </div><!--/shedule text-->

                </div>  

            </div><!--/Schedule price-->
         <!-- /Index block -->

        

       

    </div>
 </template>

<script setup>





</script>

<style lang="scss" scoped>

</style>