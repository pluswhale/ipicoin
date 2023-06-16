<script setup>
import 'vue3-marquee/dist/style.css'

import OurAdvantagesChartForMobile from '~/componentsForMobile/OurAdvantagesChartForMobile/OurAdvantagesChartForMobile.vue';
import EcosystemForMobile from '~/componentsForMobile/EcosystemForMobile/EcosystemForMobile.vue'
import OurMissionForMobile from '~/componentsForMobile/OurMissionForMobile/OurMissionForMobile.vue';
import MainPageSectionForMobile from '~/componentsForMobile/MainPageSectionForMobile/MainPageSectionForMobile.vue';
import AdvantagesForMobile from '~/componentsForMobile/AdvantagesForMobile/AdvantagesForMobile.vue';
import PlatformForMobile from '~/componentsForMobile/PlatformForMobile/PlatformForMobile.vue'

const { isMobile } = useDevice();


</script>
<template>
        <MainPageSection v-if="!isMobile"/>
        <MainPageSectionForMobile v-if="isMobile" />
        <OurMission v-if="!isMobile"/>
        <OurMissionForMobile v-if="isMobile"/>
        <Advantages  v-if="!isMobile"/>
        <AdvantagesForMobile  v-if="isMobile" />
        <OurAdvantagesChart v-if="!isMobile"/>
        <OurAdvantagesChartForMobile v-if="isMobile"/>
        <Ecosystem v-if="!isMobile"/>
        <EcosystemForMobile v-if="isMobile"/>
        <Platform v-if="!isMobile"/>
        <PlatformForMobile v-if="isMobile"/>
        <Faqs/>

        <!--help-->
        <Trusted/>
        <ContactUs/>
        <UserCard/>
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