<script>
import CustomButton from '../common/CustomButton/CustomButton.vue'
export default {
  name: 'AppHeader',
  components: {
    CustomButton,
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>
<template>
  <header
    class="flex justify-between items-center py-6 bg-transparent space-x-2 z-10"
  >
    <div class="flex items-center z-10">
      <img src="@/assets/logo.svg" alt="logo" class="h-8" />
    </div>

    <div
      class="flex md:hidden bg-transparent rounded-xl border border-black z-10"
    >
      <button
        class="text-gray-800 text-xl font-semibold w-16 h-12 rounded-xl"
        @click="isMenuOpen = !isMenuOpen"
      >
        {{ isMenuOpen ? 'ZWIŃ' : 'MENU' }}
      </button>
    </div>

    <nav class="hidden md:flex h-full space-x-4 bg-transparent z-10">
      <ul class="flex items-center space-x-4">
        <li><a class="hover:underline" href="#gallery">Galeria zdjęć</a></li>
        <li><a class="hover:underline" href="#">FAQ</a></li>
      </ul>
    </nav>

    <CustomButton button-text="Zadzwoń do nas" />

    <nav
      v-if="isMenuOpen"
      class="md:hidden absolute top-16 left-0 right-0 bg-transparent shadow-lg transition-all duration-300 ease-in-out z-10"
    >
      <ul class="flex flex-col items-center space-y-4 py-4 z-10">
        <li><a class="hover:underline" href="#gallery">Galeria zdjęć</a></li>
        <li><a class="hover:underline" href="#">FAQ</a></li>
      </ul>
    </nav>
  </header>
</template>
