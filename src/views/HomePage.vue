<script setup>
import ComponentHome from "../components/ComponentHome.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <ComponentHome />
  <Footer />
</template>

<script>
export default {
  name: 'app',
  created() {
    document.title = "Fatah Robby | Home";
  }
}
</script>

<style>
</style>
