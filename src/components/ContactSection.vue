<template>
  <footer id="contact" class="contact">
    <h2>Contact</h2>
    <div class="contact-links">
      <a href="mailto:dc.bert@outlook.com"><i class="fas fa-envelope"></i></a>
      <a href="https://www.linkedin.com/in/davide-bert" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/dcbert" target="_blank"><i class="fab fa-github"></i></a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'ContactSection'
}
</script>
<style scoped>
.contact {
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height:auto;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.contact-links a {
  color: #FFFFFF;
  font-size: 2rem;
}

.contact-links a:hover {
  background-color: #5ebff0;
  background-image: linear-gradient(135deg, #5ebff0 0%, #4549da 100%);
  color: transparent;
  background-clip: text;
}
</style>