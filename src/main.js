<<<<<<< HEAD
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "./assets/less/index.less";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
=======
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
>>>>>>> d732356 (init)
