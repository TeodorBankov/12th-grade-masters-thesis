<template>
  <div id="parent">
    <div class="child">
      <Bar />
    </div>

    <h1>My profile:</h1>
    <div class="main-container">
      <div class="newPassword">
        <form @submit.prevent="updatePassword">
          <div class="form">
            <div class="hstack">
              <label for="password">Change your Password</label>
            </div>
            <input type="password" v-model="newPassword" />
          </div>
          <div class="form">
            <div class="hstack">
              <label for="password">Confirm new Password</label>
            </div>
            <input type="password" v-model="newPasswordConfirm" />
            <br />
            <label
              v-if="(newPasswordConfirm != newPassword || newPassword.length <=8)&&(newPassword!='')"
              style="font-size: small; color: red"
              >Passwords must match and be longer than 8 symbols!</label
            >
          </div>

          <div class="form">
            <input
              :disable="newPasswordConfirm != newPassword"
              class="submitbtn"
              type="submit"
              value="Change"
            />
            <h2>{{ confirmMsg }}</h2>
          </div>
        </form>
      </div>

      <div class="userInfo">
        <img
          style="flex-basis: 150px"
          width="150px"
          src="http://cdn.onlinewebfonts.com/svg/img_568656.png"
        />
        <span class="username">{{ username }}</span>
        <span class="email">{{ email }}</span>
      </div>
    </div>
  </div>
</template>


<script>
import Bar from "./Bar.vue";
import axios from "axios";

export default {
  components: { Bar },
  data() {
    return {
      email: "",
      username: "",
      newPassword: "",
      newPasswordConfirm: "",
      confirmMsg: "",
    };
  },
  created: function () {
    this.getUserInfo();
  },
  methods: {
    async updatePassword() {
      if (this.newPasswordConfirm == this.newPassword&&tihs.newPassword.length>=8) {
        axios.put(
          "http://localhost:3000/updatePassword",
          {
            password: this.newPassword,
          },
          {
            headers: {
              Authorization: "Bearer " + window.localStorage.getItem("token"),
            },
          }
        );
        this.confirmMsg = "Password updated!";
        setTimeout(() => {
          this.confirmMsg = "";
          this.newPassword = "";
          this.newPasswordConfirm = "";
        }, 5000);
      }
    },
    async getUserInfo() {
      let res = await (
        await axios.get("http://localhost:3000/userInfo", {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        })
      ).data;
      this.email = res.email;
      this.username = res.username;

      console.log(res);
    },
  },
};
</script>


<style lang="scss" scoped>
.main-container {
  width: 50vw;
  height: 70vh;
  background: #1d374b;
  margin: auto;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  //   change if want to reverse
  flex-direction: row-reverse;
}
.main-container > * {
  flex-grow: 1;
  flex-basis: 0;
}
.userInfo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.userInfo > * {
  margin-bottom: 30px;
  flex-basis: 100%;
}
.newPassword {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
}
.newPassword > * >* {
  margin-bottom: 30px;
  flex-basis: 100%;
}
.username {
  color: rgb(189, 207, 245);
  font-size: 2em;
}
.email {
  font-size: 1em;
  color: rgb(211, 211, 211);
}

label {
  font-weight: 400;
  font-size: 20px;
  width: fit-content;
  margin: 0 0 5px;
}

input {
  border: solid 0.9px #41404d;
  border-radius: 5px;
  padding: 8px;
  color: #ffffff;
  background-color: #242333;
  font-weight: bold;
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
</style>