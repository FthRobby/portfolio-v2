<template>
  <!-- project card menu -->
  <main class="relative mb-auto">
    <div class="flex flex-wrap -m-4 gap-5">

      <div v-for="project in projects" :key="project.id"
        class="card w-96 bg-base-100 shadow-xl text-neutral dark:text-white">
        <figure><img :src=project.images :alt=project.name /></figure>
        <div class="card-body">
          <h2 class="card-title justify-center">{{  project.name  }}</h2>
          <p>{{  project.description  }}</p>

          <div class="flex flex-row">
            <p class="flex mt-2 gap-3 text-xl">
              <i class="devicon-react-plain colored"></i>
              <i class="devicon-tailwindcss-plain colored"></i>
            </p>
            <div class="card-actions justify-center">
              <a class="text-xl hover:-translate-y-1" :href=project.preview target="_blank">
                <i class="fa-solid fa-up-right-from-square"></i></a>
              <a class="text-xl hover:-translate-y-1" :href=project.repo target="_blank">
                <i class="fa fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import dataProject from '../data/project.json'
export default {
  data() {
    return {
      projects: dataProject
    }
  }
}

</script>

<style>
</style>