<template>
    <div class="flex flex-col  mt-[43px] mx-[auto] ">
        <!-- <img src="~/assets/images/Planet.svg" class="absolute planet"/> -->

        <!--swap card-->
        <div class="h-[314px] px-[37px] py-[28px] w-[343px] translate-x-[3px]  bg-white/10 backdrop-blur-sm  rounded-[20px]">
            <div class="flex flex-col w-full">
                <!--header-->
                <div class="flex justify-center items-center gap-[10px] mb-[22px]">
                    <span class="text-[20px]  text-[#749DCA] uppercase font-[500] font-['Inter']"> swap</span>
                    <img class="h-[31px] w-[31px] " src="~/assets/icons/swap_header_icon.svg"/>
                </div>
                <!--header-->

                <!--inputs-->
                <div class="flex flex-col  ">
                    <div  class="flex items-center justify-between pl-[10px] py-[5px] pr-[30px] w-full border-[1px] rounded-[8px] mb-[10px]">
                        <div class="flex items-center relative" >
                            <span class="text-white font-[500] text-[11px] mr-[10px] mt-[4px] font-['Inter']">From</span>
                            <span class="text-[#749DCA] font-[500] text-[17px] uppercase font-['Inter']">ipicoin</span>
                            <span class="ml-[8px] cursor-pointer"><img class="h-[17px] w-[17px]" @click="handleOpenToDialogIPI"  src="../../../../assets/icons/chevron-down.png" alt=""/></span>
                            <div v-if="stateIPI.toDialogOpenIPI" class="absolute w-[274px] left-[-13px] top-[35px] bg-[#2D1E42] border-[1px] border-[white] backdrop-blur-sm  
                            rounded-[8px] z-[2] py-[5px]">
                                <span class="flex flex-col">
                                    <div class="flex items-center w-full h-[22px] modalWallet"><p class="text-[#FFFFFF] font-[500] font-['Inter'] translate-x-[55px] text-[13px] uppercase">USD</p></div>
                                    <div class="flex items-center w-full h-[22px] modalWallet"><p class="text-[#FFFFFF] font-[500] font-['Inter'] translate-x-[55px] text-[13px] uppercase">IPICOIN</p></div>
                                    <div class="flex items-center w-full h-[22px] modalWallet"><p class="text-[#FFFFFF] font-[500] font-['Inter'] translate-x-[55px] text-[13px] uppercase">EUR</p></div>
                                </span>
                            </div>
                        </div>
                       <input type="text" maxlength="10"  placeholder="0" class="outline-none bg-[transparent] text-white font-[500] text-[17px] font-['Inter'] w-[100px] placeholder:text-[17px] text-right">
                    </div>
                    <div class="flex items-center justify-between pl-[10px] py-[5px] pr-[30px] w-full border-[1px] rounded-[8px]">
                        <div class="flex items-center relative">
                            <span class="text-white font-[500] text-[11px] mt-[5px] font-['Inter']">To</span>
                            <span class="text-[#749DCA] font-[500] translate-x-[24px] font-['Inter'] text-[17px] uppercase">usd</span>
                            <span class="ml-[30px] cursor-pointer"><img class="h-[17px] w-[17px]" @click="handleOpenToDialog"  src="../../../../assets/icons/chevron-down.png" alt=""></span>
                            <div v-if="state.toDialogOpen" class="absolute w-[274px] left-[-13px] top-[35px] bg-[#2D1E42] border-[1px] border-[white] backdrop-blur-sm  
                            rounded-[8px] py-[5px]">
                                <span class="flex flex-col">
                                    <div class="flex items-center w-full h-[22px] modalWallet"><p class="text-[#FFFFFF] font-[500] font-['Inter'] translate-x-[55px] text-[13px] uppercase">USD</p></div>
                                    <div class="flex items-center w-full h-[22px] modalWallet"><p class="text-[#FFFFFF] font-[500] font-['Inter'] translate-x-[55px] text-[13px] uppercase">IPICOIN</p></div>
                                    <div class="flex items-center w-full h-[22px] modalWallet"><p class="text-[#FFFFFF] font-[500] font-['Inter'] translate-x-[55px] text-[13px] uppercase">EUR</p></div>
                                </span>
                            </div>
                        </div>
                        <input type="text" maxlength="10" placeholder="0" class="outline-none bg-[transparent] text-white font-[500] text-[17px] font-['Inter'] w-[100px] placeholder:text-[17px] text-right">
                    </div>
                </div> 
                <!--inputs-->

                <!--button connect-->
                <button class="rounded-[8px] h-[46px] justify-center items-center bg-[#EC474E] text-white uppercase mt-[22px] font-['Inter'] text-[14px] font-[600] leading-[27px]">connect wallet</button>
                <!--button connect-->

                <!--wallets icon -->

                <div class="flex flex-row w-full items-center justify-between mt-[35px]">
                    <img class="w-[84px] h-[22px]" src="~/assets/icons/swap_wallet_binance_icon.svg"/>
                    <img class="w-[47px] h-[22px]" src="~/assets/icons/swap_wallet_google_icon.svg"/>
                    <img class="w-[47px] h-[22px]" src="~/assets/icons/swap_wallet_apple_icon.svg"/>
                    <img class="w-[47px] h-[22px]" src="~/assets/icons/swap_wallet_visa_icon.svg"/>
                    <img class="w-[47px] h-[22px]" src="~/assets/icons/swap_wallet_mc_icon.svg"/>
                </div>

                <!--wallets icon -->

            </div>
        </div>
        <!--swap card-->

        <!--link line-->
        <div class="flex items-center justify-center w-full gap-[30px] mt-[23px]">
            <div class="flex items-center">
                <span class="font-[300] text-white font-['Inter'] uppercase text-[12px] whitespace-nowrap">IPI WALLET</span>
                <img src="~/assets/icons/arrow-right.svg"/>
            </div>
            <div class="flex items-center">
                <span class="font-[400] text-white font-['Inter'] uppercase text-[12px] whitespace-nowrap">IPI WALLET</span>
                <img src="~/assets/icons/arrow-right.svg"/>
            </div>
        </div>
        <!-- download apps block-->
        <div class="flex items-center mt-[77px] gap-[20px] translate-y-[-50px] translate-x-[-5px]">

            <!--    <img src="../../../../assets/images/mainpage/test_bg_2.png" alt="">
            <img src="../../../../assets/images/mainpage/Button_Gplay.png" alt=""> -->

            <div class="flex flex-row items-center justify-center w-[165px] h-[50px] border-[1px] border-[#EC474E] rounded-[8px] hover:bg-[#EC474E] cursor-pointer">
                <div class="flex pl-[10px] gap-[20px]">
                    <img src="~/assets/icons/apple_icon.svg" class="h-[30px] w-[32px] translate-y-[0px] translate-x-[2px]"/>
                    <div class="flex flex-col">
                        <span class="text-white whitespace-nowrap font-[400] font-['Montserrat'] text-[12px] translate-y-[-3px] translate-x-[-9px] IOS_text">Download on the</span>
                        <span class="text-white whitespace-nowrap font-[600] font-['Lato'] text-[22px] translate-y-[-3px] translate-x-[-11px] IOS_title">App Store</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-row items-center w-[165px] justify-center h-[50px] border-[1px] border-[#EC474E] rounded-[8px] hover:bg-[#EC474E] cursor-pointer">
                <div class="flex pl-[10px] gap-[20px]">
                    <img src="~/assets/icons/playmarket_icon.svg" class="h-[30px] w-[32px] translate-y-[8px] translate-x-[6px]"/>
                    <div class="flex flex-col">
                        <span  class="text-white whitespace-nowrap font-[400] font-['Montserrat'] text-[14px] translate-y-[3px] translate-x-[-9px] uppercase ">Get It On</span>
                        <span class="text-white whitespace-nowrap font-[600] font-['Montserrat'] text-[17px] translate-y-[-3px] translate-x-[-9px]">Google Play</span>
                    </div>
                </div>
            </div>
        </div> 
        <!-- download apps block-->

    </div>
</template>

<script setup>

const state = reactive({ toDialogOpen: false })

console.log("state open", state.toDialogOpen);

const handleOpenToDialog = () => {
  state.toDialogOpen = !state.toDialogOpen
}

const stateIPI = reactive({ toDialogOpenIPI: false })

const handleOpenToDialogIPI = () => {
    stateIPI.toDialogOpenIPI = !stateIPI.toDialogOpenIPI
}

</script>

<style lang="scss" scoped>

.IOS_title{
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 19px;
}

/* .IOS_text{
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
} */

.planet {
    background-blend-mode: color-dodge;
    mix-blend-mode: color-dodge;
}

.quicksand {
    font-family: 'Quicksand' sans-serif;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}

</style>