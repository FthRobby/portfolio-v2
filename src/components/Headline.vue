<template>
  <!-- component profile picture and headline -->
  <div class="md:w-1/3 p-2 md:flex md:justify-center">
    <div class="md:fixed" v-for="person in personal" :key="person.name">
      <div class="md:block flex justify-center items-center">
        <img :src=person.image alt="me" class="shadow-xl md:h-60 md:w-60 h-40 w-40 mask mask-hexagon-2">
        <div class="mb-2 mx-7 mt-4 justif-center items-center">
          <h1 class="md:text-3xl text-2xl text-neutral font-semibold dark:text-white">{{ person.name }}</h1>
          <div class="md:text-lg text-neutral dark:text-white">
            {{ person.title }}
          </div>
          <a :href=person.resume class="md:hidden mt-1 btn btn-sm dark:btn-primary">
            <i class="fa fa-download mr-2"></i>Download CV
          </a>
        </div>

      </div>
      <div class="mx-7 hidden md:block">
        <div class="my-2 text-neutral flex dark:text-white">
          <a href="mailto:rbysalam10@gmail.com" target="_blank">
            <i class="fa fa-envelope mr-2"></i>{{ person.email }}
          </a>
        </div>
        <div class="my-2 text-neutral flex dark:text-white">
          <a href="https://www.linkedin.com/in/fatah-robbysalam/" target="_blank">
            <i class="devicon-linkedin-plain colored mr-2 text-primary "></i>{{ person.linkedin }}
          </a>
        </div>
        <div class="my-2">
          <a :href=person.resume class="mt-1 btn btn-sm btn-neutral text-white dark:btn-primary rounded">
            <i class="fa fa-download mr-2 "></i>Download CV
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dataPersonal from '../data/personality.json'
export default {
  data() {
    return {
      personal: dataPersonal
    }
  }
}
</script>

<style>
</style>