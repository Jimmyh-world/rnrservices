import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    },
  ]
});

router.beforeEach((to, from, next) => {
  const preferredLang = localStorage.getItem('preferred-language');
  if (!preferredLang) {
    next();
  }
  document.documentElement.lang = preferredLang;
  next();
});

export default router;
