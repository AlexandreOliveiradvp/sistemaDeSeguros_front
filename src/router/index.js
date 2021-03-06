import { createRouter, createWebHistory } from "../../node_modules/vue-router";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Clients from "../views/Clients/Clients.vue";
import Login from "../views/Login/Login.vue";
import NotFound from "../views/404/404.vue";
import Home from "../views/Home.vue";
import PasswordRecover from "../views/Password_Recovery/Password_Recovery.vue";
import RequestAccess from "../views/Request_Access/Request_Access.vue";
import RegisterClients from "../views/Clients/RegisterClients.vue";
import Operators from "../views/Operators/Operators.vue";
import RegisterOperators from "../views/Operators/RegisterOperators.vue";
import Users from "../views/Users/Users.vue";
import RegisterUsers from "../views/Users/RegisterUsers.vue";

var auth = localStorage.getItem("token") != null;

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
        name: "Clients",
        component: Clients,
      },
      {
        path: "/CadastrarClientes",
        name: "RegisterClients",
        component: RegisterClients,
      },
      {
        path: "/Operadoras",
        name: "Operators",
        component: Operators,
      },
      {
        path: "/CadastrarOperadoras",
        name: "RegisterOperators",
        component: RegisterOperators,
      },
      {
        path: "/Usuarios",
        name: "Users",
        component: Users,
      },
      {
        path: "/CadastrarUsuarios",
        name: "RegisterUsers",
        component: RegisterUsers,
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
    name: "PasswordRecover",
    component: PasswordRecover,
  },
  {
    path: "/SolicitarAcesso",
    name: "RequestAccess",
    component: RequestAccess,
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
