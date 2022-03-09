<template>
  <div id="container">
    <table>
      <tr v-for="(radio, index) in radios" :key="radio.name">
        <td class="bold-text">{{ index + 1 }}</td>
        <td>
          <span class="radio-name">{{ radio.name }}</span>
        </td>
        <td>
          <img
            id="radio-icon"
            :src="radio.favicon || require('@/assets/radio-icon.png')"
            :class="radio.favicon ? '' : 'inverted'"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["radios"],
  data() {
    return {};
  },
  emits: ["selectedRadio"],
  mounted() {},
  methods: {
    loadJsonData() {},
  },
});
</script>


<style lang="scss">
#container {
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

.radio-element {
  display: flex;
  width: 50vw;
}

.radio-name {
  display: flex;
  flex-direction: row;
  justify-content: space-btween;
  align-items: center;
  min-width: 400px;
  margin-left: 30px;
}

.bold-text {
  font-weight: 600;
}

tr {
  height: 40px;
}

img {
  max-height: 20px;
  max-width: 40px;
}

ol {
  counter-reset: item;
  list-style-type: none;
}

li {
  display: flex;
  
  :before {
    content: counter(item) "  ";
    counter-increment: item;
  }
}

.inverted {
  filter: invert(100%);
}
</style>