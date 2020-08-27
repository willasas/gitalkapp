import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "home", //访问根目录时直接访问home页面
      component: Home
    },
    {
      path: "/register",
      name: "Register",
      component: () => import(/* webpackChunkName: "register" */
      '../components/Register.vue')
    },
    {
      path: "/login",
      name: "Login",
      component: () => import(/* webpackChunkName: "login" */
      '../components/Login.vue')
    },
    {
      path: "/player",
      name: "Player",
      component: () => import(/* webpackChunkName: "player" */
      '../components/Player.vue')
    },
    {
      path: "/about",
      name: "About",
      component: () => import(/* webpackChunkName: "about" */
      '../components/About.vue')
    },
  ]
});