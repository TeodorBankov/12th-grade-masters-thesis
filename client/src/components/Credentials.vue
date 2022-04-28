<template>
  <div id="parent">
     <div class="child">
      <Bar />
    </div>
    <form class="container" @submit.prevent="login">
      <div class="form">
        <label for="username">Username</label>
        <input v-model="username" />
      </div>
      <br />
      <div class="form">
        <div class="hstack">
          <label for="password">Password</label>
        </div>
        <input type="password" v-model="password" />
      </div>
      <div class="form">
        <input class="submitbtn" type="submit" value="Sign in" />
      </div>
    </form>
    <span>{{ labelTextUser }}</span>
    <div class="container">
      <div class="hstack">
        <span>No Account? </span>
        <button class="linkbutton" @click="$emit('createAcc')">
          <span class="link">Create one!</span>
        </button>
      </div>
    </div>
  </div>
</template>

//* Colors Used: #242333, #FFFFFF, #01B0D3

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { useRouter, useRoute } from 'vue-router'
import Bar from "./Bar.vue";
export default defineComponent({
    components: { Bar },
   data() {
    return {
      username: "",
      isLogging: false,
      labelTextUser: "",
      password: "",
      res: "",
      router: useRouter()
    };
  },
  methods: {
    async login() {
      if(this.username==""||this.password==""){
        this.labelTextUser="Enter valid credentials"
        return null;
      }
      this.labelTextUser = "Please wait!"
      try{
      this.res = await (
        await axios.post("http://localhost:3000/login", { username: this.username, password: this.password })
      ).data;
       window.localStorage.setItem("token",this.res)
      this.router.push({ path: '/main', replace: true })
      }catch(error){
        this.labelTextUser="Wrong credentials"
      }
     
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
  border: solid 1px #051622;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 460px;
  margin: 8px auto;
  padding: 20px 0;
  background-color: #051622;

  a {
    text-decoration: none;
  }
  .link {
    text-decoration: none;
    color: #01b0d3;
  }
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
    padding: 8px;
    color: #ffffff;
    background-color: #242333;
    font-weight: bold;
  }

  .hstack {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .submitbtn {
    background-color: #26a641;
    margin: 10px 0px 0px;
    font-weight: 550;
    transition: 0.5s;
  }

  .submitbtn:hover {
    transition: 0.5s;
    background-color: #39d353;
  }
}

.linkbutton {
  .link {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-weight: 550;
    font-size: 16px;
  }
  background: none;
  border: none;
  :hover {
    cursor: pointer;
  }
}
</style>