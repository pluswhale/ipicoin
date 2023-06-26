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
        class="flex flex-col items-center mt-[50px] justify-center  mx-auto my-0 max-[1200px]:max-w-[540px]"
    >

        <h2 class="text-white uppercase text-[40px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[9px] max-[1200px]:text-[26px] max-[450px]:text-[26px]">Contact Us</h2>

        <div class="max-w-[540px] mb-[38px] max-[450px]:w-[343px]">
            <p class="text-[#97AFD5] text-[16px] font-[400] font-['Roboto'] text-center leading-[26px] max-[1420px]:font-['Inter'] max-[1200px]:text-[14px] max-[450px]:text-[12px] ">We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly.</p>
        </div>

        <div class="flex flex-col items-center mb-[84px] max-[1200px]:w-[540px] max-[450px]:w-[343px]">

            <div class="flex w-[540px] items-center justify-between mb-[30px] max-[1420px]:w-full max-[450px]:flex-col max-[1420px]:gap-[15px]" >
                <div class="flex  flex-col max-[450px]:w-full ">
                    <p class="text-[#97AFD5] font-[700] leading-[26px] uppercase text-[12px] font-['Roboto'] mb-[10px] max-[1420px]:tracking-[2.2px] max-[1420px]:font-['Inter']">Your Name</p>
                    <input class="placeholder:text-white placeholder:font-['Roboto'] placeholder:font-[400] bg-[#FFFFFF]/10 rounded-[6px] py-[12px] px-[15px] outline-none text-white font-['Roboto'] font-[400] w-[255px]
                    max-[1420px]:placeholder:font-['Inter'] max-[1420px]:placeholder:text-['14px'] max-[450px]:w-full max-[450px]:font-['Inter']
                    " type="text" placeholder="Introduce yourself" >
                </div>

                <div class="flex flex-col  max-[450px]:w-full  ">
                    <p class="text-[#97AFD5] font-[700] leading-[26px] uppercase text-[12px] font-['Roboto'] mb-[10px] max-[1420px]:tracking-[2.2px] max-[1420px]:font-['Inter']">Your Email</p>
                    <input class=" placeholder:text-white placeholder:font-['Roboto'] placeholder:font-[400] bg-[#FFFFFF]/10 rounded-[6px] py-[12px] px-[15px] outline-none text-white font-['Roboto'] font-[400] w-[255px]
                    max-[1420px]:placeholder:font-['Inter'] max-[1420px]:placeholder:text-['14px'] max-[1420px]:w-full max-[1420px]:font-['Inter']
                    " type="text" placeholder="Who do we replay to" >
                </div>
            </div>

            <div class="flex flex-col w-[540px]  mb-[41px] max-[450px]:w-full">
                    <p class="text-[#97AFD5] font-[700] leading-[26px] uppercase text-[12px] font-['Roboto'] mb-[10px] max-[1420px]:tracking-[2.2px] max-[1420px]:font-['Inter']">Your Message</p>
                    <textarea placeholder="Leave your question or comment here" class=" placeholder:text-white placeholder:font-['Roboto'] placeholder:font-[400]  w-[100%] h-[105px] bg-[#FFFFFF]/10 rounded-[6px] py-[10px] px-[15px] outline-none text-white font-['Roboto'] font-[400] resize-none"></textarea>
            </div>

            
                <button class="flex items-center w-[211px] justify-center text-center rounded-[20px] bg-[#EC474E] text-white uppercase text-[16px] font-['Barlow'] font-[700] leading-[26px] mr-[2px] ml-[20px] cursor-pointer
                max-[450px]:rounded-[8px] max-[450px]:w-full
                ">
                    send message
                    <img src="../../assets/icons/Contact/arrow-right.png" alt=""/>
                </button>
                


            <div class="flex items-center w-{534px} justify-between mt-[85px]">
                <div class="flex items-center cursor-pointer">
                    <img class="max-[1420px]:h-[28px]" src="../../assets/icons/Contact/tel-logo.png" alt="">
                    <p class="text-[#97AFD5] text-[15px] font-['Roboto'] ml-[15px] max-[1420px]:text-[11px] max-[1420px]:font-['Inter']">In progress...</p>
                </div>
                <div class="flex items-center mx-[20px] cursor-pointer">
                    <img class="max-[1420px]:h-[28px]" src="../../assets/icons/Contact/mail-logo.png" alt="">
                    <p class="text-[#97AFD5] text-[15px] font-['Roboto'] ml-[15px] max-[1420px]:text-[11px] max-[1420px]:font-['Inter']">hello@ipicoin.com</p>
                </div>
                <div class="flex items-center cursor-pointer">
                    <img class="max-[1420px]:h-[28px]" src="../../assets/icons/Contact/telegram-logo.png" alt="">
                    <p class="text-[#97AFD5] text-[15px] font-['Roboto'] ml-[15px] max-[1420px]:text-[11px] max-[1420px]:font-['Inter']">@ipicoin</p>
                </div>

            </div>

        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>