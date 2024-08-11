<script lang="ts" setup>
import {computed, defineProps} from 'vue';

const props = defineProps<{
  size: number;
  strokeWidth: number;
  count: number;
  fill: number;
  countColor: string;
  fillColor: string;
}>();

const percentage = computed(() => (props.count * 100) / props.fill);
const radius = computed(() => (props.size - props.strokeWidth) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);
const strokeDasharray = computed(() => circumference.value);
const strokeDashoffset = computed(() => circumference.value * (1 - percentage.value / 100));
</script>

<template>
  <svg
      :style="`max-width: ${props.size}px; height: auto;`"
      :viewBox="`0 0 ${props.size} ${props.size}`" class="w-full mx-auto max-[480px]:w-4/5"
      preserveAspectRatio="xMidYMid meet">
    <circle
        :cx="props.size / 2"
        :cy="props.size / 2"
        :r="radius"
        :stroke="props.fillColor"
        :stroke-width="props.strokeWidth"
        fill="transparent"
    />
    <circle
        :cx="props.size / 2"
        :cy="props.size / 2"
        :r="radius"
        :stroke="props.countColor"
        :stroke-dasharray="strokeDasharray"
        :stroke-dashoffset="strokeDashoffset"
        :stroke-width="props.strokeWidth"
        :transform="`rotate(-90, ${props.size / 2}, ${props.size / 2})`"
        fill="transparent"
        stroke-linecap="round"
    />
  </svg>
</template>
