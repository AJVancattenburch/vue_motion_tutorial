<template>
    <div class="target" v-motion-slide-visible-once-right>1</div>
</template>

<script>

export default {
  setup() {
    return {
      
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
