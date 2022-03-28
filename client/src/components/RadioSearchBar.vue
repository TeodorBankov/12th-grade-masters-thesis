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
  display: flex;
  min-width: 300px;
  max-width: 60%;
}

#form {
  width: 100%;
  input {
    width: 100%;
  }
}

input {
  color: #ffffff;
  background: none;
  background-image: url("https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/ffffff/external-magnifying-glass-interface-kiranshastry-solid-kiranshastry.png");
  background-size: 25px;
  text-indent: 25px;
  background-repeat: no-repeat;
  background-color: #41404d;
  border: solid 0px #41404d;
  border-radius: 3px;
  padding: 6px;
}
</style>
