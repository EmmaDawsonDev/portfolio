<template>
  <section>
    <h2>Projects</h2>
    <project-article></project-article>
    <project-article></project-article>
    <project-article></project-article>
  </section>
</template>

<script>
import ProjectArticle from "./ProjectArticle.vue";
export default {
  components: {
    ProjectArticle,
  },
};
</script>

<style scoped>
section {
  text-align: center;
}
</style>
