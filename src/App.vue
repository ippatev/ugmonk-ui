<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import BaseHeader from './components/BaseHeader.vue'
import CategoryTabs from './components/CategoryTabs.vue'
</script>

<template>
  <base-header></base-header>
  <main class="h-100">
    <section class="relative h-[600px] w-screen">
      <img class="w-screen h-[600px] z-0 absolute object-cover" src="./assets/cover-1.png" alt="cover">
      <div class="absolute bottom-0 mx-20 mb-8 text-white">
        <header>
          <span>Analog: The Simplest Productivity System</span>
        </header>
        <div>
          <button class="bg-transparent border-0 border-b-2 border-white text-white mt-4">Shop now</button>
        </div>
      </div>
    </section>
    <section class="mt-12">
      <category-tabs>
        <template #tab-content>
          hello
        </template>
      </category-tabs>
    </section>
  </main>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}
</style>
