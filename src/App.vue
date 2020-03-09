<template>
  <div id="app">
    <Container>
      <Header></Header>
      <Intro></Intro>
    </Container>
  </div>
</template>

<script>
import Container from "./components/Container";
import Header from "./components/Header";
import Intro from "./components/Intro";

export default {
  name: "App",
  components: {
    Container,
    Header,
    Intro
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
}

#app {
  font-family: Overpass, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@media screen and (max-width: 830px) {
  .header,
  .intro {
    padding-right: 15px;
    padding-left: 15px;
  }
}
</style>
