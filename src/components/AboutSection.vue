<template>
  <section>
    <h2>About me</h2>
    <p>
      Hello! I’m Emma! I am a full stack web developer originally from the UK but now
      residing in a sleepy suburb of Stockholm, Sweden.
    </p>
    <p>
      I first learnt about programming from my previous career as a primary
      school teacher when programming was added to the curriculum. This piqued
      my curiosity, developed into a hobby and then a passion and eventually led
      to a career change.
    </p>

    <p>
      The thing I love most about coding is that there’s always something new to
      learn so it’s impossible to get bored. There’s so many ways to be creative
      and so many different problems to solve and I thrive on the challenge.
    </p>
    
    <img
      src="../assets/emma-dawson.jpg"
      alt="Profile of Emma Dawson, a white woman with curly brown hair and glasses"
    />
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
  line-height: 1.8;
  padding: 1rem;
  max-width: 640px;
  margin: 0 auto;
}

p:first-of-type {
  padding-top: 0;
}

img {
  width: 50%;
  max-width: 300px;
  border-radius: 50%;
  border: 5px solid var(--main-text-color);
  margin: 2.3rem 0 1rem;
}


</style>
