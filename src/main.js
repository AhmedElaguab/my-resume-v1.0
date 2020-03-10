import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faLinkedin, faTwitterSquare, faGithubSquare);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
