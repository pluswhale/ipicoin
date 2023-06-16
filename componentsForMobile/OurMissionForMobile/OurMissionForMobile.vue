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
      
        class="flex flex-col items-center mt-[20px] mx-[auto] h-[740px] max-w-[1400px]"
    >
        <h2 class="text-white uppercase text-[22px] font-[700] font-['Big_Shoulders_Stencil_Text']  mb-[50px]">ipi scan</h2>

        <!-- Searc block -->
        <div class="flex  items-center h-[48px]  mb-[20px]" >
            <div class="flex w-[308px]  bg-white/10 px-[20px] h-[40px] items-center rounded-[10px] mr-[10px]">
               <input type="text"  placeholder="Search by Token / Account / Contract / Block" class="placeholder:text-[#E0E0E0] placeholder:font-['Lato'] placeholder:font-[400] placeholder:text-[10px] outline-none w-[500px] bg-transparent text-[#E0E0E0] font-['Lato'] font-[400] text-[14px]">
               <img class="h-[24px] w-[24px]" src="~/assets/icons/mobile/our_mission/search_icon.svg" alt="" >  
            </div>
            <img src="~/assets/icons/mobile/our_mission/filter_icon.svg"/>
        </div>
         <!-- /Searc block -->

         <div class="flex items-center  mb-[40px]"><!-- Trending Searc -->
            <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[8px] mr-[10px]">Trending Search：</p>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-1.png" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[8px] uppercase">BNB</p>
            </div>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-2.png" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[8px] uppercase">BNB</p>
            </div>

            <div class="flex items-cente mr-[20px] gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-3.png" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[8px] uppercase">BNB</p>
            </div>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-4.png" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[8px] uppercase">BTC</p>
            </div>

            <div class="flex items-center  gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-5.png" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[8px] uppercase">BTC</p>
            </div>


         </div> <!-- /Trending Search -->

         <!-- Index block -->
            <div class="flex w-[343px] items-center justify-between mb-[10px]">
                <div class="flex w-full h-[239px] flex-col bg-white/10 rounded-[10px]">
                   <div class="flex flex-col gap-[] w-full justify-between mt-[25px]">
                     <!--first line total-->
                     <!-- Total 1 -->
                        <div class="flex items-center justify-between ml-[20px]">
                            <div class="flex"> 
                                <img src="~/assets/images/IpiScan/accountIco-1.png" alt="">   
                                <div class="flex flex-col ml-[18px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[12px]">Total Accounts</p>
                                    <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[16px]">5,474,222,080</p>
                                </div>
                            </div>

                            <div class="flex items-end">
                                <div class="flex flex-col items-end mr-[20px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[11px]">24h</p>
                                    <p class="font-['Lato'] font-[400] text-[#27A17C] text-[11px]">+221,517</p>   
                                </div>
                            
 
                            </div>
                        </div><!--/ Total 1 -->

                        <div class="flex items-center justify-between ml-[20px]"><!-- Total 3 -->
                            <div class="flex"> 
                                <img src="~/assets/images/IpiScan/accountIco-3.png" alt="">   

                                <div class="flex flex-col ml-[18px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[12px]">Total IPI</p>
                                    <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[16px]">5,474,222</p>
                                </div>
                            </div>

                            <div class="flex items-end">
                                <div class="flex flex-col items-end mr-[20px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[11px]">24h</p>
                                    <p class="font-['Lato'] font-[400] text-[#27A17C] text-[11px]">+7,872</p>   
                                </div>
                        
                            </div>
                        </div><!--/ Total 3 -->
                        <div class="flex items-center justify-between ml-[20px]"><!-- Total 2 -->
                            <div class="flex"> 
                                <img src="~/assets/images/IpiScan/accountIco-2.png" alt="">   

                                <div class="flex flex-col ml-[18px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[12px]">TVL</p>
                                    <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[16px]">$12,168</p>
                                </div>
                            </div>

                            <div class="flex items-end">
                                <div class="flex flex-col items-end mr-[20px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[11px]">24h</p>
                                    <p class="font-['Lato'] font-[400] text-[#27A17C] text-[11px]">+0.53</p>   
                                </div>
                            </div>
                        </div><!--/ Total 2 -->

                        <div class="flex items-center justify-between ml-[20px]"><!-- Total 4 -->
                            <div class="flex"> 
                                <img src="~/assets/images/IpiScan/accountIco-4.png" alt="">   

                                <div class="flex flex-col ml-[18px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[12px]">Total Transfer Volume</p>
                                    <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[16px]">$7,505,038</p>
                                </div>
                            </div>

                            <div class="flex items-end">
                                <div class="flex flex-col items-end mr-[20px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[11px]">24h</p>
                                    <p class="font-['Lato'] font-[400] text-[#27A17C] text-[11px]">+$12,601</p>   
                                </div>
                            </div>
                        </div><!--/ Total 4 -->
                   </div><!--/first line total-->
                </div>
         </div>
         <!-- /Index block -->
        <!--Schedule price-->
        <div class="flex w-[343px] items-end min-h-[175px] bg-white/10 rounded-[10px]">

            <div class="flex flex-col w-[286px]"><!-- shedule -->

                <div class="flex flex-col absolute w-[177px]  translate-x-[85px] translate-y-[-25px]">
                    <p class="font-['Inter'] font-[400] text-[#749DCA] text-[12px]">Current price IPI</p>
                    <div class="flex items-center">
                        <p class="font-['Inter'] font-[700] text-[#E0E0E0] text-[16px]">$0.325</p> 
                        <span class="flex items-center bg-[#6FCF97]/10 rounded-[10px] ml-[10px] p-[3px]">
                            <p class="font-['Inter'] font-[400] text-[#219653] text-[10px]">+ 8,99%</p>
                            <div>
                            <img src="~/assets/images/IpiScan/schedule/arrowtop.png" alt="">
                            </div>
                        </span>
                    </div>

                </div>

                <div class=" flex flex-col w-[270px]">
                    <img  src="~/assets/images/IpiScan/schedule/bg.png" alt="" class="relative  top-0">  
                    <img src="~/assets/images/IpiScan/schedule/white-line.png" alt="" class="absolute w-[176px] translate-y-[-2px]  translate-x-[94px] ">  
                    <img src="~/assets/images/IpiScan/schedule/gray-line.png" alt="" class="absolute w-[95px] translate-y-[44px] translate-x-[0px] "> 
                    <img src="~/assets/images/IpiScan/schedule/dot.png" alt="" class="absolute translate-y-[49px] translate-x-[86px] ">
                        <span class="flex w-[270px] justify-between my-[10px]">
                        <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[7px]">1 Apr</p>
                        <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[7px]">10 Apr</p>
                        <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[7px]">20 Apr</p>
                        <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[7px]">30 Apr</p>
                        <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[7px]">1 May</p>
                    </span>
                </div>

            </div> <!--/shedule --> 

            <div class="flex flex-col w-[126px] translate-y-[-55px]"><!--shedule text -->
                <div class="flex items-center justify-between w-full mb-[5px]">
                    <p class="font-['Inter'] font-[400] text-[#749DCA] text-[9px]">Volume (24h):</p>
                    <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[9px]">$233.8</p>
                </div>

                <div class="flex items-center justify-between w-full">
                    <p class="font-['Inter'] font-[400] text-[#749DCA] text-[9px]">Market Cap :</p>
                    <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[9px]">$6.20</p>
                </div>
            </div>
            <!--/shedule text-->
        </div>
        <!--/Schedule price-->

        <div class="flex flex-col w-[343px] mt-[20px]  mb-[50px]"><!--Recent Blocks-->
            <div class="flex justify-between">
                <p class="font-['Inter'] font-[600] text-[#E0E0E0] text-[20px] mb-[10px]">Recent Blocks</p>
                <p class="font-['Inter'] text-[14px] font-[400] text-[white]">More</p>
            </div>
            

            <div class="flex w-full justify-between overflow-scroll no-scrollbar gap-[10px]"><!-- recend cards -->
                <div class="flex w-[305px] h-[120px] bg-white/10 rounded-[10px] px-[24px] pt-[20px] pb-[24px]"><!-- card 1 -->
                    <div class="flex flex-col h-full w-[50%] items-start">
                       <div class="flex flex-col mb-[20px]">
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[16px]">#50981505</p>
                            <p class="font-['Lato'] font-[400] text-[#749DCA] text-[12px]">5 secs ago</p>
                       </div>
                       <div class="flex items-center">
                        <p class="font-['Lato'] font-[300] text-[#E0E0E0] text-[12px] mt-[3px] mr-[5px]">Reward</p>
                        <p class="font-['Lato'] font-[500] text-[#E0E0E0] text-[14px]">176 IPI</p>
                       </div>
                    </div>

                    <div class="flex flex-col h-full w-[50%] items-end">
                        <div class="flex flex-col items-end">
                            <div class="flex items-center w-[114px] h-[20px] bg-[#BDBDBD]/40 rounded-[5px] mb-[5px]">
                                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] ml-[8px]">Intelligence </p>
                            </div>
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px] mb-[20px]">381 IPI</p>

                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px]">948.58552  IPI</p>
                        </div>
                    </div>

                </div><!-- /card 1 -->

                <div class="flex w-[305px] h-[120px] bg-white/10 rounded-[10px] px-[24px] pt-[20px] pb-[24px]"><!-- card 2 -->
                    <div class="flex flex-col h-full w-[50%] items-start">
                       <div class="flex flex-col mb-[20px]">
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[16px]">#50981504</p>
                            <p class="font-['Lato'] font-[400] text-[#749DCA] text-[12px]">10 secs ago</p>
                       </div>
                       <div class="flex items-center">
                        <p class="font-['Lato'] font-[300] text-[#E0E0E0] text-[12px] mt-[3px] mr-[5px]">Reward</p>
                        <p class="font-['Lato'] font-[500] text-[#E0E0E0] text-[14px]">176 IPI</p>
                       </div>
                    </div>

                    <div class="flex flex-col h-full w-[50%] items-end">
                        <div class="flex flex-col items-end">
                            <div class="flex items-center w-[114px] h-[20px] bg-[#BDBDBD]/40 rounded-[5px] mb-[5px]">
                                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] ml-[8px]">Smart Consen </p>
                            </div>
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px] mb-[20px]">381 IPI</p>

                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px]">948.58552  IPI</p>
                        </div>
                    </div>
                </div><!-- /card 2 -->

                <div class="flex w-[305px] h-[120px] bg-white/10 rounded-[10px] px-[24px] pt-[20px] pb-[24px]"><!-- card 3 -->
                    <div class="flex flex-col h-full w-[50%] items-start">
                       <div class="flex flex-col mb-[20px]">
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[16px]">#50981505</p>
                            <p class="font-['Lato'] font-[400] text-[#749DCA] text-[12px]">5 secs ago</p>
                       </div>
                       <div class="flex items-center">
                        <p class="font-['Lato'] font-[300] text-[#E0E0E0] text-[12px] mt-[3px] mr-[5px]">Reward</p>
                        <p class="font-['Lato'] font-[500] text-[#E0E0E0] text-[14px]">176 IPI</p>
                       </div>
                    </div>

                    <div class="flex flex-col h-full w-[50%] items-end">
                        <div class="flex flex-col items-end">
                            <div class="flex items-center w-[114px] h-[20px] bg-[#BDBDBD]/40 rounded-[5px] mb-[5px]">
                                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] ml-[8px]">Smart Consen </p>
                            </div>
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px] mb-[20px]">381 IPI</p>

                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px]">948.58552  IPI</p>
                        </div>
                    </div>
                </div><!-- /card 3 -->

                <div class="flex w-[305px] h-[120px] bg-white/10 rounded-[10px] px-[24px] pt-[20px] pb-[24px]"><!-- card 4 -->
                    <div class="flex flex-col h-full w-[50%] items-start">
                       <div class="flex flex-col mb-[20px]">
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[16px]">#50981505</p>
                            <p class="font-['Lato'] font-[400] text-[#749DCA] text-[12px]">5 secs ago</p>
                       </div>
                       <div class="flex items-center">
                        <p class="font-['Lato'] font-[300] text-[#E0E0E0] text-[12px] mt-[3px] mr-[5px]">Reward</p>
                        <p class="font-['Lato'] font-[500] text-[#E0E0E0] text-[14px]">176 IPI</p>
                       </div>
                    </div>

                    <div class="flex flex-col h-full w-[50%] items-end">
                        <div class="flex flex-col items-end">
                            <div class="flex items-center w-[114px] h-[20px] bg-[#BDBDBD]/40 rounded-[5px] mb-[5px]">
                                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] ml-[8px]">Smart Consen </p>
                            </div>
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px] mb-[20px]">381 IPI</p>

                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px]">948.58552  IPI</p>
                        </div>
                    </div>
                </div><!-- /card 4 -->

            </div><!-- /recend cards -->
         
         </div><!--/Recent Blocks-->
       
    </div>
 </template>

<script setup>





</script>

<style lang="scss" scoped>

</style>