<template>
  <span>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </span>
</template>

//// Colors Used: #242333, #FFFFFF, #01B0D3
<style lang="scss">
//app wise editing 
html{
  background-color: #242333;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color:  #01B0D3;

    &.router-link-exact-active {
      color: #FFFFFF;
    }
  }
}
</style>
