<script>
export default {
  name: 'SeoElement',
  props: {
    headerText: {
      type: String,
      required: true,
    },
    contentText: {
      type: String,
      required: true,
    },
    collapsedText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isCollapsed: true,
    }
  },
}
</script>
<template>
  <div
    class="flex flex-col items-center md:items-start text-white bg-transparent md:w-[576px] text-center md:text-left"
  >
    <h3
      class="text-white font-bebas-neue text-2xl font-normal leading-[37.5px] tracking-tighter uppercase"
    >
      {{ headerText }}
    </h3>
    <span
      class="font-roboto-condensed text-sm font-normal leading-[21px] mt-[24px] mb-[24px]"
      >{{ contentText }}</span
    >

    <button
      class="font-roboto-condensed text-sm font-normal leading-[21px] border-b border-white mb-[24px]"
      @click="isCollapsed = !isCollapsed"
    >
      {{ isCollapsed ? 'Rozwiń' : 'Zwiń' }}
      <font-awesome-icon :icon="isCollapsed ? 'arrow-down' : 'arrow-up'" />
    </button>

    <span v-if="!isCollapsed">{{ collapsedText }}</span>
  </div>
</template>
