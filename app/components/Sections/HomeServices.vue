<script lang="ts" setup>
import ContentCards from "~/app/components/Cards/ContentCards.vue";

const cards = [
  {
    id: "design",
    title: "Interface Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    count: 100,
    fill: 100,
    icon: {
      name: 'mdi:layers-outline',
      size: '2em',
    }
  },
  {
    id: "clean",
    title: "Clean Code",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    count: 100,
    fill: 100,
    icon: {
      name: 'mdi:all-inclusive',
      size: '2em',
    }
  },
  {
    id: "responsive",
    title: "Responsive",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    count: 100,
    fill: 100,
    icon: {
      name: 'mdi:monitor',
      size: '2em',
    }
  }
];
</script>

<template>
  <div class="container mx-auto text-center text-dk-gray">
    <h2 class="text-4xl">
      Services
    </h2>
    <div class="text-base text-second mt-8 px-36 max-lg:px-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    <div class="text-base text-second mt-2 px-36 max-lg:px-3">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat.
    </div>
    <div class="mt-14">
      <ContentCards :cards="cards"/>
    </div>
  </div>
</template>