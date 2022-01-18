import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/teste',
      component: dashboard
    }
  ]
})

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faIdCard,
  faChartLine,
  faClipboardList,
  faQuestionCircle,
  faSignOutAlt,
  faArrowRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPhone,
  faIdCard,
  faChartLine,
  faClipboardList,
  faQuestionCircle,
  faSignOutAlt,
  faArrowRight,
  faChevronDown
);

router,createApp(App).component("fa", FontAwesomeIcon).mount("#app");
