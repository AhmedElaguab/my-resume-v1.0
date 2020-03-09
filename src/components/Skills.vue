<template>
  <div class="skills">
    <h2>My Skills</h2>
    <!-- eslint-disable-next-line -->
    <ul class="skills__list" v-for="skillsGroup in skills" :key="skillsGroup[0]">
      <template v-for="skill in skillsGroup">
        <Skill :skill="skill" :key="skill"></Skill>
      </template>
    </ul>
  </div>
</template>

<script>
import Skill from "./Skill";
import { mapState } from "vuex";

export default {
  name: "Skills",
  components: {
    Skill
  },
  computed: mapState({
    skills: "skills"
  })
};
</script>

<style scoped>
.skills__list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 16px;
  padding: 0;
  list-style: none;
}
</style>
