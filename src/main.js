import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// Custom directive to change color
Vue.directive("color", {
  bind(el, binding) {
    el.style.color = binding.value;
  },
});

// Currency filter
Vue.filter("currencyFilter", function (value) {
  return `$${parseFloat(value).toFixed(2)}`;
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
