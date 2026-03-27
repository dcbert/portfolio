<template>
  <div class="marquee" v-reveal>
    <div class="marquee-track">
      <div class="marquee-content" v-for="n in 2" :key="n">
        <span v-for="item in items" :key="item + n" class="marquee-item">
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechMarquee',
  data() {
    return {
      items: [
        'Python', 'Django', 'C#', '.NET', 'Vue.js', 'JavaScript',
        'PostgreSQL', 'Linux', 'Docker', 'Git', 'ASP.NET', 'HTML/CSS',
        'REST APIs', 'FastAPI', 'React', 'LangGraph', 'Ollama', 'pgvector',
      ],
    };
  },
};
</script>

<style scoped>
.marquee {
  width: 100%;
  overflow: hidden;
  padding: 3rem 0;
  mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll 30s linear infinite;
}

.marquee-content {
  display: flex;
  gap: 2rem;
  padding-right: 2rem;
}

.marquee-item {
  font-family: var(--font-heading);
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  color: var(--text-muted);
  white-space: nowrap;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 500;
  transition: color 0.3s ease;
}

.marquee-item:hover {
  color: var(--text-primary);
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
