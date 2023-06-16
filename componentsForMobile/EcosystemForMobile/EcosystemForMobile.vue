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
        <h2 class="text-white uppercase text-[40px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[42px]">ecosystem</h2>
        <div class="flex flex-col max-w-[300px] justify-between">
            <!--top part-->
            <div class="flex flex-row justify-between translate-x-[-65px]">
                <!--first arrows-->
                <div class="flex flex-col gap-[33px]">
                    <img class="translate-y-[92px] translate-x-[188px] absolute " src="../../assets/icons/mobile/ecosytem/arrow_top_right_for_mobile.svg" alt=""/>
                    <img class="translate-y-[11px] translate-x-[70px] h-[188px] absolute" src="../../assets/images/ecosystem/first_col_arrow_1.svg" alt=""/>
                    <img src="../../assets/icons/mobile/ecosytem/arrow_left_bottom_for_mobile.svg" class="translate-y-[250px] translate-x-[70px] h-[480px]  absolute" alt="">
                    <img src="../../assets/images/platform/arrow4.svg" class="left-[180px] bottom-[80px]  absolute" alt="">
                </div>
                <!--first arrows-->

                <!--top block-->
                <div class="flex flex-row">
                    <!--first left block-->
                    <div class="flex flex-col justify-start translate-x-[100px] relative">
                        <!--first 4 card and arrows-->
                        <div class="flex flex-row">
                            <div class="flex flex-col">
                                <!-- little card-->
                                <div
                                    class="flex bg-[#9B51E01A]/10 w-[px] h-[35px] translate-y-[0] justify-center cursor-pointer items-center rounded-[20px] "
                                  >
                                    <span class="font-['Inter'] text-[12px] font-[500] text-white text-center relative">iScan</span>
                                </div>
                                <!-- little card-->

                                <!-- little card-->
                                <div 
 
                                    class="flex bg-[#9B51E01A]/10 w-[87px] h-[35px] cursor-pointer mt-[20px] justify-center items-center rounded-[20px] " 
                                >
                                    <span class="font-['Inter'] text-[12px] font-[500] text-white text-center ">iWallet</span>
                                </div>
                                <!-- little card-->

                                <!-- little card-->
                                <div
                                    class="flex bg-[#9B51E01A]/10 w-[87px] h-[63px] cursor-pointer mt-[73px] justify-center items-center rounded-[20px] " 
                                >
                                    <span class="font-['Inter'] text-[12px] font-[500] text-white  text-center">index Real-time Indexer</span>
                                </div>
                                <!-- little card-->

                                <!-- little card-->
                                <div
                                     class="flex bg-[#9B51E01A]/10 w-[87px] h-[63px] cursor-pointer justify-center mt-[117px] items-center rounded-[20px] " 
                                >
                                    <span class="font-['Inter'] text-[12px] font-[500] text-white max-w-[179px] text-center">Solidity<br> to iVM Transpiler</span>
                                </div>
                                <!-- big card-->
                                <div
                                    class="flex flex-col bg-[#9B51E01A]/10 w-[94px] h-[156px] cursor-pointer justify-center items-center rounded-[20px] absolute bottom-[110px] left-0"
                                >
                                    <span class="font-['Inter'] text-[12px] font-[700] text-white text-center translate-y-[-7px]">Simple Transactions</span>
                                    <div class="flex flex-col gap-[9px] mt-[7px]">
                                        <span class="flex items-center justify-center w-[80px] h-[25px] bg-[#749CC799]/60 rounded-[20px] text-white text-['Inter'] text-[12px] font-[500] cursor-pointer transition duration-300 hover:scale-[1.03]">Transfer</span>
                                        <span class="flex items-center justify-center w-[80px] h-[25px] bg-[#749CC799]/60 rounded-[20px] text-white text-['Inter'] text-[12px] font-[500] cursor-pointer transition duration-300 hover:scale-[1.03]">Create Asset</span>
                                        <span class="flex items-center justify-center text-center w-[80px] h-[32px] bg-[#749CC799]/60 rounded-[20px] text-white text-['Inter'] text-[12px] font-[500] cursor-pointer transition duration-300 hover:scale-[1.03]">Create Contract</span>
                                    </div>
                                </div>
                                <!-- big card-->
                            </div>
                        </div>
                        <!--first 4 card and arrows-->
                    </div>
                    <!--first left block-->

                    <!--top right block-->
                    <div class="flex">

                        <!-- main block wrapper-->
                        <div class="flex flex-col translate-x-[120px] translate-y-[-5px] relative">
                            <!--first card -->
                            <div
                                class="mb-[15px] flex flex-col bg-[#FFFFFF33] w-[205px] h-[114px]  items-center justify-center rounded-[20px] "
                            >
                            <div class="flex flex-col    items-center justify-center rounded-[20px]">
                                    <span class="text-[#EC474E] text-[500] font-['Inter'] mb-[10px] text-[12px] font-[500] mt-[10px]">Web application</span>
                                    <div class="flex flex-col items-center gap-[10px] mb-[12px]">
                                        <span class="flex items-center justify-center cursor-pointer text-white bg-[#749CC799]/60 rounded-[20px] pl-[16px] w-[182px] pr-[16px] h-[35px] text-[12px] font-['Inter'] font-[500] transition duration-300 hover:scale-[1.03]
                                    ">iView - real-time view</span>
                                        <span class="flex items-center justify-center text-center cursor-pointer text-white bg-[#749CC799]/60 rounded-[20px] w-[182px] h-[35px] text-[12px] font-['Inter'] font-[500] transition duration-300 hover:scale-[1.03]">iAPI - frontend application programming interface</span>
                                    </div>
                                </div>
                            </div>
                            <!--first card -->

                            <!--second card -->
                            <div
                                class=" flex flex-col bg-[#FFFFFF33] items-center justify-center rounded-[20px] w-[205px]  h-[114px] mb-[15px]"
                                >
                                <span class="text-[#EC474E] text-[12px] font-['Inter'] mb-[10px] font-[500]">Web3 Protocols</span>
                                <div class="flex-wrap flex items-center gap-[8px]">
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[63px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iSwap</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[63px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iPeg</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[63px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iNFT</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[63px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iLoan</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[63px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iGamble</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[63px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iFund</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] w-[63px]  h-[20px] font-[500] font-['Inter'] text-[12px] cursor-pointer transition duration-300 hover:scale-[1.03]">iDAO</span>
                                </div>   
                                
                            </div>
                            <!--second card -->
                                <img src="~/assets/images/platform/arrow9(1).svg" class="translate-y-[44px] translate-x-[27px] right-0 absolute" alt="">
                            <!--third card -->
                            <div
                                class=" flex flex-col w-[205px] h-[273px] items-center text-center bg-[#FFFFFF33] rounded-[20px]   mb-[15px]"
                             >
               
                                    <div class="flex flex-col gap-[9px]">
                                        <span class="flex items-center w-[178px] justify-center text-white bg-[#749CC799]/60 rounded-[20px]  h-[25px] font-[500] text-[12px] font-['Inter'] cursor-pointer transition duration-300 hover:scale-[1.03]">iOff - offchain prover</span>
                                        <span class="flex items-center w-[178px] justify-center text-white bg-[#749CC799]/60 rounded-[20px]  h-[35px] font-[500] text-[12px] font-['Inter'] cursor-pointer transition duration-300 hover:scale-[1.03]">iwait - Triggers platform</span>
                                        <span class="flex items-center w-[178px] justify-center text-white bg-[#749CC799]/60 rounded-[20px]  h-[25px] font-[500] text-[12px] font-['Inter'] cursor-pointer transition duration-300 hover:scale-[1.03]">iPrize - prize based defered execution</span>
                                        <span class="flex items-center w-[178px] justify-center text-white bg-[#749CC799]/60 rounded-[20px]  h-[35px] font-[500] text-[12px] font-['Inter'] cursor-pointer transition duration-300 hover:scale-[1.03]">iRemote - provable remote chain reader</span>
                                        <span class="flex items-center w-[178px] justify-center text-white bg-[#749CC799]/60 rounded-[20px]  h-[35px] font-[500] text-[12px] font-['Inter'] cursor-pointer transition duration-300 hover:scale-[1.03]">iLater - Continuations system</span>
                                        <span class="flex items-center w-[178px] justify-center text-white bg-[#749CC799]/60 rounded-[20px]  h-[25px] font-[500] text-[12px] font-['Inter'] cursor-pointer transition duration-300 hover:scale-[1.03]">iLink - Provable Web Link</span>
                                    </div>
                                
                                <span class="text-[#EC474E] text-[400] font-['Inter'] mt-[10px] mb-[9px] font-[500] text-[12px]">iEnv -Basic Smart Contract Building blocks </span>
                            </div>
                            <!--third card -->

                            <!--fourth card -->
                            <div
                                class=" flex gap-[6px] mb-[15px] h-[73px] "
                             >
                                <div 
                                    class="flex w-[148px] items-center justify-center bg-[#FFFFFF33] rounded-[20px] h-full text-white text-center"
                                >
                                   <p class="text-white text-[14px] font-[500] font-['Quicksand'] leading-[20px] w-[100%]">Low level and transpiled contracts</p> 
                                </div>

                                <div 
                                    class="flex flex-col w-[475px] items-center bg-[#FFFFFF33] rounded-[20px] h-full text-white text-[14px] font-[500] font-['Quicksand']"
                                >
                                    <div class="flex items-center gap-[15px] mt-[10px]">
                                        <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[111px] h-[33px] text-[14px] font-[500] font-['Quicksand'] pb-[3px] cursor-pointer transition duration-300 hover:scale-[1.03]">Asyncify</span>
                                        <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[111px] h-[33px] text-[14px] font-[500] font-['Quicksand'] pb-[3px] cursor-pointer transition duration-300 hover:scale-[1.03]">Optimizer</span>
                                        <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[205px] h-[33px] text-[14px] font-[500] font-['Quicksand'] pb-[3px] cursor-pointer transition duration-300 hover:scale-[1.03]">iRPC definitions extraction</span>
                                    </div> 
                                    <span class="text-[#EC474E] text-[14px] font-[700] font-['Quicksand'] mt-[3px] mb-[3px]">iWASM Transpiler</span>
                                </div>
                            </div>
                            <!--fourth card -->

                            <!--five card -->
                            <div
                                class=" flex flex-col mb-[15px] items-center bg-[#FFFFFF33] rounded-[20px] w-[205px] h-[226px]"
                             >
                                <span class="text-[#EC474E] text-[14px] font-[700] font-['Quicksand'] mt-[6px] mb-[8px]">iVM</span>
                                <div class="flex flex-col bg-white/20 rounded-[20px] h-[44px] justify-center items-center mb-[5px] px-[20px]">
                                    <span class="text-[14px] text-center text-white font-['Quicksand'] font-[500] w-[100px] leading-[15px] my-[10px]">iWASM Transpiler</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[132px] mr-[11px] h-[25px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">Gas Metering</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[132px] mr-[11px] h-[25px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">SoftFloat</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[154px] h-[25px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">SoftFloat</span>
                                </div>
                                <div class="flex bg-white/20 rounded-[20px] h-[29px]  justify-center items-center mb-[3px]">
                                    <span class="text-white font-['Quicksand'] font-[500] text-[14px] text-center">WAVM -Fastest WebAssembly Virtual Machine</span>
                                </div>

                                <div class="flex bg-white/20  rounded-[20px] h-[28px]  justify-center items-center">
                                    <span class=" text-white font-['Quicksand'] font-[500] text-[14px] text-centr">Contract linking and communitation layer</span>
                                </div>

                            </div>

                            <img src="../../assets/images/platform/arrow8.png" class="translate-y-[-77px] bottom-0 translate-x-[-177px]  absolute" alt="">
                            <!--five card -->
                        </div>
                        <!-- main block wrapper-->

                        <!--right arrow-->
                        <!--right arrow-->
                    </div>
                    <!--top right block-->
                </div>
                <!--top block-->    
            </div>
            <!--top part-->
           
            <!--bottom part-->
            <div class="flex flex-col translate-y-[-90px] ">
                <!--bottom arrow-->
                <!-- <div class="flex relative translate-y-[190px]">
                    <img src="../../assets/images/platform/arrow5.png" class="translate-y-[-205px] translate-x-[160px] absolute" alt="">
                    <img src="../../assets/images/platform/arrow6(1).svg" class="translate-y-[-215px] translate-x-[890px] h-[35px]" alt="">
                    <img src="../../assets/images/platform/arrow6(1).svg" class="translate-y-[-215px] translate-x-[450px] h-[35px]" alt="">
                    <img src="../../assets/images/platform/arrow7(1).svg" class="translate-y-[-215px] translate-x-[620px] " alt="">
                </div> -->
                <!--bottom arrow-->
                
                <!--bottom block-->
                <div class="flex bg-[#749CC733]/20 rounded-[20px] h-[60px] translate-x-[30px] translate-y-[-5px] justify-center relative w-[1005px]">
                    <div class="flex w-[95%] items-center justify-between gap-[24px] translate-y-[-30px]">
                        <span class="flex items-center justify-center text-white bg-[#749CC7] rounded-[20px] w-[219px] h-[33px] font-['Quicksand'] font-[500] text-[14px]">Accounts</span>
                        <span class="flex items-center justify-center text-white bg-[#749CC7] rounded-[20px] w-[219px] h-[33px] font-['Quicksand'] font-[500] text-[14px]">Assets</span>
                        <span class="flex items-center justify-center text-white bg-[#749CC7] rounded-[20px] w-[219px] h-[33px] font-['Quicksand'] font-[500] text-[14px]">Code</span>
                        <span class="flex items-center justify-center text-white bg-[#749CC7] rounded-[20px] w-[219px] h-[33px] font-['Quicksand'] font-[500] text-[14px]">Key-Vaylue Data</span>
                        <span class="absolute text-[#EC474E] top-[55px] left-[45.4%] font-['Quicksand'] font-[700] text-[14px]">Ledger Storage</span>
                    </div>
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