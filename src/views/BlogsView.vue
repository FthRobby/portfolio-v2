<template>
  <div class="w-full px-6 antialiased">
    <header class="pt-16 pb-9 sm:pb-16 sm:text-center lg:mt-10 mt-5">
      <h1 class="mb-4 lg:text-6xl text-4xl tracking-tight leading-9 text-neutral font-extrabold dark:text-white">
        My Blogs
      </h1>
      <p class="text-lg text-neutral dark:text-white">All About Programming</p>
    </header>
  </div>

  <div class="flex gap-8 justify-center items-center flex-wrap">
    <div v-for="blog in state" :key="blog.id">
      <div class="card w-96  bg-base-100 shadow-xl image-full mb-3">
        <figure><img :src=blog.gambar alt={{blog.title}} /></figure>
        <div class="card-body">
          <h2 class="card-title text-white">
            {{ blog.title }}
            <div v-if="blog.isNew">
              <div class="badge badge-primary">new posts</div>
            </div>
          </h2>
          <p class="text-white">{{ blog.description }}</p>
          <div class="card-actions justify-end  mt-16">
            <RouterLink class="btn btn-primary btn-sm capitalize hover:translate-x-1"
              :to="{ name: 'detail_post', params: { id_post: blog.id } }">
              Read More <i class="fa fa-arrow-right ml-3"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>



<script>
// import postData from '../data/posts.json';

import { onMounted, reactive } from 'vue';
import { blog } from '../data/Blog';


export default {
  setup(props, context) {
    const state = reactive(blog["blog"])

    onMounted(() => {
      context.emit("id.menu", 4)
    })

    return {
      state
    }
  },
  // name: 'app',
  // created() {
  //   document.title = "Fatah Robby | Posts";
  // },

}
</script>

<style>

</style>