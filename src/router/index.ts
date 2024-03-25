import {
  createRouter as createVueRouter,
  createWebHistory,
  Router,
} from "vue-router";
import { HomeView, ProfileView, NotFoundPage } from "@/pages";

import { authGuard } from "./authGuard";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/profile",
    name: "ProfileView",
    component: ProfileView,
    beforeEnter: authGuard,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFoundPage,
    meta: {
      layout: "empty",
    },
  },
];

export const createRouter = (): Router => {
  return createVueRouter({
    routes,
    history: createWebHistory(),
  });
};
