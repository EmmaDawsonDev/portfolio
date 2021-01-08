<template>
  <div class="wrapper">
    <the-nav></the-nav>
    <the-header id="top"></the-header>
    <about-section id="about"></about-section>
    <projects-section id="projects"></projects-section>
    <skills-section></skills-section>
    <contact-section id="contact"></contact-section>
  </div>
</template>

<script>
import TheNav from "./components/TheNav.vue";
import TheHeader from "./components/TheHeader.vue";
import AboutSection from "./components/AboutSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ContactSection from "./components/ContactSection.vue";
export default {
  name: "App",
  components: {
    TheNav,
    TheHeader,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    ContactSection,
  },
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

h2 {
  font-size: 3rem;
  margin: 5rem 0 2rem;
}
</style>
