<template>
  <div class="formPage">
    <ThemedInput v-for="(input, i) in inputs" :key="i" :meta="input"></ThemedInput>

    <button :class="{inactive: !complete}" @click="goToNextPage">Next</button>
  </div>
</template>

<script>
import ThemedInput from "./ThemedInput";

export default {
  name: "FormPage",
  props: {
    inputs: Array
  },
  methods: {
    goToNextPage() {
      this.$store.dispatch("nextPage");
    }
  },
  computed: {
    complete() {
      return this.$store.state.pages[this.$store.state.currentPage].complete;
    }
  },
  components: {
    ThemedInput
  }
};
</script>

<style lang="scss" scoped>
.formPage {
  width: 80%;
  text-align: left;
  margin: 0 auto;

  button {
    background: rgba(198, 40, 40, 1);
    color: white;
    border: none;
    padding: 16px;
    cursor: pointer;
    width: 100%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    text-decoration: none;
    margin: 0 auto;
    margin-top: 20px;

    &.inactive {
      background: grey;
      pointer-events: none;
    }
  }
}
</style>
