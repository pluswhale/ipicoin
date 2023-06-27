<template>
    <div v-if="props.isAllBlockDisplaying" class="flex flex-col h-[414px] w-[570px] xl:w-full xl:h-[188px]">
        <div v-if="props.isFirstRowDisplaying" class="flex items-center xl:mb-[15px]">
            <span class="text-[#EC474E] text-[88px] font-[600] first_letter h-[136px]  xl:h-fit xl:font-[500]">I</span>
            <span class="text-[60px] font-[500]  text-white leading-[60px] uppercase mt-[12px] typing_without_caret xl:text-[30px] ">{{props.firstWord}}</span>
        </div>
        <div v-if="props.isSecondRowDisplaying" class="flex items-center translate-y-[-41px] xl:mb-[15px]">
            <span class="text-[#EC474E] text-[88px] font-[600] first_letter xl:h-fit xl:font-[500] ">P</span>
            <span class="text-[60px] font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_without_caret  xl:text-[30px]">{{ props.secondWord }}</span>
        </div>
        <div v-if="props.isThirdRowDisplaying" class="flex items-center translate-y-[-81px] xl:mb-[15px]">
            <span class="text-[#EC474E] text-[88px] font-[600] first_letter xl:h-fit xl:font-[500] ">I</span>
            <span class="text-[60px] font-[500] text-white leading-[60px] uppercase  mt-[12px] typing_with_caret xl:text-[30px]">{{ props.thirdWord }}</span>
        </div>
        <span v-if="props.isFourthRowDisplaying" class="text-[#EC474E] font-[500] font-['Big_Shoulders_Stencil_Text'] text-[43px] translate-y-[-100px] xl:text-[25px]" >coin</span>
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

    @media (max-width: 1420px) {
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