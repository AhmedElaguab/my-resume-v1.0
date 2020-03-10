<template>
  <div class="projects">
    <h2>My Projects</h2>
    <ul class="projects__list">
      <!-- eslint-disable-next-line -->
      <Project v-for="project in projects" :project="project" :key="project.name"></Project>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Project from "./Project";

export default {
  name: "Projects",
  components: {
    Project
  },
  computed: mapState({
    projects: "projects"
  })
};
</script>

<style scoped>
.projects__list {
  list-style: none;
  padding: 0;
}
</style>
