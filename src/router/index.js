import { createRouter, createWebHistory } from "../../node_modules/vue-router";
import Dashboard from "../views/Dashboard.vue";
import Clientes from "../views/Clientes.vue";
import Login from "../views/Login.vue";

var auth = true;

const routes = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter(to, from, next) {
      if (auth) {
        next()
      } else {
        next({
          name: "Login"
        });
      }
    }
  },
  {
    path: "/Clientes",
    name: "Clientes",
    component: Clientes,
    beforeEnter(to, from, next) {
      if (auth) {
        next()
      } else {
        next({
          name: "Login"
        });
      }
    },
  },
  {
    path: "/",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
