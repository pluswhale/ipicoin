<template>
    <div 
        class=" graph_wrap " 
        ref="cardRef"
        @mousemove="handleMouseMove"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
            <div
                class="flex flex-col bg-white/10  backdrop-blur-sm rounded-[20px] graph max-[1400px]:rounded-[25px]"
                :style="cardStyle"
             >
                <!--header coins-->
                <div class="flex flex-col w-[65.5%] self-end items-center mr-[54px]" >
                    <div class="flex flex-row mt-[27px] w-[95.5%] justify-between">
                        <div class="flex flex-col items-center">
                            <span class=" text-white text-[18px] font-[600] font-['Manrope']  max-[1400px]:text-[12px]">IPI</span>
                            <img  class="max-[1400px]:w-[25px] max-[1400px]:h-[25px]"  src="~/assets/icons/out_advantages/ipi_coin.svg"/>
                        </div>
                        <div class="flex flex-col items-center">
                            <span class=" text-white text-[18px] font-[600] font-['Manrope']  max-[1400px]:text-[12px]">BNB</span>
                            <img  class="max-[1400px]:w-[25px] max-[1400px]:h-[25px]" src="~/assets/icons/out_advantages/binance_icon.svg"/>
                        </div>
                        <div class="flex flex-col items-center">
                            <span class=" text-white text-[18px] font-[600] font-['Manrope']  max-[1400px]:text-[12px]">ADA</span>
                            <img  class="max-[1400px]:w-[25px] max-[1400px]:h-[25px]" src="~/assets/icons/out_advantages/ada_icon.svg"/>

                        </div>
                        <div class="flex flex-col items-center">
                            <span class=" text-white text-[18px] font-[600] font-['Manrope']  max-[1400px]:text-[12px]">Cosmos</span>
                            <img  class="max-[1400px]:w-[25px] max-[1400px]:h-[25px]" src="~/assets/icons/out_advantages/cosmos_icon.svg"/>

                        </div>
                        <div class="flex flex-col items-center">
                            <span class=" text-white text-[18px] font-[600] font-['Manrope']  max-[1400px]:text-[12px]">ETH</span>
                            <img  class="max-[1400px]:w-[25px] max-[1400px]:h-[25px]" src="~/assets/icons/out_advantages/eth_icon.svg"/>
                        </div>
                        <div class="flex flex-col items-center">
                            <span class=" text-white text-[18px] font-[600] font-['Manrope']  max-[1400px]:text-[12px]">MKR</span>
                            <img  class="max-[1400px]:w-[25px] max-[1400px]:h-[25px]" src="~/assets/icons/out_advantages/mkr_icon.svg"/>
                        </div>
                        <div class="flex flex-col items-center">
                            <span class=" text-white text-[18px] font-[600] font-['Manrope']  max-[1400px]:text-[12px]">DOT</span>
                            <img  class="max-[1400px]:w-[25px] max-[1400px]:h-[25px]" src="~/assets/icons/out_advantages/dot_icon.svg"/>
                        </div>
                        <div class="flex flex-col items-center">
                            <span class=" text-white text-[18px] font-[600] font-['Manrope']  max-[1400px]:text-[12px]">SOL</span>
                            <img  class="max-[1400px]:w-[25px] max-[1400px]:h-[25px]" src="~/assets/icons/out_advantages/sol_icon.svg"/>
                        </div>

                    </div>
                    <span class="h-[2px] w-full bg-white/10 mt-[26px]">&nbsp;</span>
                </div>
                <!--header coins-->

                <!--table of advantages-->
                <div class="flex flex-col w-full mt-[24px]">

                    <!--uncolor row-->
                    <div class="flex pl-[40px] h-[84px] ">
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow'] max-[1400px]:text-[10px]">
                            Customer support
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class=" text-white text-[14px] font-[400] font-['Barlow'] max-[1400px]:text-[12px] ">Available</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow'] max-[1400px]:text-[12px]">Available</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow'] max-[1400px]:text-[12px]">Available</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow'] max-[1400px]:text-[12px]">Available</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow'] max-[1400px]:text-[12px]">Available</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow'] max-[1400px]:text-[12px]">Available</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow'] max-[1400px]:text-[12px]">Available</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow'] max-[1400px]:text-[12px]">Available</div>
                        </div>
                    </div>
                    <!--uncolor row-->

                    <!--color row-->
                    <div class="flex pl-[40px] bg-white/20 h-[84px] pt-[5px] pb-[7px] ">
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif'] max-[1400px]:text-[10px]">
                            Marketing strategy
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[30px]">
                            <div class="min-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left"></div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px] leading-[16px] max-[1400px]:text-[9px] ">Uses a specific Haskell programming language</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-2px] leading-[16px] max-[1400px]:text-[9px]">Academic research, partnerships</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px] max-[1400px]:text-[9px]" >Interoperability</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[15px] max-[1400px]:text-[9px]">Community-driven</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[3px] max-[1400px]:text-[9px]">DeFi-focused</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[25px] max-[1400px]:text-[9px]">Interoperability, cross-chain</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[25px] max-[1400px]:text-[9px]">High-performance</div>
                        </div>
                    </div>
                    <!--color row-->

                    <!--uncolor row-->
                    <div class="flex pl-[40px] h-[84px] ">
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif'] max-[1400px]:text-[10px]">
                            Project financing
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class=" text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0] max-[1400px]:text-[10px]">Funded</div>
                            <div class=" text-white max-w-[110px] text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[27px] max-[1400px]:text-[10px] max-[1400px]:w-[50px]">Funded by Binance</div>
                            <div class=" text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-3px] max-[1400px]:text-[10px]">ICO<br>in 2016-2017</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px] max-[1400px]:text-[10px]">ICO in 2017</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[10px] max-[1400px]:text-[10px]">ICO in 2014</div>
                            <div class=" text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[15px] max-[1400px]:text-[10px] max-[1400px]:w-[50px]">ICO in 2017 (BNB)</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-13px] max-[1400px]:text-[10px]">ICO in 2017</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[2px] max-[1400px]:text-[10px]">ICO in 2020</div>
                        </div>
                    </div>
                    <!--uncolor row-->

                    <!--color row-->
                    <div class="flex pl-[40px] bg-white/20 h-[84px]  ">
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif'] max-[1400px]:text-[10px]">
                            Vulnerability
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class="max-w-[100px] min-w-[50px] text-white text-[14px] font-[500] font-['Barlow sans-serif'] text-left translate-x-[2px] max-[1400px]:text-[10px]">Low</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[5px] max-[1400px]:text-[10px]">Moderate</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[12px] max-[1400px]:text-[10px]">Moderate</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[17px] max-[1400px]:text-[10px]">Moderate</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[22px] max-[1400px]:text-[10px]">Moderate</div>
                            <div class="max-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[22px] max-[1400px]:text-[10px] max-[1400px]:w-[50px]">Inherits Ethereum</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-12px] max-[1400px]:text-[10px]">Moderate</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-8px] max-[1400px]:text-[10px]">Moderate</div>
                        </div>
                    </div>
                    <!--color row-->

                    <!--uncolor row-->
                    <div class="flex pl-[40px] h-[84px] ">
                        <div class="flex w-[29%] items-center text-white text-[16px] font-[400] font-['Barlow sans-serif'] max-[1400px]:text-[10px]">
                            Gas prices
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[3px] max-[1400px]:text-[10px]">Low</div>
                            <div class=" min-w-[50px] text-white max-w-[110px] text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[5px] max-[1400px]:text-[10px]">Low</div>
                            <div class=" min-w-[50px] text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[16px] max-[1400px]:text-[10px]">Low</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[23px] max-[1400px]:text-[10px]">Low</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[32px] max-[1400px]:text-[10px] max-[1420px]:translate-x-[20px]">High</div>
                            <div class=" text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[32px] max-[1400px]:text-[10px] max-[1400px]:w-[50px] max-[1420px]:translate-x-[0]">Inherits Ethereum</div>
                            <div class=" text-white text-[14px] font-[400] max-w-[89px] font-['Barlow sans-serif'] text-left translate-x-[-9px] max-[1400px]:text-[10px]">Potentially <br> low</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-13px] max-[1400px]:text-[10px]">Low</div>
                        </div>
                    </div>
                    <!--uncolor row-->

                    <!--color row-->
                    <div class="flex pl-[40px] bg-white/20 h-[84px]  ">
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif'] max-[1400px]:text-[10px]">
                            Network separation
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class="max-w-[50px] min-w-[50px] text-white text-[14px] font-[500] font-['Barlow sans-serif'] text-left translate-x-[5px] max-[1400px]:text-[10px]">Low risk</div>
                            <div class="max-w-[70px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[6px] max-[1400px]:text-[10px]">Moderate risk</div>
                            <div class="max-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[7px] max-[1400px]:text-[10px]">Low risk</div>
                            <div class="max-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[16px] max-[1400px]:text-[10px]">Low risk</div>
                            <div class="max-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[27px] max-[1400px]:text-[10px]">Low risk</div>
                            <div class="max-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[30px] max-[1400px]:text-[10px] max-[1400px]:w-[10px]">Inherits Ethereum</div>
                            <div class="max-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-3px] max-[1400px]:text-[10px]">Low risk</div>
                            <div class="max-w-[70px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[3px] max-[1400px]:text-[10px]">Moderate risk</div>
                        </div>
                    </div>
                    <!--color row-->

                    <!--uncolor row-->
                    <div class="flex pl-[40px] h-[84px] ">
                        <div class="flex w-[29%] items-center text-white text-[16px] font-[400] font-['Barlow sans-serif'] max-[1400px]:text-[10px]">
                            Capitalization
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[5px] max-[1400px]:text-[10px]">High</div>
                            <div class=" min-w-[50px] text-white max-w-[110px] text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0] max-[1400px]:text-[10px]">Significant</div>
                            <div class=" min-w-[50px] text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0] max-[1400px]:text-[10px]">High</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[1px] max-[1400px]:text-[10px]">Notable</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[8px] max-[1400px]:text-[10px]">Largest</div>
                            <div class=" text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[6px] max-[1400px]:text-[10px]">Significant</div>
                            <div class=" text-white text-[14px] font-[400] max-w-[89px] font-['Barlow sans-serif'] text-left translate-x-[0] max-[1400px]:text-[10px]">Notable</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px] max-[1400px]:text-[10px]">Significant</div>
                        </div>
                    </div>
                    <!--uncolor row-->

                    <!--color row-->
                    <div class="flex pl-[40px] bg-white/20 h-[84px]  ">
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif'] max-[1400px]:text-[10px]">
                            Programming Languages
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class="max-w-[70px] min-w-[50px] text-white text-[14px] font-[500] font-['Barlow sans-serif'] text-left translate-x-[3px] max-[1400px]:text-[10px]">java-like</div>
                            <div class="max-w-[70px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[2px] max-[1400px]:text-[10px]">Solidity</div>
                            <div class="max-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[23px] max-[1400px]:text-[10px]">Plutus (Haskell)</div>
                            <div class="max-w-[80px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[30px] max-[1400px]:text-[10px] max-[1400px]:w-[50px]">Go (Cosmos SDK)</div>
                            <div class="max-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[12px] max-[1400px]:text-[10px]">Solidity</div>
                            <div class="max-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[17px] max-[1400px]:text-[10px] max-[1400px]:w-[40px]">Solidity (Ethereum)</div>
                            <div class="max-w-[70px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-20px] max-[1400px]:text-[10px] max-[1400px]:w-[40px]">Rust, C++, etc.</div>
                            <div class="max-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-38px] max-[1400px]:text-[10px]">Rust</div>
                        </div>
                    </div>
                    <!--color row-->

                    <!--uncolor row-->
                    <div class="flex pl-[40px] h-[84px] ">
                        <div class="flex w-[29%] items-center text-white text-[16px] font-[400] font-['Barlow sans-serif'] max-[1400px]:text-[10px]">
                            Team recognition
                        </div> 
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[7px]  max-[1400px]:text-[10px]">Strong</div>
                            <div class=" min-w-[50px] text-white max-w-[110px] text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-7px] max-[1400px]:text-[10px]">Strong</div>
                            <div class=" min-w-[50px] text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-2px] max-[1400px]:text-[10px]">Strong</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-7px] max-[1400px]:text-[10px]">Strong</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-10px] max-[1400px]:text-[10px]">Strong</div>
                            <div class=" text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-20px] max-[1400px]:text-[10px]">Strong</div>
                            <div class=" text-white text-[14px] font-[400] max-w-[89px] font-['Barlow sans-serif'] text-left translate-x-[-12px max-[1400px]:text-[10px]">Strong</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-14px] max-[1400px]:text-[10px]">Strong</div>
                        </div>
                    </div>
                    <!--uncolor row-->
                </div>
            </div>
    </div>
