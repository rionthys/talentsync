<script lang="ts" setup>
import {onMounted, onUnmounted} from 'vue';
import { useRouter } from '#imports';

import AppSocials from "~/app/components/AppSocials.vue";
import AppPaginator from "~/app/components/AppPaginator.vue";
import AboutUs from "~/app/components/Sections/AboutUs.vue";
import SubscribeNews from "~/app/components/Sections/SubscribeNews.vue";
import HomeServices from "~/app/components/Sections/HomeServices.vue";
import HomeContact from "~/app/components/Sections/HomeContact.vue";
import HomeMain from "~/app/components/Sections/HomeMain.vue";

import {SECTIONS} from "~/app/constants/home";


class Section {
  id: string;
  element: HTMLElement | null;

  constructor(id: string) {
    this.id = id;
    this.element = null;
  }
}

const router = useRouter();

const sections: Section[] = SECTIONS.map((section) => new Section(section.id));
const currentSectionIndex = ref(0);

const updateUrlOnScroll = () => {
  let lastSection = '';

  sections.forEach((section, index) => {
    const sectionElement = section.element;
    const rect = sectionElement?.getBoundingClientRect();

    if (rect && rect?.top >= 0 && rect?.top < window.innerHeight / 2) {
      lastSection = section.id;
      currentSectionIndex.value = index;
    }
  });

  if (lastSection) {
    router.replace({hash: `#${lastSection}`});
  }
};

const smoothScrollToSection = (index: number) => {
  if (index >= 0 && index < sections.length) {
    sections[index].element?.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleScroll = () => {
  const currentSection = sections[currentSectionIndex.value];
  const nextSection = sections[currentSectionIndex.value + 1];

  if (nextSection && currentSection.element) {
    const rect = currentSection.element.getBoundingClientRect();
    if (rect.top < -window.innerHeight * 0.2) {
      smoothScrollToSection(currentSectionIndex.value + 1);
    }
  }
};

onMounted(() => {
  if(window.innerWidth > 768) {
    sections.forEach((section) => {
      section.element = document.getElementById(section.id);
    });

    window.addEventListener('scroll', updateUrlOnScroll);
    window.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateUrlOnScroll);
  window.addEventListener('scroll', handleScroll);
});
</script>

<template>
  <AppPaginator/>
  <main class="h-full">
    <section id="home" class="h-screen flex flex-col justify-center items-center max-sm:h-max max-sm:min-h-screen">
      <HomeMain/>
    </section>
    <section id="subscribe" class="h-screen flex flex-col justify-center items-center max-sm:h-max max-sm:min-h-screen">
      <SubscribeNews/>
    </section>
    <section id="about" class="h-screen flex flex-col justify-center items-center max-sm:h-max max-sm:mt-40">
      <AboutUs/>
    </section>
    <section id="services" class="h-screen flex flex-col justify-center items-center max-sm:h-max max-sm:mt-40">
      <HomeServices/>
    </section>
    <section id="contact" class="h-screen flex flex-col justify-center items-center max-sm:h-max max-sm:mt-40">
      <HomeContact/>
    </section>
  </main>
</template>