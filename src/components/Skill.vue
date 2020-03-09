<template>
  <li class="skill">
    <img :src="url" :alt="skill" />
  </li>
</template>

<script>
export default {
  name: "Skill",
  props: {
    skill: String
  },
  computed: {
    url() {
      return require(`./../assets/skills/${this.$props.skill}.svg`);
    }
  }
};
</script>

<style scoped>
.skill {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 5px 0;
  margin-right: 20px;
}

img {
  max-width: 100%;
  max-height: 100%;
}
</style>
