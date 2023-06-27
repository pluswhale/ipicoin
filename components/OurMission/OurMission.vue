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
      
        class="flex flex-col items-center mt-[100px] h-[740px] max-w-[1400px] mx-auto sm:max-w-auto sm:hidden xl:w-[900px] xl:h-[500px]
        xl:mt-[40px] md:w-[560px] md:h-[480px] ">
        <h2 class="text-white uppercase text-[40px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[50px] xl:text-[26px] md:text-[22px]">ipi scan</h2>


        <!-- Searc block -->
        <div class="flex w-full items-center h-[48px] bg-white/10 rounded-[10px] px-[20px] justify-between mb-[20px] xl:h-[40px] xl:mb-[10px] md:h-[40px] md:mb-[5px] md:px-[10px] md:py-[6px]" >

            <div class="flex gap-[5px]">
               <img src="~/assets/images/IpiScan/search.png" alt="" class="mr-[17px] md:mr-[11px] md:w-[16px]">  

               <input type="text"  placeholder="Search by Token / Account / Contract / Block" class="placeholder:text-[#E0E0E0] placeholder:font-['Lato'] placeholder:font-[400] placeholder:text-[14px] 
               outline-none w-[500px] bg-transparent text-[#E0E0E0] font-['Lato'] font-[400] text-[14px] xl:placeholder:text-[12px] xl:text-[12px] md:placeholder:text-[10px] md:w-[300px]">
            </div>

            <div class="flex items-center">
                <p class=" font-['Lato'] font-[400] text-[#E0E0E0] text-[20px] mr-[20px] xl:text-[18px] md:text-[15px]">|</p>
                <p class="font-['Lato'] font-[400] text-[#E0E0E0] text-[14px] mr-[7px] xl:text-[12px] md:text-[10px] md:mr-[5px] md:mt-[3px]">All Filters</p>
                <img src="~/assets/images/IpiScan/chevron-down.png" alt="" class="mt-[3px] cursor-pointer md:w-[12px]">
            </div>

        </div>
         <!-- /Searc block -->

         <div class="flex items-center w-full mb-[60px] xl:mb-[20px]"><!-- Trending Searc -->
            <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] mr-[10px] xl:text-[10px]">Trending Search：</p>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-1.svg" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] uppercase xl:text-[10px]">BNB</p>
            </div>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-2.svg" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] uppercase xl:text-[10px]">BNB</p>
            </div>

            <div class="flex items-cente mr-[20px] gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-3.svg" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] uppercase xl:text-[10px]">BNB</p>
            </div>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-4.svg" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] uppercase xl:text-[10px]">BTC</p>
            </div>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-5.svg" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] uppercase xl:text-[10px]">BTC</p>
            </div>

            <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] ml-[10px] xl:text-[10px]">More</p>


         </div> <!-- /Trending Search -->

         <!-- Index block -->
            <div class="flex w-full items-center justify-between mb-[36px] xl:gap-[15px] xl:mb-[24px] md:flex-col md:justify-start md:w-[560px] md:items-baseline">

                <div class="flex flex-col min-w-[881px] min-h-[175px] bg-white/10 rounded-[10px] xl:min-w-[590px] xl:min-h-[117px] md:min-h-[110px] md:min-w-[560px] md:w-[560px]">

                   <div class="flex w-full justify-between mt-[25px] xl:mt-[16px] md:min-w-[560px]"> <!--first line total-->
                        <div class="flex items-center w-[420px] justify-between ml-[20px] xl:ml-[13px] "><!-- Total 1 -->
                            <div class="flex"> 
                                <img src="~/assets/images/IpiScan/accountIco-1.png" class="xl:w-[26px] xl:h-[26px]" alt="" >   

                                <div class="flex flex-col ml-[18px] xl:ml-[13px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px] xl:text-[10px]">Total Accounts</p>
                                    <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[20px] xl:text-[14px]">5,474,222,080</p>
                                </div>
                            </div>

                            <div class="flex items-end">
                                <div class="flex flex-col items-end mr-[20px] xl:mr-[13px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px] xl:text-[10px]">24h</p>
                                    <p class="font-['Lato'] font-[400] text-[#27A17C] text-[14px] xl:text-[10px]">+221,517</p>   
                                </div>
                            
                                <img src="~/assets/images/IpiScan/pseudo.png" alt="">
                            </div>
                        </div><!--/ Total 1 -->

                        <div class="flex items-center w-[420px] justify-between ml-[20px] xl:ml-[13px]"><!-- Total 2 -->
                            <div class="flex"> 
                                <img src="~/assets/images/IpiScan/accountIco-2.png" class="xl:w-[26px] xl:h-[26px]" alt="">   

                                <div class="flex flex-col ml-[18px]  xl:ml-[13px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px] xl:text-[10px]">TVL</p>
                                    <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[20px] xl:text-[14px]">$12,168</p>
                                </div>
                            </div>

                            <div class="flex items-end">
                                <div class="flex flex-col items-end mr-[20px] xl:mr-[13px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px] xl:text-[10px]">24h</p>
                                    <p class="font-['Lato'] font-[400] text-[#27A17C] text-[14px] xl:text-[10px]">+0.53</p>   
                                </div>
                            </div>
                        </div><!--/ Total 2 -->
                   </div><!--/first line total-->

                   <div class="flex w-full justify-between mt-[20px] xl:mt-[16px]"> <!--second line total-->
                        <div class="flex items-center w-[420px] justify-between ml-[20px] xl:ml-[13px]"><!-- Total 3 -->
                            <div class="flex"> 
                                <img src="~/assets/images/IpiScan/accountIco-3.png" class="xl:w-[26px] xl:h-[26px]"  alt="">   

                                <div class="flex flex-col ml-[18px] xl:ml-[13px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px] xl:text-[10px]">Total IPI</p>
                                    <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[20px] xl:text-[14px]">5,474,222</p>
                                </div>
                            </div>

                            <div class="flex items-end">
                                <div class="flex flex-col items-end mr-[20px] xl:mr-[13px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px] xl:text-[10px]">24h</p>
                                    <p class="font-['Lato'] font-[400] text-[#27A17C] text-[14px] xl:text-[10px]">+7,872</p>   
                                </div>
                            
                                <img src="~/assets/images/IpiScan/pseudo.png" alt="">
                            </div>
                        </div><!--/ Total 3 -->

                        <div class="flex items-center w-[420px] justify-between ml-[20px] xl:ml-[13px]"><!-- Total 4 -->
                            <div class="flex"> 
                                <img src="~/assets/images/IpiScan/accountIco-4.png" class="xl:w-[26px] xl:h-[26px]"  alt="">   

                                <div class="flex flex-col ml-[18px] xl:ml-[13px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px] xl:text-[10px]">Total Transfer Volume</p>
                                    <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[20px] xl:text-[14px]">$7,505,038</p>
                                </div>
                            </div>

                            <div class="flex items-end">
                                <div class="flex flex-col items-end mr-[20px] xl:mr-[13px]">
                                    <p class="font-['Lato'] font-[400] text-[#749DCA] text-[14px] xl:text-[10px]">24h</p>
                                    <p class="font-['Lato'] font-[400] text-[#27A17C] text-[14px] xl:text-[10px]">+$12,601</p>   
                                </div>
                            </div>
                        </div><!--/ Total 4 -->
                   </div><!--/second line total-->

            
                </div>

                <div class="flex min-w-[427px] items-end min-h-[175px] bg-white/10 rounded-[10px] px-[20px] xl:min-w-[287px] xl:min-h-[117px] md:min-w-[560px] md:w-[560px]"><!--Schedule price-->

                    <div class="flex flex-col w-[286px] xl:w-[280px] md:translate-x-[50px]"><!-- shedule -->

                        <div class="flex flex-col absolute w-[177px] translate-x-[85px] translate-y-[-25px] xl:translate-y-[-7px] xl:translate-x-[39px] ">
                            <p class="font-['Inter'] font-[400] text-[#749DCA] text-[14px] xl:text-[10px]">Current price IPI</p>
                            <div class="flex items-center">
                                <p class="font-['Inter'] font-[700] text-[#E0E0E0] text-[20px] xl:text-[14px]">$0.325</p> 
                                <span class="flex items-center bg-[#6FCF97]/10 rounded-[10px] ml-[10px] p-[3px] xl:ml-[3px] xl:p-[1px]">
                                    <p class="font-['Inter'] font-[400] text-[#219653] text-[12px] xl:text-[8px]">+ 8,99%</p>
                                    <div>
                                    <img src="~/assets/images/IpiScan/schedule/arrowtop.png" alt="" class="xl:w-[6px] xl:ml-[1px]">
                                    </div>
                                </span>
                            </div>

                        </div>

                        <div class=" flex flex-col w-[270px] xl:w-[190px]">
                            <img src="~/assets/images/IpiScan/schedule/bg.png" alt="" class="relative top-0 xl:w-[190px] xl:translate-y-[10px] xl:translate-x-[-20px]">  
                            <img src="~/assets/images/IpiScan/schedule/white-line.png" alt="" class="absolute w-[176px] translate-y-[-2px] translate-x-[94px] 
                            xl:translate-y-[8px] xl:translate-x-[46px] xl:w-[125px]">  
                            <img src="~/assets/images/IpiScan/schedule/gray-line.png" alt="" class="absolute w-[95px] translate-y-[44px] translate-x-[0px] 
                            xl:translate-y-[43px] xl:translate-x-[-17px] xl:w-[62px]"> 
                            <img src="~/assets/images/IpiScan/schedule/dot.png" alt="" class="absolute translate-y-[49px] translate-x-[86px]
                            xl:translate-y-[44px] xl:translate-x-[40px] xl:w-[10px]">
                             <span class="flex w-[270px] justify-between my-[10px] xl:w-[190px] xl:translate-y-[1px] xl:translate-x-[-13px]">
                                <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px] xl:text-[6px]">1 Apr</p>
                                <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px] xl:text-[6px]">10 Apr</p>
                                <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px] xl:text-[6px]">20 Apr</p>
                                <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px] xl:text-[6px]">30 Apr</p>
                                <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px] xl:text-[6px]">1 May</p>
                            </span>
                        </div>

                    </div> <!--/shedule --> 

                    <div class="flex flex-col w-[126px] translate-y-[-55px] xl:translate-y-[-30px] xl:translate-x-[-11px] md:w-[136px] md:translate-x-[20px]"><!--shedule text -->
                        <div class="flex items-center justify-between w-full mb-[5px]">
                            <p class="font-['Inter'] font-[400] text-[#749DCA] text-[12px] xl:text-[9px] xl:w-[60px] md:text-[13px] md:w-[92px]">Volume (24h):</p>
                            <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px] xl:text-[9px] md:text-[13px]">$233.8</p>
                        </div>

                        <div class="flex items-center justify-between w-full">
                            <p class="font-['Inter'] font-[400] text-[#749DCA] text-[12px] xl:text-[9px] md:text-[13px] md:w-[100px]">Market Cap :</p>
                            <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[12px] xl:text-[9px] md:text-[13px]">$6.20</p>
                        </div>
                    </div><!--/shedule text-->

               

            </div><!--/Schedule price-->
        </div>
         <!-- /Index block -->

        <div class="flex flex-col w-full mb-[50px] xl:mb-[39px]"><!--Recent Blocks-->
            <p class="font-['Inter'] font-[600] text-[#E0E0E0] text-[20px] mb-[10px] xl:mb-[6px] xl:text-[14px] md:text-[13px]">Recent Blocks</p>

            <div class="flex w-full justify-between md:justify-center md:gap-[10px]"><!-- recend cards -->

                <div class="flex w-[305px] h-[120px] bg-white/10 rounded-[10px] px-[24px] pt-[20px] pb-[24px] xl:w-[205px] 
                xl:px-[16px] xl:py-[14px] xl:h-[81px] md:w-[205px]"><!-- card 1 -->
                    <div class="flex flex-col h-full w-[50%] items-start">
                       <div class="flex flex-col mb-[20px] xl:mb-[14px]">
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[16px] xl:text-[10px]">#50981505</p>
                            <p class="font-['Lato'] font-[400] text-[#749DCA] text-[12px] xl:text-[8px]">5 secs ago</p>
                       </div>
                       <div class="flex items-center">
                        <p class="font-['Lato'] font-[300] text-[#E0E0E0] text-[12px] mt-[3px] mr-[5px] xl:text-[8px]">Reward</p>
                        <p class="font-['Lato'] font-[500] text-[#E0E0E0] text-[14px] xl:text-[9px]">176 IPI</p>
                       </div>
                    </div>

                    <div class="flex flex-col h-full w-[50%] items-end">
                        <div class="flex flex-col items-end">
                            <div class="flex items-center w-[114px] h-[20px] bg-[#BDBDBD]/40 rounded-[5px] mb-[5px] xl:w-[60px] xl:h-[11px] xl:mb-[4px]">
                                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] ml-[8px] xl:text-[8px] xl:ml-[4px]">Intelligence </p>
                            </div>
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px] mb-[20px] xl:text-[8px] xl:mb-[13px]">381 IPI</p>

                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px] xl:text-[8px]">948.58552  IPI</p>
                        </div>
                    </div>

                </div><!-- /card 1 -->

                <div class="flex w-[305px] h-[120px] bg-white/10 rounded-[10px] px-[24px] pt-[20px] pb-[24px] xl:w-[205px] 
                xl:px-[16px] xl:py-[14px] xl:h-[81px]"><!-- card 2 -->
                    <div class="flex flex-col h-full w-[50%] items-start">
                       <div class="flex flex-col mb-[20px] xl:mb-[14px]">
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[16px] xl:text-[10px]">#50981504</p>
                            <p class="font-['Lato'] font-[400] text-[#749DCA] text-[12px] xl:text-[8px]">10 secs ago</p>
                       </div>
                       <div class="flex items-center">
                        <p class="font-['Lato'] font-[300] text-[#E0E0E0] text-[12px] mt-[3px] mr-[5px] xl:text-[8px]">Reward</p>
                        <p class="font-['Lato'] font-[500] text-[#E0E0E0] text-[14px] xl:text-[9px]">176 IPI</p>
                       </div>
                    </div>

                    <div class="flex flex-col h-full w-[50%] items-end">
                        <div class="flex flex-col items-end">
                            <div class="flex items-center w-[114px] h-[20px] bg-[#BDBDBD]/40 rounded-[5px] mb-[5px] xl:w-[60px] xl:h-[11px] xl:mb-[4px]">
                                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] ml-[8px] xl:text-[7px] xl:mt-[1px] xl:ml-[4px]">Smart Consen </p>
                            </div>
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px] mb-[20px] xl:text-[8px] xl:mb-[13px]">381 IPI</p>

                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px] xl:text-[8px]">948.58552  IPI</p>
                        </div>
                    </div>
                </div><!-- /card 2 -->

                <div class="flex w-[305px] h-[120px] bg-white/10 rounded-[10px] px-[24px] pt-[20px] pb-[24px] xl:w-[205px] 
                xl:px-[16px] xl:py-[14px] xl:h-[81px]"><!-- card 3 -->
                    <div class="flex flex-col h-full w-[50%] items-start">
                       <div class="flex flex-col mb-[20px] xl:mb-[14px]">
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[16px] xl:text-[10px]">#50981505</p>
                            <p class="font-['Lato'] font-[400] text-[#749DCA] text-[12px] xl:text-[8px]">5 secs ago</p>
                       </div>
                       <div class="flex items-center">
                        <p class="font-['Lato'] font-[300] text-[#E0E0E0] text-[12px] mt-[3px] mr-[5px] xl:text-[8px]">Reward</p>
                        <p class="font-['Lato'] font-[500] text-[#E0E0E0] text-[14px] xl:text-[9px]">176 IPI</p>
                       </div>
                    </div>

                    <div class="flex flex-col h-full w-[50%] items-end">
                        <div class="flex flex-col items-end">
                            <div class="flex items-center w-[114px] h-[20px] bg-[#BDBDBD]/40 rounded-[5px] mb-[5px] xl:w-[60px] xl:h-[11px] xl:mb-[4px]">
                                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] ml-[8px] xl:text-[7px] xl:mt-[1px] xl:ml-[4px]">Smart Consen </p>
                            </div>
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px] mb-[20px] xl:text-[8px] xl:mb-[13px]">381 IPI</p>

                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px] xl:text-[8px]">948.58552  IPI</p>
                        </div>
                    </div>
                </div><!-- /card 3 -->

                <div class="flex w-[305px] h-[120px] bg-white/10 rounded-[10px] px-[24px] pt-[20px] pb-[24px] xl:w-[205px] 
                xl:px-[16px] xl:py-[14px] xl:h-[81px] md:hidden"><!-- card 4 -->
                    <div class="flex flex-col h-full w-[50%] items-start">
                       <div class="flex flex-col mb-[20px] xl:mb-[14px]">
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[16px] xl:text-[10px]">#50981505</p>
                            <p class="font-['Lato'] font-[400] text-[#749DCA] text-[12px] xl:text-[8px]">5 secs ago</p>
                       </div>
                       <div class="flex items-center">
                        <p class="font-['Lato'] font-[300] text-[#E0E0E0] text-[12px] mt-[3px] mr-[5px] xl:text-[8px]">Reward</p>
                        <p class="font-['Lato'] font-[500] text-[#E0E0E0] text-[14px] xl:text-[9px]">176 IPI</p>
                       </div>
                    </div>

                    <div class="flex flex-col h-full w-[50%] items-end">
                        <div class="flex flex-col items-end">
                            <div class="flex items-center w-[114px] h-[20px] bg-[#BDBDBD]/40 rounded-[5px] mb-[5px] xl:w-[60px] xl:h-[11px] xl:mb-[4px]">
                                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[12px] ml-[8px] xl:text-[7px] xl:mt-[1px] xl:ml-[4px]">Smart Consen </p>
                            </div>
                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px] mb-[20px] xl:text-[8px] xl:mb-[13px]">381 IPI</p>

                            <p class="font-['Lato'] font-[700] text-[#E0E0E0] text-[12px] xl:text-[8px]">948.58552  IPI</p>
                        </div>
                    </div>
                </div><!-- /card 4 -->

            </div><!-- /recend cards -->
         
         </div><!--/Recent Blocks-->

            <div class="flex w-full justify-center items-center md:hidden">
                <button class=" flex items-center justify-center w-[211px] h-[48px] bg-[#EC474E] rounded-[20px] xl:w-[166px] xl:h-[30px]">
                    <p class="font-['Inter'] font-[700] text-[#FFFFFF] text-[16px] uppercase mr-[5px] xl:text-[12px]">scaner</p>
                    <img src="~/assets/images/IpiScan/arrow-right.png" alt="" class="xl:w-[29px]">
                </button>
            </div>
    </div>

      <!-- Mobile Version -->

    <div class="h-[740px] max-w-[1400px] hidden sm:flex sm:flex-col sm:items-center sm:mt-[80px] sm:mx-[auto]">
         <h2 class="text-white uppercase text-[22px] font-[700] font-['Big_Shoulders_Stencil_Text']  mb-[50px]">ipi scan</h2>
        <div class="flex items-center h-[48px] mb-[20px]">
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
                <img src="~/assets/images/IpiScan/trending/logo-1.svg" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[8px] uppercase">BNB</p>
            </div>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-2.svg" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[8px] uppercase">BNB</p>
            </div>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-3.svg" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] translate-y-[0px] text-[8px] uppercase">BNB</p>
            </div>

            <div class="flex items-center mr-[20px] gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-4.svg" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[8px] uppercase">BTC</p>
            </div>

            <div class="flex items-center  gap-[2px]">
                <img src="~/assets/images/IpiScan/trending/logo-5.svg" alt="">
                <p class="font-['Inter'] font-[400] text-[#E0E0E0] text-[8px] uppercase ml-[2px]">BTC</p>
            </div>


         </div> <!-- /Trending Search -->

         <!-- Index block -->
            <div class="flex w-[343px] items-center justify-between mb-[10px]">
                <div class="flex w-full h-[239px] flex-col bg-white/10 rounded-[10px]">
                   <div class="flex flex-col gap-[10px] w-full justify-between mt-[25px]">
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

                <div class=" flex flex-col w-[223px]">
                    <img  src="~/assets/images/IpiScan/schedule/bg.png" alt="" class="relative  top-0">  
                    <img src="~/assets/images/IpiScan/schedule/white-line.png" alt="" class="absolute w-[146px] translate-y-[-1px]  translate-x-[77px] ">  
                    <img src="~/assets/images/IpiScan/schedule/gray-line.png" alt="" class="absolute w-[80px] translate-y-[35px] translate-x-[-1px] "> 
                    <img src="~/assets/images/IpiScan/schedule/dot.png" alt="" class="absolute translate-y-[37px] translate-x-[72px] ">
                        <span class="flex w-[223px] justify-between my-[10px] translate-x-[8px]">
                        <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[7px]">1 Apr</p>
                        <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[7px]">10 Apr</p>
                        <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[7px]">20 Apr</p>
                        <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[7px]">30 Apr</p>
                        <p class="font-['Inter'] font-[400] text-[#FFFFFF] text-[7px]">1 May</p>
                    </span>
                </div>

            </div> <!--/shedule --> 

            <div class="flex flex-col w-[126px] translate-y-[-55px] translate-x-[-8px]"><!--shedule text -->
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
        
        <!-- /Mobile Version -->
 </template>

<script setup>





</script>

<style lang="scss" scoped>

</style>