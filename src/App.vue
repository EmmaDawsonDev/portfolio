<template>
  <div class="wrapper">
    <the-nav></the-nav>
    <the-header></the-header>
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: { TheNav, TheHeader },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Megrim&family=Roboto&display=swap");

:root {
  --main-text-color: #31d4da;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #000;
  color: var(--main-text-color);
  font-family: "Roboto", sans-serif;
}

.wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

h1,
h2 {
  font-family: "Megrim", cursive;
}
</style>
