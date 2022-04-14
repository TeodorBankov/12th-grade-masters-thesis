<template>
  <div id="parent">
    <div class="child">
      <Bar />
      <span id="slogan"
        >Listen to thousands of radios and be the first to get the track ID
      </span>
    </div>
  </div>
</template>

<script>
import Bar from "./Bar.vue";
export default {
  components: { Bar },
};
</script>

<style lang="scss" scoped>
#slogan {
  max-width: 300px;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 30px;
  color: #deb992;
  animation-name: slogan;
  animation-duration: 2s;
}
</style>