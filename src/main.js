import { createApp } from "vue";
import App from "./App.vue";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faIdCard, faChartLine, faClipboardList, faQuestionCircle, faSignOutAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faIdCard, faChartLine, faClipboardList, faQuestionCircle, faSignOutAlt, faArrowRight);

createApp(App).component("fa", FontAwesomeIcon).mount("#app");
