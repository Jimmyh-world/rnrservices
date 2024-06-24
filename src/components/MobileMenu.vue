<script setup>
import '@/assets/css/components/mobileMenu.css';
import text from "@/assets/js/text.js";
import X from "@/components/icons/X.vue";
import { ref, defineExpose } from "vue";

const show = ref(false);

/** Toggle menu. */
function toggle() {
  show.value = !show.value;
}

/** Close menu, */
function close() {
  show.value = false;
}

defineExpose({ toggle, close });

</script>

<template>
  <div id="mobileMenu" v-if="show">
    <div class="mobile-menu-header">
      <button @click="close" class="button" :title="text('Close menu', 'Stäng meny')">
        <X />
      </button>
    </div>
    <div class="mobile-menu-main">
      <nav class="mobile-menu-navigation">
        <ul>
          <li>
            <a @click="close" href="#landing" :title="text('Home', 'Hem')">
              {{ text("Home", "Hem") }}
            </a>
          </li>
          <li>
            <a @click="close" href="#services" :title="text('Services', 'Service')">
              {{ text("Services", "Service") }}</a>
          </li>
          <li>
            <a @click="close" href="#testimonials" :title="text('Testimonials', 'Rekommendationer')">
              {{ text('Testimonials', 'Rekommendationer') }}
            </a>
          </li>
          <li>
            <a @click="close" href="#contact" :title="text('Contact', 'Kontakt')">
              {{ text('Contact', 'Kontakt') }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>