<template>
  <header class="header">
    <div class="hero">
      <image class="./profile-pic" src="/profile_pic.jpg"></image>
      <h1 class="name">Davide Bert</h1>
      <h2 class="title">Software Developer | Team Leader</h2>
      <p class="tagline">Building Smart Solutions for the Future</p>
    </div>
    <canvas class="custom-bg" ref="canvas"></canvas>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['isDark', 'toggleTheme'],
  mounted() {
    this.initCanvas();
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
    },
    initCanvas() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const starCount = 300;
      const movingStars = 200;

      const stars = [];
      const fieldDepth = 10000;

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * fieldDepth,
          baseRadius: Math.random() * 1 + 0.5,
          alpha: 0.7,
          isMoving: i < movingStars,
          speed: Math.random() * 0.005 + 0.002,
          phase: Math.random() * Math.PI * 2,
        });
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#1A1A2E';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
          const scale = 1 + (fieldDepth - star.z) / fieldDepth;
          const radius = star.baseRadius * scale;
          const alpha = star.alpha * (1 + (fieldDepth - star.z) / (fieldDepth * 2));
          const x = star.x;
          const y = star.y;

          const finalAlpha = Math.min(alpha, 1);

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha})`;
          ctx.fill();
          ctx.closePath();

          if (star.isMoving) {
            star.z += Math.sin(star.phase + Date.now() * 0.001) * star.speed;
            if (star.z > fieldDepth) star.z = 0;
            if (star.z < 0) star.z = fieldDepth;
          }
        });

        requestAnimationFrame(animate);
      }

      animate();

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    },
  },
};
</script>

<style scoped>
.profile-pic {
  border-radius: 100%;
  width: 15rem;
  margin-bottom: 1rem;
}

.header {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--text-color);
  overflow: hidden;
}

.hero {
  z-index: 1;
  position: relative;
}

.name,
.title {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 2.5rem;
}



.title {
  padding-top: 1rem;
  font-size: 1.3rem;
}

.tagline {
  font-size: 1.2rem;
  margin-top: 1rem;
  opacity: 0.8;
  animation: starApproach 1.5s ease-out;
}

.theme-toggle {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: color 0.3s ease;
}

.theme-toggle:hover {
  color: var(--accent-color);
}

.custom-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

@keyframes spaceZoom {
  0% {
    transform: scale(1) translateZ(0);
    text-shadow: 0 0 5px rgba(0, 180, 216, 0.3);
  }

  50% {
    transform: scale(1.1) translateZ(50px);
    text-shadow: 0 0 20px rgba(0, 180, 216, 0.6);
  }

  100% {
    transform: scale(1) translateZ(0);
    text-shadow: 0 0 5px rgba(0, 180, 216, 0.3);
  }
}

@keyframes orbitApproach {
  0% {
    opacity: 0;
    transform: scale(0.8) translateZ(-100px);
  }

  100% {
    opacity: 1;
    transform: scale(1) translateZ(0);
  }
}

@keyframes starApproach {
  0% {
    opacity: 0;
    transform: scale(0.5) translateZ(-50px);
  }

  100% {
    opacity: 0.8;
    transform: scale(1) translateZ(0);
  }
}
</style>