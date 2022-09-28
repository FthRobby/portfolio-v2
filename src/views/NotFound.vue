<template>
  <main class="h-screen w-full flex flex-col justify-center items-center ">
    <img src="../assets/404.svg" alt="">
    <div class="bg-green-500 text-white px-2 text-md rounded absolute">
      Page Not Found
    </div>
    <RouterLink to="/"
      class="mt-6 btn btn-sm border-none bg-green-500 hover:bg-green-600 hover:translate-x-1 text-white">Go Home
    </RouterLink>
  </main>
</template>