<template>
  <div id="parent">
    <!-- <RadioList :radios="radios" @query="updateRadios" @playRadio="playRadio" /> -->
    <RadioPlayer/>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Visuals from "./Visuals.vue";
import RadioList from "./RadioList.vue";
import RadioPlayer from "./RadioPlayer.vue";
import RadioBrowser from "radio-browser";
export default defineComponent({
  components: { Visuals, RadioList, RadioPlayer },
  data() {
    return {
      radios: [],
    };
  },
  async created() {
    this.updateRadios("Bulgaria", "country");
  },
  methods: {
    async updateRadios(searchterm, by = "name") {
      if (searchterm == "") {
        by = "country";
        searchterm = "Bulgaria";
      }
      this.radios = (
        await RadioBrowser.getStations({
          limit: 10,
          by,
          searchterm,
        })
      ).map((radio) => {
        if (radio.country == "") {
          radio.country = "";
        }
        return {
          id: radio.uuid,
          name: radio.name,
          url: radio.url_resolved,
          favicon: radio.favicon,
          country: radio.country,
        };
      });
    },
    playRadio(url) {
      console.log(url);
    },
  },
});
</script>

<style>
</style>
