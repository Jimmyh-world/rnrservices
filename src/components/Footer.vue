<script setup>
import '@/assets/css/components/footer.css';
import Logo from "@/components/Logo.vue";
import Instagram from "@/components/icons/Instagram.vue";
import Linkedin from "@/components/icons/Linkedin.vue";
import Facebook from "@/components/icons/Facebook.vue";
</script>

<template>
  <footer id="footer">
    <Logo />
    <nav class="footer-nav">
      <ul>
        <li>
          <a class="button" href="#instagram" title="Instagram"><Instagram /></a>
        </li>
        <li>
          <a class="button" href="#linkedin" title="Linkedin"><Linkedin /></a>
        </li>
        <li>
          <a class="button" href="#facebook" title="Facebook"><Facebook /></a>
        </li>
      </ul>
    </nav>
  </footer>
</template>