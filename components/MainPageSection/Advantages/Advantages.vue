<template>
    <div class="flex flex-col items-center w-full mt-[152px]" >
        <h2 class="text-white uppercase font-[40px] font-['Quicksand sans-serif'] mb-[70px]">Perhaps the best project in web 3.0</h2>
        <div class="flex flex-col flex-wrap w-full gap-[15px]">

            <!--first row-->
            <div class="flex flex-row justify-between w-full">
                <Card 
                image="/_nuxt/assets/icons/advantages/home_icon.svg" 
                title="Growth Potential" 
                adv_text="Our mission is to create a next -
                 generation cryptocurrency with high
                 growth potential."/>

                <Card 
                image="/_nuxt/assets/icons/advantages/drum_icon.svg" 
                title="Limited Edition Coins" 
                adv_text="we offer a limited edition of 100 million coins and no more."/>

                <Card 
                image="/_nuxt/assets/icons/advantages/settings_icon.svg" 
                title="Developers" 
                adv_text="we provide fast smart contracts with the best virtual machine and consensus. We also provide oracle and Chainlink services, as well as an easy way to create your own dApps and contracts"/>

                <Card 
                image="/_nuxt/assets/icons/advantages/piramyd_icon.svg" 
                title="Financial indicators" 
                adv_text="we strive to ensure the sustainability and development of the ecosystem for new projects."/>
            </div>
            <!--first row-->

            <!--second row-->
            <div class="flex flex-row justify-between">
                <Card 
                image="/_nuxt/assets/icons/advantages/quad_icon.svg" 
                title="Ease of programming" 
                adv_text="Our blockchain with smart contracts is so easy to program that creating a backend on our blockchain and off the blockchain will be easier than using cloud services or any other technology."/>

                <Card 
                image="/_nuxt/assets/icons/advantages/lock_icon.svg" 
                title="Speed and security" 
                adv_text="our system provides speed and security, preventing fraud of participants among themselves, especially for gambling projects."/>

                <Card 
                image="/_nuxt/assets/icons/advantages/qrcode_icon.svg" 
                title="Scanning system" 
                adv_text="We offer a system with our own scanner that anyone can predict and get data for any period of time."/>

                <Card 
                image="/_nuxt/assets/icons/advantages/code_icon.svg" 
                title="Programming in programming languages" 
                adv_text="we provide the ability to create your own contracts and easy access to our protocol, as well as easy entry into the creation of your dApps with any commands. We are also exploring the use of artificial intelligence in our protocol."/>
            </div>
            <!--second row-->

        </div>
    </div>
</template>

<script setup>
import Card from './elements/AdvantagesCard/AdvantagesCard.vue';

</script>

<style lang="scss" scoped>

</style>