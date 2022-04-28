<template>
  <div id="radio-player">
    <div class="hstack">
      <div>
       
        <span @click="play">
          <img
            class="inverted player-button"
            :src="
              isPlaying && paused
                ? require('@/assets/play-button.png')
                : require('@/assets/pause-button.png')
            "
          />
        </span>
      </div>
      <div>
        <span @click="seek">
          <img
            class="inverted player-button"
            :src="require('@/assets/seek-fwd.png')"
          />
        </span>
      </div>
      <span class="time-played">{{ currentTime }}</span>
      <div class="volume-slider">
        <input
          ref="input"
          type="range"
          min="0"
          max="100"
          v-model="volume"
          @input="changeVol"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: ["radioUrl", "paused"],
  emits: ["paused", "play"],
  data() {
    return {
      /** @type {HTMLAudioElement} */
      audio: null,
      isPlaying: true,
      currentTime: null,
      volume: 30,
    };
  },
  async mounted() {
    let self = this;
    this.audio = new Audio();
    this.audio.src = this.radioUrl;
    this.audio.volume = 0.3;
    this.audio.ontimeupdate = () => {
      self.generateTime();
    };
  },
  play(){
if (this.audio.paused) {
        this.isPlaying = false;
        this.audio.play();
        this.$emit("play");
      } else {
        this.isPlaying = true;
        this.audio.pause();
        this.$emit("paused");
      }
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.isPlaying = false;
        this.audio.play();
        this.$emit("play");
      } else {
        this.isPlaying = true;
        this.audio.pause();
        this.$emit("paused");
      }
    },
    seek() {
      this.isPlaying = false;
      this.audio.src = this.radioUrl;
      this.audio.currentTime = 0;
      this.audio.play();
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    changeVol() {
      this.audio.volume = this.volume / 100;
    },
  },
  watch: {
    radioUrl() {
      this.audio.src = this.radioUrl;
    },
    paused() {
      console.log(this.paused)
    },
  },
});
</script>

<style lang="scss">
#radio-player {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b2333;
  border-radius: 10px;
  width: 400px;
  // margin-left: auto;
  // margin-right: auto;
  .hstack {
    display: flex;
    align-items: center;
  }
}

.player-button {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}

.inverted {
  filter: invert(100%);
}

// .volume-slider {
//   height: 15px;
//   border-radius: 5px;
//   transition: opacity 0.3s;
//   outline: none;
//   opacity: 0.7;
//   background: #d3d3d3;
//   cursor: pointer;
//   &::-webkit-slider-thumb,
//   &::-moz-range-thumb {
//     height: 25px;
//     border-radius: 50%;
//     background: #04aa6d;
//   }
// }

.time-played {
  font-weight: 600;
  width: 40px;
  margin: 0 8px;
}

// https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/

input[type="range"] {
  -webkit-appearance: none;
  margin: 18px 0;
  width: 100%;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background-color: #3071a9;
  border-radius: 2px;
  border: 1px solid #010101;
}
input[type="range"]::-webkit-slider-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -4px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type="range"]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type="range"]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type="range"]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type="range"]:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type="range"]:focus::-ms-fill-upper {
  background: #367ebd;
}
</style>
