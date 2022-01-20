import { createRouter, createWebHistory } from "../../node_modules/vue-router";
import Dashboard from "../views/Dashboard.vue";
import Clientes from "../views/Clientes.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Clientes",
    name: "Clientes",
    component: Clientes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
