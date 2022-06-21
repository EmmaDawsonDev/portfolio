<template>
  <section data-aos="fade-up" data-aos-duration="2000">
    <h2>Contact</h2>
    <div class="social-links">
      <a href="https://www.linkedin.com/in/emmalearnscode/" aria-label="LinkedIn profile"
        ><img src="../assets/linkedin.png" alt="linkedin"
      /></a>
      <a href="https://github.com/emmalearnscode" aria-label="Github profile"
        ><img src="../assets/github.png" alt="github"
      /></a>
      <a href="https://twitter.com/emmalearnscode" aria-label="Twitter profile"
        ><img src="../assets/twitter.png" alt="twitter"
      /></a>
      <a href="mailto:emma.l.dawson@gmail.com" aria-label="Email me"
        ><img src="../assets/email.png" alt="email"
      /></a>
    </div>
    <form
      name="portfolio-contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="portfolio-contact" />
      <label for="name">Name</label>
      <input type="text" placeholder="Name" id="name" name="name" required />
      <label for="email">Email</label>
      <input
        type="email"
        placeholder="Email address"
        id="email"
        name="email"
        required
      />
      <label for="message">Message</label>
      <textarea
        placeholder="Type your message here..."
        name="message"
        id="message"
        cols="30"
        rows="10"
        required
      ></textarea>
      <p class="hidden">
        <label
          >Don’t fill this out if you’re human: <input name="bot-field"
        /></label>
      </p>
      <button>SEND</button>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hidden {
  display: none;
}
section {
  text-align: center;
  margin-bottom: 6rem;
  padding-top: 2rem;
  margin-top: 2rem;
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
  margin-bottom: 0.3rem;
}

input,
textarea {
  background-color: black;
  color: var(--main-text-color);
  border: 1px solid var(--main-text-color);
  width: 100%;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  margin-bottom: 1.5rem;
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
  transition: all 0.5s ease-out;
  cursor: pointer;
}

button:hover {
  color: var(--main-text-color);
  background-color: #000;
  transition: all 0.5s ease-out;
}

.social-links {
  margin-bottom: 2rem;
}

.social-links img {
  width: 40px;
  margin: 0.5rem;
  transition: transform 0.5s;
}

.social-links img:hover {
  transform: scale(1.2);
}

@media (min-width: 750px) {
  section {
    padding-top: 6rem;
    margin-top: -6rem;
  }
}
</style>
