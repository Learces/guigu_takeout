import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/Home/HomePage.vue";
import OrderPage from "@/views/Order/OrderPage.vue";
import ProfilePage from "@/views/Profile/ProfilePage.vue";
import SearchPage from "@/views/Search/SearchPage.vue";
import LoginPage from "@/views/Login/LoginPage.vue";
import MessageMode from "@/components/LoginForm/MessageMode.vue";
import PasswordMode from "@/components/LoginForm/PasswordMode.vue";
import RestaurantPage from "@/views/Restaurant/RestaurantPage.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/login",
      component: LoginPage,
      children: [
        {
          path: "",
          redirect: "message",
        },
        {
          path: "message",
          component: MessageMode,
        },
        {
          path: "password",
          component: PasswordMode,
        },
      ],
    },
    {
      path: "/home",
      component: HomePage,
      children: [
        {
          path: "/:restaurant",
          component: RestaurantPage,
        },
      ],
    },
    {
      path: "/search",
      component: SearchPage,
    },
    {
      path: "/order",
      component: OrderPage,
    },
    {
      path: "/profile",
      component: ProfilePage,
    },
  ],
});
