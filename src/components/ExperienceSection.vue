<template>
  <section id="experience" class="experience">
    <h2 v-reveal>Experience</h2>
    <div class="timeline">
      <div v-for="(exp, index) in experiences" :key="exp.id" class="exp-row" v-reveal="{ delay: index * 80 }">
        <div class="exp-meta">
          <span class="exp-date">{{ exp.duration }}</span>
        </div>
        <div class="exp-line">
          <div class="exp-dot"></div>
        </div>
        <div class="exp-body">
          <h3>{{ exp.title }}</h3>
          <p class="exp-company">{{ exp.company }} · {{ exp.location }}</p>
          <p class="exp-desc">{{ exp.description }}</p>
          <div class="exp-skills">
            <span v-for="skill in exp.skills" :key="skill">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
    return {
      experiences: [
        {
          id: 1,
          company: 'ewo',
          title: 'Senior Software Developer',
          duration: '2025 — Present',
          location: 'Cortaccia, Italy',
          description: 'Building enterprise web solutions with .NET, C#, and modern web technologies for a leading lighting manufacturer.',
          skills: ['.NET', 'C#', 'ASP.NET', 'Vue.js', 'Kubernetes', 'Pulumi'],
        },
        {
          id: 2,
          company: 'Freelance',
          title: 'Software Developer',
          duration: '2020 — Present',
          location: 'Trento, Italy',
          description: 'Delivering custom software solutions for clients — from web platforms to automation tools and open-source projects like RaccBuddy, Miner Sentinel, and NebulaProxy.',
          skills: ['Python', 'Django', 'Vue.js', 'React', 'FastAPI', 'Docker'],
        },
        {
          id: 3,
          company: 'Röchling Automotive',
          title: 'Team Leader Smart Factory Systems & Applications',
          duration: '2024 — 2025',
          location: 'Laives, Italy',
          description: 'Led the dev team building and scaling the smart factory platform across 22 manufacturing plants worldwide. Owned architecture decisions and cross-site deployments.',
          skills: ['Python', 'Django', 'Vue.js', 'PostgreSQL', 'Linux'],
        },
        {
          id: 4,
          company: 'Röchling Automotive',
          title: 'Team Leader Smart Factory Applications',
          duration: '2022 — 2024',
          location: 'Laives, Italy',
          description: 'Grew and managed the application team, shipping features that optimized 400+ production lines. Drove adoption of agile practices and code review culture.',
          skills: ['Python', 'Django', 'Vue.js', 'Linux', 'Agile'],
        },
        {
          id: 5,
          company: 'Röchling Automotive',
          title: 'Specialist Smart Factory Applications',
          duration: '2020 — 2022',
          location: 'Laives, Italy',
          description: 'Built the foundation of the smart factory platform — real-time data pipelines, production dashboards, and the Django/Vue.js application core.',
          skills: ['Django', 'Python', 'Vue.js', 'PostgreSQL'],
        },
        {
          id: 6,
          company: 'Fercam S.p.A.',
          title: 'Junior Software Developer',
          duration: 'May 2018 — Jul 2020',
          location: 'Bolzano, Italy',
          description: 'Developed enterprise logistics software using C# and ASP.NET MVC within a large-scale .NET Core environment.',
          skills: ['C#', 'ASP.NET MVC', '.NET Core'],
        },
        {
          id: 7,
          company: 'QuattroGi Ltd',
          title: 'Internship',
          duration: 'Oct — Dec 2017',
          location: 'Bulgaria',
          description: 'Web development internship — first steps into professional software engineering.',
          skills: ['WordPress', 'HTML', 'JavaScript'],
        },
      ],
    };
  },
};
</script>

<style scoped>
.experience {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 2rem;
}

.timeline {
  max-width: 800px;
  width: 100%;
}

.exp-row {
  display: grid;
  grid-template-columns: 140px 24px 1fr;
  gap: 0 1rem;
  padding-bottom: 2.5rem;
  position: relative;
}

.exp-meta {
  text-align: right;
  padding-top: 0.15rem;
}

.exp-date {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
  letter-spacing: 0.02em;
}

.exp-line {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.exp-line::after {
  content: '';
  position: absolute;
  top: 12px;
  bottom: -2.5rem;
  width: 1px;
  background: var(--border-subtle);
}

.exp-row:last-child .exp-line::after {
  display: none;
}

.exp-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text-muted);
  margin-top: 0.4rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
  z-index: 1;
}

.exp-row:hover .exp-dot {
  background: var(--accent-blue);
  box-shadow: 0 0 12px rgba(94, 191, 240, 0.4);
}

.exp-body {
  padding-bottom: 0.5rem;
}

h3 {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.15rem;
}

.exp-company {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0 0 0.4rem;
}

.exp-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0 0 0.75rem;
}

.exp-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.exp-skills span {
  font-size: 0.7rem;
  padding: 0.15rem 0.55rem;
  border-radius: 100px;
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-weight: 500;
}

.exp-row:hover .exp-skills span {
  border-color: rgba(94, 191, 240, 0.2);
  color: var(--text-secondary);
}

@media (max-width: 600px) {
  .exp-row {
    grid-template-columns: 20px 1fr;
  }
  .exp-meta {
    display: none;
  }
  .exp-date-mobile {
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-bottom: 0.25rem;
  }
}
</style>