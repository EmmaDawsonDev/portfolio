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
  }

</style>
