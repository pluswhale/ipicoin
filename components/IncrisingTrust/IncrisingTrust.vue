<template>
    <div class="flex  justify-center items-center w-screen self-start bg-white/10 h-[179px] absolute left-[0] top-[-300px] max-[910px]:top-[-250px] max-[829px]:hidden  ">
        <div class="flex w-[1219px] justify-between max-[1200px]:w-[800px]">
            <div class="flex flex-col justify-center">
                <span class="font-[500] font-['Quicksand'] text-[68px] text-[#749DCA] text-center textLine max-[1200px]:text-[50px]">40 k +</span>
                <span class="font-['Roboto'] text-[24px] font-[400] text-white max-[1200px]:text-[17px]  ">active traders</span>
            </div>


            <div class="flex flex-col justify-center">
                <span class="font-[500] font-['Quicksand'] text-[68px] text-[#749DCA] text-center textLine max-[1200px]:text-[50px]">70 k +</span>
                <span class="font-['Roboto'] text-[24px] font-[400] text-white  max-[1200px]:text-[17px] ">Telegram subscribers</span>
            </div>


            <div class="flex flex-col justify-center">
                <span class="font-[500] font-['Quicksand'] text-[68px] text-[#749DCA] text-center textLine max-[1200px]:text-[50px]">10 k +</span>
                <span class="font-['Roboto'] text-[24px] font-[400] text-white  max-[1200px]:text-[17px]">Registered user</span>
            </div>


            <div class="flex flex-col justify-center">
                <span class="font-[500] font-['Quicksand'] text-[68px] text-[#749DCA] text-center textLine max-[1200px]:text-[50px]"> &#60 0, 10 %</span>
                 <span class="font-['Roboto'] text-[24px] font-[400] text-white max-[1200px]:text-[17px] ">the lowest transaction fees</span>
            </div>
        
        </div>
    </div>

    <!--for mobile-->
    <div class="hidden  justify-center items-center w-screen self-start bg-white/10 absolute left-[0] top-[-250px] h-[179px] max-[820px]:flex ">
        <div class="flex flex-col w-full items-center justify-between gap-[20px]">
            <div class="flex gap-[40px]">
                <div class="flex flex-col justify-center ">
                    <span class="font-[500] font-['Inter'] text-[36px] text-[#749DCA] text-center textLine">40 k +</span>
                    <span class="font-['Roboto'] text-[12px] font-[400] text-white ">active traders</span>
                </div>


                <div class="flex flex-col justify-center">
                    <span class="font-[500] font-['Inter'] text-[36px] text-[#749DCA] text-center textLine">70 k +</span>
                    <span class="font-['Inter'] text-[12px] font-[400] text-white ">Telegram subscribers</span>
                </div> 
            </div>


            <div class="flex gap-[40px]">
                <div class="flex flex-col justify-center">
                    <span class="font-[500] font-['Inter'] text-[36px] text-[#749DCA] text-center textLine">10 k +</span>
                    <span class="font-['Inter'] text-[12px] font-[400] text-white ">Registered user</span>
                </div>


                <div class="flex flex-col justify-center">
                    <span class="font-[500] font-['Inter'] text-[36px] text-[#749DCA] text-center textLine"> &#60 0, 10 %</span>
                    <span class="font-['Inter'] text-[12px] font-[400] text-white ">the lowest transaction fees</span>
                </div>
            </div>

        
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.textLine{
    text-shadow: 0px 0px 10px rgba(151, 175, 213, 0.9);
}
</style>