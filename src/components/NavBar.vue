<template>
  <nav class="navbar">
    <div class="brand">Davide Bert</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 10;
  box-sizing: border-box;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFFFFF;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  background-color: #5ebff0;
  background-image: linear-gradient(135deg, #5ebff0 0%, #4549da 100%);
  color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hamburger {
    display: block;
  }
}
</style>