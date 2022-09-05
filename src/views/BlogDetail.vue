<template>
  <div class="w-full px-6 antialiased mb-10">

    <header class="pt-16 pb-9 sm:pb-16 text-center lg:mt-10 mt-5">
      <div class="text-sm dark:text-white text-neutral breadcrumbs w-full px-6 lg:px-40 mb-10">
        <ul>
          <li class="decoration-transparent">
            <RouterLink to="/"><i class="fa fa-home mr-1"></i> Home</RouterLink>
          </li>
          <li class="decoration-transparent">
            <RouterLink to="/posts"><i class="fa fa-book mr-1"></i> Blogs</RouterLink>
          </li>
          <li>{{ detail.title }}</li>
        </ul>
      </div>
      <h1 class="mb-4 lg:text-4xl text-4xl tracking-tight leading-9 text-neutral font-extrabold dark:text-white">
        {{ detail.title }}
      </h1>
      <p class="text-lg text-neutral dark:text-white">{{ detail.description }}</p>
      <p class="text-md text-neutral dark:text-white mt-8">{{ detail.date }}</p>

      <img class="mx-auto lg:w-2/5 w-4/5 my-7 rounded-md drop-shadow-sm" :src=detail.gambar :alt=detail.title>
      <p class="text-neutral dark:text-white text-sm">posted by {{ detail.author }}</p>
    </header>

    <div class="w-full px-6 lg:px-40">
      <p class="text-3xl mb-6 text-neutral dark:text-white font-bold">{{ detail.heading[0] }}</p>
      <p class="text-md text-neutral dark:text-white mb-10">{{ detail.paragraf[0] }}</p>
      <p class="text-md text-neutral dark:text-white">{{ detail.paragraf[1] }}</p>
    </div>

    <div class="w-full px-6 lg:px-40 mt-32">
      <p class="text-3xl mb-6 text-neutral dark:text-white font-bold">{{ detail.heading[1] }}</p>
      <p class="text-md text-neutral dark:text-white mb-10">{{ detail.paragraf[2] }}</p>
      <p class="text-md text-neutral dark:text-white">{{ detail.paragraf[3] }}</p>
      <p class="text-md text-neutral dark:text-white">{{ detail.paragraf[4] }}</p>
    </div>


  </div>

  <Footer />
</template>

<script>
import { blog } from '../data/Blog';
import Footer from '../components/Footer.vue';

export default {
  props: [
    "id_post"
  ],
  setup(props) {
    const detail = blog["blog"].find(function (item) {
      return item.id == props.id_post;
    });
    return {
      detail
    };
  },
  components: {
    Footer
  }

}
</script>

<style>
</style>