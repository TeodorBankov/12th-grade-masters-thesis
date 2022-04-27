<template>
  <div id="parent">
    <div>
      <!-- <span class="recognized-songs">{{recognizedSongsInSession.map((songName) => {return songName["title"]}).toString()}}</span> -->
      <img
        :class="`playing-pic ${this.img ? '' : 'inverted'}`"
        :src="this.img || require('@/assets/no-music.png')"
        alt="song icon"
      />
    </div>
    <div id="current-song-info">
      <span id="song-name"> {{ title }}</span>
      <span id="song-subtitle"> {{ subtitle }}</span>
    </div>
    <div class="hstack">
      <div id="genre">
        <span class="label">Genre: </span>
        <span class="song-genre">{{ genre }}</span>
      </div>
      <div v-if="hrefUrl !== ''">
        <a  @click="addToLiked(), $emit('songAdded')">
          <img
            class="inverted share-icon"
            :src="require('@/assets/heart-icon.png')"
          />
        </a>
        <a :href="`${hrefUrl}`">
          <img
            class="inverted share-icon"
            :src="require('@/assets/share-icon.png')"
          />
        </a>
      </div>
      <div v-else>
        <img
          class="inverted share-icon"
          style="opacity: 60%"
          :src="require('@/assets/share-icon.png')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  emits: ["songAdded"],
  props: ["recognizedSong"],
  data() {
    return {
      title: "No song playing", //
      subtitle: "-", //
      img: "", //background
      hrefUrl: "", //url
      genre: "",
      recognizedSongsInSession: [],
    };
  },
  methods: {
    async addToLiked() {
      let res = await (
        await axios.post(
          "http://localhost:3000/addToLiked",
          {
            title: this.title,
            subtitle: this.subtitle,
            img: this.img,
            hrefUrl: this.hrefUrl,
            genre: this.genre,
          },
          {
            headers: {
              Authorization: "Bearer " + window.localStorage.getItem("token"),
            },
          }
        )
      ).data;
      console.log(res);
    },
    updateData() {
      let normalizedData = JSON.parse(JSON.stringify(this.recognizedSong));
      let recognizedSongs = this.recognizedSongsInSession.map((songName) => {
        return songName["title"];
      });
      this.title = normalizedData["title"];
      this.subtitle = normalizedData["subtitle"];
      this.img = normalizedData["img"];
      this.hrefUrl = normalizedData["hrefUrl"];
      this.genre = normalizedData["genre"];
      console.log("a" + normalizedData["hrefUrl"]);
      if (
        !recognizedSongs.includes(normalizedData["title"]) &&
        normalizedData["title"] != "No song Detected!"
      ) {
        this.recognizedSongsInSession.push(normalizedData);
      }
    },
  },
  watch: {
    recognizedSong: {
      deep: true,
      handler(n, o) {
        this.updateData();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
#parent {
  padding: 10px;
  margin-top: auto;
  margin-bottom: auto;
  background-color: #0b2333;
  border-radius: 10px;
}
#song-name {
  // flex-direction: column;
  color: #deb992;
  font-weight: 600;
  font-size: 20px;
}
#song-subtitle {
  // flex-direction: column;
  color: #deb992;
  opacity: 50%;
}
#current-song-info {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
#genre {
  display: flex;
  align-content: flex-start;
  margin-left: 24px;
}
.hstack {
  display: flex;
  justify-content: space-between;
}
.label {
  color: #deb992;
  opacity: 60%;
  padding-right: 6px;
}
.song-genre {
  color: #deb992;
}
.playing-pic {
  max-height: 50vh;
  max-width: 29vw;
}
.inverted {
  filter: invert(100%);
}
.share-icon {
  margin-right: 30px;
  width: 20px;
}
</style>