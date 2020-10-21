import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import M from "materialize-css/dist/js/materialize.js"

Window.M = M


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

