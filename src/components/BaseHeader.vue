<script setup lang="ts">
import {ref} from 'vue'

const items = ref([
    'Men',
    'Women',
    'Objects',
    'Analog'
])
</script>

<template>
  <header class="flex justify-between items-center px-12 bg-white text-black">
    <div class="flex gap-6">
      <h1>Ugmonk UI</h1>
      <img src="../assets/logo.svg" alt="">
    </div>
    <ul class="flex gap-6 list-none m-0 p-0 cursor-pointer">
      <li v-for="(item, idx) of items" v-text="item" :key="idx">
      </li>
    </ul>
  </header>
</template>
