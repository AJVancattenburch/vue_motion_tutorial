import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const target = ref();



export const springRightCenter = useMotion(target, {
  initial: {
    opacity: 0,
    scale: .5,
    y: 100,
  },
  enter: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 2500,
      damping: 65,
      mass: 3, // ⋙ Adjust the 'bounciness'
      delay: 500,
    },
  },
  leave: {
    opacity: 0,
    scale: 0,
    x: -100,
    transition: {
      type: 'spring',
      stiffness: 2500,
      damping: 25,
      mass: 3, // ⋙ Adjust the 'bounciness'
    },
  }
})