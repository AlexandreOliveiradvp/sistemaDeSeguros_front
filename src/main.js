import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import router from "./router";

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
  faEyeSlash,
  faEye,
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
  faChevronDown,
  faEyeSlash,
  faEye
);

createApp(App).component("fa", FontAwesomeIcon).use(router).mount("#app");
