import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/Profile.vue"),
    },
    {
      path: "/services",
      name: "Services",
      component: () => import("../views/Services.vue"),
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: () => import("../views/Portfolio.vue"),
    },
  ],
});

export default router;
