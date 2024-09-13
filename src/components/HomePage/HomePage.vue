<script setup>
import AppHeader from '@/components/AppHeader/AppHeader.vue'
import HeroComponent from '@/components/HeroComponent/HeroComponent.vue'
import GaleryHeader from '../GaleryHeader/GaleryHeader.vue'
import SliderComponent from '../common/SliderComponent/SliderComponent.vue'
import AppFootter from '../AppFooter/AppFooter.vue'

import { imagesCars, imagesVans } from '@/constantsData.js'
import { ref } from 'vue'

const currentImages = ref(imagesCars)

const handleCategorySelection = (category) => {
  if (category === 'cars') {
    currentImages.value = imagesCars
  } else if (category === 'vans') {
    currentImages.value = imagesVans
  }
}
</script>

<template>
  <div class="overflow-x-hidden lg:px-[120px] px-[10px]">
    <AppHeader></AppHeader>
    <HeroComponent></HeroComponent>
    <GaleryHeader @category-selected="handleCategorySelection" />
    <SliderComponent :images="currentImages" />
  </div>
  <AppFootter></AppFootter>
</template>
