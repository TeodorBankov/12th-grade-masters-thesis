<template>
  <div id="parent">
    <NowPlaying/>
    <div>
    <RadioList
      :paused="paused"
      :radios="radios"
      @query="updateRadios"
      @playRadio="playRadio"
      @stopRadio="stopRadio"
    />
    <RadioPlayer
      :paused="paused"
      :radioUrl="url"
      @paused="paused = true"
      @play="paused = false"
    />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Visuals from "./Visuals.vue";
import RadioList from "./RadioList.vue";
import RadioPlayer from "./RadioPlayer.vue";
import RadioBrowser from "radio-browser";
import NowPlaying from "./NowPlaying.vue"
import axios from "axios";
export default defineComponent({
  components: { Visuals, RadioList, RadioPlayer, NowPlaying },
  data() {
    return {
      radios: [],
      url: "",
      paused: true,
    };
  },
  async created() {
    this.updateRadios("BG", "country");
  },
  methods: {
    updateRadios(searchterm, by = "name") {
      if (searchterm == "") {
        by = "country";
        searchterm = "BG";
      }
      let url = "https://de1.api.radio-browser.info/json/stations/search?";
      if (by == "country")
        url =
          "https://nl1.api.radio-browser.info/json/stations/search?limit=10&tagList=pop&order=random&reverse=true";
      if (by == "name") url += `name=${searchterm}`;
      // url += "&limit=10";
      url += "&hidebroken=true";

      axios.get(url).then(({ data }) => {
        this.radios = data.map((radio) => {
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
      });
      console.log(this.radios);
      // this.radios = (
      //   await RadioBrowser.getStations({
      //     limit: 10,
      //     by,
      //     searchterm,
      //     hidebroken: true,
      //   })
      // ).map((radio) => {
      // });
    },
    playRadio(url) {
      this.url = url;
      this.paused = false;
    },
    stopRadio() {
      this.paused = true;
    },
  },
});
</script>

<style>
#parent {
  display: flex;
}
</style>
