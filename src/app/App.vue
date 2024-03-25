<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { UnauthorizedLayout, AuthorizedLayout } from "./layouts";
import { useAuth } from "@/composables";

const { isAuth } = useAuth();

const layout = computed(() => {
  if (isAuth.value) {
    return AuthorizedLayout;
  }
  return UnauthorizedLayout;
});
</script>
