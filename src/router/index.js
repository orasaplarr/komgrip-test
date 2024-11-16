import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "@/views/DashBoard.vue";

const routes = [
  {
    path: "/",
    component: DashBoard,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
