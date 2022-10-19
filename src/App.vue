<script setup>
import { RouterLink, RouterView } from "vue-router";
import HomePage from "./views/HomePage.vue";
import axios from "axios";
</script>

<template>
  <!-- navbar -->
  <div class="navbar bg-base-300 dark:bg-neutral fixed -top-1 z-50">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow dark:bg-neutral bg-base-100 rounded-box w-52">
          <li>
            <RouterLink class="dark:text-white text-neutral" to="/"><i class="fa fa-home"></i> Home</RouterLink>
          </li>
          <li>
            <RouterLink class="dark:text-white text-neutral" to="/projects"><i class="fa fa-laptop-code"></i> Projects
            </RouterLink>
          </li>
          <li>
            <RouterLink class="dark:text-white text-neutral" to="/posts"><i class="fa fa-book"></i> Blogs</RouterLink>
          </li>
        </ul>
      </div>
      <RouterLink class="btn btn-ghost normal-case text-xl dark:text-white text-neutral" to="/">Fatah Robby</RouterLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li>
          <RouterLink class="dark:text-white text-neutral" to="/"><i class="fa fa-home"></i> Home</RouterLink>
        </li>
        <li>
          <RouterLink class="dark:text-white text-neutral" to="/projects"><i class="fa fa-laptop-code"></i>Projects
          </RouterLink>
        </li>
        <li>
          <RouterLink class="dark:text-white text-neutral" to="/posts"> <i class="fa fa-book"></i>Blogs
          </RouterLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end ">
      <a href="https://github.com/fthrobby" target="_blank" class="text-xl btn btn-sm btn-neutral dark:btn-primary">
        <i class="fab fa-github-alt text-2xl"></i> </a>
    </div>
  </div>

  <RouterView />


</template>
