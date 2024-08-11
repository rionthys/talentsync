<script lang="ts" setup>
import {Icon} from '#components'

const socials = [
  {
    id: 'facebook',
    alt: 'facebook',
    icon: 'mdi:facebook',
    href: 'https://www.facebook.com/',
    size: '2.5em',
    color: '#3b5998'
  }
];
</script>

<template>
  <div class="container mx-auto max-md:relative">
    <ul class="flex fixed top-1/2 -translate-y-1/2 lg:flex-col max-md:justify-center max-md:relative max-md:top-0 max-md:translate-y-0">
      <li
          v-for="social in socials"
          :key="social.id"
          :style="`color: ${social.color}`"
          class="my-5 cursor-pointer max-md:my-1 max-md:mx-3">
        <RouterLink :to="social.href">
          <Icon :alt="social.alt" :name="social.icon" :size="social.size"/>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>