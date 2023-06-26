<script setup>

</script>

<template>
    <div class=" min-h-screen bg-[url('~/assets/images/bg_without_planet.png')] bg-no-repeat bg-cover brightness-100 overflow-hidden">
        <Header />
        <!--output the page content-->
        <div class="w-screen mx-auto my-0">
            <slot/>
        </div>
        <Footer/>
    </div>
</template>

<style lang="scss" scoped>

</style>
