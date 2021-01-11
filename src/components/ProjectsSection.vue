<template>
  <section>
    <h2 data-aos="fade-up" data-aos-duration="2000">Projects</h2>
    <project-article
      v-for="proj in projects"
      :key="proj.id"
      :project="proj"
    ></project-article>
  </section>
</template>

<script>
import ProjectArticle from "./ProjectArticle.vue";
import ProjectsData from "../assets/projectsdata.js";

export default {
  components: {
    ProjectArticle,
  },
  data() {
    return {
      projects: ProjectsData,
    };
  },
};
</script>

<style scoped>
section {
  text-align: center;
  padding-top: 2rem;
  margin-top: -2rem;
}

@media (min-width: 750px) {
  section {
    padding-top: 5.4rem;
    margin-top: -5.4rem;
  }
}
</style>
