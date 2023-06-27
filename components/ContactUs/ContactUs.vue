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
        class="flex flex-col items-center mt-[50px] justify-center  mx-auto my-0 lg:max-w-[540px]"
    >

        <h2 class="text-white uppercase text-[40px] font-[700] font-['Big_Shoulders_Stencil_Text'] mb-[9px] lg:text-[26px] md:text-[26px]">Contact Us</h2>

        <div class="max-w-[540px] mb-[38px] md:w-[343px]">
            <p class="text-[#97AFD5] text-[16px] font-[400] font-['Quicksand'] text-center leading-[26px] xl:font-['Inter'] lg:text-[14px] md:text-[12px] ">We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly.</p>
        </div>

        <div class="flex flex-col items-center mb-[84px] lg:w-[540px] md:w-[343px]">

            <div class="flex w-[540px] items-center justify-between mb-[30px] xl:w-full md:flex-col xl:gap-[15px]" >
                <div class="flex  flex-col md:w-full ">
                    <p class="text-white font-[700] leading-[26px] uppercase tracking-[2.24px] text-[12px] font-['Barlow'] mb-[10px] xl:tracking-[2.24px] xl:font-['Inter']">Your Name</p>
                    <input class="placeholder:text-[#BDBDBD] placeholder:font-['Quicksand'] placeholder:font-[500] placeholder:text-[14.4px] bg-[#FFFFFF]/10 rounded-[6px] py-[12px] px-[15px] outline-none text-[#BDBDBD] text-[14.4px] font-['Quicksand'] font-[500] w-[255px]
                    xl:placeholder:font-['Inter'] xl:placeholder:text-['14px'] md:w-full md:font-['Inter']
                    " type="text" placeholder="Introduce yourself" >
                </div>

                <div class="flex flex-col  md:w-full  ">
                    <p class="text-white font-[700] leading-[26px] uppercase text-[12px] tracking-[2.24px] font-['Barlow'] mb-[10px] xl:tracking-[2.2px] xl:font-['Inter']">Your Email</p>
                    <input class=" placeholder:text-[#BDBDBD] placeholder:font-['Quicksand'] placeholder:font-[500] placeholder:text-[14.4px] bg-[#FFFFFF]/10 rounded-[6px] py-[12px] px-[15px] outline-none text-[#BDBDBD] text-[14.4px] font-['Quicksand'] font-[500] w-[255px]
                    xl:placeholder:font-['Inter'] xl:placeholder:text-['14px'] md:w-full  xl:font-['Inter']
                    " type="text" placeholder="Who do we replay to" >
                </div>
            </div>

            <div class="flex flex-col w-[540px]  mb-[41px] md:w-full">
                    <p class="text-white font-[700] leading-[26px] uppercase text-[12px] tracking-[2.24px] font-['Barlow'] mb-[10px] xl:tracking-[2.2px] xl:font-['Inter']">Your Message</p>
                    <textarea placeholder="Leave your question or comment here" class=" placeholder:text-[#BDBDBD] placeholder:font-['Quicksand'] placeholder:font-[500] placeholder:text-[14.4px]  w-[100%] h-[105px] bg-[#FFFFFF]/10 rounded-[6px] py-[10px] px-[15px] outline-none text-[#BDBDBD] text-[14.4px] font-['Quicksand'] font-[500] resize-none"></textarea>
            </div>

            
                <button class="flex items-center w-[211px] h-[48px] justify-center text-center rounded-[20px] bg-[#EC474E] text-white uppercase text-[16px] font-['Barlow'] font-[700] leading-[26px] mr-[2px] cursor-pointer
                md:rounded-[8px] md:w-full
                ">
                    send message
                    <img src="../../assets/icons/Contact/arrow-right.png" alt=""/>
                </button>
                


            <div class="flex items-center w-{534px} justify-between mt-[85px]">
                <div class="flex items-center cursor-pointer">
                    <img class="xl:h-[28px]" src="../../assets/icons/Contact/tel-logo.png" alt="">
                    <p class="text-[#97AFD5] text-[15px] font-['Roboto'] ml-[15px] whitespace-nowrap xl:text-[11px] xl:font-['Inter'] max-[400px]:ml-[5px]">In progress...</p>
                </div>
                <div class="flex items-center mx-[20px] cursor-pointer">
                    <img class="xl:h-[28px]" src="../../assets/icons/Contact/mail-logo.png" alt="">
                    <p class="text-[#97AFD5] text-[15px] font-['Roboto'] ml-[15px] xl:text-[11px] xl:font-['Inter'] max-[400px]:ml-[5px]">hello@ipicoin.com</p>
                </div>
                <div class="flex items-center cursor-pointer">
                    <img class="xl:h-[28px]" src="../../assets/icons/Contact/telegram-logo.png" alt="">
                    <p class="text-[#97AFD5] text-[15px] font-['Roboto'] ml-[15px] xl:text-[11px] xl:font-['Inter'] max-[400px]:ml-[5px]">@ipicoin</p>
                </div>

            </div>

        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>