<template>
  <section id="projects" class="projects">
    <h2 v-reveal>Projects</h2>

    <div class="bento">
      <!-- Flagship: RaccBuddy -->
      <div class="bento-card bento-featured" v-reveal="{ delay: 0 }">
        <div class="card-glow card-glow-purple"></div>
        <div class="card-body">
          <div class="card-header-row">
            <div class="card-icon"><i class="fas fa-robot"></i></div>
            <span class="badge-oss">Open Source</span>
          </div>
          <h3>RaccBuddy</h3>
          <p>100% local, privacy-first AI personal companion that deeply knows you. Reads your messages across platforms (native Telegram + WhatsApp bridge), builds rich understanding of your relationships and habits with pgvector semantic memory (up to 30k tokens context), and proactively sends helpful, personalized nudges to improve your real life. No cloud. No data ever leaving your machine.</p>
          <div class="card-tags">
            <span v-for="t in ['Python', 'FastAPI', 'LangGraph', 'Ollama', 'pgvector', 'PostgreSQL', 'Docker', 'Whisper', 'Bark']" :key="t">{{ t }}</span>
          </div>
          <a href="https://github.com/raccbuddy-labs/raccbuddy" target="_blank" class="card-link">
            View on GitHub <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <!-- Miner Sentinel -->
      <div class="bento-card bento-github" v-reveal="{ delay: 100 }">
        <div class="card-body">
          <div class="card-header-row">
                      <div class="card-icon"><i class="fas fa-robot"></i></div>
            <span class="badge-oss">Open Source</span>
          </div>
          <h3>Miner Sentinel</h3>
          <p>Self-hosted Bitcoin mining monitoring dashboard for Bitaxe and Avalon ASIC miners. Real-time metrics, historical analytics, Telegram alerts, and pool integration.</p>
          <div class="card-tags">
            <span v-for="t in ['React', 'Shadcn', 'Django', 'PostgreSQL', 'Docker']" :key="t">{{ t }}</span>
          </div>
          <a href="https://github.com/dcbert/miner-sentinel" target="_blank" class="card-link">
            View on GitHub <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <!-- NebulaProxy -->
      <div class="bento-card bento-github" v-reveal="{ delay: 200 }">
        <div class="card-body">
          <div class="card-header-row">
            <div class="card-icon"><i class="fab fa-github"></i></div>
            <span class="badge-oss">Open Source</span>
          </div>
          <h3>NebulaProxy</h3>
          <p>VPN-powered reverse proxy dashboard — securely iframe and remotely access home-lab apps. FastAPI backend, React UI, Docker-ready.</p>
          <div class="card-tags">
            <span v-for="t in ['FastAPI', 'React', 'Docker', 'VPN']" :key="t">{{ t }}</span>
          </div>
          <a href="https://github.com/dcbert/NebulaProxy" target="_blank" class="card-link">
            View on GitHub <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <!-- Smart Factory Platform -->
      <div class="bento-card bento-secondary" v-reveal="{ delay: 300 }">
        <div class="card-glow"></div>
        <div class="card-body">
          <div class="card-icon"><i class="fas fa-industry"></i></div>
          <h3>Smart Factory Platform</h3>
          <p>Digital backbone of Röchling Automotive's manufacturing — a real-time platform powering 22 plants and 400+ production lines across the globe. Led the team, designed the architecture, shipped it.</p>
          <div class="card-tags">
            <span v-for="t in ['Python', 'Django', 'Vue.js', 'PostgreSQL', 'Linux']" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>

      <!-- EasyTransfer -->
      <div class="bento-card bento-secondary" v-reveal="{ delay: 400 }">
        <div class="card-body">
          <div class="card-icon"><i class="fas fa-file-invoice-dollar"></i></div>
          <h3>EasyTransfer</h3>
          <p>Web platform streamlining tax credit deduction transfers for Italian businesses.</p>
          <div class="card-tags">
            <span v-for="t in ['C#', '.NET', 'Vue.js']" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
};
</script>

<style scoped>
.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 2rem;
}

.bento {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 800px;
  width: 100%;
}

.bento-card {
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.bento-card:hover {
  border-color: rgba(102, 126, 234, 0.2);
  transform: translateY(-2px);
}

.card-body {
  padding: 2rem;
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.bento-featured {
  grid-column: 1 / -1;
}

.bento-featured .card-glow-purple,
.bento-secondary .card-glow {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  pointer-events: none;
}

.card-glow-purple {
  background: radial-gradient(circle, rgba(118, 75, 162, 0.12), transparent 70%);
}

.bento-secondary .card-glow {
  background: radial-gradient(circle, rgba(102, 126, 234, 0.12), transparent 70%);
}

.card-icon {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.bento-card:hover .card-icon {
  color: var(--accent-blue);
}

.card-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-header-row .card-icon {
  margin-bottom: 0;
}

.badge-oss {
  font-size: 0.65rem;
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  background: rgba(102, 126, 234, 0.1);
  color: rgba(102, 126, 234, 0.8);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

h3 {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 600;
  margin: 0.75rem 0 0.5rem;
  color: var(--text-primary);
}

.bento-featured h3 {
  font-size: 1.5rem;
}

.card-body p {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0 0 1rem;
  flex: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.card-tags span {
  font-size: 0.7rem;
  padding: 0.15rem 0.6rem;
  border-radius: 100px;
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-weight: 500;
}

.bento-card:hover .card-tags span {
  border-color: rgba(102, 126, 234, 0.15);
  color: var(--text-secondary);
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.card-link:hover {
  color: var(--accent-blue);
  gap: 0.75rem;
}

@media (max-width: 600px) {
  .bento {
    grid-template-columns: 1fr;
  }
}
</style>