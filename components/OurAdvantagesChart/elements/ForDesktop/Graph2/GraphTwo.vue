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
                            Dependency
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[30px]">
                            <div class="min-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left  max-[1400px]:text-[10px]">Independent</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-20px] leading-[16px] max-[1400px]:text-[10px]">Depends on Binance Chain</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-48px] leading-[16px] max-[1400px]:text-[10px]">Independent</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-42px] max-[1400px]:text-[10px]" >Independent</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-34px] max-[1400px]:text-[10px]">Independent</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-36px] max-[1400px]:text-[10px]">Built on<br> Ethereum</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-10px] max-[1400px]:text-[10px]">Independent</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px] max-[1400px]:text-[10px]">Independent</div>
                        </div>
                    </div>
                    <!--color row-->

                    <!--uncolor row-->
                    <div class="flex pl-[40px] h-[84px] ">
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif']">
                            Scalability 
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class=" text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[1px]">High</div>
                            <div class=" text-white max-w-[110px] text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[6px]">High</div>
                            <div class=" text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[11px]">High</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[16px]">High</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[19px]">Moderate</div>
                            <div class=" text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-14px]">Inherits<br>Ethereum </div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-34px]">High</div>
                            <div class=" text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-28px]">High</div>
                        </div>
                    </div>
                    <!--uncolor row-->

                    <!--color row-->
                    <div class="flex pl-[40px] bg-white/20 h-[84px]  ">
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif']">
                            Security risks
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class="max-w-[100px] min-w-[50px] text-white text-[14px] font-[500] font-['Barlow sans-serif'] text-left translate-x-[5px]">Low</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[5px]">Moderate</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px]">Low</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[26px]">Moderate</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[22px]">Moderate</div>
                            <div class="max-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[7px]">Inherits<br>Ethereum</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[5px]">Moderate</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[5px]">Moderate</div>
                        </div>
                    </div>
                    <!--color row-->

                    <!--uncolor row-->
                    <div class="flex pl-[40px] h-[84px] ">
                        <div class="flex w-[29%] items-center text-white text-[16px] font-[400] font-['Barlow sans-serif']">
                            Real-time sync
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[3px]"></div>
                            <div class=" min-w-[50px] text-white text-left max-w-[110px] text-[14px] font-[400] font-['Barlow sans-serif'] leading-[16px] text-left translate-x-[20px]">Web3.js/<br>
                            ethers.js </div>
                            <div class=" min-w-[50px] text-white text-left text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] leading-[16px] text-left translate-x-[28px]">Cardano-<br>wallet,<br>cardano-<br>graphql</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[40px] leading-[16px]">Tendermint<br> 
                            WebSocket<br>JSON-RPC</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[40px] leading-[16px]">Web3.js/<br>
                            ethers.js </div>
                            <div class=" text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[40px] leading-[16px]">Inherits Ethereum</div>
                            <div class=" text-white text-[14px] font-[400] max-w-[89px] font-['Barlow sans-serif'] text-left translate-x-[13px] leading-[16px]">Polkadot.js <br> low</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[17px] leading-[16px]">WebSocket <br>JSON-RPC</div>
                        </div>
                    </div>
                    <!--uncolor row-->

                    <!--color row-->
                    <div class="flex pl-[40px] bg-white/20 h-[84px]  ">
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif']">
                            Experience
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class="max-w-[50px] min-w-[50px] text-white text-[14px] font-[500] font-['Barlow sans-serif'] text-left translate-x-[8px]">Mature</div>
                            <div class="max-w-[70px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[6px]">Growing </div>
                            <div class="max-w-[105px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[14px]">Fully launched</div>
                            <div class="max-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-15px]">Mature</div>
                            <div class="max-w-[90px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px]">Most mature</div>
                            <div class="max-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-27px]">Mature</div>
                            <div class="max-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-3px]">Growing</div>
                            <div class="max-w-[70px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[3px]">Growingk</div>
                        </div>
                    </div>
                    <!--color row-->

                    <!--uncolor row-->
                    <div class="flex pl-[40px] h-[84px] ">
                        <div class="flex w-[29%] items-center text-white text-[16px] font-[400] font-['Barlow sans-serif']">
                            Coin (Supply)
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[8px]">100 М</div>
                            <div class=" min-w-[100px] text-white max-w-[110px] text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[30px]">BNB (170.5M)</div>
                            <div class=" min-w-[100px] text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[6px]">ADA (45B)</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-20px] leading-[-16px]">ATOM<br>(Inflationary)</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-20px] leading-[16px]">ETH<br>(Unlimited)</div>
                            <div class=" text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-13px] leading-[16px]">MKR<br>(Governance<br>token)</div>
                            <div class=" text-white text-[14px] font-[400] max-w-[89px] font-['Barlow sans-serif'] text-left translate-x-[-3px] leading-[16px]">DOT (1B)</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[23px] leading-[16px]">SOL<br>(Inflationary)</div>
                        </div>
                    </div>
                    <!--uncolor row-->

                    <!--color row-->
                    <div class="flex pl-[40px] bg-white/20 h-[84px]  ">
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif']">
                            Knowledge of coding
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class="max-w-[70px] min-w-[50px] text-white text-[14px] font-[500] font-['Barlow sans-serif'] text-left translate-x-[6px]">Required</div>
                            <div class="max-w-[70px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[2px]">Required</div>
                            <div class="max-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[2px]">Required</div>
                            <div class="max-w-[80px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px]">Required</div>
                            <div class="max-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px]">Required</div>
                            <div class="max-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px]">Required</div>
                            <div class="max-w-[70px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[3px]">Required</div>
                            <div class="max-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px]">Required</div>
                        </div>
                    </div>
                    <!--color row-->

                    <!--uncolor row-->
                    <div class="flex pl-[40px] h-[84px] ">
                        <div class="flex w-[29%] items-center text-white text-[16px] font-[400] font-['Barlow sans-serif']">
                            Team recognition
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[7px]">Strong</div>
                            <div class=" min-w-[50px] text-white max-w-[110px] text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px]">Strong</div>
                            <div class=" min-w-[50px] text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-2px]">Strong</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-7px]">Strong</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-10px]">Strong</div>
                            <div class=" text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-12px]">Strong</div>
                            <div class=" text-white text-[14px] font-[400] max-w-[89px] font-['Barlow sans-serif'] text-left translate-x-[-7px]">Strong</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[0px]">Strong</div>
                        </div>
                    </div>
                    <!--uncolor row-->
                    <!--color row-->
                    <div class="flex pl-[40px] bg-white/20 h-[84px] pt-[5px] pb-[7px] ">  
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif']">
                            Consensus Type
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[30px]">
                            <div class="min-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left"></div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-26px] leading-[16px]">Proof of Staked<br>
                            Authority<br>(PoSA)</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-47px] leading-[16px]">Ouroboros</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-42px] leading-[16px]" >Tenderm<br>int</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-26px] leading-[16px]">Proof of <br>Stake (PoS)</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-5px] leading-[16px]">-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[40px] leading-[16px]">Nominated<br>Proof of Stake<br> (NPoS)</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[22px] leading-[16px]">Proof of History<br>(PoH)</div>
                        </div>
                    </div>
                    <!--color row-->

                    <!--uncolor row-->
                    <div class="flex pl-[40px] h-[84px] ">
                        <div class="flex w-[29%] items-center text-white text-[16px] font-[400] font-['Barlow sans-serif']">
                            Virtual Machine Type
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[48px]">
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[7px]"></div>
                            <div class=" min-w-[50px] text-white max-w-[110px] text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[5px] leading-[16px]">EVM-<br>compatible</div>
                            <div class=" min-w-[50px] text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-2px] leading-[16px]">IELE</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[15px] leading-[16px]">-</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[8px] leading-[16px]">EVM-<br>compatible</div>
                            <div class=" text-white text-[14px] max-w-[100px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[14px] leading-[16px]">-</div>
                            <div class=" text-white text-[14px] font-[400] max-w-[89px] font-['Barlow sans-serif'] text-left translate-x-[45px] leading-[16px]">EVM-<br>compatible</div>
                            <div class=" min-w-[50px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[30px] leading-[16px]">WebAssembly<br>(Wasm)</div>
                        </div>
                    </div>
                    <!--uncolor row-->

                    <!--color row-->
                    <div class="flex pl-[40px] bg-white/20 h-[84px] pt-[5px] pb-[7px] ">  
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif']">
                            Compiler Types
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[30px]">
                            <div class="min-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[24px]">-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-43px] leading-[16px]">Solidity, Vyper</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-73px] leading-[16px]">Plutus <br>(Marlow)</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-58px]" >-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-20px]">Solidity,<br>Vyper</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-1px]">-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[29px]">Ink, Rust, </div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[20px]">IRust,C, C++,<br>AssemblyScript</div>
                        </div>
                    </div>
                    <!--color row-->

                       <!--uncolor row-->
                       <div class="flex pl-[40px] h-[84px] ">
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif']">
                            Programming Languages
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[30px]">
                            <div class="min-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[24px]">-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-43px] leading-[16px]">Solidity, Vyper</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-73px] leading-[16px]">Plutus <br>(Marlow)</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-58px]" >-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-20px]">Solidity,<br>Vyper</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-1px]">-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[29px]">Ink, Rust, </div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[20px]">IRust,C, C++,<br>AssemblyScript</div>
                        </div>
                    </div>
                    <!--uncolor row-->

                    <!--color row-->
                    <div class="flex pl-[40px] bg-white/20 h-[84px] pt-[5px] pb-[7px] ">  
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif']">
                            Pros
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[30px]">
                            <div class="min-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[24px]">-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-43px] leading-[16px]">Solidity, Vyper</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-73px] leading-[16px]">Plutus <br>(Marlow)</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-58px]" >-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-20px]">Solidity,<br>Vyper</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-1px]">-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[29px]">Ink, Rust, </div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[20px]">IRust,C, C++,<br>AssemblyScript</div>
                        </div>
                    </div>
                    <!--color row-->

                    <!--uncolor row-->
                    <div class="flex pl-[40px] h-[84px] ">
                        <div class="flex w-[29%] text-white items-center text-[16px] font-[400] font-['Barlow sans-serif']">
                            Cons
                        </div>
                        <div class="w-[71%] flex items-center justify-between pr-[30px]">
                            <div class="min-w-[100px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[24px]">-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-43px] leading-[16px]">Solidity, Vyper</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-73px] leading-[16px]">Plutus <br>(Marlow)</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-58px]" >-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-20px]">Solidity,<br>Vyper</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[-1px]">-</div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[29px]">Ink, Rust, </div>
                            <div class="max-w-[110px] text-white text-[14px] font-[400] font-['Barlow sans-serif'] text-left translate-x-[20px]">IRust,C, C++,<br>AssemblyScript</div>
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
        height: 1450px;
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