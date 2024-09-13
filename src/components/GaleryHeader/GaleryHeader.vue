<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['category-selected'])

const activeCategory = ref('cars')

const selectCategory = (category) => {
  activeCategory.value = category
  emit('category-selected', category)
}
</script>
<template>
  <div
    class="sm:mt-[60px] lg:mt-[450px] w-100% flex flex-col items-center lg:items-start"
  >
    <div class="md:mt-[150px] flex flex-col lg:items-start">
      <span
        class="font-['Roboto_Condensed'] text-center text-[21.5px] text-[#0147FF] font-normal leading-[32.25px]"
        >Prezentacja firmy</span
      >
      <span
        class="font-['Bebas_Neue'] text-left text-[40px] font-normal leading-[48px] text-center md:text-left text-[#1D1D1B]"
        >Zobacz naszą galerie zdjęć</span
      >
    </div>
    <div>
      <span
        class="font-['Roboto_Flex'] text-center text-[15px] font-normal leading-[22.5px] tracking-[-0.02em] text-center md:text-left mr-[20px] cursor-pointer"
        :class="{
          'text-[#0147FF] underline': activeCategory === 'cars',
          'text-black': activeCategory !== 'cars',
        }"
        @click="selectCategory('cars')"
      >
        Samochody osobowe
      </span>
      <span
        class="font-['Roboto_Flex'] text-center text-[15px] font-normal leading-[22.5px] tracking-[-0.02em] text-center md:text-left cursor-pointer"
        :class="{
          'text-[#0147FF] underline': activeCategory === 'vans',
          'text-black': activeCategory !== 'vans',
        }"
        @click="selectCategory('vans')"
      >
        Samochody dostawcze
      </span>
    </div>
  </div>
</template>
