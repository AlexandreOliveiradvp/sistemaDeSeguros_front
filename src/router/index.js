import { createRouter, createWebHistory } from "../../node_modules/vue-router";
import Dashboard from "../views/Dashboard.vue";
import Clientes from "../views/Clientes.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/404.vue";
import Home from "../views/Home.vue";

var auth = true;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/Dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/Clientes",
        name: "Clientes",
        component: Clientes,
      },
    ],
    beforeEnter(to, from, next) {
      if (auth) {
        next();
      } else {
        next({
          name: "Login"
        });
      }
    }
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
