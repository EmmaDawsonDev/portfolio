<template>
  <header>
    <div>
      <h1>Emma Dawson</h1>
      <p>JAVASCRIPT DEVELOPER</p>
      <a href="#projects">See My Portfolio</a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  height: calc(100vh - 67px);
  background-image: url("../assets/bg-img-small.jpg");
  background-position: bottom 100px center;
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

p {
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
    background-position: bottom center;
  }
}
@media (max-height: 750px) {
  header {
    place-items: start center;
    padding-top: 100px;
    background-position: bottom center;
  }
}
@media (max-height: 640px) {
  header {
    place-items: start center;
    padding-top: 100px;
    background-image: none;
  }
}
</style>
