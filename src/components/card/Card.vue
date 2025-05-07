<template>
  <Card :class="twMerge('w-[350px] bg-white shadow-md dark:bg-gray-800', props.class)">
    <CardHeader v-if="$slots.title || $slots.description">
      <CardTitle><slot name="title"></slot></CardTitle>
      <CardDescription><slot name="description"></slot></CardDescription>
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
    <CardFooter class="flex justify-between px-6 pb-6">
      <slot name="footer"></slot>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/shadcn/ui/card';
import { twMerge } from "tailwind-merge";

const props = withDefaults(defineProps<{
  class?: string;
}>(), {
  class: '',
});

</script>