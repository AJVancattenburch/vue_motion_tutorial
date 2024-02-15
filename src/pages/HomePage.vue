<template>
  <div ref="target" v-motion="springRightCenter">
    <div class="target">Target</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { springRightCenter } from "../utils/VueMotion.js";

export default {
  setup() {
    const target = ref(springRightCenter.target);
    return {
      target,
      springRightCenter,
    }
  }
}
</script>

<style scoped lang="scss">
.target {
  width: 100px;
  height: 100px;
  margin: 300px auto 500px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #43b883;
  border-radius: 10px;
  font-weight: bold;
}
</style>
