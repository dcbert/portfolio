<template>
  <section id="about" class="about">
    <h2 v-reveal>About Me</h2>

    <div class="about-content">
      <div class="about-card about-bio" v-reveal="{ delay: 0 }">
        <div class="card-glow"></div>
        <div class="card-body">
          <div class="bio-header">
            <img :src="profileImg" alt="Davide Bert" class="bio-photo" />
            <div class="bio-intro">
              <h3>Davide Bert</h3>
              <p class="bio-role">Senior Software Developer · Trentino-Alto Adige, Italy</p>
              <div class="bio-socials">
                <a href="https://github.com/dcbert" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
                <a href="https://x.com/bertdev" target="_blank" aria-label="X"><i class="fab fa-x-twitter"></i></a>
                <a href="https://www.linkedin.com/in/davide-bert" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
          <p class="bio-text">I'm a full-stack engineer with 8+ years of shipping software that matters — from enterprise logistics at Fercam to leading the smart factory platform at Röchling Automotive, where I grew from specialist to team leader, digitalizing 22 manufacturing plants and optimizing 400+ production lines worldwide. Today I build enterprise solutions at ewo by day and pour my evenings into what excites me most: privacy-first local AI, agentic systems, and self-hosted tools.</p>
          <p class="bio-text">My flagship project, RaccBuddy, is an open-source AI companion that runs 100% locally — no cloud, no data ever leaving your machine — using LangGraph, Ollama, and pgvector to deeply know you and proactively improve your daily life. I believe the best software is the software you own.</p>
        </div>
      </div>

      <div class="about-card about-detail" v-for="(item, index) in highlights" :key="item.label" v-reveal="{ delay: 100 + index * 80 }">
        <div class="card-body">
          <div class="detail-icon"><i :class="item.icon"></i></div>
          <span class="detail-label">{{ item.label }}</span>
          <span class="detail-value">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import profileImg from '@/assets/profile.jpg';

export default {
  name: 'AboutSection',
  data() {
    return {
      profileImg,
      highlights: [
        { icon: 'fas fa-code', label: 'Stack', value: 'Python · C# · JavaScript · React · Vue.js' },
        { icon: 'fas fa-brain', label: 'Passion', value: 'Privacy-first local AI & agentic systems' },
        { icon: 'fas fa-industry', label: 'Domain', value: 'Smart factory & enterprise systems' },
        { icon: 'fas fa-server', label: 'Philosophy', value: 'Self-hosted · open source · you own your data' },
      ],
    };
  },
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 2rem;
}

.about-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 800px;
  width: 100%;
}

.about-card {
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-card:hover {
  border-color: rgba(102, 126, 234, 0.2);
  transform: translateY(-2px);
}

.card-body {
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.about-bio {
  grid-column: 1 / -1;
}

.about-bio .card-glow {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.12), transparent 70%);
  pointer-events: none;
}

.bio-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.bio-photo {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--glass-border);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-bio:hover .bio-photo {
  border-color: rgba(102, 126, 234, 0.3);
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.15);
}

.bio-intro h3 {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.bio-role {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0.15rem 0 0;
}

.bio-socials {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.bio-socials a {
  color: var(--text-muted);
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.bio-socials a:hover {
  color: var(--accent-blue);
  transform: translateY(-1px);
}

.bio-text {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin: 0 0 1rem;
}

.bio-text:last-child {
  margin-bottom: 0;
}

.about-detail .card-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem 2rem;
}

.detail-icon {
  font-size: 1rem;
  color: var(--text-muted);
  transition: color 0.3s ease;
}

.about-detail:hover .detail-icon {
  color: var(--accent-blue);
}

.detail-label {
  font-family: var(--font-heading);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  font-weight: 600;
}

.detail-value {
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 500;
}

@media (max-width: 600px) {
  .about-content {
    grid-template-columns: 1fr;
  }

  .bio-photo {
    width: 52px;
    height: 52px;
  }
}
</style>