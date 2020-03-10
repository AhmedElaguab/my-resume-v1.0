<template>
  <footer class="footer">
    <p class="copy">© 2020 Ahmed Elaguab.</p>
    <ul>
      <!-- eslint-disable -->
      <li>
        <SocialIcon icon="twitter-square" link="https://twitter.com/ahmedelaguab"></SocialIcon>
      </li>
      <li>
        <SocialIcon icon="linkedin" link="https://www.linkedin.com/in/ahmedelaguab/"></SocialIcon>
      </li>
      <li>
        <SocialIcon icon="github-square" link="https://github.com/AhmedElaguab/"></SocialIcon>
      </li>
    </ul>
  </footer>
</template>

<script>
import SocialIcon from "./SocialIcon";

export default {
  name: "Footer",
  components: {
    SocialIcon
  }
};
</script>

<style scoped>
.footer {
  background-color: #3f51b5;
  color: #fff;
  padding: 8px 10px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p.copy {
  font-size: 14px !important;
  margin: 0;
}

ul {
  display: flex;
  list-style: none;
}
</style>
