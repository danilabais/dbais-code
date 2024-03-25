<template>
  <UIContainerBase :class="styles.wrapper">
    Page not found
    <UIButtonBase @click="handleBack"> Go back to the main page </UIButtonBase>
  </UIContainerBase>
</template>

<script setup lang="ts">
import { UIButtonBase, UIContainerBase } from "@/UI";
import { useRouter } from "vue-router";
import styles from "./NotFoundPage.module.scss";
const router = useRouter();

const handleBack = () => {
  router.push({ name: "HomeView" });
};
</script>
