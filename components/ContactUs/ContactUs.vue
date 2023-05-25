<template>
    <div class="flex flex-col items-center mt-[200px] justify-center">
        <h2 class="text-white uppercase text-[40px] font-['Quicksand'] mb-[9px]">Contact Us</h2>

        <div class="max-w-[534px] mb-[38px]">
            <p class="text-[#97AFD5] text-[16px] font-[400] font-['Roboto']">We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly.</p>
        </div>

        <div class="flex flex-col items-center w-[100%] mb-[84px]">
            <div class="flex w-[534px] items-center justify-between mb-[30px]" >

                <div class="flex flex-col <!-- mr-[40px] -->">
                    <p class="text-[#97AFD5] uppercase text-[12px] font-['Roboto'] mb-[10px]">Your Name</p>
                    <input type="text" placeholder="Introduce yourself" class="bg-[#FFFFFF]/10 font-[400] text=[14.4px] font-['Roboto sans-serif']  rounded-[6px] py-[12px] px-[15px] outline-none text-white">
                </div>

                <div class="flex flex-col ml-[5px]">
                    <p class="text-[#97AFD5] uppercase text-[12px] font-['Roboto'] mb-[10px]">Your Email</p>
                    <input type="text" placeholder="Who do we replay to" class="bg-[#FFFFFF]/10 rounded-[6px] py-[12px] px-[15px] outline-none text-white">
                </div>
            </div>

            <div class="flex flex-col w-[534px] mb-[41px]">
                    <p class="text-[#97AFD5] uppercase text-[12px] font-['Roboto'] mb-[10px]">Your Message</p>
                    <textarea placeholder="Leave your question or comment here" class="w-[100%] h-[105px] bg-[#FFFFFF]/10 rounded-[6px] py-[10px] px-[15px] outline-none text-white resize-none"></textarea>
            </div>

            <div class="flex items-center rounded-[20px] py-[14px] px-[40px] bg-[#EC474E] cursor-pointer">
                <button class="text-white uppercase text-[16px] font-['Barlow'] mr-[2px]">send message</button>
                <img src="../../assets/icons/Contact/arrow-right.png" alt="">
            </div>

            <div class="flex items-center w-{534px} justify-between mt-[85px]">
                <div class="flex items-center cursor-pointer">
                    <img src="../../assets/icons/Contact/tel-logo.png" alt="">
                    <p class="text-[#97AFD5] text-[15px] font-['Roboto'] ml-[15px]">In progress...</p>
                </div>
                <div class="flex items-center mx-[20px] cursor-pointer">
                    <img src="../../assets/icons/Contact/mail-logo.png" alt="">
                    <p class="text-[#97AFD5] text-[15px] font-['Roboto'] ml-[15px]">In progress...</p>
                </div>
                <div class="flex items-center cursor-pointer">
                    <img src="../../assets/icons/Contact/telegram-logo.png" alt="">
                    <p class="text-[#97AFD5] text-[15px] font-['Roboto'] ml-[15px]">In progress...</p>
                </div>

            </div>

        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>