<template>
    <nav>
      <section class="hamburger" @click="toggleNav" v-if="navClosed">
        <button class="hamburger-btn">
        <svg
          width="26"
          height="21"
          viewBox="0 0 26 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1.5" x2="26" y2="1.5" stroke="#31D4DA" stroke-width="3" />
          <line y1="10.5" x2="26" y2="10.5" stroke="#31D4DA" stroke-width="3" />
          <line y1="19.5" x2="26" y2="19.5" stroke="#31D4DA" stroke-width="3" />
        </svg>
        </button>
      </section>

      <section class="nav-list-mobile" @click="toggleNav" v-else>
        <button class="hamburger-btn">
        <svg
          width="29"
          height="21"
          viewBox="0 0 29 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.14619"
            y1="19.2667"
            x2="27.1462"
            y2="1.26671"
            stroke="#31D4DA"
            stroke-width="3"
          />
          <line
            x1="1.85381"
            y1="1.26671"
            x2="27.8538"
            y2="19.2667"
            stroke="#31D4DA"
            stroke-width="3"
          />
        </svg>
        </button>
        <ul>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </section>
      <section class="nav-list-desktop">
        <a href="#top" class="logo" aria-label="home">ED</a>
        <ul>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </section>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      navClosed: true,
    };
  },
  methods: {
    toggleNav() {
      this.navClosed = !this.navClosed;
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  min-height: 50px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #000;  
}

section {
  display: flex;
  flex-direction: column;
}
.hamburger-btn {
  background: none;
  border: none;
  align-self: flex-end;
  margin: 1rem 1rem 0rem;
}


ul {
  list-style: none;
}

li {
  text-align: center;
  padding: 0.5em;
  transition: background-color 0.5s ease;
}

li:hover,
li:focus {
  cursor: pointer;
  text-decoration: underline;
  transition: background-color 0.5s ease;
}
li a {
  color: var(--main-text-color);
  text-transform: uppercase;
  text-decoration: none;
}

li a:visited {
  color: var(--main-text-color);
}

.nav-list-desktop {
  display: none;
}

.logo {
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Megrim", cursive;
  color: var(--main-text-color);
  font-size: 1.3rem;
  padding: 1rem 2rem;
  font-weight: bold;
}

.logo:visited {
  color: var(--main-text-color);
}


@media (min-width: 800px) {
  .hamburger,
  .nav-list-mobile {
    display: none;
  }

  .nav-list-desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .nav-list-desktop ul {
    display: flex;
    justify-content: flex-end;
  }

  .nav-list-desktop li {
    margin: 1rem;
  }
}
</style>
