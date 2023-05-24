<template>
    <div>
        <MainPageSection/>
        <Advantages/>
        <OurAdvantagesChart/>
        <Ecosystem/>

        <!--help-->
        <StatisticLine/>
    </div>
</template>

<script setup>
import Advantages from '~/components/Advantages/Advantages.vue';
import OurAdvantagesChart from '~/components/OurAdvantagesChart/OurAdvantagesChart.vue'
import Ecosystem from '~/components/Ecosystem/Ecosystem.vue';
</script>

<style lang="scss" scoped>

    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }

    p {
        margin: 20px 0;
    }
</style>