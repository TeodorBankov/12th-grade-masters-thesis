<template>
  <span>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <span id="output">output</span>
    <a @click="click">click me</a>
    <router-view />
  </span>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    click() {
      let output = document.getElementById("output");
      axios
        .get("http://localhost:3000/show-response")
        .then(async (response) => {
          output.innerHTML = JSON.stringify(await response.data);
        });
      return false;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
