<script setup language="ts">

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
        class="flex flex-col items-center w-full mt-[140px] max-w-[1400px] mx-auto my-0 translate-x-[-10px]" 
    >
        <h2 class="text-white uppercase text-[22px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[42px]">ecosystem</h2>
        <div class="flex flex-col w-[310px] relative justify-between ">
            <!--arrows-->            
                <img class="left-[86px] top-[80px] absolute " src="../../assets/icons/mobile/ecosytem/arrow_top_right_for_mobile.svg" alt=""/>
                <img class="left-[-10px] top-[10px] h-[167px]  absolute" src="../../assets/images/ecosystem/first_col_arrow_1.svg" alt=""/>
                <img class="left-[-10px] top-[200px]  absolute" alt="" src="../../assets/icons/mobile/ecosytem/arrow_left_bottom_for_mobile.svg" >
                <img class="right-[-10px] top-[50px]  absolute" alt="" src="../../assets/icons/mobile/ecosytem/arrow_right_top.svg" >
            <!--arrows-->

            <!--top part-->
            <div class="flex flex-row  ">
                <!--top block-->
                <div class="flex flex-row justify-between w-full">
                    <!--first left block-->
                    <div class="flex flex-col justify-start  relative">
                        <!--first top 5 card-->
                        <div class="flex flex-row">
                            <div class="flex flex-col">
                                <!-- little card-->
                                <div
                                    class="flex bg-[#9B51E01A]/10 w-[px] h-[35px]  justify-center cursor-pointer items-center rounded-[6px] "
                                  >
                                    <span class="font-['Inter'] text-[12px] font-[500] text-white text-center relative">iScan</span>
                                </div>
                                <!-- little card-->

                                <!-- little card-->
                                <div 
 
                                    class="flex bg-[#9B51E01A]/10 w-[87px] h-[35px] cursor-pointer mt-[14px] justify-center items-center rounded-[6px] " 
                                >
                                    <span class="font-['Inter'] text-[12px] font-[500] text-white text-center ">iWallet</span>
                                </div>
                                <!-- little card-->

                                <!-- little card-->
                                <div
                                    class="flex bg-[#9B51E01A]/10 w-[87px] h-[63px] cursor-pointer mt-[73px] justify-center items-center rounded-[6px] " 
                                >
                                    <span class="font-['Inter'] text-[12px] font-[500] text-white  text-center">index Real-time Indexer</span>
                                </div>
                                <!-- little card-->

                                <!-- little card-->
                                <div
                                     class="flex bg-[#9B51E01A]/10 w-[87px] h-[63px] cursor-pointer justify-center mt-[309px] items-center rounded-[6px] " 
                                >
                                    <span class="font-['Inter'] text-[12px] font-[500] text-white max-w-[179px] text-center">Solidity<br> to iVM Transpiler</span>
                                </div>
                            </div>
                        </div>
                        <!-- big card-->
                        <div
                            class="flex flex-col bg-[#9B51E01A]/10 w-[94px] h-[156px] mt-[174px] cursor-pointer justify-center items-center rounded-[6px] "
                        >
                            <span class="font-['Inter'] text-[12px] font-[500] text-white text-center ">Simple Transactions</span>
                            <div class="flex flex-col gap-[9px] mt-[5px]">
                                <span class="flex items-center justify-center w-[80px] h-[25px] bg-[#749CC799]/60 rounded-[6px] text-white text-['Inter'] text-[12px] font-[500] cursor-pointer transition duration-300 hover:scale-[1.03]">Transfer</span>
                                <span class="flex items-center justify-center w-[80px] h-[25px] bg-[#749CC799]/60 rounded-[6px] text-white text-['Inter'] text-[12px] font-[500] cursor-pointer transition duration-300 hover:scale-[1.03]">Create Asset</span>
                                <span class="flex items-center justify-center text-center w-[80px] h-[32px] bg-[#749CC799]/60 rounded-[6px] text-white text-['Inter'] text-[12px] leading-[14px] font-[500] cursor-pointer transition duration-300 hover:scale-[1.03]">Create Contract</span>
                            </div>
                        </div>
                        <!-- big card-->
                        <!--first TOP 5 card-->
                    </div>
                    <!--first left block-->

                    <!--top right block-->
                    <div class="flex">

                        <!-- main block wrapper-->
                        <div class="flex flex-col relative">
                            <!--first card -->
                            <div
                                class="mb-[7px] flex flex-col bg-[#FFFFFF33] w-[205px] h-[114px]  items-center justify-center rounded-[6px] "
                            >
                            <div class="flex flex-col    items-center justify-center rounded-[20px]">
                                    <span class="text-[#EC474E] text-[500] font-['Inter'] mb-[10px] text-[12px] font-[500] mt-[10px]">Web application</span>
                                    <div class="flex flex-col items-center gap-[10px] mb-[12px]">
                                        <span class="flex items-center justify-center cursor-pointer text-white bg-[#749CC799]/60 rounded-[20px] pl-[16px] w-[182px] pr-[16px] h-[25px] text-[12px] font-['Inter'] font-[500] transition duration-300 hover:scale-[1.03]
                                    ">iView - real-time view</span>
                                        <span class="flex items-center justify-center text-center cursor-pointer text-white bg-[#749CC799]/60 rounded-[20px] w-[182px] h-[35px] text-[12px] font-['Inter'] font-[500] transition duration-300 hover:scale-[1.03]">iAPI - frontend application programming interface</span>
                                    </div>
                                </div>
                            </div>
                            <!--first card -->

                            <!--second card -->
                            <div
                                class=" flex flex-col bg-[#FFFFFF33] items-center px-[9px] justify-center rounded-[6px] w-[205px]  h-[114px] mb-[10px]"
                                >
                                <span class="text-[#EC474E] text-[12px] font-['Inter'] mb-[10px] font-[500]">Web3 Protocols</span>
                                <div class="flex-wrap flex gap-[5px]">
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[63px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iSwap</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[54px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iPeg</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[54px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iNFT</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[63px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iLoan</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[54px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iFund</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[54px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iDAO</span>
                                </div> 
                                <span class="flex items-center mt-[5px] justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[80px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iGamble</span>  
                                
                            </div>
                            <!--second card -->

                            <!--third card -->
                            <div
                                class=" flex flex-col w-[205px] h-[273px] items-center text-center bg-[#FFFFFF33] rounded-[6px]   mb-[13px]"
                             >
                                <div class="flex mt-[10px] flex-col gap-[7px]">
                                    <span class="flex items-center w-[178px] justify-center text-white bg-[#749CC799]/60 rounded-[20px]  h-[25px] font-[500] text-[12px] font-['Inter'] cursor-pointer transition duration-300 hover:scale-[1.03]">iOff - offchain prover</span>
                                    <span class="flex items-center w-[178px] justify-center text-white bg-[#749CC799]/60 rounded-[20px]  h-[35px] font-[500] text-[12px] font-['Inter'] cursor-pointer transition duration-300 hover:scale-[1.03]">iRemote - provable remote chain reader</span>
                                    <span class="flex items-center w-[178px] justify-center text-white bg-[#749CC799]/60 rounded-[20px]  h-[25px] font-[500] text-[12px] font-['Inter'] cursor-pointer transition duration-300 hover:scale-[1.03]">iwait - Triggers platform</span>
                                    <span class="flex items-center w-[178px] justify-center text-white bg-[#749CC799]/60 rounded-[20px]  h-[35px] font-[500] text-[12px] font-['Inter'] cursor-pointer transition duration-300 hover:scale-[1.03]">iLater - <br/> Continuations system</span>
                                    <span class="flex items-center w-[178px] justify-center text-white bg-[#749CC799]/60 rounded-[20px]  h-[35px] font-[500] text-[12px] font-['Inter'] cursor-pointer transition duration-300 hover:scale-[1.03]">iPrize - prize based <br/> defered execution</span>
                                    <span class="flex items-center w-[178px] justify-center text-white bg-[#749CC799]/60 rounded-[20px]  h-[25px] font-[500] text-[12px] font-['Inter'] cursor-pointer transition duration-300 hover:scale-[1.03]">iLink - Provable Web Link</span>
                                </div>                            
                                <span class="text-[#EC474E] text-[400] font-['Inter'] mt-[3px] mb-[9px] font-[500] text-[12px]">iEnv -Basic Smart <br/> Contract Building blocks </span>
                            </div>
                            <!--third card -->

                            <!--fourth card -->
                            <div
                                class=" flex justify-between "
                             >
                                <div 
                                    class="flex w-[68px] items-center justify-center bg-[#FFFFFF33] h-[70px] rounded-[6px] text-white text-center"
                                >
                                   <p class="text-white text-[12px] font-[500] leading-[16px] font-['Inter'] w-[100%]">Low level and transpiled contracts</p> 
                                </div>

                                <div 
                                    class="flex w-[111px] h-[160px] flex-col items-center bg-[#FFFFFF33] rounded-[6px]  text-center"
                                >
                                    <span class="text-[#EC474E] text-[12px] leading-[16x] font-[500] font-['Inter'] mt-[3px] ">iWASM <br/> Transpiler</span>
                                    <div class="flex flex-col items-center gap-[7px] mt-[5px]">
                                        <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[8px] w-[98px] h-[25px] text-[12px] font-[500] font-['Inter'] pb-[3px] cursor-pointer transition duration-300 hover:scale-[1.03]">Asyncify</span>
                                        <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[8px] w-[98px] h-[25px] text-[12px] font-[500] font-['Inter'] pb-[3px] cursor-pointer transition duration-300 hover:scale-[1.03]">Optimizer</span>
                                        <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[8px] w-[98px] h-[44px] text-[12px] font-[500] font-['Inter'] pb-[3px] cursor-pointer transition duration-300 hover:scale-[1.03]">iRPC definitions extraction</span>
                                    </div> 
                                    
                                </div>
                            </div>
                            <!--fourth card -->

                            <!--five card -->
                            <div
                                class=" flex flex-col items-center bg-[#FFFFFF33] rounded-[6px] mt-[7px] w-[205px] h-[226px]"
                             >
                                <span class="text-[#EC474E] text-[14px] font-[700] font-['Quicksand'] mt-[6px] mb-[0px]">iVM</span>
                                <div class="flex flex-col gap-[6px] bg-white/20 rounded-[10px] w-[180px] h-[116px] justify-center items-center mb-[5px] px-[20px]">
                                    <span class="text-[12px] text-center text-white font-['Inter'] font-[500]  leading-[12px] ">iWASM Transpiler</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[10px] w-[115px] h-[25px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">Gas Metering</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[10px] w-[115px] h-[25px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">SoftFloat</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[10px] w-[115px] h-[25px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">SoftFloat</span>
                                </div>
                                <div class="flex bg-white/20 rounded-[6px] h-[29px] w-[180px]  justify-center items-center mb-[3px]">
                                    <span class="text-white font-['Inter'] font-[500] leading-[14px] text-[12px] text-center">WAVM -Fastest WebAssembly Virtual Machine</span>
                                </div>

                                <div class="flex bg-white/20  rounded-[6px] h-[28px] w-[180px]  justify-center items-center">
                                    <span class=" text-white font-['Inter'] font-[500] text-[12px] leading-[14px]  text-center">Contract linking and <br/> communitation layer</span>
                                </div>

                            </div>
                            <!--five card -->
                        </div>
                        <!-- main block wrapper-->
                    </div>
                    <!--top right block-->
                </div>
                <!--top block-->    
            </div>
            <!--top part-->
            
            <!--bottom part-->
            <div class="flex flex-col mt-[35px]  ">                
                <!--bottom block-->
                <div class="flex flex-col w-[310px] items-center bg-[#749CC733]/20 rounded-[6px] h-[182px] justify-center relative ">
                    <div class="flex flex-col w-[95%] items-center justify-between mt-[0px] gap-[10px] ">
                        <span class="flex items-center justify-center text-white bg-[#749CC7] rounded-[20px] w-[219px] h-[25px] font-['Inter'] font-[500] text-[12px]">Accounts</span>
                        <span class="flex items-center justify-center text-white bg-[#749CC7] rounded-[20px] w-[219px] h-[25px] font-['Inter'] font-[500] text-[12px]">Assets</span>
                        <span class="flex items-center justify-center text-white bg-[#749CC7] rounded-[20px] w-[219px] h-[25px] font-['Inter'] font-[500] text-[12px]">Code</span>
                        <span class="flex items-center justify-center text-white bg-[#749CC7] rounded-[20px] w-[219px] h-[25px] font-['Inter'] font-[500] text-[12px]">Key-Vaylue Data</span>
                    </div>
                    <span class=" text-[#EC474E] font-['Quicksand'] font-[500] text-[12px] mt-[9px] leading-[16px]">Ledger Storage</span>
                    <img class="absolute left-[28px] top-[-38px] " src="../../assets/icons/mobile/ecosytem/bottom_arrows/arrow_bottom_left.svg"/>
                    <img class="absolute  right-[20px] top-[-38px]" src="../../assets/icons/mobile/ecosytem/bottom_arrows/arrow_bottom_right.svg"/>
                </div>
            </div>
            <!--bottom part-->
        </div>

    </div>
</template>


<style lang="scss" scoped>

$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);

.blockHover {
    &:hover {
        transition: 0.6s $hoverEasing,
            box-shadow 2s $hoverEasing;
            box-shadow:
                rgba(white, 0.2) 0 0 40px 5px,
                rgba(white, 0.2 ) 0 0 0 1px,
        }
    }
</style>