<template>
  <section id="projects" class="projects">
    <h2>Projects</h2>
    <div class="project-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Smart Factory Platform',
          description: 'A digitalized manufacturing system optimizing 22 plants and 400+ production lines through automation, real-time monitoring, and data-driven decisions.',
        },
        {
          id: 2,
          title: 'EasyTransfer',
          description: 'Web Platform that handles the transfer of tax credit deductions.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects {
  padding: 2rem 2rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
}

.project-card a {
  color: #00B4D8;
  text-decoration: none;
}

.project-card a:hover {
  text-decoration: underline;
}
</style>