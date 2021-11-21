<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import BaseHeader from './components/BaseHeader.vue'
import CategoryTabs from './components/CategoryTabs.vue'
import OrderCard from './components/OrderCard.vue'
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
          <button class="bg-transparent cursor-pointer border-0 border-b-2 border-white text-white mt-4">Shop now</button>
        </div>
      </div>
    </section>
    <section class="flex flex-col items-center mt-12">
      <category-tabs>
        <template #tab-content>
          <div class="flex flex-wrap gap-4 justify-center items-start">
            <order-card
                v-for="order of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]"
                :key="order"
                title="Discbound Heirloom Journal Bundle"
                desc="(Natural Journal + 3 Refills)"
                price="$162.00"
            ></order-card>
          </div>
        </template>
      </category-tabs>
      <button class="bg-black cursor-pointer my-20 text-white py-4 px-8 border-none text-lg">
        Shop New Arrivals →
      </button>
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
