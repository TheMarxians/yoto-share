<template>
  <div class="flex flex-col items-center min-h-screen bg-background p-5">
    <h1 class="text-2xl mb-3">Yoto share</h1>
    <Navigation />
    <div class="flex flex-col justify-center mt-15">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navigation from '@/Navigation.vue';
</script>
