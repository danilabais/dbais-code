<template>
  <UIContainerBase :class="styles.wrapper">
    <UIImageBase :src="user.picture" size="xl" :alt="user.email" />
    <div :class="styles.name">
      {{ user.email }} ({{ userRole }})
    </div>

    <UIButtonBase @click="handleExit"> Exit </UIButtonBase>
  </UIContainerBase>
</template>

<script setup lang="ts">
import { UIContainerBase, UIImageBase, UIButtonBase } from "@/UI";
import { useAuth } from "@/composables";
import styles from "./ProfileView.module.scss";
const { user, logout ,userRole} = useAuth();

const handleExit = () => {
  logout();
};
</script>
