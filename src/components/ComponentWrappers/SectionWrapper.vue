<template>
  <section 
    ref="target"
    v-motion:variants="springRightCenter" 
    v-motion:initial="'hidden'"
    :class="classProp"
    class="padding max-w-7xl mx-auto relative z-0"
  >
    <span class="hash-span" :class="hashSpanClass">&nbsp;</span>
    <component :is="Component" />
  </section>
</template>

<script>
import { useMotion } from '@vueuse/motion';
import { springRightCenter } from "../../utils/VueMotion.js";
import { ref } from "vue";
import TranslateCard from "../TranslateCard.vue";

export default {
  props: {
    Component: {
      type: Object,
      required: true,
    },
    classProp: {
      type: String,
      required: true,
    },
    hashSpanClass: {
      type: String,
      default: 'hash-span',
    },
  },
  setup() {
    const target = ref(springRightCenter.target);
    return {
      target,
      springRightCenter
    };
  },
  components: { TranslateCard },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>