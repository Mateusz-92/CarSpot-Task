<script>
import SeoComponent from '../SeoComponent/SeoComponent.vue'
export default {
  name: 'AppFooter',
  components: {
    SeoComponent,
  },
}
</script>
<template>
  <div class="bg-[#282828] px-[20px] md:px-[120px] relative">
    <SeoComponent />
    <div class="border-t border-white mx-[-20px] md:mx-[-120px]"></div>
    <footer
      class="flex flex-row justify-between items-center py-[24px] text-white"
    >
      <span
        class="font-roboto-condensed text-base font-bold leading-6 text-center"
        >Cars Spot</span
      >
      <span
        class="font-roboto-condensed text-base font-normal leading-6 text-center"
        ><a class="underline hover:opacity-50" href="#"
          >Polityka prywatności</a
        ></span
      >
    </footer>
  </div>
</template>
