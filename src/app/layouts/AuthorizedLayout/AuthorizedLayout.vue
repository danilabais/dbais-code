<template>
  <HeaderBase />
  <slot />
  AuthorizedLayout
</template>

<script setup lang="ts">
import { HeaderBase } from "./components";
</script>
