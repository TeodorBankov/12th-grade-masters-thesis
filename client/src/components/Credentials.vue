<template>
  <div id="parent">
      <div class="header">
          <router-link to="/">
            <img alt="logo" src = "https://3.bp.blogspot.com/-lOZajwbK_Tg/VFMa-GadTiI/AAAAAAAAGNA/TwtKQoemnLE/s1600/Logo%2BRecyclable_Box.png">
          </router-link>
          <h2>Sign in to "Appname"</h2>
      </div>
    <form class="container" @submit.prevent="login">
      <div class="form">
        <label for="username">Username</label>
        <input v-model="username" />
      </div>
      <br>
      <div class="form">
        <div class="hstack">
          <label for="password">Password</label>
          <a class="link" href="insert forgot pass link here"
            >Forgot password?</a
          >
        </div>
        <input type="password" v-model="password" />
      </div>
      <div class="form">
        <input class="submitbtn" type="submit" value="Sign in" />
      </div>
    </form>
    <!-- Insert register link design here! -->
    <span>{{ res }}</span>
  </div>
</template>

//* Colors Used: #242333, #FFFFFF, #01B0D3

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
      res: "",
    };
  },
  methods: {
    async login() {
      const { username, password } = this;
      this.res = await (
        await axios.get("http://localhost:3000/login", {
          params: {
            user: username,
            password: password,
          },
        })
      ).data;
    },
  },
});
</script>


<style lang="scss" scoped>
#parent {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

.header {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto 10px;
  h2 { 
      font-weight: normal;
  }
  img { 
      width: 30%;
      height: 30%;
  }
    
}

.container {
  border: solid 1px #41404d;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
//   align-content: center; // tova ne znam kvo promenq xd
  justify-content: center;
  width: 460px;
  height: 250px;
  margin: auto; 
  background-color: #41404d;
//   padding-top: 10px;
//   padding-bottom: 10px
}

label {
  font-weight: 400;
  font-size: 20px;
  width: fit-content;
  margin: 0 0 5px;
}

.form {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: left;
  justify-content: center;
  width: 80%;
  margin: 0 auto 8px;

  input {
    border: solid 0.9px #41404d;
    border-radius: 5px;
    padding-top: 7px;
    padding-bottom: 7px;
    color: #ffffff;
    background-color: #242333;
  }

  .hstack {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    text-decoration: none;
    color: #01b0d3;
  }

  .submitbtn {
    background-color: #26a641;
    margin: 10px 0px 0px;
    font-weight: 550;
  }

  @keyframes buttonhover {
    0% {
      background-color: #26a641;
    }
    100% {
      background-color: #39d353;
    }
  }

  .submitbtn:hover {
    animation-name: buttonhover;
    animation-duration: 0.5s;
    background-color: #39d353;
  }
  
}
</style>