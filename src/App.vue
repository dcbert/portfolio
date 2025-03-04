<template>
  <div>
    <NavBar />
    <Header />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Experience from './components/Experience.vue';
import Projects from './components/Projects.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    Header,
    About,
    Experience,
    Projects,
    Skills,
    Contact,
  },
  data() {
    return {
    };
  },
  computed: {
    themeStyles() {
      return {
        '--text-color': '#FFFFFF',
        '--accent-color': '#00B4D8',
      };
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

#app {
  background: #1A1A2E;
  color: #FFFFFF;
  min-height: 100vh;
}
</style>