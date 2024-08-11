<script lang="ts" setup>
import {SECTIONS} from "~/app/constants/home";
import {useRoute} from "#imports";

const sections = SECTIONS;
const route = useRoute();
const activeLink = ref('');

const setActiveLink = () => {
  const matchingLink = sections.find((section) => route.path === section.href && route.hash === section.hash);
  activeLink.value = matchingLink ? matchingLink.id : (sections.length > 0 ? sections[0].id : '');
};

watch(route, () => {
  setActiveLink();
});

onMounted(() => {
  setActiveLink();
});
</script>

<template>
  <div class="container mx-auto flex justify-end max-lg:hidden">
    <ul class="flex flex-col items-center justify-center fixed top-1/2 -translate-y-1/2">
      <li v-for="section in sections" :key="section.id" class="my-5">
        <a
            v-if="section.id === activeLink"
            :href="`${section.href}${section.hash}`"
            class="bg-accent h-[14px] w-[14px] rounded-full block"
        />
        <a
            v-else :href="`${section.href}${section.hash}`"
            class="bg-white rounded-full block w-[10px] h-[10px] m-[2px] hover:h-[12px] hover:w-[12px] hover:m-0"
        />
      </li>
    </ul>
  </div>
</template>