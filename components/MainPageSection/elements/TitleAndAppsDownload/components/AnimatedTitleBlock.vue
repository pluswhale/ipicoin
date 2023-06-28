<template>
    <div v-if="props.isAllBlockDisplaying" class="flex flex-col h-[414px] w-[570px] sm:w-full sm:h-[188px] xl:w-[350px] xl:h-[314px] md:w-[280px] md:h-[208px] md:mt-[20px]">
        <div v-if="props.isFirstRowDisplaying" class="flex items-center sm:mb-[15px] xl:mb-[20px] md:[10px]">
            <span class="text-[#EC474E] text-[88px] font-[600] first_letter h-[136px] sm:h-fit sm:font-[500] xl:text-[68px] xl:h-[97px] md:text-[48px] md:h-[72px]">I</span>
            <span class="text-[60px] font-[500] text-white leading-[60px] uppercase mt-[12px] typing_without_caret xl:text[54px] md:text-[30px] sm:text-[30px]">{{props.firstWord}}</span>
        </div>
        <div v-if="props.isSecondRowDisplaying" class="flex items-center translate-y-[-41px] sm:mb-[15px] xl:mb-[20px] md:[10px]">
            <span class="text-[#EC474E] text-[88px] font-[600] first_letter sm:h-fit sm:font-[500] xl:text-[68px] xl:h-[97px] md:text-[48px] md:h-[72px]">P</span>
            <span class="text-[60px] font-[500] text-white leading-[60px] uppercase mt-[12px] typing_without_caret sm:text-[30px] xl:text[54px] md:text-[30px]">{{ props.secondWord }}</span>
        </div>
        <div v-if="props.isThirdRowDisplaying" class="flex items-center translate-y-[-81px] sm:mb-[15px] xl:mb-[20px] md:[10px]">
            <span class="text-[#EC474E] text-[88px] font-[600] first_letter sm:h-fit sm:font-[500] xl:text-[68px] xl:h-[97px] md:text-[48px] md:h-[72px]">I</span>
            <span class="text-[60px] font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_with_caret sm:text-[30px] xl:text[54px] md:text-[30px]">{{ props.thirdWord }}</span>
        </div>
        <span v-if="props.isFourthRowDisplaying" class="text-[#EC474E] font-[500] font-['Big_Shoulders_Stencil_Text'] text-[43px] translate-y-[-100px] 
        sm:text-[25px] xl:text-[33px] md:text-[25px]" >coin</span>
    </div>
</template>

<script setup>

const props = defineProps(['isAllBlockDisplaying',
    'isFirstRowDisplaying',
    'isSecondRowDisplaying',
    'isThirdRowDisplaying',
    'isFourthRowDisplaying',
    'firstWord',
    'secondWord',
    'thirdWord']);

</script>

<style lang="scss" scoped>



.first_letter {
    font-family: 'Big Shoulders Stencil Text';

     @media (max-width: 1450px) {
        font-size: 69px;
    }

    @media (max-width: 920px) {
        font-size: 48px;
    }

    @media (max-width: 450px) {
        font-size: 50px;
    }
}


.typing_with_caret,
.typing_without_caret {
  display: inline-block;
  -webkit-animation: type 1s steps(50, end);
  animation: type 1s steps(50, end);
  color: #fff;
  font-family: 'Big Shoulders Stencil Text';
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 3px solid rgb(255, 255, 255); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
}

.typing_with_caret {
      animation: 
    typing 1s steps(30, end),
    blink-caret 1s step-end infinite;
}
.typing_without_caret {
      animation: 
    typing 1s steps(30, end),
    blink-caret_off_end 1s step-end;
    border-color: transparent;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 50% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 255, 255) }
}

@keyframes blink-caret_off_end {
  from, to { border-color: transparent }
  50% { border-color: rgb(255, 255, 255) }
  100% {
    border-color: transparent;
    border-right: none;
  }
}

</style>