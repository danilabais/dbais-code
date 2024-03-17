import {
  createRouter as createVueRouter,
  createWebHistory,
  Router,
} from "vue-router";
import { HomeView } from "@/pages";

export function createRouter(): Router {
  return createVueRouter({
    routes: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      // {
      //   path: "/profile",
      //   name: "profile",
      //   component: Profile,
      //   beforeEnter: createAuthGuard(app),
      // },
    ],
    history: createWebHistory(),
  });
}
