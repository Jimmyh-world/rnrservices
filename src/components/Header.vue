<script setup>
import '@/assets/css/components/header.css';
import Logo from "@/components/Logo.vue";
import Menu from "@/components/icons/Menu.vue";
</script>

<template>
  <header id="header">
    <Logo />
    <button id="menuButton" class="button">
      <Menu />
    </button>
    <nav class="navigation">
      <router-link class="navigation-link" to="/" title="Home">Home</router-link>
      <router-link class="navigation-link" to="/services" title="Services">Services</router-link>
      <router-link class="navigation-link" to="/testimonials" title="Testimonials">Testimonials</router-link>
      <router-link class="navigation-link" to="/gallery" title="Gallery">Gallery</router-link>
      <router-link class="navigation-link" to="/contact" title="Gallery">Contact</router-link>
    </nav>
  </header>
</template>