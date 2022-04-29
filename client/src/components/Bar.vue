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

      <div class="dropdown" v-if="isLoggedIn()">
        <span class="button">Profile</span>
        <div class="dropdown-content">
          
            <router-link to="/profile">
          <span class="button">My profile </span>
            </router-link>
            <br>
            <router-link to="/login" @click="logOut()">
              <span class="button"> Log out </span>
            </router-link>
          
        </div>
      </div>

      <router-link v-if="!isLoggedIn()" to="/login">
        <span class="button"> Log in </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logOut(){
      window.localStorage.removeItem("token")
    },
    isLoggedIn() {
      let token = window.localStorage.getItem("token");
      console.log("token: " + token);
      if (!token) return false;
      try {
        let payloadEncoded = token.split(".")[1];
        let payloadDecoded = atob(payloadEncoded);

        if (!payloadDecoded) return false;
        let payload = JSON.parse(payloadDecoded);
        let expDate = new Date(payload.exp * 1000);
        let accessIsExpired = !(expDate > new Date());
        return accessIsExpired;
      } catch (e) {
        return false;
      }
    },
    isTokenExpired(token) {
      if (!token || token === "undefined") return true;
      try {
        if (token == null) {
          return true;
        }
        try {
          const expiry = JSON.parse(atob(token.split(".")[1])).exp;
          return Date.now() >= expiry * 1000;
        } catch (exception) {
          return exception.status;
        }
      } catch (exception) {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.bar {
  font-size: 22px;
  display: flex;
  background-color: #1D3461;
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
.dropdown {
  display: inline-block;
  position: relative;
}
.dropdown-content {
  display: none;
  position: absolute;
  width: 150px;
  right: 5px;
  overflow: auto;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.4);
}
.dropdown:hover .dropdown-content {
  display: block;
  background: #1a3e57;
}
.dropdown-content router-link {
  display: block;
  color: #000000;
  padding: 5px;
  text-decoration: none;
}
.dropdown-content >* :hover {
  color: #FB3640;
  
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
  color: #FB3640;
  font-weight: 650;
}
.button {
  transition: 0.3s;
  color: #247BA0;
  font-weight: 450;
  margin: 0px 10px;
}
.headerDivider {
  border-radius: 1px;
  border: 1px solid #FB3640;
  margin-right: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
}
a {
  text-decoration: none;
  :hover {
    transition: 0.3s;
    color: #FB3640;
  }
}

</style>