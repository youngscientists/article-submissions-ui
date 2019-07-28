<template>
  <div id="navbar">
    <NavbarEntry
      v-for="(entry, index) in headers"
      :content="entry"
      :key="index"
      :id="index"
      v-on:navigate-to="doClick"
    ></NavbarEntry>
  </div>
</template>

<script>
import NavbarEntry from "./NavbarEntry";

export default {
  name: "Navbar",
  components: {
    NavbarEntry
  },
  computed: {
    headers() {
      return this.$store.state.pages.map(n => n.title);
    }
  },
  methods: {
    doClick(e) {
      this.$store.commit("setCurrentPage", e);
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>

