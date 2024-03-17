<template>
  <div :class="styles.wrapper">
    <UIContainerBase :class="styles.inner">
      <UILogoBase />
      <UIButtonBase @click="handleExit"> Exit </UIButtonBase>
    </UIContainerBase>
  </div>
</template>

<script setup lang="ts">
import styles from "./HeaderBase.module.scss";
import { UIContainerBase, UIButtonBase, UILogoBase } from "@/UI";

import { useAuth0 } from "@auth0/auth0-vue";
const { logout } = useAuth0();

const handleExit = () => {
  logout();
};
</script>
