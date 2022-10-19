<template>
  <!-- project card menu -->
  <div class="relative mb-auto">
    <div class="flex flex-wrap -m-4 gap-5">

      <div v-for="project in state" :key="project.id" class="card w-96 bg-neutral shadow-xl text-white">
        <figure><img :src=project.images :alt=project.name /></figure>
        <div class="card-body">
          <h2 class="card-title justify-center">{{ project.name }}</h2>
          <p>{{ project.description }}</p>

          <div class="flex flex-row">
            <p class="flex mt-2 gap-3 text-xl">
              <i class="devicon-react-plain colored" v-if="project.react"></i>
              <i class="devicon-webpack-plain colored" v-if="project.webpack"></i>
              <i class="devicon-tailwindcss-plain colored" v-if="project.tailwind"></i>
              <i class="devicon-bootstrap-plain colored" v-if="project.bootstrap"></i>
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
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { project } from '../data/Project';

//import dataProject from '../data/project.json'

// export default {
//   data() {
//     return {
//       projects: dataProject
//     }
//   }
// }

export default {
  setup(props, context) {
    const state = reactive(project["project"])

    onMounted(() => {
      context.emit("id.menu", 3)
    })

    return {
      state
    }
  },
}


</script>

<style>

</style>