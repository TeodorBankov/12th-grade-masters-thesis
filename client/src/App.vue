<template>
  <span>
    <router-view />
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> | -->
      <!-- <router-link to="/login">Login</router-link> -->
    <!-- </div> -->
  </span>
</template>

//// Colors Used: #242333, #FFFFFF, #01B0D3
//// #051622 #1BA098 #DEB992
<style lang="scss">
//app wise editing
html {
  background-color: #184a6e;
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
