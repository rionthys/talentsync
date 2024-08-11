<script lang="ts" setup>
import ContentCards from "~/app/components/Cards/ContentCards.vue";

const cards = [
  {
    id: "photoshop",
    title: "Photoshop",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    count: 98,
    fill: 100
  },
  {
    id: "ilustrator",
    title: "ilustrator",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    count: 55,
    fill: 100
  },
  {
    id: "docs",
    title: "Docs",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    count: 68,
    fill: 100
  }
];
</script>

<template>
  <div class="container mx-auto text-center text-dk-gray">
    <h2 class="text-4xl">
      About us
    </h2>
    <div class="text-base text-second mt-8 px-36 max-lg:px-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div class="text-base text-second mt-2 px-36 max-lg:px-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div class="mt-14 max-sm:mt-5">
      <ContentCards :cards="cards"/>
    </div>
  </div>
</template>