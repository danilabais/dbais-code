<template>
  <div :class="styles.wrapper">
    <UIContainerBase :class="styles.inner">
      <UIUnstyleButton @click="reloadPage">
        <UILogoBase />
      </UIUnstyleButton>
      <UIButtonBase @click="handleExit"> Exit </UIButtonBase>
    </UIContainerBase>
  </div>
  <div :class="styles.fixHeight" />
</template>

<script setup lang="ts">
import styles from "./HeaderBase.module.scss";
import { UIContainerBase, UIButtonBase, UILogoBase,UIUnstyleButton } from "@/UI";

import { useAuth0 } from "@auth0/auth0-vue";
const { logout } = useAuth0();

const handleExit = () => {
  logout();
};

const reloadPage = () => {
  // also for reload page, reason why i dont use router
  location.href='/'
}
</script>
