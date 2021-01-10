<template>
  <section data-aos="fade-up" data-aos-duration="2000">
    <h2>Skills</h2>
    <section class="skills">
      <div class="logo">
        <img src="../assets/logos/js-img.png" alt="Javascript Logo" />
        <p>Javascript</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/html-img.png" alt="HTML Logo" />
        <p>HTML</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/css-img.png" alt="CSS Logo" />
        <p>CSS</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/vue-img.png" alt="Vue Logo" />
        <p>Vue</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/node-img.png" alt="node Logo" />
        <p>Node</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/npm-img.png" alt="npm Logo" />
        <p>NPM</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/vscode-img.png" alt="vscode Logo" />
        <p>VS Code</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/git-img.png" alt="git Logo" />
        <p>Git</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/gh-img.png" alt="Github Logo" />
        <p>Github</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/figma-img.png" alt="figma Logo" />
        <p>Figma</p>
      </div>
      <div class="logo">
        <img src="../assets/logos/access-img.png" alt="Accessibility Logo" />
        <p>Accessibility</p>
      </div>
      <div class="logo">
        <img
          src="../assets/logos/responsive-img.png"
          alt="Responsive Design Logo"
        />
        <p>Responsive Design</p>
      </div>
    </section>
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
  margin: 10px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
}

@media (min-width: 700px) {
  .skills {
    margin: 5rem auto;
    width: 80%;
    gap: 3rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
}
</style>
