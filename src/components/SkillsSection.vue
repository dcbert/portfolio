<template>
  <section id="skills" class="skills">
    <h2>Skills</h2>
    <div class="skill-list">
      <span v-for="skill in skills" :key="skill" class="skill-tag">{{ skill }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: ['Python', 'Django', 'JavaScript', 'Vue.js', 'Postgres', 'Linux',
        'C#', '.NET Core', 'Windows',
        'Wordpress', 'HTML', 'Responsive Web Design', 'Git', 'Team Leadership'],
    };
  },
};
</script>

<style scoped>
.skills {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding:0 2rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.skill-tag {
  background-color: #5ebff0;
  background-image: linear-gradient(135deg, #5ebff0 0%, #4549da 100%);
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
</style>