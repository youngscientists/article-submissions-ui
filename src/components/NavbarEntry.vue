<template>
  <span
    :class="{active: id == $store.state.currentPage, completed}"
    :data-id="id"
    @click="$emit('navigate-to', id)"
  >
    {{content}}
    <svg
      class="invisible"
      style="enable-background:new 0 0 612 792;"
      version="1.1"
      viewBox="0 0 612 792"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path
          class="st0"
          d="M562,396c0-141.4-114.6-256-256-256S50,254.6,50,396s114.6,256,256,256S562,537.4,562,396L562,396z    M501.7,296.3l-241,241l0,0l-17.2,17.2L110.3,421.3l58.8-58.8l74.5,74.5l199.4-199.4L501.7,296.3L501.7,296.3z"
        ></path>
      </g>
    </svg>
  </span>
</template>

<script>
export default {
  name: "NavbarEntry",
  props: {
    id: Number,
    content: String
  },
  data() {
    return {
      completed: false
    };
  }
};
</script>

<style lang="scss" scoped>
$main-color: #d13619;

span {
  width: 22%;
  border-bottom: 2px solid grey;
  padding: 5px;
  margin-left: -5px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  
  &:not(.active) {
      opacity: 0.7;
  }

  svg {
    display: none;
  }

  &.complete svg {
    fill: grey;
    width: 18px;
    height: 18px;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    transition: all 0.3s ease-in-out;
  }

  &.active {
    border-bottom: 2px solid $main-color !important;
    color: $main-color;

    svg {
      fill: $main-color;
    }
  }
}
</style>
