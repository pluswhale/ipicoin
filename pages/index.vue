<script setup>
import Advantages from '~/components/Advantages/Advantages.vue';
import OurAdvantagesChart from '~/components/OurAdvantagesChart/OurAdvantagesChart.vue'
import OurAdvantagesChartForMobile from '~/componentsForMobile/OurAdvantagesChartForMobile/OurAdvantagesChartForMobile.vue'
import Ecosystem from '~/components/Ecosystem/Ecosystem.vue';
import EcosystemForMobile from '~/componentsForMobile/EcosystemForMobile/EcosystemForMobile.vue';

import 'vue3-marquee/dist/style.css'
const isMobile = useMediaQuery('(max-width: 480px)');


</script>
<template>
    <div>
        <MainPageSection/>
        <OurMission/>
        <Advantages/>
        <OurAdvantagesChart v-if="!isMobile"/>
        <OurAdvantagesChartForMobile v-if="isMobile"/>
        <Ecosystem v-if="!isMobile"/>
        <EcosystemForMobile v-if="isMobile"/>
        <Platform/>
        <Faqs/>

        <!--help-->
        <Trusted/>
        <ContactUs/>
        <UserCard/>

    </div>
</template>


<style lang="scss" scoped>

    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

    p {
        margin: 20px 0;
    }
</style>