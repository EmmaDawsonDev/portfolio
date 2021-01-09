<template>
  <header>
    <div>
      <h1>Emma Dawson</h1>
      <h3>JAVASCRIPT DEVELOPER</h3>
      <a href="#projects">See My Portfolio</a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  height: 100vh;
  background-image: url("../assets/bg-img-small.jpg");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  place-items: center;
}

h1 {
  font-size: 5rem;
  line-height: 0.8;
}

h3 {
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-weight: 300;
}

a {
  background: var(--main-text-color);
  color: #000;
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.5s;
}

a:visited {
  color: #000;
}

a:hover {
  background-color: #000;
  color: var(--main-text-color);
  border: 2px solid var(--main-text-color);
}

@media (min-width: 600px) {
  header {
    background-image: url("../assets/bg-img-large.jpg");
  }
}
</style>
