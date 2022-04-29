<template>
  <div id="parent">
    
<link href='https://fonts.googleapis.com/css?family=Aclonica' rel='stylesheet'>
    <div class="child">
      <Bar />
      <span id="slogan"
        >Listen to thousands of radios and be the first to get the track ID
      </span>
    </div>

    <div class="containerFlex">
      <div class="minicontainer">
        <h1 style="font-family: 'Aclonica';">Explore radio channels from around the world</h1>
        <span class="break"></span>
        <h2>Explore new heights of music</h2>
        <span class="break"></span>
        <h3>Add your discovered songs to your liked list to share for later</h3>
      </div>
      <img class="logo" :src="require('@/assets/astro_radio.png')" alt="logo" />
    </div>
  </div>
</template>

<script>
import Bar from "./Bar.vue";
export default {
  components: { Bar },
};
</script>

<style lang="scss" scoped>


#slogan {
  max-width: 300px;
  font-family: Impact, Charcoal, sans-serif;
  font-size: 30px;
  color: #deb992;
  animation-name: slogan;
  animation-duration: 2s;
}

.containerFlex {
  display: flex;
}

.minicontainer {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-end;
}
.containerFlex > * {
  flex-grow: 1;
}
h1 {
  font-family: 'Aclonica';
  color: #fb3640;
}
h2 {
  font-family: 'Aclonica';
  color: #82d9ff;
}

h3 {
  font-family: 'Aclonica';
  color: #bbfcb5;
}
.break {
  flex-basis: 100%;
}
.logo {
  max-width: 45vw;
}
</style>
