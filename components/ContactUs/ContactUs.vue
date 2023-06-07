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
        class="flex flex-col items-center mt-[50px] justify-center max-w-[1360px] mx-auto my-0"
    >

        <h2 class="text-white uppercase text-[40px] font-[700] font-['Quicksand'] mb-[9px]">Contact Us</h2>

        <div class="max-w-[534px] mb-[38px]">
            <p class="text-[#97AFD5] text-[16px] font-[400] font-['Roboto'] leading-[26px]">We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly.</p>
        </div>

        <div class="flex flex-col items-center w-[100%] mb-[84px]">
            <div class="flex w-[534px] items-center justify-between mb-[30px]" >

                <div class="flex flex-col ">
                    <p class="text-[#97AFD5] font-[700] leading-[26px] uppercase text-[12px] font-['Roboto'] mb-[10px]">Your Name</p>
                    <input type="text" placeholder="Introduce yourself" class="placeholder:text-white placeholder:font-['Roboto'] placeholder:font-[400] bg-[#FFFFFF]/10 rounded-[6px] py-[12px] px-[15px] outline-none text-white font-['Roboto'] font-[400] w-[255px]">
                </div>

                <div class="flex flex-col ">
                    <p class="text-[#97AFD5] font-[700] leading-[26px] uppercase text-[12px] font-['Roboto'] mb-[10px]">Your Email</p>
                    <input type="text" placeholder="Who do we replay to" class=" placeholder:text-white placeholder:font-['Roboto'] placeholder:font-[400] bg-[#FFFFFF]/10 rounded-[6px] py-[12px] px-[15px] outline-none text-white font-['Roboto'] font-[400] w-[255px]">
                </div>
            </div>

            <div class="flex flex-col w-[534px] mb-[41px]">
                    <p class="text-[#97AFD5] font-[700] leading-[26px] uppercase text-[12px] font-['Roboto'] mb-[10px]">Your Message</p>
                    <textarea placeholder="Leave your question or comment here" class=" placeholder:text-white placeholder:font-['Roboto'] placeholder:font-[400]  w-[100%] h-[105px] bg-[#FFFFFF]/10 rounded-[6px] py-[10px] px-[15px] outline-none text-white font-['Roboto'] font-[400] resize-none"></textarea>
            </div>

            <div class="flex items-center text-center rounded-[20px] py-[14px] px-[15px] bg-[#EC474E] w-[211px] cursor-pointer">
                <button class="text-white uppercase text-[16px] font-['Barlow'] font-[700] leading-[26px] mr-[2px] ml-[20px]">send message</button>
                <img src="../../assets/icons/Contact/arrow-right.png" alt="">
            </div>

            <div class="flex items-center w-{534px} justify-between mt-[85px]">
                <div class="flex items-center cursor-pointer">
                    <img src="../../assets/icons/Contact/tel-logo.png" alt="">
                    <p class="text-[#97AFD5] text-[15px] font-['Roboto'] ml-[15px]">In progress...</p>
                </div>
                <div class="flex items-center mx-[20px] cursor-pointer">
                    <img src="../../assets/icons/Contact/mail-logo.png" alt="">
                    <p class="text-[#97AFD5] text-[15px] font-['Roboto'] ml-[15px]">hello@ipicoin.com</p>
                </div>
                <div class="flex items-center cursor-pointer">
                    <img src="../../assets/icons/Contact/telegram-logo.png" alt="">
                    <p class="text-[#97AFD5] text-[15px] font-['Roboto'] ml-[15px]">@ipicoin</p>
                </div>

            </div>

        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>