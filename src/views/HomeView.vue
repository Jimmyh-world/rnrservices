<script setup>
import '@/assets/css/layouts/landing.css';
</script>

<template>
  <main id="main">
    <figure id="hero">
      <img id="hero" src="/hand-in-air.jpg" alt="Hands in the air during a concert" />
    </figure>
    <section id="landing">
      <h1>Unleash the Power of Music</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy  text ever since the 1500s</p>
      <router-link class="cta" title="Contact" to="/contact">Contact</router-link>
    </section>
  </main>
</template>
