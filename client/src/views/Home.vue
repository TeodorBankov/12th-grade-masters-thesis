<template>
  <div class="home">
    <Start/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Start from "../components/Start.vue"; // @ is an alias to /src
import axios from "axios";

export default defineComponent({
  name: "Home",
  components: {
    Start,
  },

  data() {
    return { uwu: "start" };
  },
});
</script>

<style lang="scss" scoped>

</style>