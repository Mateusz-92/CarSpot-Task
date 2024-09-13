<script>
export default {
  name: 'CustomButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    backgroundClass: {
      type: String,
      default: 'bg-[#0147FF]',
    },
    textClass: {
      type: String,
      default: 'text-white',
    },
    hoverClass: {
      type: String,
      default: 'hover:bg-white hover:text-[#0147FF]',
    },
  },
}
</script>
<template>
  <button
    :class="[
      'border',
      'border-[#0147FF]',
      'font-bold',
      'py-1',
      'rounded-xl',
      'w-36',
      'h-12',
      'font-[\'Roboto_Flex\']',
      'text-base',
      'font-medium',
      'leading-6',
      'tracking-[-0.02em]',
      'text-center',
      'z-10',
      backgroundClass,
      textClass,
      hoverClass,
    ]"
  >
    {{ buttonText }}
  </button>
</template>
