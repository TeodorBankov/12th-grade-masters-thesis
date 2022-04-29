<template>
  <span>
    <router-view />
  </span>
</template>

<style lang="scss">
//app wise editing
html {
  background-color: #1F487E;
  scroll-behavior: smooth;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  text-align: center;
  color: #ffffff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #1BA098;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
