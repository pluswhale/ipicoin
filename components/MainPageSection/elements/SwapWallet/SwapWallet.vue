<template>
    <div class="flex flex-col translate-x-[-10px] relative max-[1420px]:mt-[43px] max-[1420px]:mx-auto mx">
        <!--swap card-->
        <div class="h-[349px] px-[50px] ml-[20px] mt-[119px] py-[28px] w-[471px]  bg-white/10 backdrop-blur-sm  rounded-[20px]
            max-[1420px]:h-[314px] max-[1420px]:px-[37px] max-[1420px]:w-[343px] max-[1420px]:translate-x-[3px] max-[1420px]:mt-[0]
        ">
            <div class="flex flex-col w-full">
                <!--header-->
                <div class="flex justify-center items-center gap-[10px] mb-[22px]">
                    <span class="text-[29px]  text-[#749DCA] uppercase font-[700] font-['Quicksand'] max-[1420px]:text-[20px] max-[1420px]:font-['Inter'] max-[1420px]:font-[500]"> swap</span>
                    <img class="max-[1420px]:h-[31px] max-[1420px]:w-[31px]" src="~/assets/icons/swap_header_icon.svg"/>
                </div>
                <!--header-->

                <!--inputs-->
                <div class="flex flex-col">
                    <div  class="flex items-center justify-between pl-[10px] py-[5px] pr-[30px] w-full border-[1px] rounded-[8px] mb-[10px]">
                        <div class="flex items-center relative">
                            <span class="text-white font-[500] text-[16px] mr-[10px] mt-[5px] font-['Quicksand'] max-[1420px]:text-[11px] max-[1420px]:mt-[4px] max-[1420px]:font-['Inter']">From</span>
                            <span class="text-[#749DCA] font-[700] text-[24px] uppercase font-['Quicksand'] max-[1420px]:text-[17px] max-[1420px]:font-['Inter']">ipicoin</span>
                            <span class="ml-[8px] cursor-pointer"><img @click="handleOpenToDialog('from')"  src="../../../../assets/icons/chevron-down.png" alt=""/></span>
                            <div v-if="state.fromDialogOpen" class="absolute w-[375px] left-[-13px] top-[46px] bg-[#2D1E42] border-[1px] border-[white] backdrop-blur-sm  
                            rounded-[8px] z-[2] max-[1420px]:w-[274px] max-[1420px]:top-[35px]">
                                <span class="flex flex-col">
                                    <div class="flex items-center w-full h-[50px] modalWallet max-[1420px]:h-[22px]"><p class="text-[#FFFFFF] font-[500] font-['Inter'] translate-x-[55px] text-[24px] uppercase">USD</p></div>
                                    <div class="flex items-center w-full h-[50px] modalWallet max-[1420px]:h-[22px]"><p class="text-[#FFFFFF] font-[500] font-['Inter'] translate-x-[55px] text-[24px] uppercase">IPICOIN</p></div>
                                    <div class="flex items-center w-full h-[50px] modalWallet max-[1420px]:h-[22px]"><p class="text-[#FFFFFF] font-[500] font-['Inter'] translate-x-[55px] text-[24px] uppercase">EUR</p></div>
                                </span>
                            </div>
                        </div>
                       <input type="text" maxlength="10"  placeholder="0" class="outline-none bg-[transparent] text-white font-[700] text-[24px] font-['Quicksand'] w-[150px] placeholder:text-[24px] text-right
                       max-[1420px]:font-[500] max-[1420px]:font-['Inter'] max-[1420px]:text-[17px] max-[1420px]:w-[100px] max-[1420px]:placeholder:text-[17px] 
                       ">
                    </div>
                    
                    <div class="flex items-center justify-between pl-[10px] py-[5px] pr-[30px] w-full border-[1px] rounded-[8px] relative z-[1]">
                        <div class="flex items-center">
                            <span class="text-white font-[500] text-[16px] mr-[10px] mt-[5px] font-['Quicksand'] max-[1420px]:text-[11px] max-[1420px]:mt-[4px] max-[1420px]:font-['Inter']">To</span>
                            <span class="text-[#749DCA] font-[700] font-['Quicksand'] ml-[20px] text-[24px] uppercase max-[1420px]:text-[17px] max-[1420px]:font-['Inter']">usd</span>
                            <span class="ml-[15px] cursor-pointer"><img @click="handleOpenToDialog('to')" src="../../../../assets/icons/chevron-down.png" alt=""></span>
                            <div v-if="state.toDialogOpen" class="absolute w-[375px] left-[-3px] top-[53px] bg-[#2D1E42] border-[1px] border-[white] backdrop-blur-sm  
                            rounded-[8px] max-[1420px]:w-[274px] max-[1420px]:top-[35px]">
                                <span class="flex flex-col">
                                    <div class="flex items-center w-full h-[50px] modalWallet max-[1420px]:h-[22px]"><p class="text-[#FFFFFF] font-[500] font-['Inter'] translate-x-[55px] text-[24px] uppercase">USD</p></div>
                                    <div class="flex items-center w-full h-[50px] modalWallet max-[1420px]:h-[22px]"><p class="text-[#FFFFFF] font-[500] font-['Inter'] translate-x-[55px] text-[24px] uppercase">IPICOIN</p></div>
                                    <div class="flex items-center w-full h-[50px] modalWallet max-[1420px]:h-[22px]"><p class="text-[#FFFFFF] font-[500] font-['Inter'] translate-x-[55px] text-[24px] uppercase">EUR</p></div>
                                </span>
                            </div>
                        </div>
                        <input type="text" maxlength="10" placeholder="0" class="outline-none bg-[transparent] text-white font-[700] text-[24px] font-['Quicksand'] w-[150px] placeholder:text-[24px] text-right
                        max-[1420px]:font-[500] max-[1420px]:font-['Inter'] max-[1420px]:text-[17px] max-[1420px]:w-[100px] max-[1420px]:placeholder:text-[17px]
                        ">
                    </div>
                </div> 
                <!--inputs-->

                <!--button connect-->
                <button class="rounded-[20px] h-[46px] justify-center items-center bg-[#EC474E] text-white uppercase mt-[22px] font-['Barlow'] text-[21px] font-[700] leading-[27px]
                max-[1420px]:rounded-[8px] max-[1420px]:font-['Inter'] max-[1420px]:font-[600] max-[1420px]:text-[14px]
                ">connect wallet</button>
                <!--button connect-->

                <!--wallets icon -->

                <div class="flex flex-row items-center justify-between" :class="{'w-full':!isMobile, 'w-[61px]':isMobile, 'mt-[25px]': !isMobile, 'mt-[15px]': isMobile,}">
                    <img class="max-[1420px]:h-[22px] max-[1420px]:w-[84px]" src="~/assets/icons/swap_wallet_binance_icon.svg"/>
                    <img class="max-[1420px]:h-[22px] max-[1420px]:w-[84px]" src="~/assets/icons/swap_wallet_google_icon.svg"/>
                    <img class="max-[1420px]:h-[22px] max-[1420px]:w-[84px]" src="~/assets/icons/swap_wallet_apple_icon.svg"/>
                    <img class="max-[1420px]:h-[22px] max-[1420px]:w-[84px]" src="~/assets/icons/swap_wallet_visa_icon.svg"/>
                    <img class="max-[1420px]:h-[22px] max-[1420px]:w-[84px]" src="~/assets/icons/swap_wallet_mc_icon.svg"/>
                </div>

                <!--wallets icon -->

            </div>
        </div>
        <!--swap card-->

        <!--link line-->
        <div class="flex items-center mt-[30px] justify-center w-full gap-[30px] ml-[20px] max-[1420px]:mt-[22px]">
            <div class="flex items-center">
                <span class=" text-white font-[600] font-['Inter'] uppercase text-[14.5px] whitespace-nowrap max-[1420px]:font-[400]">IPI SCANER</span>
                <img src="~/assets/icons/arrow-right.svg"/>
            </div>
            <div class="flex items-center">
                <span class=" text-white font-[600] font-['Inter'] uppercase whitespace-nowrap text-[14.5px] max-[1420px]:font-[400]">IPI WALLET</span>
                <img src="~/assets/icons/arrow-right.svg"/>
            </div>
        </div>

        <div class="flex items-center mt-[77px] gap-[15px] translate-y-[-50px] translate-x-[-5px] min-[1420px]:hidden"
            >
                <div class="flex flex-row items-center justify-center w-[187px] h-[55px] border-[2px] border-[#EC474E] rounded-[20px] hover:bg-[#EC474E] cursor-pointer">
                    <div class="flex pl-[10px] gap-[20px]">
                        <img src="~/assets/icons/apple_icon.svg" class="translate-y-[3px] translate-x-[0px] w-[30px] h-[37px]"/>
                        <div class="flex flex-col">
                            <span class="text-white whitespace-nowrap font-[400] font-['Lato'] text-[11px] translate-y-[0px] translate-x-[-9px] IOS_text">Download on the</span>
                            <span class="text-white whitespace-nowrap font-[500] font-['Lato'] text-[20px] translate-y-[-5px] translate-x-[-11px] IOS_title">App Store</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-row items-center w-[187px] justify-center h-[55px] border-[2px] border-[#EC474E] rounded-[20px] hover:bg-[#EC474E] cursor-pointer">
                    <div class="flex pl-[10px] gap-[20px]">
                        <img src="~/assets/icons/playmarket_icon.svg" class="translate-y-[3px] translate-x-[3px] w-[33px] h-[37px]"/>
                        <div class="flex flex-col">
                            <span  class="text-white whitespace-nowrap font-[400] font-['Montserrat'] text-[11px] translate-y-[3px] translate-x-[-9px] uppercase ">Get It On </span>
                            <span class="text-white whitespace-nowrap font-[600] font-['Montserrat'] text-[19px] translate-y-[-3px] translate-x-[-9px]">Google Play</span>
                        </div>
                    </div>
                </div>

        </div> 
    </div>
</template>

<script setup>

const state = reactive({ fromDialogOpen: false, toDialogOpen: false  })

const handleOpenToDialog = (typeModal) => {
    if (typeModal === "from") {
        state.fromDialogOpen = !state.fromDialogOpen
    } else if (typeModal === 'to') {
        state.toDialogOpen = !state.toDialogOpen
    }
}

</script>

<style lang="scss" scoped>

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

.modalWallet:hover{
    background: #749DCA;
    border-radius: 8px;
    transition: all .25s;
}

</style>