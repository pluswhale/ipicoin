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

        <div class="flex w-full items-center h-[48px] bg-white/10  rounded-[10px]" >

        </div>

        

       

    </div>
 </template>

<script setup>





</script>

<style lang="scss" scoped>

</style>