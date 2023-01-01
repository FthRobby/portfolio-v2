<template>
  <footer class="footer footer-center p-8 bg-base-200 text-base-content rounded">
    <div>
      <div class="grid grid-flow-col gap-4">
        <a href="https://github.com/fthrobby" target="_blank"><i class="fa fa-github text-2xl fill-current"></i></a>
        <a href="https://www.linkedin.com/in/fatah-robbysalam/" target="_blank"><i
            class="devicon-linkedin-plain colored text-2xl"></i></a>
        <a href="mailto:rbysalam10@gmail.com" target="_blank"><i class="fa fa-envelope text-2xl "></i></a>
      </div>
    </div>
    <div>
      <p>Copyright © {{ year }} - Fatah RobbySalam</p>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}

</script>