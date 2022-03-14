<template>
  <span>
    <template v-if="createAcc">
      <div id="align">
        <div class="credentials">
        <Credentials />
        </div>
        <div class=login>
        <Register></Register>
        </div>
      </div>
    </template>

    <template v-else>
      <div id="login">
        <Credentials @createAcc="this.createAcc = true" />
      </div>
    </template>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Credentials from "../components/Credentials.vue";
import Register from "../components/Register.vue";

export default defineComponent({
  components: { Credentials, Register },
  data() {
    return {
      createAcc: false,
    };
  },
  methods: {},
});
</script>

<style lang="scss">
#align {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 50%;
  gap: 10px;

  .login {
    padding-top: 30px;
  }
}
</style>