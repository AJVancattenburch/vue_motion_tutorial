import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const target = ref();



export const springRightCenter = useMotion(target, {
  initial: {
    opacity: 0,
    scale: 1.2,
    x: 150,
  },
  enter: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 2000, // ⋙ Increase to make type: 'spring' less subtle
      damping: 55, // ⋙ Dampens or 'softens' `type: 'spring'`
      mass: 3, // ⋙ Increases bounce for `type: 'spring'`
      delay: 500, // ⋙ Delays animation start
    },
  },
  // leave: {
  //   opacity: 0,
  //   scale: 0,
  //   x: -100,
  // }
})