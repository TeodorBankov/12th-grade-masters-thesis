<template>
  <div id="parent">
    <!-- <div id="canvas">
      <Visuals />
    </div>     -->
    <!-- <audio controls>
      <source
        src="https://stream.vanillaradio.com:8012/live"
        ref="audio"
      />
    </audio> -->
    <div id="container">
      <div id="hstack">
        <div id="songs"></div>

        <div id="radios"></div>
      </div>

      <div id="audio-player">
        <RadioList :radios="radios"></RadioList>
        <!-- {{ radios }} -->
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Visuals from "../components/Visuals.vue";
import RadioList from "../components/RadioList.vue";
import axios from "axios";
export default defineComponent({
  components: { Visuals, RadioList },
  data() {
    return {
      radios: [],
    };
  },
  async created() {
    // const { radios } = this;
    let data = (
      await axios({
        method: "get",
        url: "http://localhost:3000/fetch-radio-list",
        responseType: "json",
      })
    ).data;
    this.radios = data;
    // .then((response) => {
    //   this.radios = response.data;
    //   console.log(this.radios);
    // });
    // fetchRadios();
  },
  methods: {
    async fetchRadios() {},
  },
});
</script>

<style>
/* #canvas {
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
} */
</style>