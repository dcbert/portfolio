<template>
  <section id="experience" class="experience">
    <h2>Experience</h2>
    <div class="timeline">
      <div v-for="exp in experiences" :key="exp.id" class="experience-item">
        <div class="details">
          <h3>{{ exp.title }}</h3>
          <p>{{ exp.company }} | {{ exp.duration }} | {{ exp.location }}</p>
          <p>{{ exp.description }}</p>
          <div class="skills">
            <span v-for="skill in exp.skills" :key="skill" class="skill-tag">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
  data() {
    return {
      experiences: [
        {
          id: 1,
          company: 'Röchling Automotive',
          title: 'Team Leader Smart Factory Systems & Applications',
          duration: 'Jun 2024 - Present',
          location: 'Laives, Italy (Hybrid)',
          description: 'Leading development of smart factory applications.',
          skills: ['Python', 'Django', 'JavaScript', 'Vue.js', 'Postgres', 'Linux'],
        },
        {
          id: 2,
          company: 'Röchling Automotive',
          title: 'Team Leader Smart Factory Applications',
          duration: 'Sep 2022 - Jul 2024 (1 year 11 months)',
          location: 'Laives, Italy (Hybrid)',
          description: 'Managed team efforts with Linux and Django.',
          skills: ['Python', 'Django', 'JavaScript', 'Vue.js', 'Postgres'],
        },
        {
          id: 3,
          company: 'Röchling Automotive',
          title: 'Specialist Smart Factory Applications',
          duration: 'Aug 2020 - Sep 2022 - 2 years 2 months',
          location: 'Laives, Italy (Hybrid)',
          description: 'Managed team efforts with Linux and Django.',
          skills: ['Python', 'Django', 'JavaScript', 'Vue.js', 'Postgres'],
        },
        {
          id: 4,
          company: 'Fercam S.p.A.',
          title: 'Junior Software Developer',
          duration: 'May 2018 - Jul 2020 - 2 years 3 months',
          location: 'Bozen, Trentino-Alto Adige, Italy',
          description: 'Managed team efforts with Linux and Django.',
          skills: ['C#', '.NET Core', 'Windows',],
        },
        {
          id: 5,
          company: 'QuattroGi Ltd',
          title: 'Internship Student',
          duration: 'Oct 2017 - Dec 2017 - 3 months',
          location: 'Sofia, Bulgaria',
          description: 'Managed team efforts with Linux and Django.',
          skills: ['Wordpress', 'HTML', 'Javascript'],
        },
      ],
    };
  },
};
</script>

<style scoped>
.experience {
  padding: 2rem 1rem;
}

.timeline {
  position: relative;
}

.experience-item {
  display: flex;
  margin: 2rem 0;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}

.details {
  flex: 1;
}

h3 {
  margin: 0 0 0.5rem;
}

.skill-tag {
  background: #00B4D8;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem;
  border-radius: 4px;
  display: inline-block;
  font-size: 0.7rem;
}

h3 {
  font-size: 0.8rem;
}

p {
  font-size: 0.7rem;
}
</style>