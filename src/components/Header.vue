<script setup>
import '@/assets/css/components/header.css';
import Mail from "@/components/icons/Mail.vue";
import Globe from "@/components/icons/Globe.vue";
import Logo from "@/components/Logo.vue";
</script>

<template>
  <header id="header">
    <div>
      <Logo />
    </div>
    <div>
      <a class="button" href="mailto:#" title="Mail">
        <Mail />
      </a>
      <nav class="navigation">
        <a href="#landing" title="Home">Home</a>
        <a href="#services" title="Services">Services</a>
        <a href="#testimonials" title="Testimonials">Testimonials</a>
        <a href="#contact" title="Contact">Contact</a>
      </nav>
      <a class="button" href="mailto:#" title="Mail">
        <Globe />
      </a>
    </div>
  </header>
</template>