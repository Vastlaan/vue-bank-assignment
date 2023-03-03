import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

export const ROUTE_NAMES = {
  HOME: "home",
};

export const routes = [
  {
    path: "/",
    name: ROUTE_NAMES.HOME,
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
