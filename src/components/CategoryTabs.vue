<script setup lang="ts">
import {ref} from 'vue'

const items = ref([
  "New Arrivals",
  "Analog",
  "Final Stock",
  "Best Sellers",
  "Clothing",
  "Objects",
])

const active = ref(0)
</script>

<template>
  <nav>
    <ul class="flex gap-8 justify-center">
      <li v-for="(item, idx) of items" :key="idx" v-text="item" :class="{ 'border-b-2 border-black': active === idx }" class="inline-block cursor-pointer bg-transparent border-0  text-black pb-2" >
      </li>
    </ul>
    <slot name="tab-content"></slot>
  </nav>
</template>