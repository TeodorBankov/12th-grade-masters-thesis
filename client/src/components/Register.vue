<template>
  <div id="parent">
    <div class="header">
      <h2>Join us now:</h2>
    </div>

    <form class="container" @submit.prevent="register">
      <div class="form">
        <span class="label">Username</span>
        <input v-model="username" />
      </div>
      <div class="form">
        <span class="label">E-mail </span>
        <input v-model="email" />
      </div>
      <div class="input-spacing">
        <div class="form">
          <span class="label">Password </span>
          <input
            type="password"
            v-model="password"
            @click="displayPasswordWarning = true"
          />
        </div>
        <div class="form">
          <div class="hstack">
            <span class="label">Confirm Password </span>
            <span class="warn-text" v-if="showPasswordMatchError">
              Passwords don't match!</span
            >
          </div>
          <input type="password" v-model="confirmPassword" />
        </div>
        <div class="warn-text" v-if="displayPasswordWarning">
          <span
            >The password should contain at least 8 symbols, including one
            number and uppercase character!</span
          >
        </div>
      </div>
      <div class="form">
        <input class="submitbtn" type="submit" value="Create Account" />
      </div>
      <vue-hcaptcha
        sitekey="b983cde5-ffc6-4238-8a2e-4f5f59f2cb13"
      ></vue-hcaptcha>
    </form>
  </div>
</template>

<script lang="js">
import Vue, { defineComponent } from "vue";
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import axios from "axios";
export default defineComponent({
    components: {VueHcaptcha},
    data() {
      return {
        username: "",
        email: "", 
        password: "",
        confirmPassword: "",
        showPasswordMatchError: false,
        displayPasswordWarning: false,
      };
    },
    methods: {
      checkMatchingPasswords() {
        let timeout = setTimeout(() => {
          if(this.password != this.confirmPassword) {
             this.showPasswordMatchError = true;
          } else {
            this.showPasswordMatchError = false;
          } 
        }, 500)
      },
      validatePassword() {
        if(this.password.contains(/[a-z]/)){
          if(this.password.contains(/[A-Z]/)) {
            if(this.password.contains(/\d/)) {
              console.log("PASSWORD WERK!");
            }
          }
        }

      },
    },
    watch: {
      confirmPassword() {
        this.checkMatchingPasswords();
      }
    },
});
</script>

// * Colors Used: #242333, #FFFFFF, #01B0D3
// * Third one will be base/main color for register panel - #01B0D3

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
  justify-content: center;
  width: 460px;
  margin: 8px auto;
  padding: 20px 0;
  background-color: #41404d;

  a {
    text-decoration: none;
  }
  .link {
    text-decoration: none;
    color: #01b0d3;
  }
  .input-spacing {
    margin: 30px 0 10px;
  }
  .warn-text {
    color: #ece81a;
    text-align: left;
    // font-weight: bold;
    font-size: 15px;
    overflow-wrap: normal;
    width: 70%;
    margin: auto;
  }
}

.label {
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
    .warn-text {
      color: #ed1d24;
      text-align: left;
      font-size: 15px;
      overflow-wrap: normal;
      width: 70%;
      margin: auto;
      width: fit-content;
    }
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