<template>
  <section
    v-if="translateCard"
    class="translate-card"
  >
    <div class="header">
      <h1>{{ translateCard.title }}</h1>
    </div>
    <div class="content">
      <p>{{ translateCard.content }}</p>
    </div>
  </section>
  
</template>

<script>
import { ref } from "vue";
import { springRightCenter } from "../utils/VueMotion.js";

export default {
  props: {
    translateCard: {
      type: Object,
      required: true,
    },
  },
  setup() {
      
    const target = ref(springRightCenter.target);
    
    return {
      target,
      springRightCenter
    };
  }
}
</script>

<style scoped lang="scss">
.translate-card {
  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 5px 5px var(--shadow-red) inset, 0 0 15px 10px var(--shadow-purple) inset;
  padding: 20px 20px 20px 60px;
  font-size: 2em;
  font-family: 'Arial', sans-serif;
  text-shadow: 0px 1px 0px 0px #00000090;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  filter: brightness(1.5) saturate(1.25) contrast(1.25) blur(0.5px);
  overflow: hidden;
  margin-bottom: 20px;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0, rgb(35, 33, 46) 10%, rgb(31, 83, 83) 50%, #266381 100%);
    box-shadow: inset -5px 0px 10px 5px var(--bg-color);
    border-radius: 10px;
    filter: brightness(.5);
    z-index: -1;
  }
  >.header {
    width: 100vw;
    height: 100%;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 5px double var(--translucent-red);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      background-color: white;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image:
                linear-gradient(90deg, transparent 50%, var(--shadow-blue)),
                linear-gradient(360deg, transparent 0%, var(--shadow-red));
      filter: brightness(.7);
    }
  }
  >.content>p {
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image:
              linear-gradient(90deg, transparent 50%, var(--shadow-green)),
              linear-gradient(180deg, transparent 50%, var(--shadow-blue)),
              linear-gradient(270deg, transparent 50%, #388FBB),
              linear-gradient(360deg, transparent 0%, var(--shadow-red));
  }
}
</style>