<template>
  <UIContainerBase :class="styles.wrapper">
    <UILogoBase />

    <UITextBase :class="styles.text">
      Notes app. To start using, log in
    </UITextBase>

    <UIButtonBase @click="handleAuth"> Login </UIButtonBase>
    <UIButtonBase @click="handleAdmin"> Login as admin </UIButtonBase>
    <UIButtonBase @click="handleAuthQuest">
      Log in as a guest
    </UIButtonBase>
  </UIContainerBase>
</template>

<script setup lang="ts">
import styles from "./UnauthorizedLayout.module.scss";
import { UIContainerBase, UILogoBase, UITextBase, UIButtonBase } from "@/UI";
import { useAuth } from "@/composables";
const { login, loginAsQuest } = useAuth();
const handleAuth = () => {
  login({ userRole: "user" });
};
const handleAdmin = () => {
  login({ userRole: "admin" });
};
const handleAuthQuest = () => {
  loginAsQuest();
};
</script>
