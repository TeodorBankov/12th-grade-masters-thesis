<template>
<div>
  <div id="container">
    <div id="child-container">
      <RadioSearchBar @query="search" />
      <div class="table">
        <div v-for="(radio, index) in radios" :key="radio.id" class="table-row">
          <span class="table-row-index">
            <span v-if="playingRadio != index" class="number">
              {{ index + 1 }}
            </span>
            <img
              v-if="playingRadio != index"
              class="inverted play"
              :src="require('@/assets/left-arrow.png')"
              @click="play(radio.url, index)"
            />
            <img
              v-if="playingRadio == index"
              class="inverted play playing-icon"
              :src="require('@/assets/pause-button.png')"
              @click="togglePause(index)"
            />
          </span>
          <span class="table-row-name">{{ radio.name }}</span>
          <span class="table-row-country">{{ radio.country }}</span>
          <span class="table-row-img">
            <img
              :class="radio.favicon ? '' : 'inverted'"
              :src="radio.favicon || require('@/assets/radio-icon.png')"
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  </div>
   
  </div>
</template>

<script>
import { defineComponent } from "vue";
import RadioSearchBar from "../components/RadioSearchBar.vue";
import LikedSongs from "./LikedSongs.vue"
export default {
  components: { RadioSearchBar, LikedSongs },
  props: ["radios", "queryStr", "paused"],
  data() {
    return {
      playingRadio: -1,
    };
  },
  emits: ["query", "playRadio", "stopRadio"],
  methods: {
    search(query) {
      this.$emit("query", query);
    },
    play(url, index) {
      this.playingRadio = index;
      this.$emit("playRadio", url);
    },
    togglePause(index) {
      this.playingRadio = -1;
      this.$emit("stopRadio");
    },
  },
};
</script>

<style lang="scss" scoped>
.table-row-name,
.table-row-country {
  color: #deb992;
}
.table {
  width: 68vw;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 18px;

  &-row {
    &:hover {
      background-color: #18354b;
      border-radius: 4px;
      .number {
        display: none;
      }
      .play {
        width: 14px;
        display: initial;
        cursor: pointer;
      }
      .table-row-index {
        font-weight: 1000;
      }
    }

    .number {
      color: #1ba098;
      display: initial;
    }
    .play {
      display: none;
      width: 14px;
    }
    display: flex;
    margin: 4px 8px;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 4px;

    &-index {
      width: 44px;
    }

    &-name {
      display: flex;
      width: 32%;
    }

    &-country {
      width: 20%;
    }

    &-img {
      width: 10%;
    }

    .playing-icon {
      display: inline-block !important;
    }
  }
}
#container {
  display: flex;
  
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

#child-container {
  display: flex;
  flex-direction: column;
  background-color: #1D3461;
  border-radius: 10px;
  padding-right: 2px;
  padding-bottom: 2px;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background: #1d374b;
  border-radius: 10px;
}

.radio-name {
  display: flex;
  flex-direction: row;
  // justify-content: space-btween;
  align-items: center;
  min-width: 200px;
  margin-left: 30px;
}

.radio-country {
  display: flex;
  min-width: 230px;
}

.bold-text {
  font-weight: 600;
}

table {
  border-collapse: separate;
  border-spacing: 0 0.5em;
}

tr {
  height: 40px;
  border-radius: 10px;
}

tr:hover {
  //insert beautiful stuff here
  border-radius: 20px;
  background-color: red;
}

img {
  max-height: 20px;
  max-width: 40px;
}

.inverted {
  filter: invert(100%);
}
</style>
