<template>
  <section id="skills" class="skills">
    <h2 v-reveal>Tech Stack</h2>
    <div class="skills-layout">
      <div class="skill-bars" v-reveal="{ delay: 100 }">
        <div v-for="(skill, index) in primarySkills" :key="skill.name" class="skill-row">
          <div class="skill-info">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-years">{{ skill.years }}y</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" :style="{ '--width': skill.level + '%', '--delay': (index * 100) + 'ms' }" ref="bars"></div>
          </div>
        </div>
      </div>
      <div class="skill-groups">
        <div v-for="(group, index) in skillGroups" :key="group.title" class="skill-group" v-reveal="{ delay: 200 + index * 80 }">
          <h3>{{ group.title }}</h3>
          <div class="skill-list">
            <span v-for="skill in group.items" :key="skill">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      primarySkills: [
        { name: 'Python / Django', level: 95, years: 6 },
        { name: 'C# / .NET', level: 85, years: 7 },
        { name: 'JavaScript / Vue.js', level: 90, years: 6 },
        { name: 'PostgreSQL', level: 80, years: 5 },
        { name: 'Linux / Docker', level: 75, years: 4 },
      ],
      skillGroups: [
        {
          title: 'Backend & APIs',
          items: ['Django', 'FastAPI', 'ASP.NET Core', 'ASP.NET MVC', 'REST APIs', 'SQLAlchemy'],
        },
        {
          title: 'Frontend & Mobile',
          items: ['Vue.js', 'React', 'HTML/CSS', 'Shadcn', 'Tailwind', 'React Native'],
        },
        {
          title: 'AI / LLM / Agents',
          items: ['LangGraph', 'Ollama', 'pgvector', 'Whisper STT', 'Bark TTS', 'Agentic Systems'],
        },
        {
          title: 'Databases & DevOps',
          items: ['PostgreSQL', 'Docker', 'Linux', 'Git', 'CI/CD', 'Docker Compose'],
        },
        {
          title: 'Leadership & Domain',
          items: ['Team Management', 'Technical Architecture', 'Agile/Scrum', 'Code Review', 'Smart Factory'],
        },
      ],
      animated: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const scrollContainer = document.querySelector('.container');
      this._observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.animated) {
              this.animated = true;
              this.animateBars();
              this._observer.unobserve(entry.target);
            }
          });
        },
        { root: scrollContainer, threshold: 0.2 },
      );
      this._observer.observe(this.$el);
    });
  },
  beforeUnmount() {
    if (this._observer) this._observer.disconnect();
  },
  methods: {
    animateBars() {
      const bars = this.$refs.bars;
      if (!bars) return;
      bars.forEach((bar) => {
        bar.classList.add('animate');
      });
    },
  },
};
</script>

<style scoped>
.skills {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 2rem;
}

.skills-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: clamp(2rem, 5vw, 5rem);
  max-width: 800px;
  width: 100%;
  align-items: start;
}

.skill-bars {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.skill-row {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.skill-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
}

.skill-years {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

.skill-bar {
  height: 4px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  width: 0;
  border-radius: 2px;
  background: var(--primary-gradient);
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--delay);
}

.skill-fill.animate {
  width: var(--width);
}

.skill-groups {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-group h3 {
  font-family: var(--font-heading);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-list span {
  font-size: 0.8rem;
  color: var(--text-secondary);
  padding: 0.3rem 0.75rem;
  border-radius: 100px;
  border: 1px solid var(--border-subtle);
  transition: all 0.3s ease;
  cursor: default;
}

.skill-list span:hover {
  border-color: rgba(102, 126, 234, 0.2);
  color: var(--text-primary);
}

@media (max-width: 700px) {
  .skills-layout {
    grid-template-columns: 1fr;
  }
}
</style>