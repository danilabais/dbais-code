<template>
  <HeaderBase />
  <slot />
  {{ user }}
</template>

<script setup lang="ts">
import { HeaderBase } from "./components";
import { useAuth } from "@/composables";
const { user } = useAuth();
</script>
