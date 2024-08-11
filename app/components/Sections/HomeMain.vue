<script lang="ts" setup>
import ContentCards from "~/app/components/Cards/ContentCards.vue";

const cards = [
  {
    id: "days",
    count: 3600,
    fill: 3600,
    subtitle: 'Days'
  },
  {
    id: "hours",
    count: 21,
    fill: 24,
    subtitle: 'Hours'
  },
  {
    id: "minutes",
    count: 49,
    fill: 60,
    subtitle: 'Minutes'
  },
  {
    id: "seconds",
    count: 5,
    fill: 60,
    subtitle: 'Seconds'
  },
];

const titles = [
  'Welcome in our team',
  'Best practices is very good',
  'Barvy agency'
];

const firstTitle = ref('Barvy agency');
const currentTitleIndex = ref(0);

const updateTitle = () => {
  currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.length;
  firstTitle.value = titles[currentTitleIndex.value];
};

let intervalId: number | null = null;

onMounted(() => {
  intervalId = window.setInterval(updateTitle, 4000);
});

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId);
  }
});
</script>

<template>
  <div class="container mx-auto text-center text-dk-gray overflow-hidden">
    <h2 class="text-4xl max-lg:text-2xl">
      Creative Coming Soon Template
    </h2>
    <div class="text-5xl mt-8 px-36 max-lg:text-3xl max-sm:mt-5">
      <div
          v-for="(title, index) in titles"
          :key="index"
          class="inline-block"
      >
      <span
          :class="{
          'animate-writing': title === firstTitle,
          'hidden': title !== firstTitle
        }"
          class="main__title bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 whitespace-nowrap"
      >
        {{ title }}
      </span>
      </div>
    </div>
    <div class="mt-24 max-sm:mt-5">
      <ContentCards :cards="cards"/>
    </div>
    <button class="mt-12 px-12 bg-accent py-3 text-white cursor-pointer">Subscribe</button>
  </div>
</template>