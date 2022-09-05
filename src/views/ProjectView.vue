<template>

  <div class="w-full px-6 pb-12 antialiazed">
    <div class="mx-auto max-w-8xl">
      <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-14 lg:mt-20">
        <!-- project heading -->
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1
            class="text-3xl font-extrabold leading-9 tracking-tight text-neutral dark:text-white sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p class="text-lg leading-7 text-neutral dark:text-white">Some of projects I've build or been part of.</p>

        </div>

        <ProjectList />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import ProjectList from "../components/ProjectList.vue";
import Footer from "../components/Footer.vue";
</script>

<script>
export default {
  // name: 'app',
  // created() {
  //   document.title = "Fatah Robby | Projects";
  // }
}
</script>

<style>
</style>
