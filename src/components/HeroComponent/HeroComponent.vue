<script>
import CustomButton from '@/components/common/CustomButton/CustomButton.vue'
import TrackComponent from '../TrackComponent/TrackComponent.vue'
export default {
  name: 'HeroComponent',
  components: {
    CustomButton,
    TrackComponent,
  },
}
</script>
<template>
  <div
    class="mt-[40px] flex flex-col items-center mt-[40px] lg:block lg:h-825px"
  >
    <TrackComponent></TrackComponent>

    <div class="relative mt-[25px] md:mt-[0px]">
      <h1
        class="font-bebas-neue text-center lg:text-left text-[#282828] text-[52px] md:text-[76.29px] font-normal md:leading-[83.92px] leading-[60px] tracking-[-0.04em] uppercase z-10"
      >
        Sprzedajemy samochody <br />z europy
      </h1>

      <p
        class="font-['Roboto_Condensed'] text-[#282828] text-base font-normal leading-6 text-center lg:text-left mt-[32px]"
      >
        Kup komfortowy pojazd, aby każda podróż <br />
        była wyjątkowym przeżyciem.
      </p>
      <div class="mt-[32px] flex justify-center lg:justify-start">
        <CustomButton class="mr-[24px]" button-text="Zobacz zdjęcia" />
        <CustomButton
          background-class="bg-white"
          text-class="text-[#0147FF]"
          hover-class="hover:bg-[#0147FF] hover:text-white"
          button-text="Zadzwoń do nas "
        />
      </div>
    </div>
    <div
      class="min-w-[400px] h-[200px] md:w-[1064px] md:h-[404px] lg:absolute z-10 lg:right-0 relative mb-[15px] mt-[25px]"
    >
      <img src="@/assets/hero.png" alt="hero" />
      <img
        class="opacity-70 absolute top-0"
        src="@/assets/shadow.png"
        alt="shadow"
      />
    </div>
  </div>
</template>
