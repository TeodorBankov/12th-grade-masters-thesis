<template>
  <div id="parent">
    <form class="container" @submit.prevent="login">
      <div class="form">
        <label for="username">Username</label>
        <input v-model="username" placeholder="Your username:"/>
      </div>
      <br>
      <div class="form">
        <label for="password">Password</label>
        <input type="password" v-model="password" placeholder="ex. AJJIg32h92"/>
      </div>
      <input type="submit" value="log in" />
    </form>
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
    font-family: -apple-system,BlinkMacSystemFont,
    "Segoe UI",Helvetica,Arial,sans-serif,
    "Apple Color Emoji","Segoe UI Emoji"; 
}
.container {
  border: solid 1px black;
  display: flex;
  flex-direction: column;

}

label {
    font-weight: 600;
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
    width: 50%;
    margin: 0 auto 8px;

    input {
        border: none;
        border-radius: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        color: #FFFFFF;
        background-color: #34343a;
    }
}
</style>