<script setup language="ts">
import {ref, computed} from 'vue';
import { useMouseInElement } from "@vueuse/core";

// ---------------- top left ----------------------------
const firstTopLeftCard = ref(null);
const secondTopLeftCard = ref(null);
const thirdTopLeftCard = ref(null);
const fourthTopLeftCard = ref(null);
const fifthTopLeftCard = ref(null);


const { elementX: firstTopLeftCardX,
    elementY: firstTopLeftCardY,
    isOutside: isOutsideFirstTopLeftCard,
    elementHeight: firstTopLeftCardHeight,
    elementWidth: firstTopLeftCardWeight } = useMouseInElement(firstTopLeftCard);

const { elementX: secondTopLeftCardX,
    elementY: secondTopLeftCardY,
    isOutside: isOutsideSecondTopLeftCard,
    elementHeight: secondTopLeftCardHeight,
    elementWidth: secondTopLeftCardWeight } = useMouseInElement(secondTopLeftCard);

const { elementX: thirdTopLeftCardX,
    elementY: thirdTopLeftCardY,
    isOutside: isOutsideThirdTopLeftCard,
    elementHeight: thirdTopLeftCardHeight,
    elementWidth: thirdTopLeftCardWeight } = useMouseInElement(thirdTopLeftCard);

const { elementX: fourthTopLeftCardX,
    elementY: fourthTopLeftCardY,
    isOutside: isOutsideFourthTopLeftCard,
    elementHeight: fourthTopLeftCardHeight,
    elementWidth: fourthTopLeftCardWeight } = useMouseInElement(fourthTopLeftCard);

const { elementX: fifthTopLeftCardX,
    elementY: fifthTopLeftCardY,
    isOutside: isOutsideFifthTopLeftCard,
    elementHeight: fifthTopLeftCardHeight,
    elementWidth: fifthTopLeftCardWeight } = useMouseInElement(fifthTopLeftCard);

