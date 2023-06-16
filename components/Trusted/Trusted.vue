<template>
   <div  
   class="flex flex-col items-center mt-[50px] w-full mx-auto my-0"
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
   >
        <h2 class="text-white uppercase font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[50px]" :class="{
            'text-[40px]': !isMobile,
            'text-[22px]': isMobile
        }">trusted by the best</h2>
        <div class="flex flex-col items-center flex-wrap w-[100%] mb-[50px]">
            <Vue3Marquee :pauseOnHover="true" :duration="70">
                <div class="flex flex-col justify-center items-center h-[70px] w-236px bg-[#FFFFFF]/10 mr-[60px] py-[10px] px-[31px] rounded-[8px] ">
                    <img src="../../assets/icons/Trusted/Binance_logo.png" alt="">
                </div>
    
                <div class="flex flex-col justify-center items-center h-[70px] w-236px bg-[#FFFFFF]/10 mr-[60px] py-[10px] px-[31px] rounded-[8px]">
                    <img src="../../assets/icons/Trusted/META_logo.png" alt="">
                </div>
    
                <div class="flex flex-col justify-center items-center h-[70px] w-236px bg-[#FFFFFF]/10 mr-[60px] py-[10px] px-[31px] rounded-[8px] ">
                    <img src="../../assets/icons/Trusted/Binance_logo.png" alt="">
                </div>
    
                <div class="flex flex-col justify-center items-center h-[70px] w-236px bg-[#FFFFFF]/10 mr-[60px] py-[10px] px-[31px] rounded-[8px]">
                    <img src="../../assets/icons/Trusted/META_logo.png" alt="">
                </div>
    
                <div class="flex flex-col justify-center items-center h-[70px] w-236px bg-[#FFFFFF]/10 mr-[60px] py-[10px] px-[31px] rounded-[8px] ">
                    <img src="../../assets/icons/Trusted/Binance_logo.png" alt="">
                </div>
                <div class="flex flex-col justify-center items-center h-[70px] w-236px bg-[#FFFFFF]/10 mr-[60px] py-[10px] px-[31px] rounded-[8px] ">
                    <img src="../../assets/icons/Trusted/Binance_logo.png" alt="">
                </div>
    
                <div class="flex flex-col justify-center items-center h-[70px] w-236px bg-[#FFFFFF]/10 mr-[60px] py-[10px] px-[31px] rounded-[8px]">
                    <img src="../../assets/icons/Trusted/META_logo.png" alt="">
                </div>
    
                <div class="flex flex-col justify-center items-center h-[70px] w-236px bg-[#FFFFFF]/10 mr-[60px] py-[10px] px-[31px] rounded-[8px] ">
                    <img src="../../assets/icons/Trusted/Binance_logo.png" alt="">
                </div>
    
                <div class="flex flex-col justify-center items-center h-[70px] w-236px bg-[#FFFFFF]/10 mr-[60px] py-[10px] px-[31px] rounded-[8px]">
                    <img src="../../assets/icons/Trusted/META_logo.png" alt="">
                </div>
    
                <div class="flex flex-col justify-center items-center h-[70px] w-236px bg-[#FFFFFF]/10 mr-[60px] py-[10px] px-[31px] rounded-[8px] ">
                    <img src="../../assets/icons/Trusted/Binance_logo.png" alt="">
                </div>
            </Vue3Marquee>
        </div>
   </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee'
const { isMobile } = useDevice();

</script>

<style >


</style>

