<template>
  <article>
    <section class="project-img">
      <img
        :src="require(`../assets/website-screenshots/${project.imgURL}.png`)"
        :alt="`${project.name} website screenshot`"
      />
    </section>
    <section class="project-desc">
      <h3>{{ project.name }}</h3>
      <p>
        {{ project.desc }}
      </p>
      <div class="code-links">
        <a :href="project.codelink" :aria-label="`View ${project.name} code`">View Code</a>
        <a :href="project.sitelink" :aria-label="`View ${project.name} site`">View Site</a>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style scoped>
img {
  width: 90%;
  margin-bottom: 1rem;
  border: 2px solid var(--main-text-color);
}

.code-links {
  margin-bottom: 3rem;
}

h3 {
  margin-bottom: 1rem;
  font-size: 1.4rem;
}
p {
  margin: 0rem auto 2rem;
  line-height: 1.8;
  padding: 1rem;
  max-width: 640px;
}

a {
  text-decoration: none;
  padding: 0.5rem;
  text-transform: uppercase;
  color: var(--main-text-color);
  border: 2px solid var(--main-text-color);
  margin-bottom: 3rem;
  transition: all 0.5s ease-out;
}

a + a {
  margin-left: 1rem;
}

a:visited {
  color: var(--main-text-color);
}

a:hover {
  background-color: var(--main-text-color);
  color: #000;
  font-weight: bold;
  transition: all 0.5s ease-out;
}

@media (min-width: 700px) {
  article {
    display: flex;
    max-width: 80%;
    margin: 2rem auto;
  }

  section {
    width: 50%;
    text-align: left;
  }

  p {
    padding: 0;
  }
}
</style>
