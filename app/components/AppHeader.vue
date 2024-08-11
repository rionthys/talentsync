<script lang="ts" setup>
import {SECTIONS} from "~/app/constants/home";
import {useRoute} from '#imports';

const links = SECTIONS;
const route = useRoute();
const activeLink = ref('');

const open = ref(false);

const toggleMenu = () => {
  open.value = !open.value;
};

const setActiveLink = () => {
  const matchingLink = links.find((link) => route.path === link.href && route.hash === link.hash);
  activeLink.value = matchingLink ? matchingLink.id : (links.length > 0 ? links[0].id : '');
};

watch(route, () => {
  setActiveLink();
});

onMounted(() => {
  setActiveLink();
});
</script>

<template>
  <div class="max-[332px]:py-[62px]"/>
  <header class="fixed z-10 flex items-center justify-center w-full h-[84px] max-lg:bg-[#0e0e0ee6]">
    <div class="flex items-center justify-between container py-2.5 px-0 max-lg:max-w-[none] max-lg:px-7">
      <div class="logo max-lg:text-white">logo</div>
      <ul
          :class="{
            'absolute top-full left-0 flex-col text-center bg-[#0e0e0ee6] w-full': open,
            'max-lg:hidden': !open,
          }"
          class="flex text-base font-bold text-dk-gray max-lg:text-white"
      >
        <li
            v-for="link in links"
            :key="link.id"
            :class="{ 'text-accent': link.id === activeLink }"
            class="mx-5 py-1 cursor-pointer max-lg:py-2"
        >
          <a
              :href="`${link.href}${link.hash}`"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
      <button
          class="flex flex-col justify-between h-4 lg:hidden"
          type="button"
          @click="toggleMenu"
      >
        <span class="block h-0.5 w-7 bg-white"/>
        <span class="block h-0.5 w-7 bg-white"/>
        <span class="block h-0.5 w-7 bg-white"/>
      </button>
    </div>
  </header>
</template>