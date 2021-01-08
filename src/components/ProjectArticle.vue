<template>
  <article>
    <section class="project-img">
      <img src="../assets/beer-wiki.png" alt="" />
    </section>
    <section class="project-desc">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sunt
        mollitia facilis magnam, deserunt culpa explicabo vel, inventore tempora
        porro laborum non consequatur deserunt culpa explicabo vel, inventore
        tempora porro laborum non consequatur
      </p>
      <a href="">View Code</a>
      <a href="">View Site</a>
    </section>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 90%;
  margin: 2rem 0;
  border: 2px solid var(--main-text-color);
}

p {
  margin: 2rem auto 3rem;
  line-height: 1.8;
  padding: 1rem;
  max-width: 640px;
}

a {
  text-decoration: none;
  padding: 0.5rem;
  text-transform: uppercase;
  border: 2px solid var(--main-text-color);
  border-radius: 8px;
}

a + a {
  margin-left: 1rem;
}

a:visited {
  color: var(--main-text-color);
}

@media (min-width: 800px) {
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
