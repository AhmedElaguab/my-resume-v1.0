<template>
  <div id="app">
    <Container>
      <Header></Header>
      <Intro></Intro>
      <Skills></Skills>
      <Projects></Projects>
    </Container>
  </div>
</template>

<script>
import Container from "./components/Container";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default {
  name: "App",
  components: {
    Container,
    Header,
    Intro,
    Skills,
    Projects
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

.container {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

h1,
h2 {
  font-size: 32px;
  margin-bottom: 25px;
}

p,
a {
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 12px;
}

.header {
  border-top: 8px solid #3f51b5;
  padding-top: 65px;
  padding-bottom: 65px;
}

.intro,
.skills,
.projects {
  margin-bottom: 65px;
}

@media screen and (max-width: 830px) {
  .header,
  .intro,
  .skills,
  .projects {
    padding-right: 15px;
    padding-left: 15px;
  }
}
</style>
