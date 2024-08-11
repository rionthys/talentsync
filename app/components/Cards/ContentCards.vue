<script lang="ts" setup>

import PercentageCircle from "~/app/components/UI/PercentageCircle.vue";

const props = defineProps<{
  cards: {
    id: string;
    title?: string;
    description?: string;
    count: number;
    fill: number;
    subtitle?: string;
    icon?: {
      name: string;
      size: string;
    };
  }[]
}>();

const mainColor = '#ee6e73';

const cards = ref(props.cards);

</script>

<template>
  <div class="flex justify-evenly w-full max-lg:px-12 max-[600px]:flex-wrap max-sm:px-0">
    <div v-for="card in cards" :key="card.id" class="flex flex-col items-center justify-center text-center mx-3 max-[600px]:my-3 max-[480px]:px-0 max-[480px]:mx-0">
      <div class="relative">
        <PercentageCircle :count="card.count" :count-color="mainColor" :fill="card.fill" :size="150" :stroke-width="3" fill-color="#b4c4d4"/>
        <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-4xl font-bold text-dk-gray max-lg:text-2xl">
          <Icon v-if="card?.icon" :name="card.icon.name" :size="card.icon.size" :style="`color: ${mainColor}`"/>
          <span v-else>
            <span class="text-base text-second">{{ card?.subtitle }}</span>
            {{ card.count}}
          </span>
          </div>
      </div>
      <div v-if="card?.title" class="text-2xl font-bold text-dk-gray my-4">
        {{ card.title }}
      </div>
      <div v-if="card?.description" class="max-w-[300px] text-base text-second font-normal">
        {{ card.description }}
      </div>
    </div>
  </div>
</template>