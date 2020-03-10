<template>
  <li>
    <a :href="project.github" target="_blanc">
      {{ project.name }} -
      <span class="desc">{{ project.desc }}</span>
      <br />
      <small>
        <span :class="'lang ' + project.language"></span>
        <span>{{ project.language }}</span>
      </small>
    </a>
  </li>
</template>

<script>
export default {
  name: "Project",
  props: {
    project: { type: Object, required: true }
  }
};
</script>

<style scoped>
li {
  margin-bottom: 20px;
}

a {
  color: inherit;
  text-decoration: none;
  display: block;
  border-radius: 4px;
  padding: 8px 20px;
  box-shadow: 0px -1px 0px 2px #607d8b94;
}

small {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.desc {
  font-size: 18px;
}

.lang {
  background-color: #333;
  height: 10px;
  width: 10px;
  background: #9e9e9e;
  border-radius: 100%;
  margin-right: 7px;
}

.lang.JavaScript {
  background-color: #f1e05a;
}

.lang.HTML {
  background-color: #e34c26;
}
</style>
