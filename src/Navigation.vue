<template>
  <ul class="list-disc">
    <li v-for="(route, index) in menuRoutes" :key="index" :class="{ 'text-blue-500': isActive(route) }">
      <router-link :to="{ name: route.name }">{{ route.menuLabel }}</router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { RouteRecord } from '@/types';
import routes from '@/routes.ts';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const menuRoutes = routes.filter((route) => route.showInMenu);

// Use computed property to track the current route dynamically
const currentRoute = computed(() => {
  return routes.find((r) => r.name === route.name);
});

const isActive = (route: RouteRecord) => {
  return currentRoute.value?.name === route.name;
};
</script>
