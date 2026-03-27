<template>
  <section class="stats">
    <div class="stats-grid">
      <div v-for="(stat, index) in stats" :key="stat.label" class="stat-card" v-reveal="{ delay: index * 120 }">
        <div class="stat-glow" :style="{ background: stat.glow }"></div>
        <span class="stat-number" ref="numbers">{{ stat.prefix }}0{{ stat.suffix }}</span>
        <span class="stat-label">{{ stat.label }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatsSection',
  data() {
    return {
      stats: [
        { value: 8, prefix: '', suffix: '+', label: 'Years Shipping Software', glow: 'radial-gradient(circle, rgba(102,126,234,0.15), transparent 70%)' },
        { value: 400, prefix: '', suffix: '+', label: 'Production Lines Optimized', glow: 'radial-gradient(circle, rgba(118,75,162,0.15), transparent 70%)' },
        { value: 100, prefix: '', suffix: '%', label: 'Local AI · Zero Cloud', glow: 'radial-gradient(circle, rgba(94,191,240,0.12), transparent 70%)' },
      ],
      counted: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      const scrollContainer = document.querySelector('.container');
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.counted) {
              this.counted = true;
              this.countUp();
              this.observer.unobserve(entry.target);
            }
          });
        },
        { root: scrollContainer, threshold: 0.3 },
      );
      this.observer.observe(this.$el);
    });
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect();
  },
  methods: {
    countUp() {
      const els = this.$refs.numbers;
      if (!els) return;
      this.stats.forEach((stat, i) => {
        const el = els[i];
        if (!el) return;
        const target = stat.value;
        const duration = 2000;
        const start = performance.now();
        const animate = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = `${stat.prefix}${Math.round(eased * target)}${stat.suffix}`;
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      });
    },
  },
};
</script>

<style scoped>
.stats {
  min-height: auto;
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 700px;
  width: 100%;
}

.stat-card {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid var(--glass-border);
  background: var(--glass-bg);
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.stat-card:hover {
  border-color: rgba(102, 126, 234, 0.2);
  transform: translateY(-2px);
}

.stat-glow {
  position: absolute;
  inset: -50%;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.stat-card:hover .stat-glow {
  opacity: 1;
}

.stat-number {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 500;
}

@media (max-width: 600px) {
  .stats-grid {
    grid-template-columns: 1fr;
    max-width: 280px;
  }
}
</style>
