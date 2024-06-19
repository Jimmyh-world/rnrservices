<script setup>
import '@/assets/css/components/mobileMenu.css';
import text from "@/assets/js/text.js";
import X from "@/components/icons/X.vue";
import {ref} from "vue";

const isOpen = ref(false);

</script>

<template>
  <Transition v-if="isOpen">
    <div id="mobileMenu">
      <div class="mobile-menu-header">
        <button class="button" :title="text('Close menu', 'Stäng meny')">
          <X />
        </button>
      </div>
      <div class="mobile-menu-main">
        <nav class="mobile-menu-navigation">
          <ul>
            <li>
              <a href="#landing" :title="text('Home', 'Hem')">
                {{ text("Home", "Hem") }}
              </a>
            </li>
            <li>
              <a href="#services" :title="text('Services', 'Service')">
                {{ text("Services", "Service") }}</a>
            </li>
            <li>
              <a href="#testimonials" :title="text('Testimonials', 'Rekommendationer')">
                {{ text('Testimonials', 'Rekommendationer') }}
              </a>
            </li>
            <li>
              <a href="#contact" :title="text('Contact', 'Kontakt')">
                {{ text('Contact', 'Kontakt') }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </Transition>
</template>