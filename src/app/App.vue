<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { UnauthorizedLayout, AuthorizedLayout, EmptyLayout } from "./layouts";
import { useAuth } from "@/composables";
import { useRoute } from "vue-router";

const { isAuth } = useAuth();

const route = useRoute();

const layout = computed(() => {
  if (route.meta.layout === "empty") {
    return EmptyLayout;
  }

  if (isAuth.value) {
    return AuthorizedLayout;
  }
  return UnauthorizedLayout;
});
</script>
