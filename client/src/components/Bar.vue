<template>
  <div class="bar">
    <div class="div-logo">
      <router-link to="/">
        <img class="logo" :src="require('@/assets/logo.png')" alt="logo" />
      </router-link>
    </div>
    <div class="bar-button">
      <router-link to="/main">
        <span class="playnow-button"> Listen now! </span>
      </router-link>
    </div>
    <div class="headerDivider"></div>
    <div class="bar-links">
      <router-link to="/">
        <span class="button"> Home </span>
      </router-link>
      <router-link to="/about">
        <span class="button"> About </span>
      </router-link>
      <router-link to="/profile">
        <span class="button"> Profile </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bar {
  font-size: 22px;
  display: flex;
  background-color: #0b2333;
  border-radius: 10px;
}
.div-logo {
  padding: 6px;
  padding-left: 8px;
  margin-right: auto;
  :hover {
    cursor: pointer;
    mix-blend-mode: hard-light;
  }
}
.logo {
  height: 50px;
}
.bar-button {
  display: flex;
  align-items: center;
}
.bar-links {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.playnow-button {
  margin-right: 10px;
  transition: 0.3s;
  padding: 6px;
  color: #1ba098;
  font-weight: 650;
}
.button {
  transition: 0.3s;
  color: #1ba098;
  font-weight: 450;
  margin: 0px 10px;
}
.headerDivider {
  border-radius: 1px;
  border: 1px solid #38546d;
  margin-right: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
}
a {
  text-decoration: none;
  :hover {
    transition: 0.3s;
    color: #b3b3b3;
  }
}
</style>