<template>
    <div class=" min-h-screen bg-[url('~/assets/images/big_bg.svg')] bg-no-repeat bg-cover brightness-100">
        <Header/>
        <!--output the page content-->
        <div class="w-[1400px] main_content">
            <slot/>
        </div>
    </div>


</template>


<script setup>

</script>

<style lang="scss" scoped>



    // .global_wrapper {
    //     background: url('../assets/images/main_bg.png') no-repeat;
    //     object-fit:cover;
    //     min-width: 100vh;
    //     min-height: 100vh;
    //     background-size: 100% 100%;

    // }

    .main_content {
        margin: 0 auto;
        max-width: 1347px;
    }
</style>
