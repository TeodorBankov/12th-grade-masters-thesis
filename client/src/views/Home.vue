<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <input v-model="uwu" />
    <HelloWorld :msg="uwu" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return { uwu: "start" };
  },
});
</script>

<style lang="scss" scoped>
img {
  margin: 0 auto;
  width: fit-content;
  display: block;
}
</style>