<template>
  <header class="header">
      <image class="profile-pic" src="/portfolio/profile_pic.jpg"></image>
      <h1 class="name">Davide Bert</h1>
      <h2 class="title">Software Developer <br> Team Leader</h2>
      <p class="tagline">Building Smart Solutions for the Future</p>
  </header>
</template>

<script>
export default {
  name: 'PortfolioHeader',
};
</script>

<style scoped>
.profile-pic {
  border-radius: 100%;
  width: 15rem;
  margin-bottom: 1rem;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  padding: 1rem 2rem;
  font-size: 1.3rem;
  text-align: center;
}


.tagline {
  font-size: 1.2rem;
  margin-top: 1rem;
  opacity: 0.8;
}


</style>