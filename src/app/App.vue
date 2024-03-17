<template>
  <component :is="layout">
    <div>test</div>
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import {  UnauthorizedLayout } from "./layouts";

const layout = computed(() => UnauthorizedLayout);
</script>
