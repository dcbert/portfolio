<template>
  <header class="hero">
    <div class="hero-glow"></div>
    <div class="hero-content" :style="{ opacity: contentOpacity, transform: `translateY(${contentY}px) scale(${contentScale})` }">
      <p class="hero-label">Senior Software Developer</p>
      <h1 class="hero-name">Davide<br>Bert</h1>
      <p class="hero-tagline">Enterprise systems by day.<br>Privacy-first AI by night.</p>
    </div>
    <div class="scroll-indicator" :style="{ opacity: contentOpacity }">
      <div class="scroll-line"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'PortfolioHeader',
  data() {
    return {
      contentOpacity: 1,
      contentY: 0,
      contentScale: 1,
      scrollContainer: null,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollContainer = document.querySelector('.container');
      if (this.scrollContainer) {
        this.scrollContainer.addEventListener('scroll', this.onScroll, { passive: true });
      }
    });
  },
  beforeUnmount() {
    if (this.scrollContainer) {
      this.scrollContainer.removeEventListener('scroll', this.onScroll);
    }
  },
  methods: {
    onScroll() {
      const scrollTop = this.scrollContainer.scrollTop;
      const vh = window.innerHeight;
      const progress = Math.min(scrollTop / (vh * 0.5), 1);
      this.contentOpacity = 1 - progress * 1.5;
      this.contentY = -progress * 80;
      this.contentScale = 1 - progress * 0.08;
    },
  },
};
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  width: clamp(400px, 60vw, 700px);
  height: clamp(400px, 60vw, 700px);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.08) 40%, transparent 70%);
  animation: glowPulse 8s ease-in-out infinite, glowDrift 20s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;
}

.hero-content {
  text-align: center;
  will-change: opacity, transform;
  position: relative;
  z-index: 1;
}

.hero-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  font-weight: 500;
  animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}

.hero-name {
  font-family: var(--font-heading);
  font-size: clamp(4rem, 15vw, 10rem);
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -0.04em;
  margin: 0;
  background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.65) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

.hero-tagline {
  font-size: clamp(1rem, 2.5vw, 1.35rem);
  color: var(--text-secondary);
  margin-top: 2rem;
  line-height: 1.6;
  font-weight: 300;
  animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
}

.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s both;
}

.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(180deg, var(--text-muted), transparent);
  animation: scrollPulse 2.5s ease-in-out infinite;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.2; transform: scaleY(0.8); }
  50% { opacity: 0.6; transform: scaleY(1.2); transform-origin: top; }
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

@keyframes glowDrift {
  0%, 100% { translate: 0 0; }
  25% { translate: 20px -30px; }
  50% { translate: -15px 20px; }
  75% { translate: 25px 10px; }
}
</style>
