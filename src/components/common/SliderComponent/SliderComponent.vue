<script setup>
import { ref, onUnmounted, onMounted, defineProps } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
})

const currentSliderIndex = ref(0)
let intervalId

const goToSlide = (index) => {
  currentSliderIndex.value = index
}

const nextSlide = () => {
  currentSliderIndex.value =
    (currentSliderIndex.value + 1) % props.images.length
}

const startSlider = () => {
  clearInterval(intervalId)
  intervalId = setInterval(() => {
    nextSlide()
  }, 3000)
}

onMounted(() => {
  startSlider()
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="flex flex-col py-[28px] md:py-[80px]">
    <div
      class="slider flex justify-center lg:justify-between lg:w-full md:space-x-1"
    >
      <div
        class="flex relative w-[300px] lg:w-[600px] lg:h-[446px] h-[230px] md:pr-[20px]"
      >
        <transition-group name="fade">
          <img
            v-for="(image, index) in props.images"
            v-show="index === currentSliderIndex"
            id="gallery"
            :key="index"
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full absolute"
          />
        </transition-group>
      </div>
      <div
        class="hidden md:flex relative w-[300px] h-[230px] lg:w-[600px] lg:h-[446px]"
      >
        <transition-group name="fade">
          <img
            v-for="(image, index) in props.images"
            v-show="index === (currentSliderIndex + 1) % props.images.length"
            :key="index"
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full absolute"
          />
        </transition-group>
      </div>
    </div>
    <div class="align-center justify-center flex mt-[8px]">
      <span
        v-for="(image, index) in props.images"
        :key="index"
        class="h-3 w-3 rounded-full mx-1 inline-block cursor-pointer"
        :class="{
          'bg-[#0147FF]': index === currentSliderIndex,
          'bg-gray-300': index !== currentSliderIndex,
        }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
