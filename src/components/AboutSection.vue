<template>
  <section id="about" class="about">
    <h2>About Me</h2>
    <p>
      With more than seven years of experience in software development, I specialize in designing and implementing smart
      factory applications.
      As Team Leader Smart Factory Applications at Röchling Automotive, I lead a team of software engineers to develop
      and deploy innovative solutions that optimize
      production processes, enhance product quality, and boost efficiency.
      I am deeply passionate about leveraging
      Python, JavaScript, and cutting-edge technologies like Django REST Framework, Vue.js, and PostgreSQL to create web
      applications that integrate seamlessly with factory systems, delivering real-time data and analytics to
      stakeholders.
    </p>
  </section>
</template>
<script>
export default {
  name: 'AboutSection'
}
</script>
<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

p {
  font-size: 1rem;
  max-width: 900px;
  margin: 0 auto;
  line-height: 3vh;
}
</style>