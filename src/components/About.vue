<template>
  <div class="md:w-2/3 px-8">
    <!-- about me -->
    <div class="mb-6 mt-9" v-for="person in personal" :key="person.name">
      <h2 class="mt-6 text-4xl text-neutral font-bold capitalize dark:text-white">Hi, I'm Roby</h2>
      <p class="mt-8 mb-4 dark:text-white text-neutral">{{ person.description }}</p>
    </div>

    <!-- tech stack -->
    <div class="mt-8">
      <!-- frontend -->
      <div class="mt-2">
        <h2 class="mb-2 text-xl text-neutral dark:text-white capitalize font-bold">Frontend</h2>
        <ul class="flex flex-wrap gap-4 items-center">
          <li class="flex items-center">
            <i class="mt-1 h-10 w-10 devicon-bootstrap-plain text-3xl text-primary"></i>
          </li>
          <li class="flex items-center">
            <i class="mt-1 h-10 w-10 devicon-tailwindcss-plain colored text-3xl"></i>
          </li>
          <li class="flex items-center">
            <i class="mt-1 h-10 w-10 devicon-javascript-plain colored text-3xl"></i>
          </li>
          <li class="flex items-center">
            <i class="mt-1 h-10 w-10  devicon-vuejs-plain colored text-3xl"></i>
          </li>
          <li class="flex items-center">
            <i class="mt-1 w-10 h-10 devicon-react-plain colored text-3xl"></i>
          </li>
        </ul>
      </div>
      <!-- backend -->
      <div class="mt-4">
        <h2 class="mb-2 text-xl text-neutral dark:text-white capitalize font-bold">Backend</h2>
        <ul class="flex flex-wrap gap-4 items-center">
          <li class="flex items-center">
            <i class="mt-1 h-10 w-10 devicon-laravel-plain colored text-3xl "></i>
          </li>
          <li class="flex items-center">
            <i class="mt-1 h-10 w-10 devicon-nodejs-plain colored text-3xl "></i>
          </li>
        </ul>
      </div>
    </div>

    <!-- certification skills -->
    <p class="text-neutral dark:text-white font-bold text-2xl mb-4 -ml mt-10">Skills</p>
    <div class="mx-auto  px-1 py-2 mb-5">
      <div class="flex flex-col items-center justify-between gap-9 sm:flex-row ">
        <!--  -->
        <div class="sm:w-5/12">
          <div tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-neutral dark:text-white">
            <input type="checkbox" class="peer" />
            <div class="collapse-title text-xl font-medium">
              Pemrograman Web
            </div>
            <div class="collapse-content">
              <a href="https://www.dicoding.com/certificates/GRX5K8M63Z0M" target="_blank"><img
                  src="../assets/banner_certif.png" class="w-full" alt="" /></a>
              <p class="font-bold mt-3 mb-3">Dicoding Certification : <br /> Dasar Pemrograman Web </p>
              <a href="https://www.dicoding.com/certificates/GRX5K8M63Z0M" target="_blank"
                class="btn btn-sm btn-primary text-sm mt-1">See Credential <i
                  class="ml-3 fa fa-up-right-from-square"></i> </a>
            </div>
          </div>
          <div tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-neutral dark:text-white">
            <input type="checkbox" class="peer" />
            <div class="collapse-title text-xl font-medium">
              Pemrograman Javascript
            </div>
            <div class="collapse-content">
              <a href="https://www.dicoding.com/certificates/07Z6RK67MPQR" target="_blank"><img
                  src="../assets/banner_certif.png" class="w-full" alt="" /></a>
              <p class="font-bold mt-3 mb-3">Dicoding Certification : <br /> Dasar Pemrograman Javascript </p>
              <a href="https://www.dicoding.com/certificates/07Z6RK67MPQR" target="_blank"
                class="btn btn-sm btn-primary text-sm mt-1">See Credential <i
                  class="ml-3 fa fa-up-right-from-square"></i> </a>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="sm:w-5/12">
          <div tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-neutral dark:text-white">
            <input type="checkbox" class="peer" />
            <div class="collapse-title text-xl font-medium">
              Frontend Web Pemula
            </div>
            <div class="collapse-content">
              <a href="https://www.dicoding.com/certificates/MRZMK9Q63PYQ" target="_blank"><img
                  src="../assets/banner_certif.png" class="w-full" alt="" /></a>
              <p class="font-bold mt-3 mb-3">Dicoding Certification : <br /> Membuat Frontend Web untuk Pemula </p>
              <a href="https://www.dicoding.com/certificates/MRZMK9Q63PYQ" target="_blank"
                class="btn btn-sm btn-primary text-sm mt-1">See Credential <i
                  class="ml-3 fa fa-up-right-from-square"></i> </a>
            </div>
          </div>
          <div tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-neutral dark:text-white">
            <input type="checkbox" class="peer" />
            <div class="collapse-title text-xl font-medium">
              Frontend Fundamental
            </div>
            <div class="collapse-content">
              <a href="https://www.dicoding.com/certificates/KEXL35E40PG2" target="_blank"><img
                  src="../assets/banner_certif.png" class="w-full" alt="" /></a>
              <p class="font-bold mt-3 mb-3">Dicoding Certification : <br /> Fundamental Frontend Web Development </p>
              <a href="https://www.dicoding.com/certificates/KEXL35E40PG2" target="_blank"
                class="btn btn-sm btn-primary text-sm mt-1">See Credential <i
                  class="ml-3 fa fa-up-right-from-square"></i> </a>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="sm:w-5/12">
          <div tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-neutral dark:text-white">
            <input type="checkbox" class="peer" />
            <div class="collapse-title text-xl font-medium">
              Frontend Web Expert
            </div>
            <div class="collapse-content">
              <a href="https://www.dicoding.com/certificates/07Z6R8J02PQR" target="_blank"><img
                  src="../assets/banner_certif.png" class="w-full" alt="" /></a>
              <p class="font-bold mt-3 mb-3">Dicoding Certification : <br /> Menjadi Frontend Web Expert </p>
              <a href="https://www.dicoding.com/certificates/07Z6R8J02PQR" target="_blank"
                class="btn btn-sm btn-primary text-sm mt-1">See Credential <i
                  class="ml-3 fa fa-up-right-from-square"></i> </a>
            </div>
          </div>
          <div tabindex="0"
            class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box text-neutral dark:text-white">
            <input type="checkbox" class="peer" />
            <div class="collapse-title text-xl font-medium">
              React Js Web
            </div>
            <div class="collapse-content">
              <a href="https://www.dicoding.com/certificates/1OP867YLQXQK" target="_blank"><img
                  src="../assets/banner_certif.png" class="w-full" alt="" /></a>
              <p class="font-bold mt-3 mb-3">Dicoding Certification : <br /> Membuat Aplikasi Web dengan React </p>
              <a href="https://www.dicoding.com/certificates/1OP867YLQXQK" target="_blank"
                class="btn btn-sm btn-primary text-sm mt-1">See Credential <i
                  class="ml-3 fa fa-up-right-from-square"></i> </a>
            </div>
          </div>
        </div>

      </div>
    </div>


    <!-- experience -->
    <div class="opacity-100 mt-10">
      <p class="text-neutral dark:text-white font-bold text-2xl mb-4 -ml-3">Experience</p>
      <ol class="relative" v-for="experience in experiences" :key="experience.id">
        <li class="mb-10 ml-6">
          <span class="mt-2 flex absolute -left-4 justify-center items-center w-7 h-7 bg-neutral rounded dark:bg-white">
            <i class="fa fa-desktop text-xl text-white dark:text-neutral" aria-hidden="true"></i>
          </span>
          <h3 class="flex items-center text-lg font-semibold text-neutral dark:text-white">{{ experience.position }}
          </h3>
          <h2 class="flex items-center mb-1 text-sm font-semibold text-neutral dark:text-white">{{ experience.company }}
          </h2>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400">{{ experience.date }}</time>
        </li>
      </ol>
    </div>

  </div>
</template>

<script>
import dataPersonal from '../data/personality.json'
import dataExperience from '../data/experience.json'
export default {
  data() {
    return {
      personal: dataPersonal,
      experiences: dataExperience
    }
  }
}
</script>

<style>

</style>