<template>
  <a :href="link" :style="{ color }" target="_blanc">
    <font-awesome-icon :icon="['fab', icon]"></font-awesome-icon>
  </a>
</template>

<script>
export default {
  name: "SocialIcon",
  props: {
    icon: { type: String, required: true },
    link: { type: String, required: true },
    color: { type: String, default: "#fff" }
  }
};
</script>

<style scoped>
a {
  margin-right: 6px;
  margin-left: 6px;
}
</style>
