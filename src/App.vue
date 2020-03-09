<template>
  <div id="app">
    <Container>
      <Header></Header>
    </Container>
  </div>
</template>

<script>
import Container from "./components/Container";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Container,
    Header
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
</style>
