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
    elementWidth: fourthLeftTopCardWeight } = useMouseInElement(fourthLeftTopCard);

const { elementX: fourthRightTopCardX,
    elementY: fourthRightTopCardY,
    isOutside: isOutsideFourthRightCard,
    elementHeight: fourthRightTopCardHeight,
    elementWidth: fourthRightTopCardWeight } = useMouseInElement(fourthRightTopCard);

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
        class="flex flex-col items-center w-full mt-[140px] max-w-[1400px] mx-auto my-0 translate-x-[-10px] max-[1420px]:mt-[90px] max-[1200px]:max-w-[888px]" 
    >
        <h2 class="text-white uppercase text-[40px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[42px] max-[1200px]:text-[26px] max-[450px]:text-[22px]">ecosystem</h2>

        <!-- -------------desktop version--------------- -->
        <div class="flex flex-col max-w-[1068px] justify-between max-[450px]:hidden max-[1200px]:max-w-[888px] max-[1200px]:w-[888px] ">
            <!--top part-->
            <div class="flex flex-row max-w-[1068px] justify-between translate-x-[-65px] max-[1200px]:max-w-[888px] max-[1200px]:w-[888px]">
                <!--first arrows-->
                <div class="flex flex-col gap-[33px]">
                    <img class="translate-y-[24px] translate-x-[257px] absolute w-[210px] max-[1200px]:w-[178px] max-[1200px]:h-[185px] max-[1200px]:translate-y-[50px] " src="../../assets/images/platform/arrow1.svg" alt=""/>
                    <img class="translate-y-[11px] translate-x-[70px] h-[230px] absolute" src="../../assets/images/platform/arrow2.svg" alt=""/>
                    <img src="../../assets/images/platform/arrow3.svg" class="translate-y-[250px] translate-x-[70px] h-[480px]  absolute" alt="">
                    <img src="../../assets/images/platform/arrow4.svg" class="left-[180px] bottom-[80px]  absolute" alt="">
                </div>
                <!--first arrows-->

                <!--top block-->
                <div class="flex flex-row max-[1200px]:w-full">
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
                    <div class="flex w-[965px] max-[1200px]:w-[535px]">

                        <!-- main block wrapper-->
                        <div class="flex flex-col w-[628px] h-[747px] translate-x-[315px] translate-y-[-5px] relative max-[1200px]:w-[535px] max-[1200px]:translate-x-[250px]">
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
                                    <span class="text-[#EC474E] text-[700] font-['Quicksand'] mb-[10px] text-[14px] font-[700] mt-[10px] max-[1200px]:text-[12px]">Web application</span>
                                    <div class="flex items-center gap-[10px] mb-[12px]">
                                        <span class="flex items-center justify-center cursor-pointer text-white bg-[#749CC799]/60 rounded-[20px] pl-[16px] pr-[16px] h-[33px] text-[14px] font-[500] font-['Quicksand'] transition duration-300 hover:scale-[1.03] max-[1200px]:w-[152px] max-[1200px]:text-[11px] 
                                     ">iView - real-time view</span>
                                        <span class="flex items-center justify-center cursor-pointer text-white bg-[#749CC799]/60 rounded-[20px] w-[373px] h-[33px] text-[14px] font-[500] font-['Quicksand'] transition duration-300 hover:scale-[1.03] max-[1200px]:w-[281px] max-[1200px]:text-[11px]">iAPI - frontend application programming interface</span>
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
                                class=" flex flex-col bg-[#FFFFFF33] items-center justify-center rounded-[20px] w-full h-[87px] mb-[15px] blockHover"
                                >
                                <span class="text-[#EC474E] text-[14px] font-['Quicksand'] mb-[10px] font-[700] max-[1200px]:text-[12px]">Web3 Protocols</span>
                                <div class="flex items-center gap-[8px]">
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[60px]  max-[1200px]:text-[11px] ">iSwap</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[60px] max-[1200px]:text-[11px]">iPeg</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[60px] max-[1200px]:text-[11px]">iNFT</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[60px] max-[1200px]:text-[11px]">iLoan</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[60px] max-[1200px]:text-[11px]">iGamble</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[60px] max-[1200px]:text-[11px]">iFund</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[16px] pl-[16px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[60px] max-[1200px]:text-[11px]">iDAO</span>        
                                </div>   
                                
                            </div>
                            <!--second card -->
                                <img src="../../assets/images/platform/arrow9(1).svg" class="translate-y-[44px] translate-x-[27px] right-0 absolute" alt="">
                            <!--third card -->
                            <div
                                ref="thirdTopCard"
                                :style="{
                                    transform: cardTransformThirdTop,
                                    transition: 'transform 0.25s ease-out'
                                }"  
                                class=" flex flex-col items-center bg-[#FFFFFF33] rounded-[20px] w-full h-[176px] mb-[15px] blockHover"
                             >
                                <div class="flex flex-row mt-[20px] gap-[36px] max-[1200px]:gap-[24px]">
                                    <div class="flex flex-col gap-[9px]">
                                        <span class="flex items-center w-[289px] justify-center text-white bg-[#749CC799]/60 rounded-[20px] pl-[20px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[246px] max-[1200px]:text-[11px] ">iOff - offchain prover</span>
                                        <span class="flex items-center w-[289px] justify-center text-white bg-[#749CC799]/60 rounded-[20px] pl-[20px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[246px] max-[1200px]:text-[11px]">iwait - Triggers platform</span>
                                        <span class="flex items-center w-[289px] justify-center text-white bg-[#749CC799]/60 rounded-[20px] pl-[20px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[246px] max-[1200px]:text-[11px]">iPrize - prize based defered execution</span>
                                    </div>

                                    <div class="flex flex-col gap-[9px]">
                                        <span class="flex items-center w-[289px] justify-center text-white bg-[#749CC799]/60 rounded-[20px] pl-[20px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[246px] max-[1200px]:text-[11px]">iRemote - provable remote chain reader</span>
                                        <span class="flex items-center w-[289px] justify-center text-white bg-[#749CC799]/60 rounded-[20px] pl-[20px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[246px] max-[1200px]:text-[11px]">iLater - Continuations system</span>
                                        <span class="flex items-center w-[289px] justify-center text-white bg-[#749CC799]/60 rounded-[20px] pl-[20px] pr-[20px] h-[33px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[246px] max-[1200px]:text-[11px]">iLink - Provable Web Link</span>
                                    </div>
                                </div>
                                <span class="text-[#EC474E] text-[400] font-['Quicksand'] mt-[10px] mb-[9px] font-[700] text-[14px] max-[1200px]:text-[12px]">iEnv -Basic Smart Contract Building blocks </span>
                            </div>
                            <!--third card -->

                            <!--fourth card -->
                            <div
                                class=" flex gap-[6px] mb-[15px] w-full h-[73px] "
                             >
                                <div 
                                    class="flex w-[148px] items-center justify-center bg-[#FFFFFF33] rounded-[20px] h-full text-white text-center blockHover max-[1200px]:w-[128px] max-[1200px]:h-[62px] "
                                    ref="fourthLeftTopCard"
                                    :style="{
                                        transform: cardTransformFourthLeftTopRight,
                                        transition: 'transform 0.25s ease-out'
                                    }"  
                                >
                                   <p class="text-white text-[14px] font-[500] font-['Quicksand'] leading-[20px] w-[100%] max-[1200px]:text-[11px] max-[1200px]:leading-[12px]">Low level and transpiled contracts</p> 
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
                                        <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[111px] h-[33px] text-[14px] font-[500] font-['Quicksand'] pb-[3px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[94px] max-[1200px]:text-[11px]">Asyncify</span>
                                        <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[111px] h-[33px] text-[14px] font-[500] font-['Quicksand'] pb-[3px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[94px] max-[1200px]:text-[11px]">Optimizer</span>
                                        <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[205px] h-[33px] text-[14px] font-[500] font-['Quicksand'] pb-[3px] cursor-pointer transition duration-300 hover:scale-[1.03] max-[1200px]:w-[170px] max-[1200px]:text-[11px]">iRPC definitions extraction</span>
                                    </div> 
                                    <span class="text-[#EC474E] text-[14px] font-[700] font-['Quicksand'] mt-[3px] mb-[3px] max-[1200px]:text-[12px]">iWASM Transpiler</span>
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
                                class=" flex flex-col mb-[15px] items-center bg-[#FFFFFF33] rounded-[20px] w-full h-[151px] blockHover"
                             >
                                <span class="text-[#EC474E] text-[14px] font-[700] font-['Quicksand'] mt-[6px] mb-[8px] max-[1200px]:text-[12px]">iVM</span>
                                <div class="flex bg-white/20 rounded-[20px] h-[44px] w-[559px] justify-center items-center mb-[5px] px-[20px] max-[1200px]:w-[476px]">
                                    <span class="text-[14px] text-center text-white font-['Quicksand'] font-[500] w-[100px] leading-[15px] my-[10px] max-[1200px]:text-[11px]">iWASM Transpiler</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[132px] mr-[11px] h-[25px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">Gas Metering</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[132px] mr-[11px] h-[25px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">SoftFloat</span>
                                    <span class="flex items-center justify-center text-white bg-[#749CC799]/60 rounded-[20px] w-[154px] h-[25px] font-[500] text-[14px] cursor-pointer transition duration-300 hover:scale-[1.03]">SoftFloat</span>
                                </div>
                                <div class="flex bg-white/20 rounded-[20px] h-[29px] w-[559px] justify-center items-center mb-[3px]  max-[1200px]:w-[476px]">
                                    <span class="text-white font-['Quicksand'] font-[500] text-[14px] text-center max-[1200px]:text-[11px]">WAVM -Fastest WebAssembly Virtual Machine</span>
                                </div>

                                <div class="flex bg-white/20  rounded-[20px] h-[28px] w-[559px] justify-center items-center  max-[1200px]:w-[476px]">
                                    <span class=" text-white font-['Quicksand'] font-[500] text-[14px] text-center max-[1200px]:text-[11px]">Contract linking and communitation layer</span>
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
                <div class="flex relative translate-y-[190px]">
                    <img src="../../assets/images/platform/arrow5.png" class="translate-y-[-205px] translate-x-[160px] absolute max-[1200px]:w-[350px]" alt="">
                    <img src="../../assets/images/platform/arrow6(1).svg" class="translate-y-[-215px] translate-x-[890px] h-[35px] max-[1200px]:translate-x-[750px]" alt="">
                    <img src="../../assets/images/platform/arrow6(1).svg" class="translate-y-[-215px] translate-x-[450px] h-[35px] max-[1200px]:translate-x-[374px]" alt="">
                    <img src="../../assets/images/platform/arrow7(1).svg" class="translate-y-[-215px] translate-x-[620px] max-[1200px]:translate-x-[515px] " alt="">
                </div>
                <!--bottom arrow-->
                
                <!--bottom block-->
                <div class="flex bg-[#749CC733]/20 rounded-[20px] h-[60px] translate-x-[30px] translate-y-[-5px] justify-center relative w-[1005px] max-[1200px]:w-[841px]">
                    <div class="flex w-[95%] items-center justify-between gap-[24px] translate-y-[-30px]">
                        <span class="flex items-center justify-center text-white bg-[#749CC7] rounded-[20px] w-[219px] h-[33px] font-['Quicksand'] font-[500] text-[14px] max-[1200px]:text-[12px]">Accounts</span>
                        <span class="flex items-center justify-center text-white bg-[#749CC7] rounded-[20px] w-[219px] h-[33px] font-['Quicksand'] font-[500] text-[14px] max-[1200px]:text-[12px]">Assets</span>
                        <span class="flex items-center justify-center text-white bg-[#749CC7] rounded-[20px] w-[219px] h-[33px] font-['Quicksand'] font-[500] text-[14px] max-[1200px]:text-[12px]">Code</span>
                        <span class="flex items-center justify-center text-white bg-[#749CC7] rounded-[20px] w-[219px] h-[33px] font-['Quicksand'] font-[500] text-[14px] max-[1200px]:text-[12px]">Key-Vaylue Data</span>
                        <span class="absolute text-[#EC474E] top-[55px] left-[45.4%] font-['Quicksand'] font-[700] text-[14px] max-[1200px]:text-[12px]">Ledger Storage</span>
                    </div>
                </div>
            </div>
            <!--bottom part-->
        </div>
        <!-- -------------desktop version --------------- -->

        <!-- -------------mobile version --------------- -->
        <div class="hidden flex-col w-[310px] relative justify-between max-[450px]:flex ">
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

        <!-- -------------mobile version --------------- -->

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