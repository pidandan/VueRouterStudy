import Vue from "vue";
import App from "./App.vue";
import "nprogress/nprogress.css";
Vue.config.productionTip = false;
// import router from "./router/day1";
// import router from "./router/day2";
import router from "./router/day3";
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
