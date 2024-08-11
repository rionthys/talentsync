<template>
  <Header/>
  <main class="grow max-sm:pb-28">
    <Home/>
  </main>
  <Footer/>
</template>
<script lang="ts" setup>
import Header from "~/app/components/AppHeader.vue";
import Footer from "~/app/components/AppFooter.vue";
import Home from "~/app/pages/AppHome.vue";
</script>