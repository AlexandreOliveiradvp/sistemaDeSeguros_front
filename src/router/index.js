import { createRouter, createWebHistory } from "../../node_modules/vue-router";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Clientes from "../views/Clients/Clients.vue";
import Login from "../views/Login/Login.vue";
import NotFound from "../views/404/404.vue";
import Home from "../views/Home.vue";
import RecuperarSenha from "../views/Password_Recovery/Password_Recovery.vue";

var auth = true;

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children: [
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
    ],
    beforeEnter(to, from, next) {
      if (auth) {
        next();
      } else {
        next({
          name: "Login",
        });
      }
    },
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/RecuperarSenha",
    name: "RecuperarSenha",
    component: RecuperarSenha,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