const cardTransformFirstLeftTop = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (MAX_ROTATION / 2 - (firstTopLeftCardY.value / firstTopLeftCardHeight.value) * MAX_ROTATION).toFixed(2); //handle x-Axis
    const rY = ((firstTopLeftCardX.value / firstTopLeftCardWeight.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); //handle y-Axis

    return isOutsideFirstTopLeftCard.value
        ? ""
        : `perspective(${firstTopLeftCardWeight.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;  
});

const cardTransformSecondLeftTop = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (MAX_ROTATION / 2 - (secondTopLeftCardY.value / secondTopLeftCardHeight.value) * MAX_ROTATION).toFixed(2); //handle x-Axis
    const rY = ((secondTopLeftCardX.value / secondTopLeftCardWeight.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); //handle y-Axis

    return isOutsideSecondTopLeftCard.value
        ? ""
        : `perspective(${secondTopLeftCardWeight.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;  
});

const cardTransformThirdLeftTop = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (MAX_ROTATION / 2 - (thirdTopLeftCardY.value / thirdTopLeftCardHeight.value) * MAX_ROTATION).toFixed(2); //handle x-Axis
    const rY = ((thirdTopLeftCardX.value / thirdTopLeftCardWeight.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); //handle y-Axis

    return isOutsideThirdTopLeftCard.value
        ? ""
        : `perspective(${thirdTopLeftCardWeight.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;  
});

const cardTransformFourthLeftTop = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (MAX_ROTATION / 2 - (fourthTopLeftCardY.value / fourthTopLeftCardHeight.value) * MAX_ROTATION).toFixed(2); //handle x-Axis
    const rY = ((fourthTopLeftCardX.value / fourthTopLeftCardWeight.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); //handle y-Axis

    return isOutsideFourthTopLeftCard.value
        ? ""
        : `perspective(${fourthTopLeftCardWeight.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;  
});

const cardTransformFifthLeftTop = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (MAX_ROTATION / 2 - (fifthTopLeftCardY.value / fifthTopLeftCardHeight.value) * MAX_ROTATION).toFixed(2); //handle x-Axis
    const rY = ((fifthTopLeftCardX.value / fifthTopLeftCardWeight.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); //handle y-Axis

    return isOutsideFifthTopLeftCard.value
        ? ""
        : `perspective(${fifthTopLeftCardWeight.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;  
});



// ---------------- top left ----------------------------


//  ---------------- --- ------- top right

const firstTopCard = ref(null);
const secondTopCard = ref(null);
const thirdTopCard = ref(null);
const fourthLeftTopCard = ref(null);
const fourthRightTopCard = ref(null);
const fifthTopCard = ref(null);


const { elementX: firstTopCardX,
    elementY: firstTopCardY,
    isOutside: isOutsideFirstCard,
    elementHeight: firstTopCardHeight,
    elementWidth: firstTopCardWeight } = useMouseInElement(firstTopCard);

const { elementX: secondTopCardX,
    elementY: secondTopCardY,
    isOutside: isOutsideSecondCard,
    elementHeight: secondTopCardHeight,
    elementWidth: secondTopCardWeight } = useMouseInElement(secondTopCard);

const { elementX: thirdTopCardX,
    elementY: thirdTopCardY,
    isOutside: isOutsideThirdCard,
    elementHeight: thirdTopCardHeight,
    elementWidth: thirdTopCardWeight } = useMouseInElement(thirdTopCard);

const { elementX: fourthLeftTopCardX,
    elementY: fourthLeftTopCardY,
    isOutside: isOutsideFourthLeftCard,
    elementHeight: fourthLeftTopCardHeight,
    elementWidth: fourthLeftTopCardWeight } = useMouseInElement(thirdTopCard);

const { elementX: fourthRightTopCardX,
    elementY: fourthRightTopCardY,
    isOutside: isOutsideFourthRightCard,
    elementHeight: fourthRightTopCardHeight,
    elementWidth: fourthRightTopCardWeight } = useMouseInElement(thirdTopCard);

const { elementX: fifthTopCardX,
    elementY: fifthTopCardY,
    isOutside: isOutsideFifthCard,
    elementHeight: fifthTopCardHeight,
    elementWidth: fifthTopCardWeight } = useMouseInElement(fifthTopCard);

const cardTransformFirstTop = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (MAX_ROTATION / 2 - (firstTopCardY.value / firstTopCardHeight.value) * MAX_ROTATION).toFixed(2); //handle x-Axis
    const rY = ((firstTopCardX.value / firstTopCardWeight.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); //handle y-Axis

    return isOutsideFirstCard.value
        ? ""
        : `perspective(${firstTopCardWeight.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;  
});

const cardTransformSecondTop = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (MAX_ROTATION / 2 - (secondTopCardY.value / secondTopCardHeight.value) * MAX_ROTATION).toFixed(2); //handle x-Axis
    const rY = ((secondTopCardX.value / secondTopCardWeight.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); //handle y-Axis

    return isOutsideSecondCard.value
        ? ""
        : `perspective(${secondTopCardWeight.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
});

const cardTransformThirdTop = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (MAX_ROTATION / 2 - (thirdTopCardY.value / thirdTopCardHeight.value) * MAX_ROTATION).toFixed(2); //handle x-Axis
    const rY = ((thirdTopCardX.value / thirdTopCardWeight.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); //handle y-Axis

    return isOutsideThirdCard.value
        ? ""
        : `perspective(${thirdTopCardWeight.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
});
const cardTransformFifthTop = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (MAX_ROTATION / 2 - (fifthTopCardY.value / fifthTopCardHeight.value) * MAX_ROTATION).toFixed(2); //handle x-Axis
    const rY = ((fifthTopCardX.value / fifthTopCardWeight.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); //handle y-Axis

    return isOutsideFifthCard.value
        ? ""
        : `perspective(${fifthTopCardWeight.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
});

const cardTransformFourthLeftTopRight = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (MAX_ROTATION / 2 - (fourthLeftTopCardY.value / fourthLeftTopCardHeight.value) * MAX_ROTATION).toFixed(2); //handle x-Axis
    const rY = ((fourthLeftTopCardX.value / fourthLeftTopCardWeight.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); //handle y-Axis

    return isOutsideFourthLeftCard.value
        ? ""
        : `perspective(${fourthLeftTopCardWeight.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
});
const cardTransformFourthRightTop = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (MAX_ROTATION / 2 - (fourthRightTopCardY.value / fourthRightTopCardHeight.value) * MAX_ROTATION).toFixed(2); //handle x-Axis
    const rY = ((fourthRightTopCardX.value / fourthRightTopCardWeight.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2); //handle y-Axis

    return isOutsideFourthRightCard.value
        ? ""
        : `perspective(${fourthRightTopCardWeight.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
});


//  ---------------- --- ------- top right

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
        <h2 class="text-white uppercase text-[40px] font-[700] font-['Quicksand'] mb-[42px]">ecosystem</h2>
        <div class="flex flex-col max-w-[1068px] justify-between">
            <!--top part-->
            <div class="flex flex-row max-w-[1068px] justify-between translate-x-[-65px]">
                <!--first arrows-->
                <div class="flex flex-col gap-[33px]">
                    <img class="translate-y-[40px] translate-x-[257px] absolute w-[180px]" src="../../assets/images/platform/arrow1.svg" alt=""/>
                    <img class="translate-y-[20px] translate-x-[70px] h-[220px] absolute" src="../../assets/images/platform/arrow2.svg" alt=""/>
                    <img src="../../assets/images/platform/arrow3.svg" class="translate-y-[250px] translate-x-[70px] h-[480px]  absolute" alt="">
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
                                    ref="firstTopLeftCard"
                                    :style="{
                                        transform: cardTransformFirstLeftTop,
                                        transition: 'transform 0.25s ease-out'
                                    }"  
                                    class="flex bg-[#9B51E01A]/10 w-[154px] h-[50px] translate-y-[0] justify-center cursor-pointer items-center rounded-[20px] blockHover"
                                  >
                                    <span class="font-['Quicksand'] text-[16px] font-[500] text-white text-center relative">iScan</span>
                                </div>
                                <!-- little card-->

                                <!-- little card-->
                                <div 
                                    ref="secondTopLeftCard"
                                    :style="{
                                        transform: cardTransformSecondLeftTop,
                                        transition: 'transform 0.25s ease-out'
                                    }"  
                                    class="flex bg-[#9B51E01A]/10 w-[154px] h-[50px] cursor-pointer mt-[43px] justify-center items-center rounded-[20px] blockHover" 
                                >
                                    <span class="font-['Quicksand'] text-[14px] font-[500] text-white text-center ">iWallet</span>
                                </div>
                                <!-- little card-->

                                <!-- little card-->
                                <div
                                    ref="thirdTopLeftCard"
                                    :style="{
                                        transform: cardTransformThirdLeftTop,
                                        transition: 'transform 0.25s ease-out'
                                    }" 
                                    class="flex bg-[#9B51E01A]/10 w-[154px] h-[70px] cursor-pointer mt-[58px] justify-center items-center rounded-[20px] blockHover" 
                                >
                                    <span class="font-['Quicksand'] text-[14px] font-[500] text-white  text-center">index Real-time Indexer</span>
                                </div>
                                <!-- little card-->

                                <!-- little card-->
                                <div
                                     class="flex bg-[#9B51E01A]/10 w-[154px] h-[70px] cursor-pointer justify-center mt-[117px] items-center rounded-[20px] blockHover" 
                                     ref="fourthTopLeftCard"
                                        :style="{
                                            transform: cardTransformFourthLeftTop,
                                            transition: 'transform 0.25s ease-out'
                                        }" 
                                >
                                    <span class="font-['Quicksand'] text-[14px] font-[500] text-white max-w-[179px] text-center">Solidity<br> to iVM Transpiler</span>
                                </div>
                                <!-- little card-->
                            </div>

                        </div>
                        <!--first 4 card and arrows-->
                        <!-- big card-->
                        <div
                            ref="fifthTopLeftCard"
                            :style="{
                                transform: cardTransformFifthLeftTop,
                                transition: 'transform 0.25s ease-out'
                            }" 
                            class="flex flex-col bg-[#9B51E01A]/10 w-[190px] h-[157px] cursor-pointer justify-center items-center rounded-[20px] absolute bottom-[110px] left-0 blockHover"
                          >
                            <span class="font-['Quicksand'] text-[14px] font-[700] text-white text-center translate-y-[-7px]">Simple Transactions</span>
                            <div class="flex flex-col gap-[9px] mt-[7px]">
                                <span class="flex items-center justify-center w-[149px] h-[28px] bg-[#749CC799]/60 rounded-[20px] text-white text-['Quicksand'] text-[14px] font-[500] cursor-pointer transition duration-300 hover:scale-[1.03]">Transfer</span>
                                <span class="flex items-center justify-center w-[149px] h-[28px] bg-[#749CC799]/60 rounded-[20px] text-white text-['Quicksand'] text-[14px] font-[500] cursor-pointer transition duration-300 hover:scale-[1.03]">Creat Asset</span>
                                <span class="flex items-center justify-center w-[149px] h-[28px] bg-[#749CC799]/60 rounded-[20px] text-white text-['Quicksand'] text-[14px] font-[500] cursor-pointer transition duration-300 hover:scale-[1.03]">Create Contract</span>
                            </div>
                        </div>
                        <!-- big card-->
                    </div>
                    <!--first left block-->

                    <!--top right block-->
                    <div class="flex w-[965px]">

                        <!-- main block wrapper-->
                        <div class="flex flex-col w-[628px] h-[747px] translate-x-[285px] translate-y-[-5px]">
                            <!--first card -->
                            <div
                                ref="firstTopCard"
                                :style="{
                                    transform: cardTransformFirstTop,
                                    transition: 'transform 0.25s ease-out'
                                }" 
                                class="mb-[15px] flex flex-col bg-[#FFFFFF33]  items-center justify-center rounded-[20px] blockHover"
                            >
                            <div class="flex flex-col  items-center justify-center rounded-[20px]">
                                    <span class="text-[#EC474E] text-[700] font-['Quicksand'] mb-[10px] text-[14px] font-[700] mt-[10px]">Web application</span>
                                    <div class="flex items-center gap-[10px] mb-[12px]">
                                        <span class="flex items-center justify-center cursor-pointer text-white bg-[#749CC799]/60 rounded-[20px] pl-[16px] pr-[16px] h-[33px] text-[14px] font-[500] transition duration-300 hover:scale-[1.03]
                                    ">iView - real-time view</span>
                                        <span class="flex items-center justify-center cursor-pointer text-white bg-[#749CC799]/60 rounded-[20px] w-[373px] h-[33px] text-[14px] font-[500] transition duration-300 hover:scale-[1.03]">iAPI - frontend application programming interface</span>
                                    </div>
                                </div>
                            </div>
                            <!--first card -->

                            <!--second card -->
                            <div
                                ref="secondTopCard"
                                :style="{
                                    transform: cardTransformSecondTop,
                                    transition: 'transform 0.25s ease-out'
                                }"                                 
                                class=" flex flex-col bg-[#FFFFFF33] items-center justify-center rounded-[20px] w-full h-[87px] mb-[15px] relative blockHover"
                                >
                                <span class="text-[#EC474E] text-[14px] font-['Quicksand'] mb-[10px] font-[700]">Web3 Protocols</span>
                                <div class="flex items-center gap-[8px]">
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iSwap</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iPeg</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iNFT</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iLoan</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iGamble</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iFund</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iDAO</span>
                                    
                                    <img src="../../assets/images/platform/arrow9(1).svg" class="translate-y-[75px] translate-x-[27px] right-0 absolute" alt="">
                                </div>                            
                            </div>
                            <!--second card -->

                            <!--third card -->
                            <div
                                ref="thirdTopCard"
                                :style="{
                                    transform: cardTransformThirdTop,
                                    transition: 'transform 0.25s ease-out'
                                }"  
                                class=" flex flex-col items-center bg-[#FFFFFF33] rounded-[20px] w-full h-[176px] mb-[15px] blockHover"
                             >
                                <div class="flex flex-row mt-[20px] gap-[36px]">
                                    <div class="flex flex-col gap-[9px]">
                                        <span class="flex items-center w-[289px] justify-center text-white bg-[#749CC799]/60 rounded-[20px] pl-[20px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iOff - offchain prover</span>
                                        <span class="flex items-center w-[289px] justify-center text-white bg-[#749CC799]/60 rounded-[20px] pl-[20px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iwait - Triggers platform</span>
                                        <span class="flex items-center w-[289px] justify-center text-white bg-[#749CC799]/60 rounded-[20px] pl-[20px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iPrize - prize based defered execution</span>
                                    </div>

                                    <div class="flex flex-col gap-[9px]">
                                        <span class="flex items-center w-[289px] justify-center text-white bg-[#749CC799]/60 rounded-[20px] pl-[20px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iRemote - provable remote chain reader</span>
                                        <span class="flex items-center w-[289px] justify-center text-white bg-[#749CC799]/60 rounded-[20px] pl-[20px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iLater - Continuations system</span>
                                        <span class="flex items-center w-[289px] justify-center text-white bg-[#749CC799]/60 rounded-[20px] pl-[20px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">iLink - Provable Web Link</span>
                                    </div>
                                </div>
                                <span class="text-[#EC474E] text-[400] font-['Quicksand'] mt-[10px] mb-[9px] font-[700] text-[14px]">iEnv -Basic Smart Contract Building blocks </span>
                            </div>
                            <!--third card -->

                            <!--fourth card -->
                            <div
                                class=" flex gap-[6px] mb-[15px] w-full h-[73px] "
                             >
                                <div 
                                    class="flex w-[148px] items-center justify-center bg-[#FFFFFF33] rounded-[20px] h-full text-white text-center blockHover "
                                    ref="fourthLeftTopCard"
                                    :style="{
                                        transform: cardTransformFourthLeftTopRight,
                                        transition: 'transform 0.25s ease-out'
                                    }"  
                                >
                                   <p class="text-white text-[14px] font-[500] font-['Quicksand'] leading-[20px] w-[100%]">Low level and transpiled contracts</p> 
                                </div>
                                <div 
                                    class="flex flex-col w-[475px] items-center bg-[#FFFFFF33] rounded-[20px] h-full text-white text-[14px] font-[500] font-['Quicksand'] blockHover "
                                    ref="fourthRightTopCard"
                                    :style="{
                                        transform: cardTransformFourthRightTop,
                                        transition: 'transform 0.25s ease-out'
                                    }" 
                                >
                                    <div class="flex items-center gap-[15px] mt-[10px]">
                                        <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[111px] h-[33px] text-[14px] font-[500] font-['Quicksand'] pb-[3px]">Asyncify</span>
                                        <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[111px] h-[33px] text-[14px] font-[500] font-['Quicksand'] pb-[3px]">Optimizer</span>
                                        <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[205px] h-[33px] text-[14px] font-[500] font-['Quicksand'] pb-[3px]">iRPC definitions extraction</span>
                                    </div> 
                                    <span class="text-[#EC474E] text-[14px] font-[700] font-['Quicksand'] mt-[3px] mb-[3px]">iWASM Transpiler</span>
                                </div>
                            </div>
                            <!--fourth card -->

                            <!--five card -->
                            <div
                                ref="fifthTopCard"
                                :style="{
                                    transform: cardTransformFifthTop,
                                    transition: 'transform 0.25s ease-out'
                                }"  
                                class=" flex flex-col mb-[15px] items-center bg-[#FFFFFF33] rounded-[20px] w-full h-[151px] relative blockHover"
                             >
                                <span class="text-[#EC474E] text-[14px] font-[700] font-['Quicksand'] mt-[6px] mb-[8px]">iVM</span>
                                <div class="flex bg-white/20 rounded-[20px] h-[44px] w-[559px] justify-center items-center mb-[5px] px-[20px]">
                                    <span class="text-[14px] text-center text-white font-['Quicksand'] font-[500] w-[100px] leading-[15px] my-[10px]">iWASM Transpiler</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[132px] mr-[11px] h-[25px] font-[500] text-[14px]">Gas Metering</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[132px] mr-[11px] h-[25px] font-[500] text-[14px]">SoftFloat</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[154px] h-[25px] font-[500] text-[14px]">SoftFloat</span>
                                </div>
                                <div class="flex bg-white/20 rounded-[20px] h-[29px] w-[559px] justify-center items-center mb-[3px]">
                                    <span class="text-white font-['Quicksand'] font-[500] text-[14px] text-center">WAVM -Fastest WebAssembly Virtual Machine</span>
                                </div>

                                <div class="flex bg-white/20  rounded-[20px] h-[28px] w-[559px] justify-center items-center">
                                    <span class=" text-white font-['Quicksand'] font-[500] text-[14px] text-centr">Contract linking and communitation layer</span>
                                </div>

                                <img src="../../assets/images/platform/arrow8.png" class="translate-y-[132px] translate-x-[-400px]  absolute" alt="">
                            </div>
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
                <div class="flex relative translate-y-[190px]">
                 <!--    <img class="translate-y-[-76px] translate-x-[80px]" src="~/assets/images/ecosystem/bottom_arrow_pink_down.svg"/>
                    <img class="translate-y-[-76px] translate-x-[270px]" src="~/assets/images/ecosystem/bottom_arrow_two.svg"/>
                    <img class="translate-y-[-76px] translate-x-[500px]" src="~/assets/images/ecosystem/bottom_arrow_two.svg"/>
                    <img class="translate-y-[-76px] translate-x-[200px]" src="~/assets/images/ecosystem/bottom_arrows.svg"/>
                    <img class="translate-y-[-76px] translate-x-[270px]" src="~/assets/images/ecosystem/bottom_arrow_white_up.svg"/>
                    <img class="translate-y-[-76px] translate-x-[550px]" src="~/assets/images/ecosystem/bottom_arrow_two.svg"/> -->
                    <img src="../../assets/images/platform/arrow5.png" class="translate-y-[-205px] translate-x-[160px] absolute" alt="">
                    <img src="../../assets/images/platform/arrow6(1).svg" class="translate-y-[-215px] translate-x-[890px] h-[35px]" alt="">
                    <img src="../../assets/images/platform/arrow6(1).svg" class="translate-y-[-215px] translate-x-[450px] h-[35px]" alt="">
                    <img src="../../assets/images/platform/arrow7(1).svg" class="translate-y-[-215px] translate-x-[620px] " alt="">
                </div>
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