<template>
    <div class="flex flex-col">
        <!--swap card-->
        <div class="h-[349px] px-[50px] ml-[20px] mt-[200px] py-[28px] w-[471px]  bg-white/10 backdrop-blur-sm  rounded-[20px]">
            <div class="flex flex-col w-full">
                <!--header-->
                <div class="flex justify-center items-center gap-[10px] mb-[22px]">
                    <span class="text-[29px]  text-[#749DCA] uppercase font-[700] font-['Quicksand']"> swap</span>
                    <img src="~/assets/icons/swap_header_icon.svg"/>
                </div>
                <!--header-->

                <!--inputs-->
                <div class="flex flex-col">
                    <div  class="flex items-center justify-between pl-[10px] py-[5px] pr-[30px] w-full border-[1px] rounded-[8px] mb-[10px]">
                        <div class="flex items-center">
                            <span class="text-white font-[500] text-[16px] mr-[10px] mt-[5px] font-['Quicksand']">From</span>
                            <span class="text-[#749DCA] font-[700] text-[24px] uppercase font-['Quicksand']">ipicoin</span>
                        </div>
                       <input type="text" maxlength="10"  placeholder="0" class="outline-none bg-[transparent] text-white font-[700] text-[24px] font-['Quicksand'] w-[150px] placeholder:text-[24px] text-right">
                    </div>
                    <div class="flex items-center justify-between pl-[10px] py-[5px] pr-[30px] w-full border-[1px] rounded-[8px]">
                        <div class="flex items-center">
                            <span class="text-white font-[500] text-[16px] mr-[10px] mt-[5px] font-['Quicksand']">To</span>
                            <span class="text-[#749DCA] font-[700] font-['Quicksand'] ml-[20px] text-[24px] uppercase">usd</span>
                        </div>
                        <input type="text" maxlength="10" placeholder="0" class="outline-none bg-[transparent] text-white font-[700] text-[24px] font-['Quicksand'] w-[150px] placeholder:text-[24px] text-right">
                    </div>
                </div> 
                <!--inputs-->

                <!--button connect-->
                <button class="rounded-[20px] h-[46px] justify-center items-center bg-[#EC474E] text-white uppercase mt-[22px] font-['Barlow'] text-[21px] font-[700] leading-[27px]">connect wallet</button>
                <!--button connect-->

                <!--wallets icon -->

                <div class="flex flex-row w-full items-center justify-between mt-[35px]">
                    <img src="~/assets/icons/swap_wallet_binance_icon.svg"/>
                    <img src="~/assets/icons/swap_wallet_google_icon.svg"/>
                    <img src="~/assets/icons/swap_wallet_apple_icon.svg"/>
                    <img src="~/assets/icons/swap_wallet_visa_icon.svg"/>
                    <img src="~/assets/icons/swap_wallet_mc_icon.svg"/>
                </div>

                <!--wallets icon -->

            </div>
        </div>
        <!--swap card-->

        <!--link line-->
        <div class="flex items-center gap-[5px] mt-[50px] ml-[20px]">
            <div class="flex items-center">
                <span class="font-[600] text-white font-['SF_Pro_Text'] uppercase text-[14.5px] whitespace-nowrap">ipi scaner</span>
                <img src="~/assets/icons/arrow-right.svg"/>
            </div>
            <div class="flex items-center">
                <span class="font-[600] text-white font-['SF_Pro_Text'] uppercase text-[14.5px] whitespace-nowrap">ipi scaner</span>
                <img src="~/assets/icons/arrow-right.svg"/>
            </div>
            <div class="flex items-center">
                <span class="font-[600] text-white font-['SF_Pro_Text'] uppercase text-[14.5px] whitespace-nowrap">ipi scaner</span>
                <img src="~/assets/icons/arrow-right.svg"/>
            </div>
            <div class="flex items-center">
                <span class="font-[600] text-white uppercase font-['SF_Pro_Text'] text-[14.5px] whitespace-nowrap">ipi scaner</span>
                <img src="~/assets/icons/arrow-right.svg"/>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.quicksand {
    font-family: 'Quicksand' sans-serif;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}

</style>