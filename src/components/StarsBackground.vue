<template>
    <div ref="canvasContainer" class="canvas-container">

    </div>
  </template>

<script>
import * as THREE from 'three';

export default {
  name: 'StarfieldEffect',
  mounted() {
    this.initThreeJs();
    this.animate();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
    if (this.renderer) {
      this.renderer.domElement.remove();
    }
  },
  methods: {
    initThreeJs() {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.z = 1;

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.canvasContainer.appendChild(this.renderer.domElement);

      const starCount = 2000;
      const geometry = new THREE.BufferGeometry();
      const positions = [];
      for (let i = 0; i < starCount; i++) {
        positions.push(
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000,
          Math.random() * 2000 - 1000
        );
      }
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1,
        sizeAttenuation: true,alphaTest: 0.5, transparent: true
      });
      this.stars = new THREE.Points(geometry, material);
      this.scene.add(this.stars);

      window.addEventListener('resize', this.onWindowResize);
    },
    animate() {
      requestAnimationFrame(this.animate);

      const positions = this.stars.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += 1;
        if (positions[i + 2] > 1000) {
          positions[i + 2] = -1000;
          positions[i] = Math.random() * 2000 - 1000;
          positions[i + 1] = Math.random() * 2000 - 1000;
        }
      }
      this.stars.geometry.attributes.position.needsUpdate = true;

      this.renderer.render(this.scene, this.camera);
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    },
  },
};
</script>
  <style scoped>
  .canvas-container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #000;
  }
  </style>