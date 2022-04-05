<template>
  <div id="container">
    <form id="form" @submit.prevent="search">
      <div id="text-field">
        <!-- <font-awesome-icon :icon="['faMagnifyingGlass']" /> -->
        <input v-model="query" placeholder="Search radios worldwide" />
        <input type="submit" style="display: none" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  emits: ["query"],
  methods: {
    search() {
      // console.log(this.query);
      this.$emit("query", this.query);
    },
  },
};
</script>

<style lang="scss" scoped>
#container {
  // background-color: #0f3a58;
  display: flex;
  min-width: 300px;
  max-width: 60%;
  margin-left: 24px;
  margin-top: 4px;
}

#form {
  width: 100%;
  input {
    width: 100%;
  }
}

input {
  color: #DEB992;
  background: none;
  background-image: url("https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-magnifying-glass-interface-kiranshastry-solid-kiranshastry.png");
  background-size: 25px;
  text-indent: 25px;
  background-repeat: no-repeat;
  background-color: #193547;
  border: solid 0px #184668;
  border-radius: 3px;
  padding: 6px;
}
</style>
