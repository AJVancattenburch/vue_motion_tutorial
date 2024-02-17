import { ref, onUnmounted } from "vue";

export const useMouseInElement = (target) => {
  const elementX = ref(0);
  const elementY = ref(0);
  const isOutside = ref(false);
  const elementWidth = ref(0);
  const elementHeight = ref(0);

  const update = () => {
    if (!target.value) return;

    const rect = target.value.getBoundingClientRect();
    elementWidth.value = rect.width;
    elementHeight.value = rect.height;

    elementX.value = Math.max(0, Math.min(rect.width, window.event.clientX - rect.left));
    elementY.value = Math.max(0, Math.min(rect.height, window.event.clientY - rect.top));

    isOutside.value = window.event.clientX < rect.left || window.event.clientX > rect.right || window.event.clientY < rect.top || window.event.clientY > rect.bottom;
  };

  window.addEventListener("mousemove", update);

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return {
    elementX,
    elementY,
    isOutside,
    elementWidth,
    elementHeight,
  };
};