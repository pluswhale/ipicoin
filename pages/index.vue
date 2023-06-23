<script setup>
import 'vue3-marquee/dist/style.css'

import OurAdvantagesChartForMobile from '~/componentsForMobile/OurAdvantagesChartForMobile/OurAdvantagesChartForMobile.vue';
import EcosystemForMobile from '~/componentsForMobile/EcosystemForMobile/EcosystemForMobile.vue'
import OurMissionForMobile from '~/componentsForMobile/OurMissionForMobile/OurMissionForMobile.vue';
import MainPageSectionForMobile from '~/componentsForMobile/MainPageSectionForMobile/MainPageSectionForMobile.vue';
import AdvantagesForMobile from '~/componentsForMobile/AdvantagesForMobile/AdvantagesForMobile.vue';
import PlatformForMobile from '~/componentsForMobile/PlatformForMobile/PlatformForMobile.vue';
import IncrisingLineForMobile from '~/componentsForMobile/IncrisingTrustForMobile/IncrisingTrustForMobile.vue'
import ContactUsForMobile from '~/componentsForMobile/ContactUsForMobile/ContactUsForMobile.vue';
import UserCardForMobile from '~/componentsForMobile/UserCardForMobile/UserCardForMobile.vue';


const { isMobile, isTablet } = useDevice();


</script>
<template>
        <MainPageSection v-if="!isMobile"/>
        <MainPageSectionForMobile v-if="isMobile || isTablet" />
        <OurMission v-if="!isMobile"/>
        <OurMissionForMobile v-if="isMobile || isTablet"/>
        <Advantages  v-if="!isMobile"/>
        <AdvantagesForMobile  v-if="isMobile || isTablet" />
        <OurAdvantagesChart v-if="!isMobile"/>
        <OurAdvantagesChartForMobile v-if="isMobile || isTablet"/>
        <Ecosystem v-if="!isMobile"/>
        <EcosystemForMobile v-if="isMobile || isTablet"/>
        <Platform v-if="!isMobile"/>
        <PlatformForMobile v-if="isMobile || isTablet"/>
        <IncrisingLineForMobile  v-if="isMobile || isTablet"/>
        <Faqs v-if="!isMobile"/>
        <!--help-->
        <Trusted/>
        <ContactUs v-if="!isMobile"/>
        <ContactUsForMobile v-if="isMobile || isTablet"/>
        <UserCard v-if="!isMobile"/>
        <UserCardForMobile v-if="isMobile || isTablet"/>
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