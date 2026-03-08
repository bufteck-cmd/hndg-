import { createRouter, createWebHistory } from "vue-router";
import ViewAbout from "@/views/AboutView.vue";
import ViewHome from "@/views/HomeView.vue";
import ViewOurServices from "@/views/OurServiceView.vue";
import ViewLogin from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ViewHome,
    },
    {
      path: "/about",
      name: "about",
      component: ViewAbout,
    },
    {
      path: "/ourservices",
      name: "ourservices",
      component: ViewOurServices,
    },
    {
      path: "/login",
      name: "login",
      component: ViewLogin,
    },
  ],
});

export default router;
