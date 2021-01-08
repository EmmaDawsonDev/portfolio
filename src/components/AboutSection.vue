<template>
  <section>
    <h2>About me</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem magnam
      cupiditate molestias accusamus culpa totam. Tempora blanditiis doloribus
      voluptates ullam sit! Molestiae nobis ducimus omnis. Lorem ipsum, dolor
      sit amet consectetur adipisicing elit. Dolorem magnam cupiditate molestias
      accusamus culpa totam. Tempora blanditiis doloribus voluptates ullam sit!
      Molestiae nobis ducimus omnis.
    </p>
    <img src="../assets/emma-dawson.jpg" alt="Profile picture of Emma Dawson" />
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  text-align: center;
}

p {
  margin: 3rem auto;
  line-height: 1.8;
  padding: 1rem;
  max-width: 640px;
}

img {
  width: 80%;
  max-width: 400px;
  border-radius: 50%;
  border: 5px solid var(--main-text-color);
  margin-bottom: 3rem;
}
</style>
