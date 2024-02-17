<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 card-container">
        <TranslateCard v-for="(card, index) in translateCards" :key="index" :translateCard="card" :target="target" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { springRightCenter } from "../utils/VueMotion.js";
import { translateCards } from '../utils/VueMotion.js';
import TranslateCard from "../components/TranslateCard.vue";

export default {
  setup() {
    const target = ref(springRightCenter.target);

    onMounted(() => {
      const translateCards = ref(translateCards);
    });
    return {
      target,
      translateCards,
      springRightCenter,
    }
  },
  components: {
    TranslateCard,
  }
}
</script>

<style scoped lang="scss">
.card-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
