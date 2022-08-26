import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import BlogsPage from "../views/BlogsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProjectView.vue"),
    },
    {
      path: "/posts",
      name: "posts",
      component: BlogsPage,
    },
  ],
});

export default router;
