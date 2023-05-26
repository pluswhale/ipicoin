<template>
    <div class=" min-h-screen bg-[url('~/assets/images/bg_without_planet.png')] bg-no-repeat bg-cover brightness-100">
        <Header/>
        <!--output the page content-->
        <div class="w-screen main_content">
            <slot/>
        </div>
        <Footer/>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .main_content {
        margin: 0 auto;
       /*  max-width: 1347px; */
    }
</style>
