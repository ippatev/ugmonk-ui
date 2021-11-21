<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  title: String,
  desc: String,
  price: String
})
</script>

<template>
  <div class="w-[275px]">
    <img class="w-[275px] h-auto object-contain" src="../assets/order.png" alt="order img">
    <div class="flex flex-col py-3">
      <div>
        <span v-text="`${title}`"></span>
        &nbsp;
        <span v-text="`${desc}`" class="text-gray-400 leading-4"></span>
      </div>
      <p v-text="price" class="m-0 leading-8"></p>
    </div>
  </div>
</template>