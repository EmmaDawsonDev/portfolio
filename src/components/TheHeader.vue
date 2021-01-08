<template>
  <header>
    <div>
      <h1>Emma Dawson</h1>
      <h3>JAVASCRIPT DEVELOPER</h3>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/emmalearnscode/"
          ><img src="../assets/linkedin.png" alt="linkedin logo"
        /></a>
        <a href="https://github.com/emmalearnscode"
          ><img src="../assets/github.png" alt="github logo"
        /></a>
        <a href="https://twitter.com/emmalearnscode"
          ><img src="../assets/twitter.png" alt="twitter logo"
        /></a>
      </div>
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
  margin-top: 2rem;
  font-weight: 300;
}

.social-links {
  margin-top: 1rem;
}

.social-links img {
  width: 25px;
  margin: 0.5rem;
}

@media (min-width: 600px) {
  header {
    background-image: url("../assets/bg-img-large.jpg");
  }
}
</style>
