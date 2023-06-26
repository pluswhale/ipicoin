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
        class="flex items-center w-full justify-center mb-[83px] "
     >
        <div class="flex w-[343px] gap-[10px] overflow-x-scroll overflow-y-hidden no-scrollbar">
            <div class="flex flex-col min-w-[284px] h-[130px] px-[18px] py-[17px]  bg-[#FFFFFF]/5 rounded-[12px]  relative">
                <div class="flex items-center">
                    <img class="h-[17px]" src="../../assets/icons/CardUser/User-5.png" alt="User">
                    <div class="flex flex-col ml-[16px]">
                        <p class="font-400 text-[8px] font-['Roboto'] text-white">Ninel Adarman</p>
                        <p class="font-400 text-[8px] font-['Roboto'] text-[#838A91]">20 Mar 2023 at 05:15 PM</p>
                    </div>
                    <img src="../../assets/icons/CardUser/twitter.svg" alt="ico" class="absolute top-[20px] right-[20px]">
                </div>
                <p class="font-400 text-[10px] font-['Roboto'] text-white">Thanks @ipicoin for your guidelines. I agree with you.<br> @Dun can you implement the way Ipicoin has described ?</p>
                <div class="flex items-end w-[100%] justify-end mt-[10px]">
                    <a href="/" class="font-400 text-[12px] font-['Gilroy-Light'] text-[#97AFD5] border-b border-[#97AFD5]">Reply</a>
                    <img class="ml-[17px] cursor-pointer" src="../../assets/icons/CardUser/heart.svg" alt="ico">
                </div>
            </div>

            <div class="flex flex-col min-w-[284px] h-[130px] px-[18px] py-[17px]  bg-[#FFFFFF]/5 rounded-[12px]  relative">
                <div class="flex items-center mb-[18px]">
                    <img src="../../assets/icons/CardUser/User-5.png" alt="User">
                    <div class="flex flex-col ml-[16px]">
                        <p class="font-400 text-[8px] font-['Roboto'] text-white">Ninel Adarman</p>
                        <p class="font-400 text-[8px] font-['Roboto'] text-[#838A91]">20 Mar 2023 at 05:15 PM</p>
                    </div>
                    <img src="../../assets/icons/CardUser/twitter.svg" alt="ico" class="absolute top-[20px] right-[20px]">
                </div>
                <p class="font-400 text-[10px] font-['Roboto'] text-white">Thanks @ipicoin for your guidelines. I agree with you.<br> @Dun can you implement the way Ipicoin has described ?</p>
                <div class="flex items-end w-[100%] justify-end mt-[10px]">
                    <a href="/" class="font-400 text-[12px] font-['Gilroy-Light'] text-[#97AFD5] border-b border-[#97AFD5]">Reply</a>
                    <img class="ml-[17px] cursor-pointer" src="../../assets/icons/CardUser/heart.svg" alt="ico">
                </div>
            </div>

            <div class="flex flex-col min-w-[284px] h-[130px] px-[18px] py-[17px]  bg-[#FFFFFF]/5 rounded-[12px]  relative">
                <div class="flex items-center mb-[18px]">
                    <img src="../../assets/icons/CardUser/User-5.png" alt="User">
                    <div class="flex flex-col ml-[16px]">
                        <p class="font-400 text-[8px] font-['Roboto'] text-white">Ninel Adarman</p>
                        <p class="font-400 text-[8px] font-['Roboto'] text-[#838A91]">20 Mar 2023 at 05:15 PM</p>
                    </div>
                    <img src="../../assets/icons/CardUser/twitter.svg" alt="ico" class="absolute top-[20px] right-[20px]">
                </div>
                <p class="font-400 text-[10px] font-['Roboto'] text-white">Thanks @ipicoin for your guidelines. I agree with you.<br> @Dun can you implement the way Ipicoin has described ?</p>
                <div class="flex items-end w-[100%] justify-end mt-[10px]">
                    <a href="/" class="font-400 text-[12px] font-['Gilroy-Light'] text-[#97AFD5] border-b border-[#97AFD5]">Reply</a>
                    <img class="ml-[17px] cursor-pointer" src="../../assets/icons/CardUser/heart.svg" alt="ico">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>

.active_button {
  border-radius: 100%;
  height: 24px;
  width: 24px;
  border: 2.5px solid #97AFD5;
  margin-right: 12px;
  cursor: pointer;
}

.non_active_button {
  border-radius: 100%;
  height: 24px;
  width: 24px;
  border: 1px solid #97AFD5;
  margin-right: 12px;
  cursor: pointer;
}

</style>