<script setup>
import '@/assets/css/components/language.css';
import Check from "@/components/icons/Check.vue";
import {onBeforeMount, ref} from "vue";

const languages = ref([]);

const properties = defineProps({
  show: Boolean
});

onBeforeMount(() => {
  languages.value = [
    { code: "en", text: "AU/EN", name: "English/Australian", flag: "au.svg", selected: false },
    { code: "sv", text: "SV/SE", name: "Svenska/Swedish", flag: "se.svg", selected: false },
  ];
  languages.value.map(lang => {
    const preferredLang = localStorage.getItem("preferred-language") ?? "en";
    if (lang.code === preferredLang) {
      lang.selected = true;
    } else {
      lang.selected = false;
    }
  });
});

function selectLanguage(code) {
  if (!languages.value) {
    return false;
  }
  languages.value.map(lang => lang.selected = lang.code === code);
  document.documentElement.setAttribute('lang', code);
  localStorage.setItem("preferred-language", code);
  window.location.reload();
}

</script>

<template>
  <div id="language" v-if="properties.show">
    <ul class="language-list">
      <li v-for="language of languages" :aria-selected="language.selected">
        <button class="language-button"
                @click="selectLanguage(language.code)"
                :aria-label="`Change language to ${language.name}`">
          <img :src="`/flags/${language.flag}`" :alt="language.code" />
          <span>{{ language.text }}</span>
          <Check v-if="language.selected" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>