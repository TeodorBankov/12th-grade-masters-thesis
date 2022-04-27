<template>
  <div id="parent">
    <div id="navbar">
      <Bar />
    </div>
    <div id="vstack">
      <div id="hstack">
        <NowPlaying
          class="now-playing"
          @songAdded="songAdded"
          :recognizedSong="recognizedSong"
        />
        <RadioList
          :paused="paused"
          :radios="radios"
          @query="updateRadios"
          @playRadio="playRadio"
          @stopRadio="stopRadio"
        />
      </div>

      <div id="player">
        <RadioPlayer
          :paused="paused"
          :radioUrl="url"
          @paused="paused = true"
          @play="paused = false"
        />
        <LikedSongs ref="LikedSongs" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, renderSlot } from "vue";
import Bar from "./Bar.vue";
import Visuals from "./Visuals.vue";
import RadioList from "./RadioList.vue";
import RadioPlayer from "./RadioPlayer.vue";
import LikedSongs from "./LikedSongs.vue";
import NowPlaying from "./NowPlaying.vue";
import axios from "axios";
import ms from "ms";
import {ref} from 'vue'



export default defineComponent({
  components: { Visuals, RadioList, RadioPlayer, NowPlaying, Bar, LikedSongs },
  data() {
    return {
      likedSongs :[],
      radios: [],
      url: "",
      paused: true,
      polling: null,
      recognizedSong: [],
      LikedSongs
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
      let url = "https://nl1.api.radio-browser.info/json/stations/search?";
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
    },
    songAdded() {
      this.$refs.LikedSongs.getSongs()
    },
    playRadio(url) {
      this.url = url;
      this.paused = false;
      this.startRecognizing();
    },
    stopRadio() {
      this.paused = true;
      this.stopRecognizing();
    },
    getSong() {
      axios
        .get("http://localhost:3000/fetch-song", {
          params: {
            url: this.url,
          },
        })
        .then((res) => {
          console.log(res);
          let song = res.data;
          let data = {
            title: song?.track?.title || "No song detected!",
            subtitle: song?.track?.subtitle || "",
            img: song?.track?.images?.background || "", //background
            hrefUrl: song?.track?.share?.href || "", //url
            genre: song?.track?.genres?.primary || "",
          };
          this.recognizedSong = data;
        })
        .catch(console.error);
    },
    startRecognizing() {
      this.getSong();
      this.polling = setInterval(this.getSong, ms("10s"));
    },
    stopRecognizing() {
      clearInterval(this.polling);
    },
  },
});
</script>

<style>
#navbar {
  padding-bottom: 10px;
}
#vstack {
  display: flex;
  flex-direction: column;
}
#hstack {
  display: flex;
  justify-content: space-between;
}
#player {
  margin-top: 0;
  padding-top: 10px;
}
.now-playing {
  margin-right: 10px;
  margin-top: 40px;
}
</style>
