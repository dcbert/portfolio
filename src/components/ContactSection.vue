<template>
  <footer id="contact" class="contact">
    <div class="contact-inner" v-reveal>
      <h2>Let's build<br>something great.</h2>
      <p class="contact-text">Available for freelance projects.</p>
      <a href="mailto:dc.bert@outlook.com" class="cta-btn">
        <span>Get in Touch</span>
        <i class="fas fa-arrow-right"></i>
      </a>
      <div class="contact-links">
        <a href="mailto:dc.bert@outlook.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
        <a href="https://github.com/dcbert" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/davide-bert" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="https://x.com/bertdev" target="_blank" aria-label="X"><i class="fab fa-x-twitter"></i></a>
      </div>
    </div>
    <p class="copyright">&copy; 2025 Davide Bert</p>
  </footer>
</template>
<script>
export default {
  name: 'ContactSection',
};
</script>
<style scoped>
.contact {
  padding: 10rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
}

.contact-inner {
  text-align: center;
  max-width: 500px;
}

.contact-inner h2 {
  margin-bottom: 1rem;
}

.contact-text {
  color: var(--text-secondary);
  font-size: 1.05rem;
  margin-bottom: 2.5rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.25rem;
  border-radius: 100px;
  background: var(--primary-gradient);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.25);
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.4);
  gap: 1rem;
}

.cta-btn i {
  font-size: 0.85rem;
  transition: transform 0.3s ease;
}

.cta-btn:hover i {
  transform: translateX(2px);
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
}

.contact-links a {
  color: var(--text-muted);
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem;
}

.contact-links a:hover {
  color: var(--text-primary);
  transform: translateY(-2px);
}

.copyright {
  color: var(--text-muted);
  font-size: 0.75rem;
  margin-top: auto;
  padding-top: 4rem;
  opacity: 0.4;
}
</style>