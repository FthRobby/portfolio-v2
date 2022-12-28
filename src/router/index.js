import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import BlogsPage from "../views/BlogsView.vue";
import DetailPost from "../views/BlogDetail.vue";

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
    {
      path: "/posts/:id_post",
      name: "detail_post",
      component: DetailPost,
      props: true,
    },

    // route to page not found when the route is not found
    {
      path: "/:pathMatch(.*)*",
      name: "not_found",
      component: () => import("../views/NotFound.vue"),
    },
  ],

  // scroll to top when route change
  scrollBehavior(to, from) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ top: 0, left: 0 });
      });
      if (to.hash) {
        return {
          el: to.hash,
          el: from.hash,
          behavior: "smooth",
        };
      }
    });
  },
});

export default router;
