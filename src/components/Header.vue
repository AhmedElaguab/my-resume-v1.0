<template>
  <header class="header">
    <img src="./../assets/me.png" alt="Ahmed Elaguab" />
    <h1>
      Welcome to My Portfolio.
      <!-- eslint-disable-next-line -->
      <br />My name is Ahmed Elaguab,
      <br />and I'm a Front End Web Developer.
    </h1>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
}

img {
  max-width: 200px;
  border-radius: 4px;
  margin-right: 60px;
  margin-bottom: 30px;
}

@media screen and (max-width: 720px) {
  .header {
    display: block;
  }

  img {
    margin-bottom: 50px;
  }
}
</style>
