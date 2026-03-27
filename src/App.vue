<template>
  <div class="container">
    <div class="ambient-bg"></div>
    <NavBar />
    <PortfolioHeader />
    <TechMarquee />
    <StatsSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
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
import StatsSection from './components/StatsSection.vue';
import TechMarquee from './components/TechMarquee.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    PortfolioHeader,
    TechMarquee,
    StatsSection,
    AboutSection,
    ExperienceSection,
    ProjectsSection,
    SkillsSection,
    ContactSection,
  },
};
</script>

<style>
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #5ebff0 0%, #4549da 100%);
  --accent-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --bg-dark: #050505;
  --bg-card: rgba(255, 255, 255, 0.03);
  --bg-card-hover: rgba(255, 255, 255, 0.06);
  --glass-bg: rgba(255, 255, 255, 0.04);
  --glass-border: rgba(255, 255, 255, 0.08);
  --text-primary: #f5f5f7;
  --text-secondary: rgba(255, 255, 255, 0.6);
  --text-muted: rgba(255, 255, 255, 0.35);
  --accent-blue: #5ebff0;
  --accent-purple: #764ba2;
  --border-subtle: rgba(255, 255, 255, 0.06);
  --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-medium: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  --font-heading: 'Space Grotesk', 'Inter', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-dark);
  color: var(--text-primary);
  line-height: 1.6;
}

#app {
  background: var(--bg-dark);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
}

/* Ambient background */
.ambient-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.ambient-bg::before,
.ambient-bg::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.07;
}

.ambient-bg::before {
  width: 800px;
  height: 800px;
  background: #667eea;
  top: -300px;
  right: -200px;
  animation: drift 25s ease-in-out infinite;
}

.ambient-bg::after {
  width: 600px;
  height: 600px;
  background: #764ba2;
  bottom: -200px;
  left: -200px;
  animation: drift 25s ease-in-out infinite reverse;
}

@keyframes drift {
  0%, 100% { transform: translate(0, 0); }
  33% { transform: translate(30px, -40px); }
  66% { transform: translate(-20px, 30px); }
}

nav {
  z-index: 100;
}

section {
  z-index: 2;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 2rem;
}

footer {
  z-index: 2;
  position: relative;
}

header {
  z-index: 2;
  position: relative;
  height: 100vh;
}

.container {
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.1) transparent;
}

.container::-webkit-scrollbar {
  width: 4px;
}

.container::-webkit-scrollbar-track {
  background: transparent;
}

.container::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.15);
  border-radius: 2px;
}

/* Global section title styles */
section h2, footer h2 {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  margin-bottom: 4rem;
  color: var(--text-primary);
  text-align: center;
  letter-spacing: -0.03em;
}

@media (max-width: 768px) {
  section {
    padding: 5rem 1.5rem;
  }

  section h2, footer h2 {
    margin-bottom: 2.5rem;
  }
}
</style>