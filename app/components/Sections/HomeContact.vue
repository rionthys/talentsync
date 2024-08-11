<script lang="ts" setup>
</script>

<template>
  <div class="container mx-auto text-center text-dk-gray">
    <h2 class="text-4xl">
      Contact us
    </h2>
    <div class="text-base text-second mt-8 px-36 max-lg:px-3">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo
      consequat.
    </div>
    <div class="text-base mt-8 px-36 mx-auto flex flex-col items-center justify-center max-lg:px-3">
      <div class="flex justify-between w-full mb-7">
        <input class="mr-3 w-full bg-transparent border-b-2 border-accent focus-visible:outline-none" name="name" placeholder="Name" type="text">
        <input class="ml-3 w-full bg-transparent border-b-2 border-accent focus-visible:outline-none" name="email" placeholder="Email" type="text">
      </div>
      <textarea class="text-accent py-5 border-accent border-b-2 w-full bg-transparent focus-visible:outline-none" placeholder="Message" rows="7" type="text"/>
      <button class="mt-5 px-12 bg-accent py-3 text-white cursor-pointer">Submit</button>
    </div>
  </div>
</template>