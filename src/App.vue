<template>
  <div class="container">
      <NavBar />
      <PortfolioHeader />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    <StarsBackground class="star-background"></StarsBackground>
  </div>
</template>

<script>
import AboutSection from './components/AboutSection.vue';
import ContactSection from './components/ContactSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import NavBar from './components/NavBar.vue';
import PortfolioHeader from './components/PortfolioHeader.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import StarsBackground from './components/StarsBackground.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    PortfolioHeader,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    SkillsSection,
    ContactSection,
    StarsBackground
  },
  data() {
    return {
    };
  },
};
</script>

<style>
html { scroll-behavior: smooth; }
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
.star-background{
  z-index:0;
  position:fixed;
   top:0;
   left:0;
}
nav{
  z-index:2;
}
section {
  z-index:2;
  position:relative;
  height:100vh;
  scroll-snap-align: center;
}
footer {
  z-index:2;
  position:relative;
  scroll-snap-align: center;
}
header {
  z-index:2;
  position:relative;
  height:100vh;
  scroll-snap-align: center;
}
.container {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
}
</style>