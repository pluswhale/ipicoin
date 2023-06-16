<script setup>
import FooterForMobile from '~/componentsForMobile/FooterForMobile/FooterForMobile.vue';
const { isMobile } = useDevice();
</script>

<template>
    <div class=" min-h-screen bg-[url('~/assets/images/bg_without_planet.png')] bg-no-repeat bg-cover brightness-100 overflow-hidden">

        <Header/>
        <!--output the page content-->
        <div class="w-screen main_content">
            <slot/>
        </div>
        <Footer v-if="!isMobile"/>
        <FooterForMobile v-if="isMobile"/>
    </div>
</template>

<style lang="scss" scoped>
    .main_content {
        margin: 0 auto;
       /*  max-width: 1347px; */
    }
</style>
