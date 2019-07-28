<template>
  <div id="mainForm">
    <div class="header">
      <h1>Submit an Article</h1>

      <Navbar></Navbar>

      <FormPage
        v-for="(entry, index) in pages"
        v-show="entry.id == $store.state.currentPage"
        :inputs="entry.pairs"
        :key="index"
        :id="entry.title"
      ></FormPage>
    </div>
  </div>
</template>

<script>
import Navbar from "./navbar/Navbar.vue";
import FormPage from "./FormPage";
import pages from "../data.js";

export default {
  name: "MainForm",
  components: {
    Navbar,
    FormPage
  },
  props: {
    message: String
  },
  computed: {
    pages() {
      return this.$store.state.pages;
    }
  },
  mounted() {
    this.$store.commit("pages", pages);
  }
};
</script>

<style lang="scss" scoped>
#mainForm {
  width: 800px;
  background: #f5f5f5;
  color: #616161;
  text-align: center;
  padding: 32px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 0 auto;
  margin-top: 1%;
  margin-bottom: 1%;
  animation-delay: 0.6s;

  .header {
    h1 {
      text-transform: uppercase;
    }
  }
}
</style>

<style>
#eligible,
#eligible ~ label {
  display: inline-block;
}
</style>