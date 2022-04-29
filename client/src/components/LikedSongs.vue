<template>
  <div id="container-liked">
    <h1 style="color: #FB3640">Liked songs:</h1>
    <div id="container">
      <div id="child-container">
        <div class="table">
          <div v-for="(song) in likedSongs" :key="song.title" class="table-row">
            <span class="number inverted">
              <a :href="song.hrefUrl">
                <img :src="require('@/assets/share-icon.png')" />
              </a>
            </span>

            <span class="number inverted" @click="removeSong(song.title)">
              <img :src="require('@/assets/trash-icon.png')" />
            </span>
            <span class="table-row-name">{{ song.title }}</span>
            <span class="table-row-country">{{ song.subtitle }}</span>

            <span class="table-row-img">
              <img
                class="image-song "
                style="height: 50px !important"
                :src="song.img || require('@/assets/radio-icon.png')"
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
import axios from "axios";

export default {
  data() {
    return {
      likedSongs: [],
    };
  },
  async mounted() {
    this.getSongs();
  },
  methods: {
    async removeSong(titleParam) {
     
      await axios.delete("http://localhost:3000/deleteSong", {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
        data: {
          title: titleParam
        }
      })
      this.getSongs();
    },
    async getSongs() {
      this.likedSongs = (
        await axios.get("http://localhost:3000/getLikedSongs", {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        })
      ).data;
    },
  },
  setup() {},
};
</script>

<style lang='scss' scoped>
#container-liked {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.number:hover {
  transition: transform ease 300ms;
  transform: translate(0, -10px);
}
.table-row-name,
.table-row-country {
  color: #deb992;
}

.table-row {
  height: 50px;
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
        visibility: initial;
      }
      .play {
        width: 14px;
        display: initial;
        cursor: pointer;
      }
      .table-row-index {
        font-weight: 1000;
      }
      .image-song{
          transform: scale(1.5);
          border-radius: 20px;
      }

    }

    .number {
      transition: transform ease 300ms;
      color: #1ba098;
      visibility: hidden;
    }
    .play {
      visibility: hidden;
      width: 14px;
    }
    display: flex;
    flex-direction: row-reverse;
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
  height: 420px;
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

.image-song {
  max-height: 50px;
  max-width: 40px;
}
img {
  max-height: 20px;
  max-width: 40px;
}

.inverted {
  filter: invert(100%);
}
</style>
