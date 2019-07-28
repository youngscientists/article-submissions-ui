<template>
  <div>
    <p :is="meta.text ? 'h3' : 'p'">{{meta.title}}</p>

    <c
      :is="meta.elementType"
      :id="meta.id"
      :name="meta.id"
      :type="meta.type"
      :placeholder="meta.placeholder"
      v-html="meta.text"
      v-validate="'required'"
      required
    >
      <option value>-- Select --</option>
      <option v-for="(option, index) in meta.options" :key="index" :value="option">{{option}}</option>
    </c>

    <span>{{ errors.first(meta.id) }}</span>
  </div>
</template>

<script>
export default {
  name: "ThemedInput",
  props: {
    meta: Object
  },
  data() {
    return {
      complete: this.$props.meta.complete
    };
  }
};
</script>

<style lang="scss" scoped]>
$transition: all 0.3s ease-in-out;

input:not([type="checkbox"]),
textarea,
select {
  padding: 12px;
  min-width: 100%;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: sans-serif;
  font-size: 1.2em;
  -webkit-transition: $transition;
  -moz-transition: $transition;
  -ms-transition: $transition;
  -o-transition: $transition;
  transition: $transition;
  outline: none;
  border: 1px solid #dddddd;

  &:focus {
    box-shadow: 0 0 5px rgba(209, 54, 25, 1);
    border: 1px solid rgba(209, 54, 25, 1);
  }
}
</style>
