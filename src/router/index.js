import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationView from "../views/RegistrationView.vue";
import ActivateView from "../views/ActivateView.vue";
import SigninView from "../views/SigninView.vue";
import InsideView from "../views/InsideView.vue";
import AfterView from "../views/AfterView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/registration",
    name: "registration",
    component: RegistrationView,
  },
  {
    path: "/activate",
    name: "activate",
    component: ActivateView,
  },
  {
    path: "/signin",
    name: "signin",
    component: SigninView,
  },
  {
    path: "/inside",
    name: "inside",
    component: InsideView,
  },
  {
    path: "/after",
    name: "after",
    component: AfterView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
