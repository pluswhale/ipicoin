<template>
    <div class="flex flex-col items-center">
        <img :src="image"/>
        <span class="text-[16px] font-[500] text-white mt-[10px]">{{ title }}</span>
        <span class="text-[14px] font-[400] text-[#749DCA] text-center  max-w-[382px] mt-[9px]">{{ adv_text }}</span>
        
    </div>
</template>

<script setup>


defineProps({
  image: String,
  title: String,
  adv_text: String,
  width_adv_text: String,
})

</script>



<style lang="scss" scoped>

</style>