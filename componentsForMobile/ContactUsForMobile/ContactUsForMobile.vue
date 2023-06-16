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
        class="flex flex-col items-center mt-[50px] justify-center  mx-[auto]"
    >

        <h2 class="text-white uppercase text-[22px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[9px]">Contact Us</h2>

        <div class="w-[343px] mb-[38px]">
            <p class="text-[#97AFD5] text-[12px] font-[400] font-['Inter'] leading-[26px]">We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly.</p>
        </div>

        <div class="flex flex-col items-center w-[343px] mb-[84px]">
        
            <div class="flex flex-col w-full ">
                <p class="text-[white] font-[700] leading-[26px] uppercase text-[12px] font-['Inter'] mb-[10px]">Your Name</p>
                <input type="text" placeholder="Introduce yourself" class=" placeholder:text-[#BDBDBD] placeholder:text-[14px] placeholder:font-['Inter'] placeholder:font-[400] bg-[#FFFFFF]/10 rounded-[6px] py-[12px] px-[15px] outline-none text-[#BDBDBD] font-['Inter'] font-[400] w-full">
            </div>

            <div class="flex flex-col w-full mt-[10px] ">
                <p class="text-[white] font-[700] leading-[26px] uppercase text-[12px] font-['Inter'] mb-[10px]">Your Email</p>
                <input type="text" placeholder="Who do we replay to" class=" placeholder:text-[#BDBDBD] placeholder:text-[14px] placeholder:font-['Inter'] placeholder:font-[400] bg-[#FFFFFF]/10 rounded-[6px] py-[12px] px-[15px] outline-none text-[#BDBDBD] font-['Inter'] font-[400] w-full">
            </div>
            <div class="flex flex-col w-full  mb-[41px] mt-[10px]">
                    <p class="text-[white] font-[700] leading-[26px] uppercase text-[12px] font-['Inter'] mb-[10px]">Your Message</p>
                    <textarea placeholder="Leave your question or comment here" class=" placeholder:text-[#BDBDBD] placeholder:text-[14px] placeholder:font-['Inter'] placeholder:font-[400] bg-[#FFFFFF]/10 rounded-[6px] py-[12px] px-[15px] outline-none text-[#BDBDBD] font-['Inter'] font-[400] w-full resize-none"></textarea>
            </div>

            <div class="flex items-center text-center rounded-[20px]  py-[7npmpx] px-[10px] bg-[#EC474E] w-[343px] h-[48px] cursor-pointer">
                <button class="text-white uppercase text-[16px] font-['Inter'] font-[700] leading-[26px] mr-[2px] ml-[20px]">send message</button>
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