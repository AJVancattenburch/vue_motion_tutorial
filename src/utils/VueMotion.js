import { useMotion } from "@vueuse/motion";
import { ref } from "vue";

const target = ref();

export const motionInstance = useMotion(target, {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
  }
})