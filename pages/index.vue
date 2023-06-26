<script setup>
import 'vue3-marquee/dist/style.css'

import OurAdvantagesChartForMobile from '~/componentsForMobile/OurAdvantagesChartForMobile/OurAdvantagesChartForMobile.vue';
import OurMissionForMobile from '~/componentsForMobile/OurMissionForMobile/OurMissionForMobile.vue';
import PlatformForMobile from '~/componentsForMobile/PlatformForMobile/PlatformForMobile.vue';
import ContactUsForMobile from '~/componentsForMobile/ContactUsForMobile/ContactUsForMobile.vue';


const { isMobile, isTablet } = useDevice();


</script>
<template>
        <MainPageSection />
        <OurMission v-if="!isMobile && !isTablet"/>
      <!--   <OurMissionForMobile v-if="isMobile || isTablet"/> -->
        <Advantages  v-if="!isMobile && !isTablet"/>
        <AdvantagesForMobile  v-if="isMobile || isTablet" />
        <OurMissionForMobile v-if="isMobile || isTablet"/>
        <Advantages  />
        <OurAdvantagesChart v-if="!isMobile && !isTablet"/>
        <OurAdvantagesChartForMobile v-if="isMobile || isTablet"/>
        <Ecosystem />
        <Platform v-if="!isMobile && !isTablet"/>
        <PlatformForMobile v-if="isMobile || isTablet"/>
        <Faqs />
        <!--help-->
        <Trusted/>
        <ContactUs v-if="!isMobile && !isTablet"/>
        <ContactUsForMobile v-if="isMobile || isTablet"/>
        <UserCard />
        <!-- <UserCardForMobile v-if="isMobile || isTablet"/> -->
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