</template>

<script setup>
const parallaxState = reactive({ width: 0, height: 0, mouseX: 1, mouseY: 1, mouseLeaveDelay: null });
const cardRef = ref(null);

onMounted(() => {
    console.log("cardRef", cardRef);
    parallaxState.width = cardRef?.value?.offsetWidth;
    parallaxState.height = cardRef?.value?.offsetHeight;
});

const mousePX = computed(() => {
    return parallaxState.mouseX / parallaxState.width;
});

const mousePY = computed(() => {
    return parallaxState.mouseY / parallaxState.height;
});

const cardStyle = computed(() => {
    const rX = mousePX.value * 30;
    const rY = mousePY.value * -30;
    return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    };
});

const cardBgTransform = computed(() => {
    const tX = mousePX.value * -40;
    const tY = mousePY.value * -40;
    return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
    }
});

const handleMouseMove = (e) => {
    parallaxState.mouseX = e.pageX - cardRef.value.offsetLeft - parallaxState.width / 2;
    parallaxState.mouseY = e.pageY - cardRef.value.offsetTop - parallaxState.height / 2;
};

const handleMouseEnter = () => {
    clearTimeout(parallaxState.mouseLeaveDelay);
};

const handleMouseLeave = () => {
    parallaxState.mouseLeaveDelay = setTimeout(() => {
        parallaxState.mouseX = 0;
        parallaxState.mouseY = 0;
    }, 1000);
};
    
</script>

<style lang="scss" scoped>
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);

.graph_wrap {
  transform: perspective(10000px);
  transform-style: preserve-3d;
  cursor: pointer;

    &:hover {

        .graph {
        transition: 0.6s $hoverEasing,
            box-shadow 2s $hoverEasing;
            box-shadow:
                rgba(white, 0.2) 0 0 40px 5px,
                rgba(white, 0.3 ) 0 0 0 1px,
        }
    }

    .graph {
        width: 1300px;
        height: 940px;
        transition: 1s $returnEasing;
        flex: 0 0 1120px;
        overflow: hidden;


        @media (max-width: 1400px) {
            width: 900px;
        }


    }
}

.od {
    transform: translateY(-21px) translateX(-40px);
    line-height: 13px;
}

.even {
    transform: translateY(-22px) translateX(-40px);
    line-height: 13px;
}

</style>