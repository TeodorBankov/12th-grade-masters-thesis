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
  </div>
</template>

<script>
export default {
  props: ["recognizedSong"],
  data() {
    return {
      title: "stay with me",
      subtitle: "more",
      img: "", //background
      hrefUrl: "aa", //url
      genre: "aa",
      recognizedSongsInSession: [],
    };
  },
  methods: {
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
}
.playing-pic {
  max-height: 50vh;
}
.inverted {
  filter: invert(100%);
}
</style>