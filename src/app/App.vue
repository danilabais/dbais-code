<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { UnauthorizedLayout, AuthorizedLayout } from "./layouts";

import { useAuth0 } from "@auth0/auth0-vue";
const auth0 = useAuth0();
const layout = computed(() => {
  if (auth0.isAuthenticated.value) {
    return AuthorizedLayout;
  }
  return AuthorizedLayout;
});
</script>
