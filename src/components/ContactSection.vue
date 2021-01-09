<template>
  <section>
    <h2>Contact</h2>
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
      <a href="mailto:emma.l.dawson@gmail.com"
        ><img src="../assets/email.png" alt="email logo"
      /></a>
    </div>
    <form action="">
      <label for="name">Name</label><br />
      <input type="text" placeholder="Name" name="name" /><br />
      <label for="email">Email</label><br />
      <input type="email" placeholder="Email address" name="email" /><br />
      <label for="message">Message</label><br />
      <textarea
        placeholder="Type your message here..."
        name="message"
        id=""
        cols="30"
        rows="10"
      ></textarea
      ><br />
      <button>SEND</button>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  text-align: center;
}

form {
  width: 90%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
}

label {
  align-self: flex-start;
  margin-bottom: -15px;
}

input,
textarea {
  background-color: black;
  border: 1px solid var(--main-text-color);
  width: 100%;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 0.5rem;
}

button {
  margin: 1rem 0;
  padding: 0.3rem 1rem;
  text-transform: uppercase;
  border: 2px solid var(--main-text-color);
  background-color: var(--main-text-color);
  color: #000;
  font-weight: bold;
  font-size: 1rem;
}

.social-links {
  margin-bottom: 2rem;
}

.social-links img {
  width: 40px;
  margin: 0.5rem;
}
</style>
