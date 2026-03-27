<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="brand">
      <span class="brand-text">DB</span>
    </div>

    <ul class="nav-links" :class="{ 'active': menuOpen }">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href" @click="closeMenu">{{ link.label }}</a>
      </li>
    </ul>

    <button class="hamburger" @click="toggleMenu" :class="{ 'active': menuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuOpen: false,
      isScrolled: false,
      navLinks: [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollContainer = document.querySelector('.container');
      if (this.scrollContainer) {
        this.scrollContainer.addEventListener('scroll', this.handleScroll);
      }
    });
  },
  beforeUnmount() {
    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    handleScroll() {
      if (this.scrollContainer) {
        this.isScrolled = this.scrollContainer.scrollTop > 50;
      }
    },
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(15, 15, 26, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  z-index: 100;
  box-sizing: border-box;
  transition: all var(--transition-medium);
  border-bottom: 1px solid transparent;
}

.navbar.scrolled {
  padding: 0.75rem 3rem;
  background: rgba(15, 15, 26, 0.95);
  border-bottom: 1px solid var(--border-subtle);
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 800;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  padding: 0.5rem 0;
  transition: color var(--transition-fast);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-gradient);
  transition: width var(--transition-medium);
}

.nav-links a:hover {
  color: var(--text-primary);
}

.nav-links a:hover::after {
  width: 100%;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 2px;
  background: var(--text-primary);
  transition: all var(--transition-fast);
  transform-origin: center;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 1.5rem;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: rgba(15, 15, 26, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    transition: right var(--transition-medium);
    border-left: 1px solid var(--border-subtle);
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links a {
    font-size: 1.2rem;
  }

  .hamburger {
    display: flex;
  }
}
</style>