import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Father.vue"),
  },
  {
    path: "/son",
    name: "Son",
    component: () => import("../views/Son.vue"),
  },
  {
    path: "/destory",
    name: "Destory",
    component: () => import("../views/Destory.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
