<template>
  <section>
    <h2>Skills</h2>
    <article class="skills">
      <div class="logo">
        <img src="../assets/logos/js-img.png" alt="" />
        <p>Javascript</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/html-img.png" alt="" />
        <p>HTML</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/css-img.png" alt="" />
        <p>CSS</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/materialui-img.png" alt="" />
        <p>Material UI</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/vue-img.png" alt="" />
        <p>Vue</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/react-img.png" alt="" />
        <p>React</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/typescript-img.png" alt="" />
        <p>Typescript</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/react-img.png" alt="" />
        <p>React Native</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/expo-img.png" alt="" />
        <p>Expo</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/node-img.png" alt="" />
        <p>Node</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/npm-img.png" alt="" />
        <p>NPM</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/sqlite-img.png" alt="" />
        <p>SQLite</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/mongodb-img.png" alt="" />
        <p>mongodb</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/vscode-img.png" alt="" />
        <p>VS Code</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/git-img.png" alt="" />
        <p>Git</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/gh-img.png" alt="" />
        <p>Github</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/figma-img.png" alt="" />
        <p>Figma</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/access-img.png" alt="" />
        <p>Accessibility</p>
      </div>
      <div class="logo">
        <img
          src="../assets/logos/responsive-img.png"
          alt=""
        />
        <p>Responsive Design</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  text-align: center;  
}

.skills {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

.logo p {
  margin-top: 0.5rem;
}

@media (min-width: 700px) {
  .skills {
    margin: 5rem auto;
    max-width: 80%;
    gap: 36px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}
</style>
