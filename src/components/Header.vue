<script setup>
import '@/assets/css/components/header.css';
import Mail from "@/components/icons/Mail.vue";
import Globe from "@/components/icons/Globe.vue";
import Logo from "@/components/Logo.vue";
import Language from "@/components/Language.vue";
import text from "@/assets/js/text.js";
import {ref} from "vue";

const languageBoxShow = ref(false);

function toggleLanguageBox() {
  languageBoxShow.value = languageBoxShow.value === false;
}

</script>

<template>
  <header id="header">
    <Logo />
    <a id="mailButton" class="button" href="mailto:#" :title="text('Mail', 'Mejla')">
      <Mail />
    </a>
    <nav class="navigation">
      <a href="#landing" :title="text('Home', 'Hem')">{{ text("Home", "Hem") }}</a>
      <a href="#services" :title="text('Services', 'Service')">{{ text("Services", "Service") }}</a>
      <a href="#testimonials" :title="text('Testimonials', 'Rekommendationer')">{{ text('Testimonials', 'Rekommendationer') }}</a>
      <a href="#contact" :title="text('Contact', 'Kontakt')">{{ text('Contact', 'Kontakt') }}</a>
    </nav>
    <button @click="toggleLanguageBox" id="langButton" class="button" :title="text('Select language', 'Välj språk')">
      <Globe />
    </button>
    <Language :show="languageBoxShow" />
  </header>
</template>