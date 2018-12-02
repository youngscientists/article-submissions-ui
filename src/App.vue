<template>
  <div id="app">
    <div class="header">
      <img src="http://assets.ysjournal.com/img/head-transparent.png">
      <h1>Young Scientists Journal</h1>
    </div>
    <MainForm></MainForm>
  </div>
</template>

<script>
import MainForm from "./components/MainForm";

export default {
  name: "app",
  components: {
    MainForm
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  text-align: center;

  img,
  h1 {
    display: inline-block;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }

  h1 {
    text-transform: uppercase;    
    vertical-align: middle;
    color: white;
  }
}
</style>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  background: #cd0401;

  font-family: "Montserrat", sans-serif;

}

html {
    overflow-y: scroll;

}



</style>
