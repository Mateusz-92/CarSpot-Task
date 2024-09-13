<script setup>
import SeoElement from '../common/SeoElement/SeoElement.vue'
import { loremIpsumHeader, loremIpsumContent } from '@/constantsData.js'
</script>

<template>
  <div
    class="w-100% transparent flex flex-col md:flex-row items:center md:justify-between md:gap-[20px] py-[80px]"
  >
    <SeoElement
      :header-text="loremIpsumHeader"
      :content-text="loremIpsumContent"
      :collapsed-text="loremIpsumContent"
    />
    <SeoElement
      :header-text="loremIpsumHeader"
      :content-text="loremIpsumContent"
      :collapsed-text="loremIpsumContent"
    />
  </div>
</template>
