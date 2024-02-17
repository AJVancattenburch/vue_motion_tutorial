import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const target = ref();



export const springRightCenter = useMotion(target, {
  initial: {
    opacity: 0,
    scale: .5,
    x: 100,
  },
  enter: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 2500,
      damping: 65,
      mass: 3, // ⋙ Adjust the 'bounciness'
      delay: 500,
    },
  },
  visibleOnce: {
    opacity: 1,
    scale: .5,
    x: 100,
    transition: {
      type: 'spring',
      stiffness: 2500,
      damping: 65,
      mass: 3, // ⋙ Adjust the 'bounciness'
    },
  }
})

export const translateCards = ref([
  {
    title: 'Vue 3 + TailwindCSS + VueUse + VueMotion',
    content: 'This is a simple example of how to use Vue 3 with Vite, TailwindCSS, VueUse, and VueMotion.'
  },
  {
    title: 'The Power of VueUse',
    content: 'VueUse is a collection of essential Vue Composition Utilities for Vue 3. It is a collection of essential Vue Composition Utilities for Vue 3.'
  },
  {
    title: 'The Power of VueMotion',
    content: 'VueMotion is a collection of essential Vue Motion Utilities for Vue 3. It is a collection of essential Vue Motion Utilities for Vue 3.'
  },
  {
    title: 'The Power of TailwindCSS',
    content: 'TailwindCSS is a collection of essential CSS Utilities for Vue 3. It is a collection of essential CSS Utilities for Vue 3.'
  },
  {
    title: 'The power of useScroll',
    content: 'useScroll is a collection of essential Vue Scroll Utilities for Vue 3. It is a collection of essential Vue Scroll Utilities for Vue 3.'
  }
]);