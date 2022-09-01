<template>
  <div class="w-full px-6 antialiased">
    <!-- <header class="pt-16 pb-9 sm:pb-16 sm:text-center lg:mt-10 mt-5">
      <h1 class="mb-4 lg:text-6xl text-4xl tracking-tight leading-9 text-neutral font-extrabold dark:text-white">
        My Blogs
      </h1>
      <p class="text-lg text-neutral dark:text-white">Tutorial dan Seputar Pemrograman Web</p>
    </header> -->
    <main class="h-screen flex flex-col justify-center items-center ">
      <img src="../assets/maintenance.gif" class="lg:max-h-72 " />
      <p class="font-semibold text-neutral dark:text-white tracking-widest text-xl">Page is Under Maintenance</p>
      <a href="/" class="btn dark:btn-primary btn-neutral btn-sm mt-5  animate-bounce">
        <i class="fa fa-arrow-left mr-3"></i> Go back</a>
    </main>
    <!-- <p v-for="post in posts" :key="post.id" class="text-white">{{  post.name  }}</p>
    <img v-for="post in posts" :key="post.id" :src="post.image"> -->

  </div>
</template>



<script>
// import postData from '../data/posts.json';

export default {
  name: 'app',
  created() {
    document.title = "Fatah Robby | Posts";
  },

}
</script>

<style>
</style>