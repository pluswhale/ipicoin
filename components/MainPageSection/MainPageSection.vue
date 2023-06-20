<template>
    <div
        v-motion
            :initial="{
                y: 100,
                opacity: 0,
            }"
            :enter="{
                y: 0,
                opacity: 1,
                transition: {
                duration: 1500,
                type: 'keyframes',
                ease: 'easeIn',
                },
        }"        
        class="flex h-[582px] max-w-[1424px] mx-auto my-0 justify-between relative z-0"
        >
        <TitleAndAppsDownload/>
        <DiagramBlock/>
        <SwapWallet/>

        <div class="TwinklingStars"></div>
        <div class="TwinklingStars2"></div>
    </div>
</template>

<script setup>

import TitleAndAppsDownload from './elements/TitleAndAppsDownload/TitleAndAppsDownload.vue'
import DiagramBlock from './elements/GraphicBlock/GraphicBlock.vue'
import SwapWallet from './elements/SwapWallet/SwapWallet.vue'

</script>

<style lang="scss" scoped>
.TwinklingStars{
  position: absolute;
  width: 0; 
  height: 0;
  left: 250px;
  top:6px;
  background:transparent;
  border-radius: 100%;
  box-shadow: 0 0 100px 30px rgba(217, 143, 255,);
  opacity: 0.5;
  z-index: 0;
  
  animation-name: blink;
  animation-timing-function: linear;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
@keyframes blink {
  50% {
    opacity: 0;

  }
  100%{
    height: 5px;
    width: 5px;
    background: #d98fff;
    opacity: 1;
 
  }
}

 .TwinklingStars2{
  position: absolute;
  width: 0; 
  height: 0;
  left: 655px;
  top:8px;
  background:transparent;
  border-radius: 100%;
  box-shadow: 0 0 40px 20px rgba(217, 143, 255,);
  opacity: 0.5;
  z-index: 0;
  
  animation-name: blink;
  animation-timing-function: linear;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
@keyframes blink {
  50% {
    opacity: 0;

  }
  100%{
    height: 2px;
    width: 2px;
    background: #d98fff;
    opacity: 1;
    box-shadow: 0 0 40px 20px rgba(217, 143, 255, 0.2);
 
  }
}
</style>